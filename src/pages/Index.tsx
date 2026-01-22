import PresentationSlider from "@/components/Presentation/PresentationSlider";
import TitleSlide from "@/components/Presentation/Slides/TitleSlide";
import ProblemSlideV2 from "@/components/Presentation/Slides/ProblemSlideV2";
import CurrentSolutionsSlide from "@/components/Presentation/Slides/CurrentSolutionsSlide";
import WeAreLuminaSlide from "@/components/Presentation/Slides/WeAreLuminaSlide";
import TeamSlide from "@/components/Presentation/Slides/TeamSlide";
import SolutionAndCompetitiveEdgeSlide from "@/components/Presentation/Slides/SolutionAndCompetitiveEdgeSlide";
import DemoSlide from "@/components/Presentation/Slides/DemoSlide";
import MarketBusinessModelSlide from "@/components/Presentation/Slides/MarketBusinessModelSlide";
import TractionFundingSlide from "@/components/Presentation/Slides/TractionFundingSlide";
import FinalSlide from "@/components/Presentation/Slides/FinalSlide";

const Index = () => {
  const slides = [
    { id: 'title', title: 'Lumina Tech', component: TitleSlide },
    { id: 'problem', title: 'The Problem', component: ProblemSlideV2 },
    { id: 'current-solutions', title: 'Current Solutions', component: CurrentSolutionsSlide },
    { id: 'we-are-lumina', title: 'We Are Lumina', component: WeAreLuminaSlide },
    { id: 'team', title: 'Team', component: TeamSlide },
    { id: 'solution-edge', title: 'Solution & Why We Win', component: SolutionAndCompetitiveEdgeSlide },
    { id: 'demo', title: 'Demo', component: DemoSlide },
    { id: 'market', title: 'Market & Business Model', component: MarketBusinessModelSlide },
    { id: 'traction', title: 'Traction & Funding', component: TractionFundingSlide },
    { id: 'final', title: 'Connect With Us', component: FinalSlide },
  ];

  return (
    <PresentationSlider 
      slides={slides}
      autoPlay={false}
      autoPlayInterval={45000}
    />
  );
};

export default Index;
