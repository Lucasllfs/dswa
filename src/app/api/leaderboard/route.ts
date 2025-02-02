// app/api/leaderboard/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';
import AdmZip from 'adm-zip';
import {COMPETITIONS_ID}  from "@/ARQUIVOS PARA SEREM ALTERADOS PARA O SITE FUNCIONAR/lista-de-competicoes"; // Importe a lista aqui
import {MEMBER_NAMES} from "@/ARQUIVOS PARA SEREM ALTERADOS PARA O SITE FUNCIONAR/teamName-membros"; // Importe a lista aqui


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const competitionId = searchParams.get('competitionId');
  console.log("COMPETITION ID: ",competitionId);

  const username = "lucaslima02";
  const key = "0e03c79e83c6503fb854f23f4eaa9af3";


  if (!username || !key) {
    return NextResponse.json(
      { error: 'Credenciais da API do Kaggle não configuradas' },
      { status: 500 }
    );
  }

  if(competitionId == "geral"){

    let leaderboard: any[] = [];
    const generateTeamId = () => Math.floor(10000 + Math.random() * 90000);

    console.log("COMPETITIONS ID: ",COMPETITIONS_ID);
    

    //ignora o primeiro lugar (geral)
    for (let i = 1; i < COMPETITIONS_ID.length; i++) {
      console.log("COMPETITION ID: ",COMPETITIONS_ID[i]);
      console.log("https://www.kaggle.com/api/v1/competitions/${COMPETITIONS_ID[i]}/leaderboard/view`");
      try {
        const response = await axios.get(
          `https://www.kaggle.com/api/v1/competitions/${COMPETITIONS_ID[i]}/leaderboard/view`,
          {
            auth: { username, password: key },
            responseType: 'json',
          }
        );
        leaderboard = leaderboard.concat(response.data.submissions);
      } catch (error) {
        console.error('Erro ao processar leaderboard:', error);
        return NextResponse.json(
          { error: 'Erro ao processar leaderboard' },
          { status: 500 }
        );
      }
    }

   

    // Agrupar e somar os scores por membro
    const memberScores = MEMBER_NAMES.map((member) => {
      const memberSubmissions = leaderboard.filter((submission: any) => submission.teamName === member);
      const totalScore = memberSubmissions.reduce((sum: any, submission: any) => sum + submission.score, 0);
      return { teamId: generateTeamId(), teamName: member, score: totalScore };
    });

    // Ordenar por score
    const sortedMemberScores = memberScores.sort((a, b) => b.score - a.score);

    console.log("MEMBER SCORES GERAL: ",sortedMemberScores);

    return NextResponse.json(sortedMemberScores);

  } else {

  try {
    const response = await axios.get(
      `https://www.kaggle.com/api/v1/competitions/${competitionId}/leaderboard/view`,
      {
        auth: { username, password: key },
        responseType: 'json',     
      }
    );


    
    
    const leaderboard = response.data.submissions;

    //printar quantidade de submissões
    console.log("LENGTH: ",leaderboard.length);

    //ordernar por score
    const leaderboardSorted = leaderboard.sort((a: any, b: any) => b.publicScore - a.publicScore);    
    
    console.log("LEADERBOARD GERAL : ",leaderboardSorted);

    return NextResponse.json(leaderboardSorted);
  } catch (error) {
    console.error('Erro ao processar leaderboard:', error);
    return NextResponse.json(
      { error: 'Erro ao processar leaderboard' },
      { status: 500 }
    );
    }
  }
}

