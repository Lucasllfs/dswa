import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { IntroRoadmap } from "@/app/_components/introRoadmap";
import { MoreStories } from "@/app/_components/more-stories";
import { RoadmapLine } from "@/app/_components/roadmapLine";
import { getAllPosts } from "@/lib/api";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}


export default function Roadmap() {

  const data: TimelineEntry[] = [
   
  ];
  

  return (
    <main>
      <Container>
        <IntroRoadmap />
        
       
    {/* <RoadmapLine data={data} /> */}

        {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
      </Container>
    </main>
  );
}
