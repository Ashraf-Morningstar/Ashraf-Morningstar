interface FeatureFlags {
  isActive: boolean;
  name: string;
}

export function getFeatureStatus(flags: FeatureFlags): string {
  if (flags.isActive) {
    return `Feature "${flags.name}" is currently active.`;
  } else {
    return `Feature "${flags.name}" is inactive.`;
  }
}

export const feature1Config: FeatureFlags = {
  isActive: true,
  name: "User Profile V2",
};

// Example usage (optional, can be removed to shorten further)
// console.log(getFeatureStatus(feature1Config));
