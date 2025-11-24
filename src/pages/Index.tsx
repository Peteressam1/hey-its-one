import PresentationSlider from "@/components/Presentation/PresentationSlider";
import TitleSlide from "@/components/Presentation/Slides/TitleSlide";
import ProblemSlideV2 from "@/components/Presentation/Slides/ProblemSlideV2";
import CurrentSolutionsSlide from "@/components/Presentation/Slides/CurrentSolutionsSlide";
import WeAreLuminaSlide from "@/components/Presentation/Slides/WeAreLuminaSlide";
import TeamSlide from "@/components/Presentation/Slides/TeamSlide";
import OurSolutionSlide from "@/components/Presentation/Slides/OurSolutionSlide";
import DemoSlide from "@/components/Presentation/Slides/DemoSlide";
import ComprehensiveMarketSlide from "@/components/Presentation/Slides/ComprehensiveMarketSlide";
import ClosingSlide from "@/components/Presentation/Slides/ClosingSlide";

const Index = () => {
  const slides = [
    { id: 'title', title: 'Lumina Tech', component: TitleSlide },
    { id: 'problem', title: 'The Problem', component: ProblemSlideV2 },
    { id: 'current-solutions', title: 'Current Solutions', component: CurrentSolutionsSlide },
    { id: 'we-are-lumina', title: 'We Are Lumina', component: WeAreLuminaSlide },
    { id: 'team', title: 'Team', component: TeamSlide },
    { id: 'our-solution', title: 'Our Solution', component: OurSolutionSlide },
    { id: 'demo', title: 'Demo', component: DemoSlide },
    { id: 'market', title: 'Market Analysis', component: ComprehensiveMarketSlide },
    { id: 'closing', title: 'Thank You', component: ClosingSlide },
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