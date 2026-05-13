type BrandLogoProps = {
  inverted?: boolean;
  compact?: boolean;
};

export default function BrandLogo({ inverted = false, compact = false }: BrandLogoProps) {
  const textColor = inverted ? 'text-white' : 'text-brand-black';
  const subColor = inverted ? 'text-white/60' : 'text-brand-dark-gray';

  return (
    <span className="inline-flex items-center gap-3">
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center bg-white">
        <span className="absolute inset-0 border border-brand-red/20" />
        <span className="text-[1.35rem] font-black leading-none text-brand-red">A</span>
        <span className="absolute bottom-2 right-2 h-1.5 w-1.5 bg-brand-red" />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className={`text-[1.05rem] font-black uppercase ${textColor}`}>
            Amira
          </span>
          <span className={`mt-1 text-[0.68rem] font-semibold uppercase ${subColor}`}>
            Gebäudereinigung
          </span>
        </span>
      )}
    </span>
  );
}
