import Hero from "../components/home/Hero";
import WhyMobility from "../components/home/WhyMobility";
import Goals from "../components/home/Goals";
import CustomRoutine from "../components/home/CustomRoutine";
import DailyRoutines from "../components/home/DailyRoutines";
import SmartRoutine from "../components/home/SmartRoutine";
import ProgramBuilder from "../components/home/ProgramBuilder";
import Progress from "../components/home/Progress";
import ProgramPreview from "../components/home/ProgramPreview";
import Stories from "../components/home/Stories";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyMobility />
      <Goals />
      <CustomRoutine />
      <DailyRoutines />
      <SmartRoutine />
      <ProgramBuilder />
      <Progress />
      <ProgramPreview />
      <Stories />
    <FinalCTA />
    </main>
  );
}