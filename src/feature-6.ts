// src/feature-6.ts

/**
 * Represents a simple data structure for Feature 6.
 */
interface FeatureData {
  id: number;
  name: string;
  isEnabled: boolean;
}

export function createFeatureData(id: number, name: string): FeatureData {
  return { id, name, isEnabled: true };
}

export const featureVersion = "6.0.0";
