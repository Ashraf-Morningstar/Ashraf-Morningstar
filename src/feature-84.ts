interface FeatureToggle {
  id: number;
  name: string;
  isActive: boolean;
}

export function getFeatureStatus(toggle: FeatureToggle): string {
  if (toggle.isActive) {
    return `Feature '${toggle.name}' (ID: ${toggle.id}) is currently active.`;
  } else {
    return `Feature '${toggle.name}' (ID: ${toggle.id}) is currently inactive.`;
  }
}

// Example usage (optional, for demonstration)
// const feature84: FeatureToggle = { id: 84, name: "Advanced Analytics", isActive: true };
// console.log(getFeatureStatus(feature84));
