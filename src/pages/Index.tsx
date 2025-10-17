import PresentationSlider from "@/components/Presentation/PresentationSlider";
import TitleSlide from "@/components/Presentation/Slides/TitleSlide";
import AudienceEngagementSlide from "@/components/Presentation/Slides/AudienceEngagementSlide";
import OpenChallengesSlide from "@/components/Presentation/Slides/OpenChallengesSlide";
import EventCameraExplainerSlide from "@/components/Presentation/Slides/EventCameraExplainerSlide";
import EventMathematicsSlide from "@/components/Presentation/Slides/EventMathematicsSlide";
import EventVsRGBComparisonSlide from "@/components/Presentation/Slides/EventVsRGBComparisonSlide";
import IndustryPainPointsSlide from "@/components/Presentation/Slides/IndustryPainPointsSlide";
import IcebergSlide from "@/components/Presentation/Slides/IcebergSlide";
import WeAreLuminaSlide from "@/components/Presentation/Slides/WeAreLuminaSlide";
import TeamSlide from "@/components/Presentation/Slides/TeamSlide";
import SolutionSlide from "@/components/Presentation/Slides/SolutionSlide";
import MarketSlide from "@/components/Presentation/Slides/MarketSlide";
import GoToMarketSlide from "@/components/Presentation/Slides/GoToMarketSlide";
import BusinessModelSlideV2 from "@/components/Presentation/Slides/BusinessModelSlideV2";
import CompetitionSlide from "@/components/Presentation/Slides/CompetitionSlide";
import RoadmapSlideV2 from "@/components/Presentation/Slides/RoadmapSlideV2";
import AskSlideV2 from "@/components/Presentation/Slides/AskSlideV2";

const Index = () => {
  const slides = [
    { id: 'title', title: 'Lumina Tech', component: TitleSlide },
    { id: 'engagement', title: 'Audience Check', component: AudienceEngagementSlide },
    { id: 'open-challenges', title: 'Open Challenges', component: OpenChallengesSlide },
    { id: 'event-explainer', title: 'What Are Event Cameras', component: EventCameraExplainerSlide },
    { id: 'event-mathematics', title: 'Mathematical Model', component: EventMathematicsSlide },
    { id: 'event-vs-rgb', title: 'Event vs RGB', component: EventVsRGBComparisonSlide },
    { id: 'industry-pain', title: 'Industry Challenges', component: IndustryPainPointsSlide },
    { id: 'iceberg', title: 'Hidden Complexity', component: IcebergSlide },
    { id: 'we-are-lumina', title: 'We Are Lumina', component: WeAreLuminaSlide },
    { id: 'team', title: 'Team', component: TeamSlide },
    { id: 'solution', title: 'Industrial Proven', component: SolutionSlide },
    { id: 'market', title: 'Market Opportunity', component: MarketSlide },
    { id: 'business-model', title: 'Business Model', component: BusinessModelSlideV2 },
    { id: 'competition', title: 'Why We Win', component: CompetitionSlide },
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