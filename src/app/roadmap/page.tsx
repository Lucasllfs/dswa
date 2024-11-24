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
      title: "Fase 1: Fundamentos Teóricos",
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
