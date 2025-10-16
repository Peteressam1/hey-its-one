import PresentationSlider from "@/components/Presentation/PresentationSlider";
import TitleSlide from "@/components/Presentation/Slides/TitleSlide";
import ProblemSlide from "@/components/Presentation/Slides/ProblemSlide";
import CostOfFrameVisionSlide from "@/components/Presentation/Slides/CostOfFrameVisionSlide";
import SolutionSlide from "@/components/Presentation/Slides/SolutionSlide";
import MarketSlide from "@/components/Presentation/Slides/MarketSlide";
import GoToMarketSlide from "@/components/Presentation/Slides/GoToMarketSlide";
import BusinessModelSlideV2 from "@/components/Presentation/Slides/BusinessModelSlideV2";
import CompetitionSlide from "@/components/Presentation/Slides/CompetitionSlide";
import RoadmapSlideV2 from "@/components/Presentation/Slides/RoadmapSlideV2";
import TeamSlide from "@/components/Presentation/Slides/TeamSlide";
import AskSlideV2 from "@/components/Presentation/Slides/AskSlideV2";
// Compact deck: omit Investor ROI slide for brevity

const Index = () => {
  const slides = [
    { id: 'title', title: 'Lumina Tech', component: TitleSlide },
    { id: 'problem', title: 'The Problem', component: ProblemSlide },
    { id: 'cost-of-frame', title: 'Cost of Frame Vision', component: CostOfFrameVisionSlide },
    { id: 'solution', title: 'Industrial Proven', component: SolutionSlide },
    { id: 'market', title: 'Market Opportunity', component: MarketSlide },
    { id: 'business-model', title: 'Business Model', component: BusinessModelSlideV2 },
    { id: 'competition', title: 'Why We Win', component: CompetitionSlide },
    { id: 'team', title: 'Team', component: TeamSlide },
    // { id: 'ask', title: 'The Ask', component: AskSlideV2 } // Commented out for FAPS FAU pitch
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