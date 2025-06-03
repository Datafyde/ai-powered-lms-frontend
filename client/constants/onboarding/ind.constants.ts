import LmsTourStep from "@/components/onboarding/individual/screens/LmsTourStep";
import ProfileSetupStep from "@/components/onboarding/individual/screens/ProfileSetupStep";
import WelcomeStep from "@/components/onboarding/individual/screens/WelcomeStep";

const individualSteps = [
  { id: "welcome", component: WelcomeStep, skippable: false },
  { id: "lmsTour", component: LmsTourStep, skippable: true },
  { id: "profileSetup", component: ProfileSetupStep, skippable: false },
];

export default individualSteps;
