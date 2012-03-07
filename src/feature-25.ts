interface Feature25Config {
  id: string;
  name: string;
  isEnabled: boolean;
  version: number;
}

export function getFeature25Config(): Feature25Config {
  // In a real application, this might load from a configuration file or API
  return {
    id: "feature-25",
    name: "Advanced Analytics Dashboard",
    isEnabled: true,
    version: 1.0
  };
}
