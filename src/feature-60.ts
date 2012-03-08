export interface FeatureConfig {
  id: number;
  name: string;
  isEnabled: boolean;
}

export function getFeatureStatus(config: FeatureConfig): string {
  if (config.isEnabled) {
    return `Feature ${config.id} (${config.name}) is currently enabled.`;
  }
  return `Feature ${config.id} (${config.name}) is disabled.`;
}

export const FEATURE_60_VERSION = "1.0.0";
