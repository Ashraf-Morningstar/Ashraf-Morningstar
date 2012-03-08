interface FeatureFlags {
  feature62Enabled: boolean;
  someSetting: string;
}

const defaultFeatureFlags: FeatureFlags = {
  feature62Enabled: false,
  someSetting: "default",
};

export function getFeature62Status(flags: FeatureFlags = defaultFeatureFlags): string {
  if (flags.feature62Enabled) {
    return `Feature 62 is active with setting: ${flags.someSetting}`;
  }
  return "Feature 62 is currently disabled.";
}
