import CompletedStep from "@/components/onboarding/tenant/screens/CompletedStep";
import InviteTeamStep from "@/components/onboarding/tenant/screens/InviteTeamStep";
import ProfileSetupStep from "@/components/onboarding/tenant/screens/ProfileSetupStep";
import SSOSecurityStep from "@/components/onboarding/tenant/screens/SSOSecurityStep";
import WelcomeStep from "@/components/onboarding/tenant/screens/WelcomeStep";

const tenantOnboardingSteps = [
  { id: "welcome", component: WelcomeStep, skippable: false },
  { id: "profileSetup", component: ProfileSetupStep, skippable: false },
  { id: "inviteTeam", component: InviteTeamStep, skippable: true },
  { id: "SSOSecurity", component: SSOSecurityStep, skippable: false },
  { id: "completed", component: CompletedStep, skippable: false },
];

export default tenantOnboardingSteps;
