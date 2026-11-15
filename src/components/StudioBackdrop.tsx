export function StudioBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#080B0F]"
    >
      {/* Subtle architectural grid */}
      <div className="studio-grid absolute inset-0 opacity-60" />

      {/* Upper-left cool slate-teal studio key wash */}
      <div
        className="animate-grade-a absolute -top-[18%] -left-[10%] h-[62vw] w-[62vw] max-h-[820px] max-w-[820px] rounded-full blur-[130px]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(31, 78, 95, 0.34) 0%, rgba(18, 42, 54, 0.14) 48%, transparent 74%)',
        }}
      />

      {/* Lower-right warm amber-gold cinematic rim wash */}
      <div
        className="animate-grade-b absolute -right-[12%] -bottom-[18%] h-[58vw] w-[58vw] max-h-[760px] max-w-[760px] rounded-full blur-[140px]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(229, 169, 60, 0.16) 0%, rgba(164, 108, 28, 0.08) 45%, transparent 72%)',
        }}
      />

      {/* Mid-canvas subtle teal-indigo depth wash */}
      <div
        className="absolute top-[42%] left-[30%] h-[42vw] w-[42vw] max-h-[540px] max-w-[540px] rounded-full blur-[120px]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(24, 52, 68, 0.22) 0%, transparent 70%)',
        }}
      />

      {/* Fine tonal grain + vignette for professional color-graded depth */}
      <div className="film-grain absolute inset-0 opacity-35" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 35%, transparent 45%, rgba(4, 6, 9, 0.72) 100%)',
        }}
      />
    </div>
  );
}
