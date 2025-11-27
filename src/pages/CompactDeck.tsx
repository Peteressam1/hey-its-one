import PresentationSlider from "@/components/Presentation/PresentationSlider";
import TitleSlide from "@/components/Presentation/Slides/TitleSlide";
import ProblemSlideV2 from "@/components/Presentation/Slides/ProblemSlideV2";
import CurrentSolutionsSlide from "@/components/Presentation/Slides/CurrentSolutionsSlide";
import WeAreLuminaSlide from "@/components/Presentation/Slides/WeAreLuminaSlide";
import TeamSlide from "@/components/Presentation/Slides/TeamSlide";
import SolutionAndCompetitiveEdgeSlide from "@/components/Presentation/Slides/SolutionAndCompetitiveEdgeSlide";
import DemoSlide from "@/components/Presentation/Slides/DemoSlide";
import ComprehensiveMarketSlide from "@/components/Presentation/Slides/ComprehensiveMarketSlide";
import FinalSlide from "@/components/Presentation/Slides/FinalSlide";
import { CustomCursor } from "@/components/ui/custom-cursor";

// Compact Pre-Seed Deck - 9 Slide Investor Pitch
const CompactDeck = () => {
  const slides = [
    { id: 'title', title: 'Lumina Tech', component: TitleSlide },
    { id: 'problem', title: 'The Problem', component: ProblemSlideV2 },
    { id: 'current-solutions', title: 'Current Solutions', component: CurrentSolutionsSlide },
    { id: 'we-are-lumina', title: 'We Are Lumina', component: WeAreLuminaSlide },
    { id: 'team', title: 'Team', component: TeamSlide },
    { id: 'solution', title: 'Our Solution', component: SolutionAndCompetitiveEdgeSlide },
    { id: 'demo', title: 'Demo', component: DemoSlide },
    { id: 'market', title: 'Market Opportunity', component: ComprehensiveMarketSlide },
    { id: 'final', title: 'Thank You', component: FinalSlide },
  ];

  return (
    <>
      {/* Custom Cursor for premium feel */}
      <CustomCursor />
      
      {/* Main Presentation */}
      <PresentationSlider 
        slides={slides}
        autoPlay={false}
        autoPlayInterval={30000}
      />
    </>
  );
};

export default CompactDeck;
