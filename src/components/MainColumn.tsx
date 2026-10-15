export function MainColumn() {
  return (
    <section className="flex min-w-0 flex-col gap-3 sm:gap-4" aria-label="Main content">
      <div
        className="puffy-border box-border min-h-[4.5rem] w-full bg-banner-bg sm:min-h-[5.5rem]"
        aria-label="Store message update"
      />

      <div className="grid grid-cols-3 gap-2 sm:gap-3" aria-label="Catalogue preview">
        <div className="puffy-border aspect-square w-full bg-banner-bg" />
        <div className="puffy-border aspect-square w-full bg-banner-bg" />
        <div className="puffy-border aspect-square w-full bg-banner-bg" />
      </div>

      <div
        className="puffy-border box-border min-h-9 w-full max-w-[16rem] self-start bg-banner-bg sm:min-h-10"
        aria-label="Browse full catalogue"
      />

      <div
        className="puffy-border box-border min-h-[7rem] w-full flex-1 bg-banner-bg sm:min-h-[8.5rem]"
        aria-label="Why order"
      />
    </section>
  );
}
