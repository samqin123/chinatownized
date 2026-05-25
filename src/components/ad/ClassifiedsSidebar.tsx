export default function ClassifiedsSidebar() {
  return (
    <div className="space-y-5">
      <div className="classifieds-box">
        <p className="classifieds-title">BOOK A ROOM</p>
        <div className="p-4">
          <p className="text-xs text-ink-muted leading-relaxed mb-3">
            Find hotels across China. Best price guaranteed.
          </p>
          <a
            href="https://www.booking.com/index.html?aid=CHINATOWNIZED"
            target="_blank"
            rel="nofollow sponsored"
            className="block w-full border border-primary bg-transparent px-4 py-2 text-center font-mono text-xs font-semibold tracking-wider text-primary uppercase hover:bg-primary hover:text-white"
          >
            Search Hotels &rarr;
          </a>
          <p className="mt-2 text-[10px] text-ink-faint">
            Affiliate link &middot; we earn from qualifying bookings
          </p>
        </div>
      </div>
      <div className="classifieds-box">
        <p className="classifieds-title">EXPERIENCES</p>
        <div className="p-4">
          <p className="text-xs text-ink-muted leading-relaxed mb-3">
            Book train tickets, hanfu rentals, guided tours on Klook.
          </p>
          <a
            href="https://www.klook.com/?aid=CHINATOWNIZED"
            target="_blank"
            rel="nofollow sponsored"
            className="block w-full border border-accent bg-transparent px-4 py-2 text-center font-mono text-xs font-semibold tracking-wider text-accent uppercase hover:bg-accent hover:text-white"
          >
            Browse Klook &rarr;
          </a>
          <p className="mt-2 text-[10px] text-ink-faint">
            Affiliate link &middot; we earn from qualifying bookings
          </p>
        </div>
      </div>
      <div className="classifieds-box">
        <p className="classifieds-title">ADVERTISEMENT</p>
        <div className="flex h-[250px] items-center justify-center bg-newsprint-deep p-4">
          <p className="font-mono text-[10px] tracking-widest text-ink-faint uppercase">
            Ad Unit &middot; 300x250
          </p>
        </div>
      </div>
      <div className="classifieds-box">
        <p className="classifieds-title">FLIGHTS + TRAINS</p>
        <div className="p-4">
          <a
            href="https://www.trip.com/?allianceid=CHINATOWNIZED"
            target="_blank"
            rel="nofollow sponsored"
            className="block w-full border border-secondary bg-transparent px-4 py-2 text-center font-mono text-xs font-semibold tracking-wider text-secondary uppercase hover:bg-secondary hover:text-white"
          >
            Search Trip.com &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
