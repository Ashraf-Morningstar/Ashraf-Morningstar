interface FeatureToggle {
  id: number;
  name: string;
  isActive: boolean;
}

const getFeatureStatus = (feature: FeatureToggle): string => {
  if (feature.isActive) {
    return `Feature ${feature.id} (${feature.name}) is currently ON.`;
  }
  return `Feature ${feature.id} (${feature.name}) is currently OFF.`;
};

const feature46: FeatureToggle = {
  id: 46,
  name: "Advanced Analytics Dashboard",
  isActive: true,
};

console.log(getFeatureStatus(feature46));
