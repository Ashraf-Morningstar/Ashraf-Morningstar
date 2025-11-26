interface FeatureSettings {
  id: string;
  isEnabled: boolean;
  variant?: string;
}

export function initializeFeature(settings: FeatureSettings): string {
  if (settings.isEnabled) {
    const variantInfo = settings.variant ? ` (variant: ${settings.variant})` : '';
    console.log(`Feature "${settings.id}" is active${variantInfo}.`);
    return `Active: ${settings.id}`;
  } else {
    console.log(`Feature "${settings.id}" is disabled.`);
    return `Disabled: ${settings.id}`;
  }
}
