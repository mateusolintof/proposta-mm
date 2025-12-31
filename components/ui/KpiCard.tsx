"use client";

import { LucideIcon } from "lucide-react";

interface KpiCardProps {
  value: string;
  label: string;
  sublabel?: string;
  change?: {
    value: string;
    positive: boolean;
  };
  icon?: LucideIcon;
  secondary?: boolean;
}

export function KpiCard({ value, label, sublabel, change, icon: Icon, secondary }: KpiCardProps) {
  return (
    <div className={`rounded-xl p-4 md:p-6 ${secondary ? "bg-gray-50 border border-gray-200" : "bg-white shadow-md border border-amber-100"}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {secondary && (
            <span className="text-xs text-gray-500 uppercase tracking-wider mb-1 block">
              Indicador secundario
            </span>
          )}
          <p className={`text-2xl md:text-3xl font-bold ${secondary ? "text-gray-700" : "text-amber-700"}`}>
            {value}
          </p>
          <p className="text-sm md:text-base text-gray-600 mt-1">{label}</p>
          {sublabel && (
            <p className="text-xs text-gray-500 mt-0.5">{sublabel}</p>
          )}
          {change && (
            <p className={`text-xs md:text-sm mt-2 font-medium ${change.positive ? "text-green-600" : "text-red-600"}`}>
              {change.positive ? "+" : ""}{change.value}
            </p>
          )}
        </div>
        {Icon && (
          <div className={`p-2 rounded-lg ${secondary ? "bg-gray-200" : "bg-amber-100"}`}>
            <Icon className={`w-5 h-5 md:w-6 md:h-6 ${secondary ? "text-gray-600" : "text-amber-700"}`} />
          </div>
        )}
      </div>
    </div>
  );
}
