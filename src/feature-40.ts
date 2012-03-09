interface FeatureConfiguration {
  id: number;
  name: string;
  isEnabled: boolean;
}

export function getFeatureStatus(config: FeatureConfiguration): string {
  if (config.isEnabled) {
    return `Feature ${config.id} (${config.name}) is currently enabled.`;
  } else {
    return `Feature ${config.id} (${config.name}) is currently disabled.`;
  }
}

export const feature40Config: FeatureConfiguration = {
  id: 40,
  name: "Feature 40: Enhanced Analytics",
  isEnabled: true,
};
