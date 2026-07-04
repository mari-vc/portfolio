"use client";

// Tab screens — ported from screens-tabs.jsx: Trips, Favorites, Chat, Profile.
import { useEffect, useRef, useState } from "react";
import { C, FONT } from "./tokens";
import { CTA, I, StatusPill } from "./ui";
import { CARS, PAST_TRIPS, CHATS, THREAD } from "./data";
import type { Trip, PastTrip, ThreadMessage } from "./data";

// ─────────────────────────────────────────────────────────────
// TRIPS
// ─────────────────────────────────────────────────────────────
export function TripsScreen({ onOpenCar, onOpenChat, trips }: { onOpenCar: (id: string) => void; onOpenChat: () => void; trips: Trip[] }) {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");

  return (
    <div style={{ width: "100%", height: "100%", background: C.bg, color: C.text, overflowY: "auto", paddingBottom: 110 }}>
      <div style={{ paddingTop: 56 }} />
      <div style={{ padding: "8px 20px 0" }}>
        <h1 style={{ margin: "0 0 18px", fontFamily: FONT, fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>Activity</h1>
        <div style={{ display: "flex", gap: 4, background: C.surface, borderRadius: 12, padding: 4, marginBottom: 20 }}>
          <SegBtn active={tab === "upcoming"} onClick={() => setTab("upcoming")} count={trips.length}>
            Upcoming
          </SegBtn>
          <SegBtn active={tab === "past"} onClick={() => setTab("past")} count={PAST_TRIPS.length}>
            Past
          </SegBtn>
        </div>
      </div>

      {tab === "upcoming" && (
        <div style={{ padding: "0 20px", display: "flex", flexDirection: "column", gap: 14 }}>
          {trips.length === 0 ? (
            <EmptyState title="No trips yet" body="Every journey starts with a first decision. Book your first car and start exploring." cta="Find cars" icon="car" />
          ) : (
            trips.map((t) => <TripCard key={t.id} trip={t} active={t.status === "In progress"} onChat={onOpenChat} />)
          )}
        </div>
      )}

      {tab === "past" && (
        <div style={{ padding: "0 20px", display: "flex", flexDirection: "column", gap: 14 }}>
          {PAST_TRIPS.map((t) => (
            <PastTripCard key={t.id} trip={t} onOpenCar={onOpenCar} />
          ))}
        </div>
      )}
    </div>
  );
}

function SegBtn({ active, onClick, children, count }: { active: boolean; onClick: () => void; children: React.ReactNode; count: number }) {
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1, padding: "10px 12px", borderRadius: 9,
        background: active ? C.bg : "transparent",
        border: "none", cursor: "pointer",
        color: active ? C.text : C.textDim,
        fontFamily: FONT, fontSize: 13, fontWeight: 600,
        display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
        boxShadow: active ? "0 1px 0 rgba(0,0,0,0.3)" : "none",
      }}
    >
      {children}
      {count > 0 && (
        <span style={{ background: active ? C.lime : "rgba(238,238,239,0.1)", color: active ? C.bg : C.textDim, padding: "1px 6px", borderRadius: 99, fontSize: 11, fontWeight: 700 }}>{count}</span>
      )}
    </button>
  );
}

