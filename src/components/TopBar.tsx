export function TopBar() {
  return (
    <div className="mb-4 flex items-stretch justify-between gap-2 sm:mb-5 sm:gap-3 lg:mb-6">
      <div
        className="puffy-border box-border min-h-10 min-w-[4.5rem] bg-banner-bg px-3 py-2 sm:min-h-12 sm:min-w-[5.5rem]"
        aria-label="Home"
      />
      <div className="flex items-stretch gap-2 sm:gap-3">
        <div
          className="puffy-border box-border min-h-10 min-w-[4.5rem] bg-banner-bg px-3 py-2 sm:min-h-12 sm:min-w-[5.5rem]"
          aria-label="Search"
        />
        <div
          className="puffy-border box-border min-h-10 min-w-[4.5rem] bg-banner-bg px-3 py-2 sm:min-h-12 sm:min-w-[5.5rem]"
          aria-label="Cart"
        />
      </div>
    </div>
  );
}
