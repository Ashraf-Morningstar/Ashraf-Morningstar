interface FeatureToggle {
  id: number;
  name: string;
  isEnabled: boolean;
}

function getFeatureStatus(toggle: FeatureToggle): string {
  if (toggle.isEnabled) {
    return `Feature ${toggle.id} (${toggle.name}) is currently ON.`;
  }
  return `Feature ${toggle.id} (${toggle.name}) is currently OFF.`;
}

const feature78: FeatureToggle = {
  id: 78,
  name: "Improved UI Flow",
  isEnabled: true,
};

console.log(getFeatureStatus(feature78));