function TripCard({ trip, active, onChat }: { trip: Trip; active: boolean; onChat: () => void }) {
  return (
    <div style={{ background: C.surface, borderRadius: 18, overflow: "hidden", border: `1px solid ${active ? "rgba(194,236,19,0.3)" : C.border}` }}>
      <div style={{ position: "relative", height: 140 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={trip.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))" }} />
        <div style={{ position: "absolute", top: 12, left: 12 }}>
          <StatusPill status={trip.status} />
        </div>
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
          <div>
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 600 }}>{trip.car}</div>
            <div style={{ fontFamily: FONT, fontSize: 12, color: C.textDim, marginTop: 2 }}>
              Host: {trip.host} · {trip.dates}
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 700, color: C.lime }}>R${trip.price.toFixed(2).replace(".", ",")}</div>
          </div>
        </div>

        {active ? (
          <div style={{ display: "flex", gap: 8 }}>
            <CTA kind="lime" style={{ flex: 1, minHeight: 44, padding: "10px 16px", fontSize: 14 }}>
              <I name="key" size={14} /> Unlock car
            </CTA>
            <CTA kind="ghost" onClick={onChat} style={{ flex: 0, padding: "10px 14px", minHeight: 44 }}>
              <I name="chat" size={16} />
            </CTA>
          </div>
        ) : (
          <div style={{ display: "flex", gap: 8 }}>
            <CTA kind="ghost" onClick={onChat} style={{ flex: 1, minHeight: 44, padding: "10px 16px", fontSize: 13 }}>
              <I name="chat" size={14} /> Message
            </CTA>
            <CTA kind="ghost" style={{ flex: 1, minHeight: 44, padding: "10px 16px", fontSize: 13 }}>
              <I name="cal" size={14} /> Details
            </CTA>
          </div>
        )}
      </div>
    </div>
  );
}

