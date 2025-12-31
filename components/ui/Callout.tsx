import { Info } from "lucide-react";

interface CalloutProps {
  text: string;
  type?: "info" | "warning";
}

export function Callout({ text, type = "info" }: CalloutProps) {
  const styles = {
    info: "bg-gray-50 border-gray-200 text-gray-600",
    warning: "bg-amber-50 border-amber-200 text-amber-700",
  };

  return (
    <div className={`flex items-start gap-2 p-3 rounded-lg border text-xs md:text-sm ${styles[type]}`}>
      <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
      <p>{text}</p>
    </div>
  );
}
