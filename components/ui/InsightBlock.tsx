import { CheckCircle, TrendingUp, AlertCircle } from "lucide-react";

interface InsightBlockProps {
  text: string;
  type?: "success" | "info" | "warning";
}

export function InsightBlock({ text, type = "success" }: InsightBlockProps) {
  const styles = {
    success: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-800",
      icon: CheckCircle,
      iconColor: "text-green-600",
    },
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-800",
      icon: TrendingUp,
      iconColor: "text-blue-600",
    },
    warning: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-800",
      icon: AlertCircle,
      iconColor: "text-amber-600",
    },
  };

  const style = styles[type];
  const Icon = style.icon;

  return (
    <div className={`flex items-start gap-3 p-3 md:p-4 rounded-lg ${style.bg} ${style.border} border`}>
      <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${style.iconColor}`} />
      <p className={`text-sm md:text-base ${style.text}`}>{text}</p>
    </div>
  );
}