function PastTripCard({ trip, onOpenCar }: { trip: PastTrip; onOpenCar: (id: string) => void }) {
  return (
    <div style={{ background: C.surface, borderRadius: 14, padding: 14, border: `1px solid ${C.border}`, display: "flex", gap: 12, alignItems: "center" }} onClick={() => onOpenCar(CARS[0].id)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={trip.img} alt="" style={{ width: 70, height: 60, borderRadius: 10, objectFit: "cover" }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
          <div style={{ fontFamily: FONT, fontSize: 14, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{trip.car}</div>
          <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600 }}>R${trip.price}</div>
        </div>
        <div style={{ fontFamily: FONT, fontSize: 12, color: C.textDim, marginTop: 2 }}>
          {trip.host} · {trip.dates}
        </div>
        {!trip.rated && (
          <button style={{ marginTop: 6, padding: "4px 10px", borderRadius: 99, background: C.lime, color: C.bg, border: "none", cursor: "pointer", fontFamily: FONT, fontSize: 11, fontWeight: 700 }}>★ Rate this trip</button>
        )}
      </div>
    </div>
  );
}

function EmptyState({ title, body, cta, icon }: { title: string; body: string; cta: string; icon: string }) {
  return (
    <div style={{ padding: 40, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", background: C.surface, borderRadius: 18, border: `1px solid ${C.border}`, marginTop: 20 }}>
      <div style={{ width: 64, height: 64, borderRadius: 99, background: C.purpleSoft, display: "flex", alignItems: "center", justifyContent: "center", color: C.purple, marginBottom: 16 }}>
        <I name={icon} size={28} fill="current" />
      </div>
      <h3 style={{ margin: "0 0 6px", fontFamily: FONT, fontSize: 16, fontWeight: 600 }}>{title}</h3>
      <p style={{ margin: "0 0 16px", fontFamily: FONT, fontSize: 13, color: C.textDim, lineHeight: 1.5 }}>{body}</p>
      <CTA kind="lime">{cta}</CTA>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// FAVORITES
// ─────────────────────────────────────────────────────────────
export function FavoritesScreen({ favorites, onOpenCar, toggleFavorite }: { favorites: string[]; onOpenCar: (id: string) => void; toggleFavorite: (id: string) => void }) {
  const favs = CARS.filter((c) => favorites.includes(c.id));
  return (
    <div style={{ width: "100%", height: "100%", background: C.bg, color: C.text, overflowY: "auto", paddingBottom: 110 }}>
      <div style={{ paddingTop: 56 }} />
      <div style={{ padding: "8px 20px 18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <h1 style={{ margin: 0, fontFamily: FONT, fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>Favorites</h1>
          <span style={{ fontFamily: FONT, fontSize: 13, color: C.textDim }}>
            {favs.length} {favs.length === 1 ? "car" : "cars"}
          </span>
        </div>
      </div>

      {favs.length === 0 ? (
        <div style={{ padding: "0 20px" }}>
          <EmptyState title="No favorites yet" body="Save the cars you like to find them all in one place." cta="Explore cars" icon="heart" />
        </div>
      ) : (
        <div style={{ padding: "0 20px", display: "flex", flexDirection: "column", gap: 14 }}>
          {favs.map((car) => (
            <FavCard key={car.id} car={car} onClick={() => onOpenCar(car.id)} onRemove={() => toggleFavorite(car.id)} />
          ))}
        </div>
      )}
    </div>
  );
}

function FavCard({ car, onClick, onRemove }: { car: (typeof CARS)[number]; onClick: () => void; onRemove: () => void }) {
  return (
    <div onClick={onClick} style={{ background: C.surface, borderRadius: 16, overflow: "hidden", border: `1px solid ${C.border}`, cursor: "pointer", display: "flex" }}>
      <div style={{ width: 130, height: 130, flexShrink: 0, position: "relative" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={car.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ flex: 1, padding: 14, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: FONT, fontSize: 15, fontWeight: 600 }}>{car.name}</div>
            <div style={{ fontFamily: FONT, fontSize: 12, color: C.textDim, marginTop: 2 }}>
              {car.year} · {car.transmission}
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            style={{ background: "rgba(255,82,82,0.12)", border: "none", borderRadius: 99, width: 28, height: 28, cursor: "pointer", color: C.red, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <I name="heart" size={14} fill="current" />
          </button>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 8, color: C.textDim, fontSize: 11 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
            <I name="starFill" size={10} color={C.lime} /> {car.rating}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
            <I name="mapPin" size={10} /> {car.distance}
          </span>
        </div>
        <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontFamily: FONT, fontSize: 14, color: C.text }}>
            <b style={{ fontWeight: 700 }}>R${car.price}</b>
            <span style={{ color: C.textDim, fontSize: 12 }}> /day</span>
          </div>
          <div style={{ background: C.lime, color: C.bg, padding: "5px 12px", borderRadius: 99, fontFamily: FONT, fontSize: 11, fontWeight: 700 }}>Book</div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// CHAT — list + thread
// ─────────────────────────────────────────────────────────────
export function ChatScreen({ onOpenThread }: { onOpenThread: (id: string) => void }) {
  return (
    <div style={{ width: "100%", height: "100%", background: C.bg, color: C.text, overflowY: "auto", paddingBottom: 110 }}>
      <div style={{ paddingTop: 56 }} />
      <div style={{ padding: "8px 20px 18px" }}>
        <h1 style={{ margin: 0, fontFamily: FONT, fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>Messages</h1>
      </div>
      <div style={{ padding: "0 12px" }}>
        {CHATS.map((c) => (
          <div
            key={c.id}
            onClick={() => onOpenThread(c.id)}
            style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 12px", borderRadius: 14, cursor: "pointer" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(238,238,239,0.04)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            {c.support ? (
              <div style={{ width: 48, height: 48, borderRadius: 99, background: `linear-gradient(135deg, ${C.lime}, ${C.purple})`, display: "flex", alignItems: "center", justifyContent: "center", color: C.bg, fontWeight: 700, fontSize: 18, flexShrink: 0 }}>
                K
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={c.avatar ?? undefined} alt="" style={{ width: 48, height: 48, borderRadius: 999, objectFit: "cover", flexShrink: 0 }} />
            )}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                <span style={{ fontFamily: FONT, fontSize: 14, fontWeight: 600 }}>{c.name}</span>
                <span style={{ fontFamily: FONT, fontSize: 11, color: c.unread ? C.lime : C.textDim }}>{c.when}</span>
              </div>
              <div style={{ fontFamily: FONT, fontSize: 13, color: c.unread ? C.text : C.textDim, fontWeight: c.unread ? 500 : 400, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.last}</div>
              {c.car && (
                <div style={{ display: "inline-block", marginTop: 4, padding: "2px 8px", borderRadius: 99, background: "rgba(238,238,239,0.06)", color: C.textDim, fontFamily: FONT, fontSize: 10, fontWeight: 500 }}>{c.car}</div>
              )}
            </div>
            {c.unread > 0 && (
              <div style={{ background: C.lime, color: C.bg, borderRadius: 99, padding: "2px 8px", minWidth: 18, textAlign: "center", fontFamily: FONT, fontSize: 11, fontWeight: 700 }}>{c.unread}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChatThread({ chatId, onBack }: { chatId: string; onBack: () => void }) {
  const c = CHATS.find((x) => x.id === chatId) || CHATS[0];
  const [msgs, setMsgs] = useState<ThreadMessage[]>(THREAD);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollerRef.current) scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
  }, [msgs, typing]);

  const send = () => {
    if (!text.trim()) return;
    setMsgs((prev) => [...prev, { from: "me", text: text.trim(), when: "now" }]);
    setText("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((prev) => [...prev, { from: "them", text: "Sounds good! 👍", when: "now" }]);
    }, 1500);
  };

  return (
    <div style={{ width: "100%", height: "100%", background: C.bg, color: C.text, display: "flex", flexDirection: "column" }}>
      <div style={{ paddingTop: 56, background: C.surface, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 16px 14px" }}>
          <button onClick={onBack} style={{ background: "rgba(238,238,239,0.06)", border: "none", borderRadius: 99, width: 36, height: 36, color: C.text, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <I name="back" size={16} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={c.avatar ?? undefined} alt="" style={{ width: 40, height: 40, borderRadius: 999, objectFit: "cover" }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT, fontSize: 14, fontWeight: 600 }}>{c.name}</div>
            <div style={{ fontFamily: FONT, fontSize: 11, color: C.green, display: "inline-flex", alignItems: "center", gap: 4 }}>
              <span style={{ width: 6, height: 6, borderRadius: 99, background: C.green }} /> online now
            </div>
          </div>
          <button style={{ background: "rgba(238,238,239,0.06)", border: "none", borderRadius: 99, width: 36, height: 36, color: C.text, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <I name="helpC" size={16} />
          </button>
        </div>
      </div>

      <div ref={scrollerRef} style={{ flex: 1, overflowY: "auto", padding: "20px 16px" }}>
        <div style={{ textAlign: "center", marginBottom: 16, fontFamily: FONT, fontSize: 11, color: C.textMute }}>Today · 10:20</div>
        <div style={{ background: C.purpleSoft, borderRadius: 14, padding: 14, marginBottom: 18, border: "1px solid rgba(151,71,255,0.3)", display: "flex", gap: 10 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={CARS[0].img} alt="" style={{ width: 56, height: 48, borderRadius: 8, objectFit: "cover" }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600 }}>Booking: Audi TT 2023</div>
            <div style={{ fontFamily: FONT, fontSize: 11, color: C.textDim, marginTop: 2 }}>Oct 30 — Nov 4 · Pinheiros, SP</div>
          </div>
        </div>

        {msgs.map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.from === "me" ? "flex-end" : "flex-start", marginBottom: 8 }}>
            <div
              style={{
                maxWidth: "78%", padding: "10px 14px", borderRadius: 18,
                background: m.from === "me" ? C.lime : C.surface,
                color: m.from === "me" ? C.bg : C.text,
                borderBottomRightRadius: m.from === "me" ? 4 : 18,
                borderBottomLeftRadius: m.from === "me" ? 18 : 4,
                fontFamily: FONT, fontSize: 14, lineHeight: 1.4,
                animation: "kFadeUp 0.3s ease both",
              }}
            >
              {m.text}
            </div>
          </div>
        ))}

        {typing && (
          <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 8 }}>
            <div style={{ padding: "12px 16px", borderRadius: 18, background: C.surface, display: "flex", gap: 4, alignItems: "center" }}>
              {[0, 1, 2].map((i) => (
                <span key={i} style={{ width: 6, height: 6, borderRadius: 99, background: C.textDim, animation: `kBlink 1.2s ${i * 0.2}s ease-in-out infinite` }} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div style={{ padding: "12px 16px 28px", background: C.bg, borderTop: `1px solid ${C.border}` }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", background: C.surface, borderRadius: 22, padding: "6px 6px 6px 16px" }}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Message…"
            style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontFamily: FONT, fontSize: 14, color: C.text, padding: "10px 0" }}
          />
          <button
            onClick={send}
            style={{ background: text.trim() ? C.lime : "rgba(238,238,239,0.1)", color: text.trim() ? C.bg : C.textDim, border: "none", borderRadius: 99, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background 0.15s ease" }}
          >
            <I name="send" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// PROFILE
// ─────────────────────────────────────────────────────────────
export function ProfileScreen({
  user,
  signedIn = true,
  onSignIn,
  onSignOut,
}: {
  user: { name: string; avatar: string };
  signedIn?: boolean;
  onSignIn: () => void;
  onSignOut: () => void;
}) {
  if (!signedIn) {
    return (
      <div style={{ width: "100%", height: "100%", background: C.bg, color: C.text, overflowY: "auto", paddingBottom: 110 }}>
        <div style={{ paddingTop: 56 }} />
        <div style={{ padding: "8px 20px" }}>
          <h1 style={{ margin: "0 0 18px", fontFamily: FONT, fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>Profile</h1>

          <div style={{ background: `linear-gradient(135deg, ${C.purpleSoft}, rgba(194,236,19,0.06))`, borderRadius: 20, padding: 22, marginBottom: 22, border: `1px solid ${C.border}` }}>
            <div style={{ width: 52, height: 52, borderRadius: 99, background: "rgba(238,238,239,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
              <I name="user" size={22} color={C.text} />
            </div>
            <div style={{ fontFamily: FONT, fontSize: 18, fontWeight: 700, letterSpacing: -0.3, marginBottom: 6 }}>Browsing as guest</div>
            <div style={{ fontFamily: FONT, fontSize: 13, color: C.textDim, lineHeight: 1.5, marginBottom: 16 }}>Sign in to book cars, save favorites, message hosts and unlock your profile.</div>
            <CTA kind="lime" full onClick={onSignIn}>
              Sign in or create account
            </CTA>
          </div>

          <ProfileGroup title="Preferences">
            <ProfileRow icon="globe" label="Languages" sub="English" />
            <ProfileRow icon="bell" label="Notifications" />
            <ProfileRow icon="settings" label="Accessibility" />
          </ProfileGroup>

          <ProfileGroup title="Support">
            <ProfileRow icon="helpC" label="Help center" />
            <ProfileRow icon="chat" label="Contact Kypcar" />
            <ProfileRow icon="shield" label="Terms & privacy" />
          </ProfileGroup>

          <div style={{ textAlign: "center", padding: "8px 0 10px", fontFamily: FONT, fontSize: 11, color: C.textMute }}>Kypcar v1.0.0 · made in São Paulo 🇧🇷</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: "100%", height: "100%", background: C.bg, color: C.text, overflowY: "auto", paddingBottom: 110 }}>
      <div style={{ paddingTop: 56 }} />
      <div style={{ padding: "8px 20px" }}>
        <h1 style={{ margin: "0 0 18px", fontFamily: FONT, fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>Profile</h1>

        <div style={{ background: `linear-gradient(135deg, ${C.purpleSoft}, rgba(194,236,19,0.08))`, borderRadius: 20, padding: 20, marginBottom: 18, border: `1px solid ${C.border}`, position: "relative", overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img src={user.avatar} alt="" style={{ width: 68, height: 68, borderRadius: 999, objectFit: "cover", border: `2px solid ${C.lime}` }} />
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontFamily: FONT, fontSize: 18, fontWeight: 700 }}>{user.name}</span>
                <I name="badge" size={16} color={C.purple} fill="current" />
              </div>
              <div style={{ fontFamily: FONT, fontSize: 12, color: C.textDim, marginTop: 2 }}>Member since 2024 · Identity verified</div>
              <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
                <Stat label="Trips" value="14" />
                <Stat label="Rating" value="4.9" star />
                <Stat label="Reply" value="< 1h" />
              </div>
            </div>
          </div>
        </div>

        <ProfileGroup title="Account">
          <ProfileRow icon="user" label="Personal information" />
          <ProfileRow icon="shield" label="Identity verification" badge="Verified" badgeColor={C.lime} />
          <ProfileRow icon="key" label="Driver's license" sub="License active" />
          <ProfileRow icon="mapPin" label="Addresses" />
        </ProfileGroup>

        <ProfileGroup title="Payment">
          <ProfileRow icon="settings" label="Payment methods" sub="Mastercard •••• 4231" />
          <ProfileRow icon="badge" label="Kypcar Wallet" sub="R$ 0.00 available" />
        </ProfileGroup>

        <ProfileGroup title="Preferences">
          <ProfileRow icon="globe" label="Languages" sub="English" />
          <ProfileRow icon="bell" label="Notifications" />
          <ProfileRow icon="settings" label="Accessibility" />
        </ProfileGroup>

        <ProfileGroup title="Support">
          <ProfileRow icon="helpC" label="Help center" />
          <ProfileRow icon="chat" label="Contact Kypcar" />
          <ProfileRow icon="shield" label="Terms & privacy" />
        </ProfileGroup>

        <button
          onClick={onSignOut}
          style={{ width: "100%", padding: 16, marginTop: 8, marginBottom: 16, background: "rgba(255,82,82,0.08)", border: "1px solid rgba(255,82,82,0.2)", borderRadius: 14, color: C.red, cursor: "pointer", fontFamily: FONT, fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
        >
          <I name="logout" size={16} /> Sign out
        </button>

        <div style={{ textAlign: "center", padding: "0 0 10px", fontFamily: FONT, fontSize: 11, color: C.textMute }}>Kypcar v1.0.0 · made in São Paulo 🇧🇷</div>
      </div>
    </div>
  );
}

function Stat({ label, value, star }: { label: string; value: string; star?: boolean }) {
  return (
    <div>
      <div style={{ fontFamily: FONT, fontSize: 15, fontWeight: 700, display: "flex", alignItems: "center", gap: 3 }}>
        {star && <I name="starFill" size={11} color={C.lime} />}
        {value}
      </div>
      <div style={{ fontFamily: FONT, fontSize: 10, color: C.textDim, textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</div>
    </div>
  );
}

function ProfileGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ fontFamily: FONT, fontSize: 11, fontWeight: 600, color: C.textDim, textTransform: "uppercase", letterSpacing: 0.8, margin: "0 4px 8px" }}>{title}</div>
      <div style={{ background: C.surface, borderRadius: 14, border: `1px solid ${C.border}`, overflow: "hidden" }}>{children}</div>
    </div>
  );
}

function ProfileRow({ icon, label, sub, badge, badgeColor }: { icon: string; label: string; sub?: string; badge?: string; badgeColor?: string }) {
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderBottom: `1px solid ${C.border}`, cursor: "pointer" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(238,238,239,0.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      <I name={icon} size={18} color={C.text} />
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: FONT, fontSize: 14, fontWeight: 500 }}>{label}</div>
        {sub && <div style={{ fontFamily: FONT, fontSize: 12, color: C.textDim, marginTop: 1 }}>{sub}</div>}
      </div>
      {badge && <span style={{ background: `${badgeColor}1f`, color: badgeColor, padding: "3px 8px", borderRadius: 99, fontFamily: FONT, fontSize: 10, fontWeight: 700 }}>{badge}</span>}
      <I name="forward" size={14} color={C.textDim} />
    </div>
  );
}
