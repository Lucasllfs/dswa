"use client";

import { useState, useEffect } from "react";
import { NextPage } from "next";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/ui/magic-card";
import { Ripple } from "@/components/ui/ripple";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import Image from 'next/image';
import { FloatingDock } from "@/components/ui/floating-dock";
import { RiHomeLine } from "react-icons/ri";
import { FaRegMap } from "react-icons/fa";
import { MdOutlineLeaderboard } from "react-icons/md";
import {COMPETITIONS_ID}  from "@/ARQUIVOS PARA SEREM ALTERADOS PARA O SITE FUNCIONAR/lista-de-competicoes"; // Importe a lista aqui
import {MEMBER_NAMES} from "@/ARQUIVOS PARA SEREM ALTERADOS PARA O SITE FUNCIONAR/teamName-membros"; // Importe a lista aqui



interface LeaderboardEntry {
  teamId: number;
  teamName: string;
  score: number;
}

const items = [
  { title: "Home", icon: <RiHomeLine size={24} />, href: "/" },
  { title: "Roadmap", icon: <FaRegMap size={24} />, href: "/roadmap" },
  { title: "Leaderboard", icon: <MdOutlineLeaderboard size={24} />, href: "/leaderboard" },
  // { title: "Blog", icon: <IconLayoutNavbarCollapse size={24} />, href: "/blog" },
  // { title: "Contact", icon: <IconLayoutNavbarCollapse size={24} />, href: "/contact" },
];

//const MEMBER_NAMES = ["Penido Rafael", "Rick O Robert"];
//const COMPETITIONS_ID = ["geral", "titanic", "housing"];

const RankingPage: NextPage = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [selectedCompetition, setSelectedCompetition] = useState("geral");

  useEffect(() => {
    getCompetitionRanking(selectedCompetition);
  }, []);

  const getCompetitionRanking = async (competitionId: string) => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
      const response = await fetch(`${baseUrl}/api/leaderboard?competitionId=${competitionId}`);
      const data = await response.json();
      setLeaderboard(data);
    } catch (error) {
      console.error("Erro ao buscar leaderboard:", error);
    }
  };

  // Dados com os Members
  const filteredRanking = Array.isArray(leaderboard) ? leaderboard.filter((entry) =>
    MEMBER_NAMES.includes(entry.teamName)
  ) : [];

  return (
    <div className="relative min-h-screen w-full bg-white p-8">
      <AnimatedGridPattern
        numSquares={20}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "fixed top-0 left-0 w-full h-full skew-y-12 z-[0]"
        )}
      />
      {/* Header */}
      <div className="mb-6 mt-12 flex items-center justify-between mx-auto max-w-4xl relative z-10">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/leaderboardLogo.svg" // ajuste o caminho conforme necessário
            alt="Logo Leaderboard Brand"
            width={250} // ajuste o tamanho conforme necessário
            height={50} // ajuste o tamanho conforme necessário
          />
        </div>
        <Image
          src="/assets/logo/logoPreto.svg"
          alt="Descrição da imagem"
          width={30} // ajuste o tamanho conforme necessário
          height={50}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 ">
        {/* Section Title and Tabs */}
        <div className="mb-12 flex gap-4">
  {COMPETITIONS_ID.map((competitionId) => (
    <Button
      key={competitionId}
      variant="default"
      className={`${
        selectedCompetition === competitionId ? 'bg-black text-white' : 'bg-gray-200 text-black'
      } hover:bg-gray-300`}
      onClick={() => {
        setSelectedCompetition(competitionId);
        getCompetitionRanking(competitionId);
      }}
    >
      {competitionId.charAt(0).toUpperCase() + competitionId.slice(1)}
    </Button>
  ))}
</div>

        {/* Podium */}
        <div className="flex items-end justify-center gap-4 px-4">
          {/* Second Place */}
          <div className="flex w-[200px] flex-col items-center">
            <span className="mb-0 text-8xl font-black">2º</span>
            <div className="w-full">
              <MagicCard
                gradientColor={"#D9D9D955"}
                className="cursor-pointer flex-col whitespace-nowrap shadow-2xl h-[200px] bg-black px-4 pt-4 rounded-t-3xl"
              >
                <p className="text-center font-black text-black">
                  {filteredRanking[1]?.teamName || "Equipe 2"}
                </p>
                <p className="text-center text-black">
                  {filteredRanking[1]?.score || "0.0000"}
                </p>
              </MagicCard>
            </div>
          </div>

          {/* First Place */}
          <div className="flex w-[200px] flex-col items-center">
            <span className="mb-0 text-8xl font-black">1º</span>
            <div className="w-full">
              <MagicCard
                gradientColor={"#D9D9D955"}
                className="cursor-pointer flex-col whitespace-nowrap shadow-2xl h-[270px] bg-black px-4 pt-4 rounded-t-3xl"
              >
                <p className="text-center font-black text-black">
                  {filteredRanking[0]?.teamName || "Equipe 1"}
                </p>
                <p className="text-center text-black">
                  {filteredRanking[0]?.score || "0.0000"}
                </p>
              </MagicCard>
            </div>
          </div>

          {/* Third Place */}
          <div className="flex w-[200px] flex-col items-center">
            <span className="mb-0 text-8xl font-black">3º</span>
            <div className="w-full">
              <MagicCard
                gradientColor={"#D9D9D955"}
                className="cursor-pointer flex-col whitespace-nowrap shadow-2xl h-[150px] bg-black px-4 pt-4 rounded-t-3xl"
              >
                <p className="text-center font-black text-black">
                  {filteredRanking[2]?.teamName || "Equipe 3"}
                </p>
                <p className="text-center text-black">
                  {filteredRanking[2]?.score || "0.0000"}
                </p>
              </MagicCard>
            </div>
          </div>
        </div>

        {/* Ranking Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative z-10">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-500 border-b border-gray-200">
                  Rank
                </th>
                <th className="text-left py-4 px-6 font-medium text-gray-500 border-b border-gray-200">
                  Team Name
                </th>
                <th className="text-left py-4 px-6 font-medium text-gray-500 border-b border-gray-200">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredRanking.slice(3).map((entry, index) => (
                <tr
                  key={entry.teamId}
                  className="hover:bg-gray-50 border-b border-gray-100 last:border-0"
                >
                  <td className="py-4 px-6">{index + 4}</td>
                  <td className="py-4 px-6">{entry.teamName}</td>
                  <td className="py-4 px-6">{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredRanking.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              Nenhum membro encontrado no ranking
            </div>
          )}
        </div>
        {/* <Ripple color='red' mainCircleSize={160} mainCircleOpacity={0.2} numCircles={8} />  */}
      </div>

      <FloatingDock
        items={items}
        desktopClassName="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50"
        mobileClassName="position: fixed; right: 0; bottom: 0; z-50"
      />  
    </div>
  );
};

export default RankingPage;