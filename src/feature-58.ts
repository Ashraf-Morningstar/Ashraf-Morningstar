interface FeatureToggle {
  id: number;
  name: string;
  isEnabled: boolean;
}

export function initializeFeature(feature: FeatureToggle): string {
  if (feature.isEnabled) {
    return `Feature ${feature.name} (ID: ${feature.id}) is active.`;
  }
  return `Feature ${feature.name} (ID: ${feature.id}) is inactive.`;
}
