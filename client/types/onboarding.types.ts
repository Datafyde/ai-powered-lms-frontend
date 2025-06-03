type StepProps = {
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
};

type Step = {
  component: React.ComponentType<StepProps>;
  skippable?: boolean;
};

export type OnboardingStepperProps = {
  steps: Step[];
};
