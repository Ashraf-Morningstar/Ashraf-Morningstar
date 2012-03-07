export interface FeatureConfig {
  id: number;
  name: string;
  isActive: boolean;
}

export function activateFeature(config: FeatureConfig): string {
  if (config.isActive) {
    return `Feature ${config.id} (${config.name}) is already active.`;
  }
  // Simulate activation logic
  console.log(`Activating feature ${config.id}: ${config.name}...`);
  return `Feature ${config.id} (${config.name}) activated successfully.`;
}
