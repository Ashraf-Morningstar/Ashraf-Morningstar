export interface FeatureConfig {
  id: number;
  name: string;
  isActive: boolean;
}

export const getFeatureStatus = (config: FeatureConfig): string => {
  if (config.isActive) {
    return `Feature ${config.id}: "${config.name}" is currently enabled.`;
  }
  return `Feature ${config.id}: "${config.name}" is currently disabled.`;
};

const feature62Config: FeatureConfig = {
  id: 62,
  name: "Dynamic Theme Switcher",
  isActive: true,
};

// Example usage:
// console.log(getFeatureStatus(feature62Config));
