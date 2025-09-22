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
                padding: "1.2rem 2rem",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#333333",
                textDecoration: "none",
                borderRadius: "16px",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#333333" }}>Acessar Link</span>
                <span style={{ marginLeft: "1rem", color: "#666666" }}>→</span>
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
                padding: "1.2rem 2rem",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#333333",
                textDecoration: "none",
                borderRadius: "16px",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#333333" }}>Acessar Link</span>
                <span style={{ marginLeft: "1rem", color: "#666666" }}>→</span>
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
                padding: "1.2rem 2rem",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#333333",
                textDecoration: "none",
                borderRadius: "16px",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#333333" }}>Acessar Link</span>
                <span style={{ marginLeft: "1rem", color: "#666666" }}>→</span>
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
                padding: "1.2rem 2rem",
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: "#2563eb",
                textDecoration: "none",
                borderRadius: "16px",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 8px 32px rgba(37, 99, 235, 0.1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(37, 99, 235, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(37, 99, 235, 0.1)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#2563eb" }}>Acessar Curso</span>
                <span style={{ marginLeft: "1rem", color: "#64748b" }}>→</span>
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
              href="https://www.datascienceacademy.com.br/?msg=not-logged-in"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "1.2rem 2rem",
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: "#2563eb",
                textDecoration: "none",
                borderRadius: "16px",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 8px 32px rgba(37, 99, 235, 0.1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(37, 99, 235, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(37, 99, 235, 0.1)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#2563eb" }}>Acessar Curso</span>
                <span style={{ marginLeft: "1rem", color: "#64748b" }}>→</span>
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
                padding: "1.2rem 2rem",
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: "#2563eb",
                textDecoration: "none",
                borderRadius: "16px",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 8px 32px rgba(37, 99, 235, 0.1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(37, 99, 235, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(37, 99, 235, 0.1)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#2563eb" }}>Assistir Vídeo</span>
                <span style={{ marginLeft: "1rem", color: "#64748b" }}>→</span>
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
            Curso - Pandas - Kaggle
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
              4 Hrs
            </h3>
          </div>
          <p className="text-lg md:text-lg  text-gray-500 dark:text-white max-w-4xl ml-12 mt-2">
            Aprenda a usar a biblioteca Pandas, a ferramenta mais importante para manipulação e análise de dados em Python.
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
              href="https://www.kaggle.com/learn/pandas/course"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "1.2rem 2rem",
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: "#2563eb",
                textDecoration: "none",
                borderRadius: "16px",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 8px 32px rgba(37, 99, 235, 0.1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(37, 99, 235, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(37, 99, 235, 0.1)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#2563eb" }}>Acessar Curso</span>
                <span style={{ marginLeft: "1rem", color: "#64748b" }}>→</span>
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
            Curso: Data Visualization - Kaggle
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
              4 Hrs
            </h3>
          </div>
          <p className="text-lg md:text-lg  text-gray-500 dark:text-white max-w-4xl ml-12 mt-2">
            Aprenda a criar gráficos informativos e eficazes com as bibliotecas Matplotlib e Seaborn para extrair insights valiosos dos seus dados.
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
              href="https://www.kaggle.com/learn/data-visualization"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "1.2rem 2rem",
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: "#2563eb",
                textDecoration: "none",
                borderRadius: "16px",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 8px 32px rgba(37, 99, 235, 0.1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(37, 99, 235, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(37, 99, 235, 0.1)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#2563eb" }}>Acessar Curso</span>
                <span style={{ marginLeft: "1rem", color: "#64748b" }}>→</span>
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
                padding: "1.2rem 2rem",
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: "#2563eb",
                textDecoration: "none",
                borderRadius: "16px",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 8px 32px rgba(37, 99, 235, 0.1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(37, 99, 235, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(37, 99, 235, 0.1)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#2563eb" }}>Assistir Vídeo</span>
                <span style={{ marginLeft: "1rem", color: "#64748b" }}>→</span>
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
              Vídeo - Qual a diferença entre Inteligência Artificial, Machine Learning,
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
              href="https://www.youtube.com/watch?v=ccZ2pyr3YDw"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "1.2rem 2rem",
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "#059669",
                textDecoration: "none",
                borderRadius: "16px",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 8px 32px rgba(5, 150, 105, 0.1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(5, 150, 105, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(5, 150, 105, 0.1)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#059669" }}>Assistir Vídeo</span>
                <span style={{ marginLeft: "1rem", color: "#6b7280" }}>→</span>
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
              Curso - Feature Engineering - Kaggle
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
            Aprenda técnicas para limpar, transformar e criar novas variáveis para maximizar os resultados.
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
              href="https://www.kaggle.com/learn/feature-engineering"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "1.2rem 2rem",
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "#059669",
                textDecoration: "none",
                borderRadius: "16px",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 8px 32px rgba(5, 150, 105, 0.1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(5, 150, 105, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(5, 150, 105, 0.1)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#059669" }}>Acessar Curso</span>
                <span style={{ marginLeft: "1rem", color: "#6b7280" }}>→</span>
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
              Curso - Intro to Machine Learning - Kaggle
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
              7 Hrs
            </h3>
          </div>
          <p className="text-lg md:text-lg  text-gray-500 dark:text-white max-w-4xl ml-12 mt-2">
            Aprenda a desenvolver o seu primeiro modelo.
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
              href="https://www.kaggle.com/learn/intro-to-machine-learning"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "1.2rem 2rem",
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "#059669",
                textDecoration: "none",
                borderRadius: "16px",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 8px 32px rgba(5, 150, 105, 0.1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(5, 150, 105, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(5, 150, 105, 0.1)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#059669" }}>Acessar Curso</span>
                <span style={{ marginLeft: "1rem", color: "#6b7280" }}>→</span>
              </div>
            </a>
          </div>
         
        </div>
      ),
    },

    {
      title: "Fase 4: Modelagem e Algoritmos de Machine Learning",
      content: (
        <div>
          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              id="topic-checkbox"
              className="mt-1 h-6 w-6 min-w-8 text-gray-500 border-gray-300 rounded focus:ring-gray-400"
            />
            <h2 className="text-lg md:text-1xl  text-black dark:text-white max-w-4xl font-bold">
              Leitura - Gradient Boosting - Medium
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
              15 min
            </h3>
          </div>
          <p className="text-lg md:text-lg  text-gray-500 dark:text-white max-w-4xl ml-12 mt-2">
            Entenda o funcionamento do Gradient Boosting, a família de algoritmos (como XGBoost e LightGBM) que domina as competições de dados tabulares no Kaggle.
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
              href="https://medium.com/equals-lab/uma-breve-introdu%C3%A7%C3%A3o-ao-algoritmo-de-machine-learning-gradient-boosting-utilizando-a-biblioteca-311285783099"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "1.2rem 2rem",
                background: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.35)",
                color: "#7c2d12",
                textDecoration: "none",
                borderRadius: "16px",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 8px 32px rgba(124, 45, 18, 0.1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.35)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(124, 45, 18, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(124, 45, 18, 0.1)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#7c2d12" }}>Ler Artigo</span>
                <span style={{ marginLeft: "1rem", color: "#78716c" }}>→</span>
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
              Curso - Intermediate Machine Learning - Kaggle
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
              4 Hrs
            </h3>
          </div>
          <p className="text-lg md:text-lg  text-gray-500 dark:text-white max-w-4xl ml-12 mt-2">
            Este curso aborda tópicos essenciais como o uso de pipelines, a validação cruzada e apresenta o algoritmo XGBoost.
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
              href="https://www.kaggle.com/learn/intermediate-machine-learning"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "1.2rem 2rem",
                background: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.35)",
                color: "#7c2d12",
                textDecoration: "none",
                borderRadius: "16px",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 8px 32px rgba(124, 45, 18, 0.1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.35)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(124, 45, 18, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(124, 45, 18, 0.1)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#7c2d12" }}>Acessar Curso</span>
                <span style={{ marginLeft: "1rem", color: "#78716c" }}>→</span>
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
              Tutorial - Treine sua primeira rede neural - TensorFlow
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
            Este tutorial guia você passo a passo na construção e no treinamento do seu primeiro modelo de rede neural utilizando o framework TensorFlow.
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
              href="https://www.tensorflow.org/tutorials/keras/classification?hl=pt-br"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "1.2rem 2rem",
                background: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.35)",
                color: "#7c2d12",
                textDecoration: "none",
                borderRadius: "16px",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 8px 32px rgba(124, 45, 18, 0.1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.35)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(124, 45, 18, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(124, 45, 18, 0.1)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#7c2d12" }}>Acessar Tutorial</span>
                <span style={{ marginLeft: "1rem", color: "#78716c" }}>→</span>
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
