export function InfoColumn() {
  return (
    <aside className="flex flex-col gap-3 sm:gap-4" aria-label="Site info">
      <div
        className="puffy-border box-border min-h-[10rem] w-full flex-1 bg-banner-bg sm:min-h-[12rem]"
        aria-label="About"
      />
      <div
        className="puffy-border box-border min-h-[5rem] w-full bg-banner-bg sm:min-h-[6rem]"
        aria-label="Quotes"
      />
      <div
        className="puffy-border box-border min-h-[5rem] w-full bg-banner-bg sm:min-h-[6rem]"
        aria-label="Calendar"
      />
    </aside>
  );
}
