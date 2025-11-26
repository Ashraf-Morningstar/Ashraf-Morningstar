interface Feature39Props {
  id: number;
  name: string;
  isActive: boolean;
}

const feature39Config: Feature39Props = {
  id: 39,
  name: "New Dashboard Widget",
  isActive: true,
};

export function isFeature39Active(): boolean {
  return feature39Config.isActive;
}

export default feature39Config;
