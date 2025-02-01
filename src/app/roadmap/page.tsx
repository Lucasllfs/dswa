"use client";

import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { IntroRoadmap } from "@/app/_components/introRoadmap";
import { MoreStories } from "@/app/_components/more-stories";
import { RoadmapLine } from "@/app/_components/roadmapLine";
import { getAllPosts } from "@/lib/api";

// If you're using built in layout, you will need to import this css
import "@ashwamegh/react-link-preview/dist/index.css";
interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface Preview {
  domain: string;
  title: string;
  description: string;
  img: string;
}

function CustomComponent({
  loading,
  preview,
}: {
  loading: boolean;
  preview: Preview;
}) {
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <p>Domain: {preview.domain}</p>
      <p>Title: {preview.title}</p>
      <p>Description: {preview.description}</p>
      <img height="100px" width="100px" src={preview.img} alt={preview.title} />
    </div>
  );
}

export default function Roadmap() {
  const data: TimelineEntry[] = [
    {
      title: "Fase 1: Fundamentos",
      content: (
        <div>
          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              id="topic-checkbox"
              className="mt-1 h-6 w-6 min-w-8 text-gray-500 border-gray-300 rounded focus:ring-gray-400"
            />
            <h2 className="text-lg md:text-1xl  text-black dark:text-white max-w-4xl font-bold">
              Linear Algebra - Math for Machine Learning
            </h2>
            <h3
              style={{
                color: "#4b5563",
                fontSize: "1rem",
                fontWeight: 500,
                minWidth: "58px",
                marginRight: "1.5rem",
              }}
            >
              41 min
            </h3>
          </div>
          <p className="text-lg md:text-lg  text-gray-500 dark:text-white max-w-4xl ml-12 mt-2">
            Algebra Linear é um dos principais conceitos matemáticos para quem quer se aprofundar em Machine Learning. Neste vídeo, você aprenderá os conceitos básicos de álgebra linear, como vetores, matrizes, operações com matrizes, etc.
          </p>
          <div
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              maxWidth: "800px",
              padding: "1.5rem",
              marginLeft: "22px",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=uZeDTwWcnuY&list=PLD80i8An1OEGZ2tYimemzwC3xqkU0jKUg&index=1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "1rem 2rem",
                backgroundColor: "#C68FE6", //#6C48C5 depois #1230AE
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "25px",
                fontWeight: 500,
                fontSize: "1.125rem",
                transition: "all 0.3s ease",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#333333";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#C68FE6";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Link</span>
                <span style={{ marginLeft: "1rem" }}>→</span>
              </div>
            </a>
          </div>

          <div className="border-t-2 border-gray-200 my-8"></div>

          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              id="topic-checkbox"
              className="mt-1 h-6 w-6 min-w-8 text-gray-500 border-gray-300 rounded focus:ring-gray-400"
            />
            <h2 className="text-lg md:text-1xl  text-black dark:text-white max-w-4xl font-bold">
              Calculus - Math for Machine Learning
            </h2>
            <h3
              style={{
                color: "#4b5563",
                fontSize: "1rem",
                fontWeight: 500,
                minWidth: "58px",
                marginRight: "1.5rem",
              }}
            >
              42 min
            </h3>
          </div>
          <p className="text-lg md:text-lg  text-gray-500 dark:text-white max-w-4xl ml-12 mt-2">
            Neste vídeo, você aprenderá os conceitos básicos de cálculo, como derivadas, integrais, etc.
          </p>
          <div
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              maxWidth: "800px",
              padding: "1.5rem",
              marginLeft: "22px",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=MDL384gsAk0&list=PLD80i8An1OEGZ2tYimemzwC3xqkU0jKUg&index=4"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "1rem 2rem",
                backgroundColor: "#C68FE6", //#6C48C5 depois #1230AE
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "25px",
                fontWeight: 500,
                fontSize: "1.125rem",
                transition: "all 0.3s ease",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#333333";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#C68FE6";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Link</span>
                <span style={{ marginLeft: "1rem" }}>→</span>
              </div>
            </a>
          </div>

          <div className="border-t-2 border-gray-200 my-8"></div>

          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              id="topic-checkbox"
              className="mt-1 h-6 w-6 min-w-8 text-gray-500 border-gray-300 rounded focus:ring-gray-400"
            />
            <h2 className="text-lg md:text-1xl  text-black dark:text-white max-w-4xl font-bold">
            Probability - Math for Machine Learning
            </h2>
            <h3
              style={{
                color: "#4b5563",
                fontSize: "1rem",
                fontWeight: 500,
                minWidth: "58px",
                marginRight: "1.5rem",
              }}
            >
              45 min
            </h3>
          </div>
          <p className="text-lg md:text-lg  text-gray-500 dark:text-white max-w-4xl ml-12 mt-2">
          Neste vídeo, você aprenderá os conceitos básicos de probabilidade, como eventos, espaço amostral, probabilidade condicional, etc.
          </p>
          <div
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              maxWidth: "800px",
              padding: "1.5rem",
              marginLeft: "22px",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=LBemXHm_Ops&list=PLD80i8An1OEGZ2tYimemzwC3xqkU0jKUg&index=6"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "1rem 2rem",
                backgroundColor: "#C68FE6", //#6C48C5 depois #1230AE
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "25px",
                fontWeight: 500,
                fontSize: "1.125rem",
                transition: "all 0.3s ease",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#333333";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#C68FE6";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Link</span>
                <span style={{ marginLeft: "1rem" }}>→</span>
              </div>
              
            </a>
            
          </div>
          
          <div className="border-t-2 border-gray-200 my-8">
            <p className="text-2xl md:text-1xl  text-black my-8 max-w-4xl font-bold">
              Opcional
            </p>
              <p className="text-md md:text-1xl  text-black  max-w-4xl ">
                Assistir as aulas de exercícios dessa mesma playlist
              </p>

          </div>

         
        </div>
      ),
    },










    {
      title: "Fase 2: Programação com Python",
      content: (
        <div>
          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              id="topic-checkbox"
              className="mt-1 h-6 w-6 min-w-8 text-gray-500 border-gray-300 rounded focus:ring-gray-400"
            />
            <h2 className="text-lg md:text-1xl  text-black dark:text-white max-w-4xl font-bold">
            Curso - Python - Kaggle
            </h2>
            <h3
              style={{
                color: "#4b5563",
                fontSize: "1rem",
                fontWeight: 500,
                minWidth: "58px",
                marginRight: "1.5rem",
              }}
            >
              5 Hrs
            </h3>
          </div>
          <p className="text-lg md:text-lg  text-gray-500 dark:text-white max-w-4xl ml-12 mt-2">
          Curso de Python oferecido pelo Kaggle, uma das maiores plataformas de competições de Data Science do mundo. O curso é voltado para iniciantes e aborda os conceitos básicos da linguagem Python. Com certificado de conclusão.
          </p>
          <div
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              maxWidth: "800px",
              padding: "1.5rem",
              marginLeft: "22px",
            }}
          >
            <a
              href="https://www.kaggle.com/learn/python"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "1rem 2rem",
                backgroundColor: "#6C48C5", //#6C48C5 depois #1230AE
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "25px",
                fontWeight: 500,
                fontSize: "1.125rem",
                transition: "all 0.3s ease",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#333333";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#6C48C5";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Link</span>
                <span style={{ marginLeft: "1rem" }}>→</span>
              </div>
            </a>
          </div>

          <div className="border-t-2 border-gray-200 my-8"></div>

          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              id="topic-checkbox"
              className="mt-1 h-6 w-6 min-w-8 text-gray-500 border-gray-300 rounded focus:ring-gray-400"
            />
            <h2 className="text-lg md:text-1xl  text-black dark:text-white max-w-4xl font-bold">
              Curso - Python - Data Science Academy
            </h2>
            <h3
              style={{
                color: "#4b5563",
                fontSize: "1rem",
                fontWeight: 500,
                minWidth: "58px",
                marginRight: "1.5rem",
              }}
            >
              72 Hrs
            </h3>
          </div>
          <p className="text-lg md:text-lg  text-gray-500 dark:text-white max-w-4xl ml-12 mt-2">
            O curso é voltado para iniciantes e aborda os conceitos básicos da linguagem Python, além de conceitos de Data Science. Com certificado de conclusão.
          </p>
          <div
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              maxWidth: "800px",
              padding: "1.5rem",
              marginLeft: "22px",
            }}
          >
            <a
              href="https://www.datascienceacademy.com.br/course/fundamentos-de-linguagem-python-para-analise-de-dados-e-data-science"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "1rem 2rem",
                backgroundColor: "#6C48C5", //#6C48C5 depois #1230AE
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "25px",
                fontWeight: 500,
                fontSize: "1.125rem",
                transition: "all 0.3s ease",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#333333";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#6C48C5";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Link</span>
                <span style={{ marginLeft: "1rem" }}>→</span>
              </div>
            </a>
          </div>

          <div className="border-t-2 border-gray-200 my-8"></div>

          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              id="topic-checkbox"
              className="mt-1 h-6 w-6 min-w-8 text-gray-500 border-gray-300 rounded focus:ring-gray-400"
            />
            <h2 className="text-lg md:text-1xl  text-black dark:text-white max-w-4xl font-bold">
            Vídeo - MELHOR FORMA DE APRENDER PYTHON
            </h2>
            <h3
              style={{
                color: "#4b5563",
                fontSize: "1rem",
                fontWeight: 500,
                minWidth: "58px",
                marginRight: "1.5rem",
              }}
            >
              30 min
            </h3>
          </div>
          <p className="text-lg md:text-lg  text-gray-500 dark:text-white max-w-4xl ml-12 mt-2">
            Outra abordagem para aprender Python.
          </p>
          <div
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              maxWidth: "800px",
              padding: "1.5rem",
              marginLeft: "22px",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=Gojqw9BQ5qY&list=PLMdYygf53DP7YZiFUtGTWJJlvynRyrna-&index=2"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "1rem 2rem",
                backgroundColor: "#6C48C5", //#6C48C5 depois #1230AE
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "25px",
                fontWeight: 500,
                fontSize: "1.125rem",
                transition: "all 0.3s ease",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#333333";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#6C48C5";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Link</span>
                <span style={{ marginLeft: "1rem" }}>→</span>
              </div>
            </a>
          </div>




          <div className="border-t-2 border-gray-200 my-8"></div>

          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              id="topic-checkbox"
              className="mt-1 h-6 w-6 min-w-8 text-gray-500 border-gray-300 rounded focus:ring-gray-400"
            />
            <h2 className="text-lg md:text-1xl  text-black dark:text-white max-w-4xl font-bold">
            Vídeo  - Data Science: Introdução a Ciência de Dados (Primeira aula prática programando em Python)
            </h2>
            <h3
              style={{
                color: "#4b5563",
                fontSize: "1rem",
                fontWeight: 500,
                minWidth: "58px",
                marginRight: "1.5rem",
              }}
            >
              25 min
            </h3>
          </div>
          <p className="text-lg md:text-lg  text-gray-500 dark:text-white max-w-4xl ml-12 mt-2">
            Neste vídeo, você aprenderá os conceitos básicos de Python aplicados a Data Science.
          </p>
          <div
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              maxWidth: "800px",
              padding: "1.5rem",
              marginLeft: "22px",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=Gojqw9BQ5qY&list=PLMdYygf53DP7YZiFUtGTWJJlvynRyrna-&index=2"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "1rem 2rem",
                backgroundColor: "#6C48C5", //#6C48C5 depois #1230AE
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "25px",
                fontWeight: 500,
                fontSize: "1.125rem",
                transition: "all 0.3s ease",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#333333";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#6C48C5";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Link</span>
                <span style={{ marginLeft: "1rem" }}>→</span>
              </div>
            </a>
          </div>

          <div className="border-t-2 border-gray-200 my-8">
            <p className="text-2xl  text-black my-8 max-w-4xl font-bold">
              Opcional
            </p>
              <p className="text-md   text-black font-bold  max-w-4xl ">
              Certificação Python (Basic) HackerRank
              </p>
                <ul className="list-disc ml-12 mt-2">
                  <li>
                    Complete a 1 hr 30 mins assessment
                  </li>
                  <li>
                    Solve 2 questions
                  </li>
                  <li>
                  Earn a HackerRank certificate
                    </li>
                </ul>
                <a
              href="https://www.hackerrank.com/skills-verification/python_basic"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                marginTop: "12px",
                padding: "1rem 2rem",
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "#6C48C5",
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "25px",
                fontWeight: 500,
                fontSize: "1.125rem",
                transition: "all 0.3s ease",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#333333";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#fff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span 
                style={{
                  color: "#6C48C5",
                }}
                >Link</span>
                <span style={{color: "#6C48C5", marginLeft: "1rem" }}>→</span>
              </div>
            </a>
          </div>
         
        </div>
      ),
    },








    {
      title: "Fase 3: Introdução ao Machine Learning",
      content: (
        <div>
          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              id="topic-checkbox"
              className="mt-1 h-6 w-6 min-w-8 text-gray-500 border-gray-300 rounded focus:ring-gray-400"
            />
            <h2 className="text-lg md:text-1xl  text-black dark:text-white max-w-4xl font-bold">
              Qual a diferença entre Inteligência Artificial, Machine Learning,
              Data Science, Deep Learning, etc?
            </h2>
            <h3
              style={{
                color: "#4b5563",
                fontSize: "1rem",
                fontWeight: 500,
                minWidth: "58px",
                marginRight: "1.5rem",
              }}
            >
              30 min
            </h3>
          </div>
          <p className="text-lg md:text-lg  text-gray-500 dark:text-white max-w-4xl ml-12 mt-2">
            Entenda as diferenças entre os principais conceitos de IA, ML, DS e
            DL
          </p>
          <div
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              maxWidth: "800px",
              padding: "1.5rem",
              marginLeft: "22px",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=Gojqw9BQ5qY&list=PLMdYygf53DP7YZiFUtGTWJJlvynRyrna-&index=2"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "1rem 2rem",
                backgroundColor: "#1230AE", //#6C48C5 depois #1230AE
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "25px",
                fontWeight: 500,
                fontSize: "1.125rem",
                transition: "all 0.3s ease",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#333333";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#1230AE";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Link</span>
                <span style={{ marginLeft: "1rem" }}>→</span>
              </div>
            </a>
          </div>

          <div className="border-t-2 border-gray-200 my-8"></div>

          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              id="topic-checkbox"
              className="mt-1 h-6 w-6 min-w-8 text-gray-500 border-gray-300 rounded focus:ring-gray-400"
            />
            <h2 className="text-lg md:text-1xl  text-black dark:text-white max-w-4xl font-bold">
              Qual a diferença entre Inteligência Artificial, Machine Learning,
              Data Science, Deep Learning, etc?
            </h2>
            <h3
              style={{
                color: "#4b5563",
                fontSize: "1rem",
                fontWeight: 500,
                minWidth: "58px",
                marginRight: "1.5rem",
              }}
            >
              30 min
            </h3>
          </div>
          <p className="text-lg md:text-lg  text-gray-500 dark:text-white max-w-4xl ml-12 mt-2">
            Entenda as diferenças entre os principais conceitos de IA, ML, DS e
            DL
          </p>
          <div
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              maxWidth: "800px",
              padding: "1.5rem",
              marginLeft: "22px",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=Gojqw9BQ5qY&list=PLMdYygf53DP7YZiFUtGTWJJlvynRyrna-&index=2"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "1rem 2rem",
                backgroundColor: "#1230AE", //#6C48C5 depois #1230AE
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "25px",
                fontWeight: 500,
                fontSize: "1.125rem",
                transition: "all 0.3s ease",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#333333";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#1230AE";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Link</span>
                <span style={{ marginLeft: "1rem" }}>→</span>
              </div>
            </a>
          </div>

          <div className="border-t-2 border-gray-200 my-8"></div>

          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              id="topic-checkbox"
              className="mt-1 h-6 w-6 min-w-8 text-gray-500 border-gray-300 rounded focus:ring-gray-400"
            />
            <h2 className="text-lg md:text-1xl  text-black dark:text-white max-w-4xl font-bold">
              Qual a diferença entre Inteligência Artificial, Machine Learning,
              Data Science, Deep Learning, etc?
            </h2>
            <h3
              style={{
                color: "#4b5563",
                fontSize: "1rem",
                fontWeight: 500,
                minWidth: "58px",
                marginRight: "1.5rem",
              }}
            >
              30 min
            </h3>
          </div>
          <p className="text-lg md:text-lg  text-gray-500 dark:text-white max-w-4xl ml-12 mt-2">
            Entenda as diferenças entre os principais conceitos de IA, ML, DS e
            DL
          </p>
          <div
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              maxWidth: "800px",
              padding: "1.5rem",
              marginLeft: "22px",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=Gojqw9BQ5qY&list=PLMdYygf53DP7YZiFUtGTWJJlvynRyrna-&index=2"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "1rem 2rem",
                backgroundColor: "#1230AE", //#6C48C5 depois #1230AE
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "25px",
                fontWeight: 500,
                fontSize: "1.125rem",
                transition: "all 0.3s ease",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#333333";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#1230AE";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Link</span>
                <span style={{ marginLeft: "1rem" }}>→</span>
              </div>
            </a>
          </div>
         
        </div>
      ),
    },
  ];

  return (
    <main>
      <Container>
        <IntroRoadmap />

        <RoadmapLine data={data} />

        {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
      </Container>
    </main>
  );
}
