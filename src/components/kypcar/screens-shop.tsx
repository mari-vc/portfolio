"use client";

// Main shopping flow — ported from screens-shop.jsx: Home, Filters, Car Detail,
// Date Picker, Checkout, Success.
import { useCallback, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { C, FONT } from "./tokens";
import { CTA, I, Logo, Pill, SectionTitle, Sheet, Stars } from "./ui";
import { CARS, REVIEWS, pad } from "./data";
import type { Car, DatePoint } from "./data";

export type TripDates = { start: DatePoint; end: DatePoint; days: number };

function CarImg({ car, style }: { car: Car; style: CSSProperties }) {
  const [src, setSrc] = useState(car.img);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={car.name}
      onError={() => car.imgFallback && src !== car.imgFallback && setSrc(car.imgFallback)}
      style={style}
    />
  );
}

// ─────────────────────────────────────────────────────────────
// HOME / ENCONTRAR
// ─────────────────────────────────────────────────────────────
export function HomeScreen({
  onOpenCar,
  onOpenFilters,
  onAddTrip,
  favorites,
  toggleFavorite,
  hasActiveTrip,
}: {
  onOpenCar: (id: string) => void;
  onOpenFilters: () => void;
  onAddTrip: () => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  hasActiveTrip: boolean;
}) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [search, setSearch] = useState("");
  const [scrollTop, setScrollTop] = useState(0);
  const ticking = useRef(false);
  const onScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const st = e.currentTarget.scrollTop;
    if (!ticking.current) {
      ticking.current = true;
      requestAnimationFrame(() => {
        setScrollTop(st);
        ticking.current = false;
      });
    }
  }, []);

  const p = Math.min(1, scrollTop / 56);
  const smooth = (t: number) => t * t * (3 - 2 * t);
  const e = smooth(p);
  const heroOut = smooth(Math.min(1, p / 0.55));
  const inlineIn = smooth(Math.max(0, (p - 0.35) / 0.65));

  const recommended = CARS.slice(0, 4);
  const nearby = CARS.slice(2, 6);
  const top = CARS.slice(4, 8);

  return (
    <div onScroll={onScroll} style={{ width: "100%", height: "100%", background: C.bg, color: C.text, overflowY: "auto", overflowX: "hidden", paddingBottom: 110 }}>
      <div style={{ position: "sticky", top: 0, zIndex: 30, background: C.bg, boxShadow: `0 6px 20px -12px rgba(0,0,0,${0.9 * e})`, borderBottom: `1px solid rgba(255,255,255,${0.06 * e})` }}>
        <div style={{ paddingTop: 56 }} />
        <div style={{ height: 44 * (1 - e), opacity: 1 - heroOut, overflow: "hidden", padding: "0 20px", display: "flex", alignItems: "center", transform: `translateY(${-8 * heroOut}px)`, transformOrigin: "left center" }}>
          <div style={{ paddingTop: 8, paddingBottom: 12, transform: `scale(${1 - 0.1 * heroOut})`, transformOrigin: "left center" }}>
            <Logo size={26} withWord={false} />
          </div>
        </div>
        <div style={{ padding: "4px 20px 16px", display: "flex", alignItems: "center", gap: 12 * e }}>
          <div style={{ width: 38 * e, opacity: inlineIn, overflow: "hidden", flexShrink: 0, display: "flex", alignItems: "center", transform: `translateX(${-10 * (1 - inlineIn)}px)` }}>
            <Logo size={26} withWord={false} />
          </div>
          <div style={{ flex: 1, minWidth: 0, background: C.surface, borderRadius: 28, height: 44, display: "flex", alignItems: "center", gap: 10, padding: "0 6px 0 18px", border: `1px solid ${searchFocused ? C.border2 : "transparent"}`, transition: "border 0.15s ease" }}>
            <I name="search" size={16} color={C.textDim} />
            <input
              value={search}
              onChange={(ev) => setSearch(ev.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              placeholder="Search by car or address"
              style={{ flex: 1, minWidth: 0, background: "transparent", border: "none", outline: "none", fontFamily: FONT, fontSize: 15, color: C.text }}
            />
            {search && (
              <button onClick={() => setSearch("")} style={{ background: "none", border: "none", color: C.textDim, cursor: "pointer", padding: 0 }}>
                <I name="close" size={14} />
              </button>
            )}
            <button onClick={onOpenFilters} aria-label="Filters" style={{ width: 34, height: 34, borderRadius: 99, background: C.bg, border: "none", color: C.text, cursor: "pointer", flexShrink: 0, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              <I name="sliders" size={14} />
            </button>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 20px 16px" }}>
        {hasActiveTrip ? (
          <button
            onClick={onAddTrip}
            style={{ width: "100%", background: C.lime, color: C.bg, borderRadius: 16, padding: "14px 18px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, textAlign: "left", boxShadow: "0 8px 30px rgba(194,236,19,0.18)" }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: FONT, fontSize: 15, fontWeight: 700 }}>Start your trip!</div>
              <div style={{ fontFamily: FONT, fontSize: 12, opacity: 0.75, marginTop: 2 }}>Your booking is active and your car is waiting for you.</div>
            </div>
            <I name="arrowR" size={18} />
          </button>
        ) : (
          <CTA kind="lime" full onClick={onAddTrip}>
            <I name="plus" size={18} /> Add trip
          </CTA>
        )}
      </div>

      <div style={{ marginTop: 10, marginBottom: 28 }}>
        <SectionTitle action="See all">Recommended for you</SectionTitle>
        <div style={{ display: "flex", gap: 14, padding: "0 20px", overflowX: "auto", scrollSnapType: "x mandatory", scrollPaddingLeft: 20, scrollbarWidth: "none" }}>
          {recommended.map((car) => (
            <CarCardLarge key={car.id} car={car} onClick={() => onOpenCar(car.id)} favorited={favorites.includes(car.id)} onToggleFav={() => toggleFavorite(car.id)} />
          ))}
        </div>
      </div>

      <div style={{ padding: "0 20px 28px" }}>
        <button
          style={{ width: "100%", background: C.purpleSoft, color: C.text, borderRadius: 18, padding: "16px 18px", border: "1px solid rgba(151,71,255,0.3)", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, textAlign: "left", backdropFilter: "blur(8px)" }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT, fontSize: 14, fontWeight: 600, marginBottom: 2 }}>Share your car with people nearby.</div>
            <div style={{ fontFamily: FONT, fontSize: 12, color: C.textDim, lineHeight: 1.4 }}>Earn while it would otherwise sit parked.</div>
          </div>
          <div style={{ width: 36, height: 36, borderRadius: 99, background: C.purple, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <I name="arrowR" size={16} />
          </div>
        </button>
      </div>

      <div style={{ marginBottom: 28 }}>
        <SectionTitle action="See all">Closest vehicles</SectionTitle>
        <div style={{ display: "flex", gap: 14, padding: "0 20px", overflowX: "auto", scrollbarWidth: "none" }}>
          {nearby.map((car) => (
            <CarCardSmall key={car.id} car={car} onClick={() => onOpenCar(car.id)} />
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <SectionTitle action="See all">Top rated</SectionTitle>
        <div style={{ display: "flex", gap: 14, padding: "0 20px", overflowX: "auto", scrollbarWidth: "none" }}>
          {top.map((car) => (
            <CarCardSmall key={car.id} car={car} onClick={() => onOpenCar(car.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CarCardLarge({ car, onClick, favorited, onToggleFav }: { car: Car; onClick: () => void; favorited: boolean; onToggleFav: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{ width: 260, flexShrink: 0, scrollSnapAlign: "start", borderRadius: 18, overflow: "hidden", cursor: "pointer", background: C.surface, border: `1px solid ${C.border}`, transition: "transform 0.15s ease" }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <div style={{ position: "relative", height: 170, background: C.surface2 }}>
        <CarImg car={car} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.5))" }} />
        {car.host.super && (
          <div style={{ position: "absolute", top: 12, left: 12, display: "flex", alignItems: "center", gap: 4, background: C.lime, color: C.bg, padding: "3px 9px", borderRadius: 99, fontFamily: FONT, fontSize: 10, fontWeight: 700 }}>
            <span style={{ fontSize: 11 }}>✦</span> Super host
          </div>
        )}
        <button
          onClick={(ev) => {
            ev.stopPropagation();
            onToggleFav();
          }}
          style={{ position: "absolute", top: 10, right: 10, width: 32, height: 32, borderRadius: 99, background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)", border: "none", color: favorited ? C.red : "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <I name="heart" size={16} fill={favorited ? "current" : "none"} />
        </button>
      </div>
      <div style={{ padding: "12px 14px 14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, color: C.textDim, fontSize: 12 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
            <I name="starFill" size={11} color={C.lime} /> <b style={{ color: C.text, fontWeight: 600 }}>{car.rating}</b>
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
            <I name="mapPin" size={11} /> {car.distance}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
            <I name="settings" size={11} /> {car.transmission}
          </span>
        </div>
        <div style={{ fontFamily: FONT, fontSize: 15, fontWeight: 600, color: C.text, marginBottom: 2 }}>{car.name}</div>
        <div style={{ fontFamily: FONT, fontSize: 13, color: C.textDim }}>
          <b style={{ color: C.text }}>R${car.price}</b> /day
        </div>
      </div>
    </div>
  );
}

function CarCardSmall({ car, onClick }: { car: Car; onClick: () => void }) {
  return (
    <div onClick={onClick} style={{ width: 150, flexShrink: 0, cursor: "pointer" }}>
      <div style={{ height: 100, borderRadius: 14, overflow: "hidden", background: C.surface2, marginBottom: 8, position: "relative" }}>
        <CarImg car={car} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600, color: C.text, lineHeight: 1.2 }}>{car.name}</div>
      <div style={{ fontFamily: FONT, fontSize: 12, color: C.textDim, marginTop: 2 }}>R${car.price} /day</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// FILTERS SHEET
// ─────────────────────────────────────────────────────────────
export function FiltersSheet({ open, onClose, onApply }: { open: boolean; onClose: () => void; onApply: () => void }) {
  const [minP, setMinP] = useState(100);
  const [maxP, setMaxP] = useState(800);
  const [type, setType] = useState(["Sedan", "SUV"]);
  const [fuel, setFuel] = useState(["Gasoline"]);
  const [trans, setTrans] = useState("Any");

  const toggle = (arr: string[], set: (v: string[]) => void, v: string) => (arr.includes(v) ? set(arr.filter((x) => x !== v)) : set([...arr, v]));

  return (
    <Sheet open={open} onClose={onClose} title="Filters" fullHeight>
      <div style={{ padding: "18px 20px" }}>
        <FilterGroup title="Price per day">
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <PriceField label="Minimum" value={minP} onChange={setMinP} />
            <PriceField label="Maximum" value={maxP} onChange={setMaxP} />
          </div>
          <div style={{ marginTop: 14, height: 4, background: "rgba(238,238,239,0.1)", borderRadius: 99, position: "relative" }}>
            <div style={{ position: "absolute", left: `${minP / 10}%`, right: `${100 - maxP / 10}%`, top: 0, bottom: 0, background: C.purple, borderRadius: 99 }} />
            <div style={{ position: "absolute", left: `${minP / 10}%`, top: -6, transform: "translateX(-50%)", width: 16, height: 16, borderRadius: 99, background: C.text, border: `3px solid ${C.purple}` }} />
            <div style={{ position: "absolute", left: `${maxP / 10}%`, top: -6, transform: "translateX(-50%)", width: 16, height: 16, borderRadius: 99, background: C.text, border: `3px solid ${C.purple}` }} />
          </div>
        </FilterGroup>

        <FilterGroup title="Vehicle type">
          <ChipGrid options={["Sedan", "SUV", "Hatch", "Pickup", "Sports", "Electric"]} selected={type} onToggle={(v) => toggle(type, setType, v)} />
        </FilterGroup>

        <FilterGroup title="Fuel">
          <ChipGrid options={["Gasoline", "Ethanol", "Flex", "Diesel", "Electric", "Hybrid"]} selected={fuel} onToggle={(v) => toggle(fuel, setFuel, v)} />
        </FilterGroup>

        <FilterGroup title="Transmission">
          <div style={{ display: "flex", gap: 8 }}>
            {["Any", "Manual", "Automatic"].map((o) => (
              <Pill key={o} active={trans === o} onClick={() => setTrans(o)}>
                {o}
              </Pill>
            ))}
          </div>
        </FilterGroup>

        <FilterGroup title="Amenities">
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              { icon: "snow", label: "Air conditioning" },
              { icon: "bluetooth", label: "Bluetooth / Apple CarPlay" },
              { icon: "camera", label: "Backup camera" },
              { icon: "shield", label: "Keyless entry" },
              { icon: "bolt", label: "Fast charging (EV)" },
            ].map((a, i) => (
              <FeatureToggle key={i} icon={a.icon} label={a.label} defaultOn={i < 2} />
            ))}
          </div>
        </FilterGroup>
      </div>

      <div style={{ position: "sticky", bottom: 0, padding: "14px 20px 18px", background: `linear-gradient(to top, ${C.bg} 50%, rgba(8,8,9,0))`, display: "flex", gap: 10 }}>
        <button
          onClick={() => {
            setMinP(100);
            setMaxP(800);
            setType([]);
            setFuel([]);
            setTrans("Any");
          }}
          style={{ flex: 1, padding: "14px", borderRadius: 14, background: "transparent", border: `1px solid ${C.border2}`, color: C.text, cursor: "pointer", fontFamily: FONT, fontSize: 14, fontWeight: 600 }}
        >
          Clear all
        </button>
        <CTA kind="lime" onClick={onApply} style={{ flex: 1.4 }}>
          Apply filters
        </CTA>
      </div>
    </Sheet>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontFamily: FONT, fontSize: 14, fontWeight: 600, color: C.text, marginBottom: 12 }}>{title}</div>
      {children}
    </div>
  );
}

function PriceField({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div style={{ flex: 1, padding: "10px 14px", borderRadius: 12, background: "rgba(238,238,239,0.04)", border: `1px solid ${C.border}` }}>
      <div style={{ fontFamily: FONT, fontSize: 11, color: C.textDim, marginBottom: 2 }}>{label}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
        <span style={{ color: C.textDim, fontSize: 14 }}>R$</span>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(+e.target.value)}
          style={{ background: "none", border: "none", outline: "none", color: C.text, fontFamily: FONT, fontSize: 16, fontWeight: 600, width: "100%" }}
        />
      </div>
    </div>
  );
}

function ChipGrid({ options, selected, onToggle }: { options: string[]; selected: string[]; onToggle: (v: string) => void }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {options.map((o) => (
        <Pill key={o} active={selected.includes(o)} onClick={() => onToggle(o)}>
          {o}
        </Pill>
      ))}
    </div>
  );
}

function FeatureToggle({ icon, label, defaultOn = false }: { icon: string; label: string; defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div onClick={() => setOn(!on)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: `1px solid ${C.border}`, cursor: "pointer" }}>
      <I name={icon} size={18} color={C.text} />
      <span style={{ flex: 1, fontFamily: FONT, fontSize: 14, color: C.text }}>{label}</span>
      <div style={{ width: 42, height: 24, borderRadius: 99, background: on ? C.lime : "rgba(238,238,239,0.18)", position: "relative", transition: "background 0.2s ease" }}>
        <div style={{ position: "absolute", top: 2, left: on ? 20 : 2, width: 20, height: 20, borderRadius: 99, background: "#fff", transition: "left 0.2s ease", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }} />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// CAR DETAIL
// ─────────────────────────────────────────────────────────────
const featIcons: Record<string, string> = {
  "Air conditioning": "snow",
  "Keyless entry": "key",
  "Android Auto": "bluetooth",
  "Apple CarPlay": "apple",
  Bluetooth: "bluetooth",
  "Backup camera": "camera",
  Gasoline: "gas",
  "100% electric": "bolt",
  "Fast charging": "bolt",
  "4x4 drive": "settings",
  "Sport seats": "seat",
  Sunroof: "snow",
  "Leather seats": "seat",
  "360° camera": "camera",
  "Digital climate control": "snow",
  "Lined cargo bed": "settings",
  "Tow hitch": "settings",
  "Panoramic roof": "snow",
  MBUX: "bluetooth",
  "Sport tuned": "bolt",
  "Race mode": "bolt",
  "Cargo bed": "settings",
  "2 seats with leather upholstery": "seat",
  Electric: "bolt",
  Diesel: "gas",
  "Flex fuel": "gas",
};

const fabBtn: CSSProperties = {
  width: 38, height: 38, borderRadius: 99, border: "none",
  background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)",
  color: "#fff", cursor: "pointer",
  display: "flex", alignItems: "center", justifyContent: "center",
};

export function CarDetailScreen({
  carId,
  onBack,
  onReserve,
  favorites,
  toggleFavorite,
  onOpenChat,
}: {
  carId: string;
  onBack: () => void;
  onReserve: (car: Car, dates: TripDates) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  onOpenChat: () => void;
}) {
  const car = CARS.find((c) => c.id === carId) || CARS[0];
  const [dateOpen, setDateOpen] = useState(false);
  const [dates, setDates] = useState<TripDates | null>(null);
  const [shareOpen, setShareOpen] = useState(false);
  const [photoIdx, setPhotoIdx] = useState(0);
  const [allReviewsOpen, setAllReviewsOpen] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);
  const fav = favorites.includes(carId);

  const total = (dates ? dates.days : 1) * car.price;
  const fee = Math.round(total * 0.02);

  return (
    <div style={{ width: "100%", height: "100%", background: C.bg, color: C.text, overflowY: "auto", paddingBottom: 110, position: "relative" }}>
      <div style={{ position: "relative", height: 360, background: C.surface2 }}>
        <CarImg car={car} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,8,9,0.55) 0%, transparent 30%, transparent 70%, rgba(8,8,9,0.85))" }} />
        <div style={{ position: "absolute", top: 56, left: 0, right: 0, padding: "0 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button onClick={onBack} style={fabBtn}>
            <I name="back" size={18} />
          </button>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setShareOpen(true)} style={fabBtn}>
              <I name="share" size={16} />
            </button>
            <button onClick={() => toggleFavorite(carId)} style={{ ...fabBtn, color: fav ? C.red : C.text }}>
              <I name="heart" size={16} fill={fav ? "current" : "none"} />
            </button>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 16, right: 16, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)", padding: "4px 10px", borderRadius: 99, fontFamily: FONT, fontSize: 12, fontWeight: 500 }}>
          <I name="camera" size={11} style={{ verticalAlign: "-2px", marginRight: 4 }} />
          {photoIdx + 1}/6
        </div>
        <div style={{ position: "absolute", bottom: 16, left: 16, display: "flex", gap: 4 }}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} onClick={() => setPhotoIdx(i)} style={{ width: i === photoIdx ? 18 : 5, height: 5, borderRadius: 99, background: i === photoIdx ? "#fff" : "rgba(255,255,255,0.4)", transition: "all 0.2s ease", cursor: "pointer" }} />
          ))}
        </div>
      </div>

      <div style={{ padding: "20px 20px 0" }}>
        <h1 style={{ margin: 0, fontFamily: FONT, fontSize: 24, fontWeight: 600, letterSpacing: -0.3 }}>
          {car.name} {car.year} <span style={{ color: C.textDim, fontWeight: 500, fontSize: 18 }}>·</span> <I name="settings" size={14} color={C.textDim} style={{ verticalAlign: "-2px" }} />
        </h1>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 8, color: C.textDim, fontSize: 13 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            <I name="starFill" size={12} color={C.lime} /> <b style={{ color: C.text, fontWeight: 600 }}>{car.rating}</b>
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            <I name="mapPin" size={12} /> {car.distance}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            <I name="settings" size={12} /> {car.transmission}
          </span>
        </div>
        <button onClick={() => setDateOpen(true)} style={{ background: "none", border: "none", padding: 0, color: C.purpleLight, cursor: "pointer", fontFamily: FONT, fontSize: 13, fontWeight: 600, marginTop: 12, display: "inline-flex", alignItems: "center", gap: 4 }}>
          <I name="plus" size={14} /> Add to trips
        </button>
      </div>

      <div style={{ padding: "20px" }}>
        <div style={{ background: C.surface, borderRadius: 16, padding: 16, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={onOpenChat}>
          <img src={car.host.avatar} alt="" style={{ width: 48, height: 48, borderRadius: 999, objectFit: "cover", flexShrink: 0, border: car.host.super ? `2px solid ${C.lime}` : "none" }} />
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
              <span style={{ fontFamily: FONT, fontSize: 15, fontWeight: 600 }}>{car.host.name}</span>
              {car.host.super && <span style={{ background: C.lime, color: C.bg, padding: "2px 8px", borderRadius: 99, fontFamily: FONT, fontSize: 10, fontWeight: 700 }}>✦ Super host</span>}
            </div>
            <div style={{ fontFamily: FONT, fontSize: 12, color: C.textDim }}>
              Host since {car.host.since} · {car.host.trips} trips
            </div>
          </div>
          <I name="forward" size={16} color={C.textDim} />
        </div>
      </div>

      <div style={{ padding: "0 20px" }}>
        <DetailRow icon="cal" label="Trip dates" value={dates ? `${dates.start.d}/${pad(dates.start.m + 1)} — ${dates.end.d}/${pad(dates.end.m + 1)}` : "Set"} onClick={() => setDateOpen(true)} />
        <DetailRow icon="mapPin" label="Pickup & return" value="Pinheiros, São Paulo — SP" sub="Delivery available for an extra fee" />
        <DetailRow icon="shield" label="Cancellation policy" value="Free cancellation" onClick={() => setPolicyOpen(true)} />
      </div>

      <div style={{ padding: "26px 20px 10px" }}>
        <h3 style={{ margin: "0 0 14px", fontFamily: FONT, fontSize: 17, fontWeight: 600 }}>More details</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {[...car.features, car.fuel].map((f, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < car.features.length ? `1px solid ${C.border}` : "none" }}>
              <I name={featIcons[f] || "check"} size={16} color={C.textDim} />
              <span style={{ fontFamily: FONT, fontSize: 14, color: C.text }}>{f}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        <div style={{ background: C.surface, borderRadius: 16, padding: 18, border: `1px solid ${C.border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <I name="starFill" size={16} color={C.lime} />
            <span style={{ fontFamily: FONT, fontSize: 18, fontWeight: 600 }}>{car.rating}</span>
            <span style={{ fontFamily: FONT, fontSize: 13, color: C.textDim }}>of 73 ratings</span>
            <span style={{ marginLeft: "auto", fontFamily: FONT, fontSize: 12, color: C.textDim }}>25 reviews</span>
          </div>
          <ReviewItem r={REVIEWS[0]} />
          <button onClick={() => setAllReviewsOpen(true)} style={{ width: "100%", marginTop: 14, padding: 12, borderRadius: 12, background: "rgba(238,238,239,0.04)", border: `1px solid ${C.border}`, color: C.text, cursor: "pointer", fontFamily: FONT, fontSize: 13, fontWeight: 600 }}>
            See all reviews
          </button>
        </div>
      </div>

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, background: `linear-gradient(to top, ${C.bg} 65%, rgba(8,8,9,0))`, padding: "20px 20px 28px", display: "flex", alignItems: "center", gap: 12, zIndex: 30 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: FONT, fontSize: 20, fontWeight: 700, color: C.text }}>R${(total + fee).toFixed(2).replace(".", ",")}</div>
          <div style={{ fontFamily: FONT, fontSize: 12, color: C.textDim }}>
            R${car.price} /day · {dates ? `${dates.days} days` : "pick dates"}
          </div>
        </div>
        <CTA kind="lime" onClick={() => (dates ? onReserve(car, dates) : setDateOpen(true))}>{dates ? "Book now" : "Pick dates"}</CTA>
      </div>

      <DatePickerSheet
        open={dateOpen}
        onClose={() => setDateOpen(false)}
        onSave={(d) => {
          setDates(d);
          setDateOpen(false);
        }}
        price={car.price}
      />
      <ShareSheet open={shareOpen} onClose={() => setShareOpen(false)} car={car} />

      <Sheet open={allReviewsOpen} onClose={() => setAllReviewsOpen(false)} title="All reviews" fullHeight>
        <div style={{ padding: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <I name="starFill" size={14} color={C.lime} />
            <b style={{ fontFamily: FONT, fontSize: 16 }}>{car.rating}</b>
            <span style={{ color: C.textDim, fontSize: 13, fontFamily: FONT }}>of 73 ratings</span>
            <span style={{ marginLeft: "auto", color: C.textDim, fontSize: 12, fontFamily: FONT }}>25 reviews</span>
          </div>
          {REVIEWS.map((r) => (
            <ReviewItem key={r.id} r={r} divider />
          ))}
        </div>
      </Sheet>

      <Sheet open={policyOpen} onClose={() => setPolicyOpen(false)} title="Cancellation policy">
        <div style={{ padding: "20px", fontFamily: FONT, color: C.textDim, lineHeight: 1.55, fontSize: 14 }}>
          <h3 style={{ color: C.text, fontSize: 17, fontWeight: 600, margin: "0 0 10px" }}>Cancellation policy for your booking</h3>
          <p>From November 1, 2025, all bookings on Kypcar will follow one of our standard cancellation policies.</p>
          <h4 style={{ color: C.text, fontSize: 15, fontWeight: 600, margin: "20px 0 8px" }}>Free cancellation</h4>
          <p>Drivers can cancel for free within 24 hours of confirmation, provided pickup is scheduled at least 72 hours after the booking time.</p>
          <h4 style={{ color: C.text, fontSize: 15, fontWeight: 600, margin: "20px 0 8px" }}>Partial cancellation</h4>
          <p>For cancellations up to 48 hours before the booking start, 30% of the total rental will be charged and the rest refunded.</p>
        </div>
      </Sheet>
    </div>
  );
}

function DetailRow({ icon, label, value, sub, onClick }: { icon: string; label: string; value: string; sub?: string; onClick?: () => void }) {
  return (
    <div onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 0", borderBottom: `1px solid ${C.border}`, cursor: onClick ? "pointer" : "default" }}>
      <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(238,238,239,0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: C.text }}>
        <I name={icon} size={16} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: FONT, fontSize: 14, fontWeight: 600, color: C.text, marginBottom: 2 }}>{label}</div>
        <div style={{ fontFamily: FONT, fontSize: 12, color: C.textDim }}>{value}</div>
        {sub && <div style={{ fontFamily: FONT, fontSize: 11, color: C.textMute, marginTop: 2 }}>{sub}</div>}
      </div>
      {onClick && <I name="forward" size={14} color={C.textDim} />}
    </div>
  );
}

function ReviewItem({ r, divider }: { r: (typeof REVIEWS)[number]; divider?: boolean }) {
  return (
    <div style={{ padding: divider ? "16px 0" : 0, borderBottom: divider ? `1px solid ${C.border}` : "none" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <img src={r.avatar} alt="" style={{ width: 36, height: 36, borderRadius: 999, objectFit: "cover", flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: FONT, fontSize: 14, fontWeight: 600 }}>{r.name}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
            <Stars value={r.rating} size={10} />
            <span style={{ fontFamily: FONT, fontSize: 11, color: C.textDim }}>{r.when}</span>
          </div>
        </div>
      </div>
      <p style={{ margin: 0, fontFamily: FONT, fontSize: 13, color: C.textDim, lineHeight: 1.5 }}>{r.text}</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// DATE PICKER SHEET
// ─────────────────────────────────────────────────────────────
function DatePickerSheet({ open, onClose, onSave, price }: { open: boolean; onClose: () => void; onSave: (d: TripDates) => void; price: number }) {
  const [start, setStart] = useState<DatePoint | null>(null);
  const [end, setEnd] = useState<DatePoint | null>(null);

  const months = [
    { name: "October 2025", m: 9, y: 2025, days: 31, firstDay: 3 },
    { name: "November 2025", m: 10, y: 2025, days: 30, firstDay: 6 },
    { name: "December 2025", m: 11, y: 2025, days: 31, firstDay: 1 },
  ];

  const dayN = (m: number, d: number) => m * 100 + d;

  const isInRange = (m: number, d: number) => {
    if (!start) return false;
    if (!end) return start.m === m && start.d === d;
    const n = dayN(m, d),
      s = dayN(start.m, start.d),
      en = dayN(end.m, end.d);
    return n >= s && n <= en;
  };

  const onPick = (m: number, d: number) => {
    if (!start || (start && end)) {
      setStart({ m, d, y: 2025 });
      setEnd(null);
    } else if (dayN(m, d) < dayN(start.m, start.d)) {
      setStart({ m, d, y: 2025 });
      setEnd(null);
    } else {
      setEnd({ m, d, y: 2025 });
    }
  };

  const clear = () => {
    setStart(null);
    setEnd(null);
  };

  const days = start && end ? dayN(end.m, end.d) - dayN(start.m, start.d) + 1 : 1;

  return (
    <Sheet open={open} onClose={onClose} title="Trip dates" fullHeight>
      <div style={{ padding: "0 20px 20px" }}>
        {months.map((mo, idx) => (
          <div key={idx} style={{ marginBottom: 30 }}>
            <h3 style={{ margin: "8px 0 14px", fontFamily: FONT, fontSize: 14, fontWeight: 600, color: C.text }}>{mo.name}</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6, marginBottom: 6 }}>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d} style={{ textAlign: "center", fontFamily: FONT, fontSize: 10, color: C.textMute, fontWeight: 500 }}>
                  {d}
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6 }}>
              {Array.from({ length: mo.firstDay }).map((_, i) => (
                <div key={"sp" + i} />
              ))}
              {Array.from({ length: mo.days }).map((_, i) => {
                const d = i + 1;
                const sel = isInRange(mo.m, d);
                const isStart = start && start.m === mo.m && start.d === d;
                const isEnd = end && end.m === mo.m && end.d === d;
                const isExt = isStart || isEnd;
                return (
                  <button
                    key={d}
                    onClick={() => onPick(mo.m, d)}
                    style={{
                      aspectRatio: "1", padding: 0, border: "none", cursor: "pointer",
                      borderRadius: isExt ? 10 : sel ? 0 : 10,
                      background: isExt ? C.purple : sel ? C.purpleSoft : "transparent",
                      color: C.text, position: "relative",
                      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 0,
                      fontFamily: FONT,
                    }}
                  >
                    <span style={{ fontSize: 13, fontWeight: isExt ? 700 : 500 }}>{d}</span>
                    <span style={{ fontSize: 8, color: isExt ? "rgba(255,255,255,0.8)" : C.textMute }}>R${price}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div style={{ position: "sticky", bottom: 0, padding: "12px 20px 18px", background: `linear-gradient(to top, ${C.bg} 50%, rgba(8,8,9,0))`, display: "flex", gap: 10, alignItems: "center" }}>
        <button onClick={clear} style={{ flex: 1, padding: "14px", borderRadius: 14, background: "transparent", border: `1px solid ${C.border2}`, color: C.text, cursor: "pointer", fontFamily: FONT, fontSize: 14, fontWeight: 600 }}>
          Clear selection
        </button>
        <CTA kind="lime" onClick={() => start && end && onSave({ start, end, days })} style={{ flex: 1, opacity: start && end ? 1 : 0.5 }}>
          Save {start && end ? `(R$${days * price})` : ""}
        </CTA>
      </div>
    </Sheet>
  );
}

// ─────────────────────────────────────────────────────────────
// SHARE SHEET
// ─────────────────────────────────────────────────────────────
function ShareSheet({ open, onClose, car }: { open: boolean; onClose: () => void; car: Car }) {
  const apps = [
    { name: "AirDrop", color: "#3478F6", icon: "📡" },
    { name: "Messages", color: "#3CD17B", icon: "💬" },
    { name: "Mail", color: "#3478F6", icon: "✉️" },
    { name: "Notes", color: "#FFC927", icon: "📝" },
    { name: "WhatsApp", color: "#25D366", icon: "💚" },
  ];
  const actions = ["Copy", "Add to favorites", "Add to list", "Find on page"];
  return (
    <Sheet open={open} onClose={onClose}>
      <div style={{ padding: 20 }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", padding: 14, background: C.surface, borderRadius: 14, marginBottom: 18 }}>
          <CarImg car={car} style={{ width: 56, height: 56, borderRadius: 10, objectFit: "cover" }} />
          <div>
            <div style={{ fontFamily: FONT, fontSize: 14, fontWeight: 600 }}>
              {car.name} {car.year}
            </div>
            <div style={{ fontFamily: FONT, fontSize: 12, color: C.textDim }}>kypcar.com/c/{car.id}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 14, overflowX: "auto", paddingBottom: 14, marginBottom: 8, scrollbarWidth: "none" }}>
          {apps.map((a) => (
            <div key={a.name} style={{ flexShrink: 0, textAlign: "center", width: 64 }}>
              <div style={{ width: 60, height: 60, borderRadius: 14, background: a.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, marginBottom: 6 }}>{a.icon}</div>
              <div style={{ fontFamily: FONT, fontSize: 11, color: C.textDim }}>{a.name}</div>
            </div>
          ))}
        </div>
        <div style={{ background: C.surface, borderRadius: 14, overflow: "hidden" }}>
          {actions.map((a, i) => (
            <div key={a} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", borderBottom: i < actions.length - 1 ? `1px solid ${C.border}` : "none", fontFamily: FONT, fontSize: 14, color: C.text, cursor: "pointer" }}>
              <span>{a}</span>
              <I name="forward" size={14} color={C.textDim} />
            </div>
          ))}
        </div>
      </div>
    </Sheet>
  );
}

// ─────────────────────────────────────────────────────────────
// CHECKOUT
// ─────────────────────────────────────────────────────────────
export function CheckoutScreen({ car, dates, onBack, onConfirm }: { car: Car; dates: TripDates; onBack: () => void; onConfirm: () => void }) {
  const [pay, setPay] = useState("card1");
  const [terms, setTerms] = useState(true);
  const total = dates.days * car.price;
  const fee = Math.round(total * 0.05);
  const insurance = Math.round(total * 0.08);
  const grand = total + fee + insurance;

  return (
    <div style={{ width: "100%", height: "100%", background: C.bg, color: C.text, overflowY: "auto", paddingBottom: 110, position: "relative" }}>
      <div style={{ paddingTop: 56 }}>
        <ScreenHeader title="Review booking" onBack={onBack} />
      </div>

      <div style={{ padding: "0 20px" }}>
        <div style={{ background: C.surface, borderRadius: 16, padding: 16, border: `1px solid ${C.border}`, display: "flex", gap: 12 }}>
          <CarImg car={car} style={{ width: 88, height: 76, borderRadius: 10, objectFit: "cover" }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT, fontSize: 15, fontWeight: 600 }}>
              {car.name} {car.year}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: C.textDim, fontSize: 12, marginTop: 4 }}>
              <I name="starFill" size={11} color={C.lime} />
              <b style={{ color: C.text }}>{car.rating}</b>
              <span>·</span>
              <span>{car.transmission}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, color: C.textDim, fontSize: 12, marginTop: 4 }}>
              <img src={car.host.avatar} alt="" style={{ width: 18, height: 18, borderRadius: 999, objectFit: "cover" }} /> {car.host.name}
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "24px 20px 10px" }}>
        <h3 style={{ margin: "0 0 14px", fontFamily: FONT, fontSize: 17, fontWeight: 600 }}>Your trip</h3>
        <div style={{ display: "flex", gap: 10 }}>
          <DateBlock label="Pickup" date={`${dates.start.d}/${pad(dates.start.m + 1)}`} time="2:00 PM" />
          <DateBlock label="Return" date={`${dates.end.d}/${pad(dates.end.m + 1)}`} time="2:00 PM" />
        </div>
        <div style={{ marginTop: 12, padding: 14, borderRadius: 12, background: "rgba(238,238,239,0.04)", border: `1px solid ${C.border}`, display: "flex", gap: 10 }}>
          <I name="mapPin" size={16} color={C.text} />
          <div>
            <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600 }}>Pickup & return</div>
            <div style={{ fontFamily: FONT, fontSize: 12, color: C.textDim, marginTop: 2 }}>{car.location}</div>
          </div>
        </div>
      </div>

      <div style={{ padding: "24px 20px 10px" }}>
        <h3 style={{ margin: "0 0 14px", fontFamily: FONT, fontSize: 17, fontWeight: 600 }}>Payment</h3>
        <PayOption id="card1" sel={pay} onSel={setPay} label="Mastercard •••• 4231" sub="Expires 09/2027" emoji="💳" />
        <PayOption id="card2" sel={pay} onSel={setPay} label="Visa •••• 8821" sub="Expires 01/2026" emoji="💳" />
        <PayOption id="pix" sel={pay} onSel={setPay} label="Pix" sub="Instant approval" emoji="⚡" />
        <button style={{ width: "100%", marginTop: 6, padding: 14, borderRadius: 12, background: "transparent", border: `1px dashed ${C.border2}`, color: C.text, cursor: "pointer", fontFamily: FONT, fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <I name="plus" size={14} /> Add new card
        </button>
      </div>

      <div style={{ padding: "24px 20px 10px" }}>
        <h3 style={{ margin: "0 0 14px", fontFamily: FONT, fontSize: 17, fontWeight: 600 }}>Price breakdown</h3>
        <Row k={`R$${car.price} × ${dates.days} days`} v={`R$${total.toFixed(2).replace(".", ",")}`} />
        <Row k="Service fee" v={`R$${fee.toFixed(2).replace(".", ",")}`} />
        <Row k="Kypcar Protection" v={`R$${insurance.toFixed(2).replace(".", ",")}`} sub="Full insurance included" />
        <div style={{ borderTop: `1px solid ${C.border}`, marginTop: 12, paddingTop: 14, display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontFamily: FONT, fontSize: 16, fontWeight: 600 }}>Total</span>
          <span style={{ fontFamily: FONT, fontSize: 20, fontWeight: 700, color: C.lime }}>R${grand.toFixed(2).replace(".", ",")}</span>
        </div>
      </div>

      <div style={{ padding: "0 20px 20px" }}>
        <div onClick={() => setTerms(!terms)} style={{ display: "flex", gap: 10, padding: 14, borderRadius: 12, background: "rgba(238,238,239,0.04)", border: `1px solid ${C.border}`, cursor: "pointer" }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, flexShrink: 0, background: terms ? C.lime : "transparent", border: `1.5px solid ${terms ? C.lime : C.border2}`, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
            {terms && <I name="check" size={14} color={C.bg} sw={3} />}
          </div>
          <div style={{ fontFamily: FONT, fontSize: 12, color: C.textDim, lineHeight: 1.45 }}>
            I agree with Kypcar&apos;s <span style={{ color: C.purpleLight, fontWeight: 600 }}>terms of service</span> and <span style={{ color: C.purpleLight, fontWeight: 600 }}>privacy policy</span>.
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, background: `linear-gradient(to top, ${C.bg} 60%, rgba(8,8,9,0))`, padding: "16px 20px 28px" }}>
        <CTA kind="lime" full onClick={() => terms && onConfirm()} disabled={!terms}>
          Confirm booking · R${grand.toFixed(2).replace(".", ",")}
        </CTA>
      </div>
    </div>
  );
}

function ScreenHeader({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", minHeight: 52, background: C.bg, position: "relative", zIndex: 10 }}>
      <button onClick={onBack} style={{ background: "rgba(238,238,239,0.06)", border: `1px solid ${C.border}`, width: 38, height: 38, borderRadius: 999, color: C.text, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
        <I name="back" size={18} />
      </button>
      <span style={{ fontFamily: FONT, fontSize: 16, fontWeight: 600, color: C.text, flex: 1, textAlign: "center", padding: "0 8px" }}>{title}</span>
      <div style={{ minWidth: 38 }} />
    </div>
  );
}

function DateBlock({ label, date, time }: { label: string; date: string; time: string }) {
  return (
    <div style={{ flex: 1, padding: 14, borderRadius: 12, background: "rgba(238,238,239,0.04)", border: `1px solid ${C.border}` }}>
      <div style={{ fontFamily: FONT, fontSize: 11, color: C.textDim, textTransform: "uppercase", letterSpacing: 0.6 }}>{label}</div>
      <div style={{ fontFamily: FONT, fontSize: 18, fontWeight: 700, marginTop: 4 }}>{date}</div>
      <div style={{ fontFamily: FONT, fontSize: 12, color: C.textDim, marginTop: 2 }}>{time}</div>
    </div>
  );
}

function PayOption({ id, sel, onSel, label, sub, emoji }: { id: string; sel: string; onSel: (v: string) => void; label: string; sub: string; emoji: string }) {
  const on = sel === id;
  return (
    <div onClick={() => onSel(id)} style={{ display: "flex", alignItems: "center", gap: 12, padding: 14, borderRadius: 12, marginBottom: 8, background: on ? C.purpleSoft : "rgba(238,238,239,0.04)", border: `1px solid ${on ? "rgba(151,71,255,0.4)" : C.border}`, cursor: "pointer" }}>
      <div style={{ fontSize: 24 }}>{emoji}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: FONT, fontSize: 14, fontWeight: 600 }}>{label}</div>
        <div style={{ fontFamily: FONT, fontSize: 12, color: C.textDim, marginTop: 2 }}>{sub}</div>
      </div>
      <div style={{ width: 20, height: 20, borderRadius: 99, border: `2px solid ${on ? C.purple : C.border2}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {on && <div style={{ width: 10, height: 10, borderRadius: 99, background: C.purple }} />}
      </div>
    </div>
  );
}

function Row({ k, v, sub }: { k: string; v: string; sub?: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
      <div>
        <div style={{ fontFamily: FONT, fontSize: 14, color: C.text }}>{k}</div>
        {sub && <div style={{ fontFamily: FONT, fontSize: 11, color: C.textDim, marginTop: 2 }}>{sub}</div>}
      </div>
      <div style={{ fontFamily: FONT, fontSize: 14, color: C.text }}>{v}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SUCCESS SCREEN
// ─────────────────────────────────────────────────────────────
export function SuccessScreen({ car, dates, onDone, onChat }: { car: Car; dates: TripDates; onDone: () => void; onChat: () => void }) {
  return (
    <div style={{ width: "100%", height: "100%", background: C.bg, color: C.text, padding: "80px 24px 30px", display: "flex", flexDirection: "column", alignItems: "center", animation: "kFadeUp 0.4s ease both" }}>
      <div style={{ width: 92, height: 92, borderRadius: 999, background: C.lime, color: C.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 30, animation: "kPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both", boxShadow: "0 10px 40px rgba(194,236,19,0.3)" }}>
        <I name="check" size={44} color={C.bg} sw={3} />
      </div>
      <h1 style={{ margin: "0 0 12px", fontFamily: FONT, fontSize: 26, fontWeight: 700, textAlign: "center", letterSpacing: -0.4 }}>Booking confirmed!</h1>
      <p style={{ margin: "0 0 32px", fontFamily: FONT, fontSize: 14, color: C.textDim, textAlign: "center", maxWidth: 300, lineHeight: 1.5 }}>
        You&apos;re all set. You&apos;ll pick up the {car.name} from {car.host.name} on {dates.start.d}/{pad(dates.start.m + 1)} at 2pm.
      </p>

      <div style={{ width: "100%", padding: 20, borderRadius: 18, background: C.surface, border: `1px solid ${C.border}`, marginBottom: 24 }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
          <CarImg car={car} style={{ width: 64, height: 56, borderRadius: 10, objectFit: "cover" }} />
          <div>
            <div style={{ fontFamily: FONT, fontSize: 14, fontWeight: 600 }}>
              {car.name} {car.year}
            </div>
            <div style={{ fontFamily: FONT, fontSize: 12, color: C.textDim, marginTop: 2 }}>
              {dates.start.d}/{pad(dates.start.m + 1)} — {dates.end.d}/{pad(dates.end.m + 1)} · {dates.days} days
            </div>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 14, display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontFamily: FONT, fontSize: 12, color: C.textDim }}>Booking code</span>
          <span style={{ fontFamily: "monospace", fontSize: 12, fontWeight: 600, letterSpacing: 0.5 }}>KYP-93{100 + ((car.name.length * 37 + dates.days * 13 + dates.start.d) % 900)}</span>
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, width: "100%" }}>
        <CTA kind="ghost" onClick={onChat} style={{ flex: 1 }}>
          <I name="chat" size={16} /> Message host
        </CTA>
        <CTA kind="lime" onClick={onDone} style={{ flex: 1 }}>
          View trips
        </CTA>
      </div>
    </div>
  );
}
