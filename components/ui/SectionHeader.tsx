interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered }: SectionHeaderProps) {
  return (
    <div className={`mb-6 md:mb-8 ${centered ? "text-center" : ""}`}>
      <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
      {subtitle && (
        <p className="text-sm md:text-base text-gray-600 mt-1">{subtitle}</p>
      )}
    </div>
  );
}
