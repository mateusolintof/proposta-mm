interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function ChartCard({ title, subtitle, children }: ChartCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4 md:p-6">
      <div className="mb-4">
        <h3 className="text-base md:text-lg font-semibold text-gray-900">{title}</h3>
        {subtitle && (
          <p className="text-xs md:text-sm text-gray-500 mt-0.5">{subtitle}</p>
        )}
      </div>
      <div className="w-full overflow-x-auto">
        {children}
      </div>
    </div>
  );
}
