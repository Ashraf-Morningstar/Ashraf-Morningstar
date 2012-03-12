interface FeatureStatus {
  id: number;
  name: string;
  isEnabled: boolean;
}

function getFeatureMessage(status: FeatureStatus): string {
  if (status.isEnabled) {
    return `Feature ${status.id} ("${status.name}") is active.`;
  }
  return `Feature ${status.id} ("${status.name}") is currently disabled.`;
}

const feature55Status: FeatureStatus = {
  id: 55,
  name: "Experimental UI Toggle",
  isEnabled: true,
};

export { getFeatureMessage, feature55Status, FeatureStatus };
