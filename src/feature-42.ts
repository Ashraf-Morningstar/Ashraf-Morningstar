interface FeatureFlags {
  isActive: boolean;
  version: number;
}

export function activateFeature42(config: FeatureFlags): string {
  if (config.isActive && config.version >= 1) {
    return `Feature 42 (v${config.version}) is now active!`;
  }
  return `Feature 42 is not active or not supported.`;
}

// Example usage (optional, for demonstration)
const myConfig: FeatureFlags = { isActive: true, version: 2 };
const status = activateFeature42(myConfig);
console.log(status);
