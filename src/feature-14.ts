interface FeatureConfig {
  name: string;
  enabled: boolean;
  version: number;
}

const defaultConfig: FeatureConfig = {
  name: "Feature14",
  enabled: true,
  version: 1.0,
};

export function getFeatureStatus(config: FeatureConfig = defaultConfig): string {
  if (config.enabled) {
    return `${config.name} (v${config.version}) is active.`;
  } else {
    return `${config.name} is disabled.`;
  }
}

// Example usage (optional, could be removed to save lines if needed)
// console.log(getFeatureStatus());
// console.log(getFeatureStatus({ name: "SpecialFeature", enabled: false, version: 1.2 }));
