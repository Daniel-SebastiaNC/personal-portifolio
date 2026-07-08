interface BadgeProps {
  label: string;
  color?: "default" | "blue" | "green" | "purple" | "orange" | "red";
}

const colorMap = {
  default: "bg-surface text-muted border border-border",
  blue: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  green: "bg-green-500/10 text-green-400 border border-green-500/20",
  purple: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
  orange: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
  red: "bg-red-500/10 text-red-400 border border-red-500/20",
};

export function Badge({ label, color = "default" }: BadgeProps) {
  return (
    <span className={`inline-block text-xs font-mono px-2.5 py-1 rounded-md ${colorMap[color]}`}>
      {label}
    </span>
  );
}
