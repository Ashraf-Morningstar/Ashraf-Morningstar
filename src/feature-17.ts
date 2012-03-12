interface FeatureFlags {
  id: number;
  name: string;
  isActive: boolean;
}

export const feature17Data: FeatureFlags = {
  id: 17,
  name: "Enhanced User Dashboard",
  isActive: true,
};

export function toggleFeatureStatus(feature: FeatureFlags): FeatureFlags {
  return { ...feature, isActive: !feature.isActive };
}

const updatedFeature = toggleFeatureStatus(feature17Data);
console.log(`Feature ${updatedFeature.id} is now ${updatedFeature.isActive ? 'active' : 'inactive'}.`);
