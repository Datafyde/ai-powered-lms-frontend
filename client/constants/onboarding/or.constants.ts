import OrInviteTeamStep from "@/components/onboarding/organization/screens/OrInviteTeamStep";
import OrProfileSetupStep from "@/components/onboarding/organization/screens/OrProfileSetupStep";
import OrWelcomeStep from "@/components/onboarding/organization/screens/OrWelcomeStep";
import SSOSecurityStep from "@/components/onboarding/organization/screens/SSOSecurityStep";

const organizationSteps = [
  { id: "orgWelcome", component: OrWelcomeStep, skippable: false },
  { id: "orgProfileSetup", component: OrProfileSetupStep, skippable: false },
  { id: "orgInviteTeam", component: OrInviteTeamStep, skippable: true },
  { id: "orgSSOSecurity", component: SSOSecurityStep, skippable: true },
];

export default organizationSteps;
