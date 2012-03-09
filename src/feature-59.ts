export interface FeatureSettings {
  id: number;
  name: string;
  isEnabled: boolean;
}

export class FeatureManager {
  private static readonly FEATURES: Map<number, FeatureSettings> = new Map();

  public static registerFeature(settings: FeatureSettings): void {
    FeatureManager.FEATURES.set(settings.id, settings);
  }

  public static isFeatureEnabled(featureId: number): boolean {
    const feature = FeatureManager.FEATURES.get(featureId);
    return feature ? feature.isEnabled : false;
  }

  // Example for feature 59, assuming this file is related
  public static initFeature59(): void {
    FeatureManager.registerFeature({
      id: 59,
      name: "User Profile Revamp",
      isEnabled: true, // This would typically come from a config
    });
  }
}
