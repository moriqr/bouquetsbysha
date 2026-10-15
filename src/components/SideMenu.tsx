export function SideMenu() {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <aside
        className="puffy-border relative box-border min-h-40 w-full max-w-full flex-1 bg-banner-bg sm:min-h-[280px] sm:w-[200px] sm:max-w-[200px] lg:min-h-[320px]"
        aria-label="Navigation"
      >
        <nav className="min-h-[120px] sm:min-h-[200px] lg:min-h-[240px]" aria-label="Site navigation" />
      </aside>

      <div
        className="puffy-border box-border min-h-[5.5rem] w-full max-w-full bg-banner-bg sm:w-[200px] sm:max-w-[200px]"
        aria-label="Site links"
      />
    </div>
  );
}
