"use client";

// Main router + state — ported from the original prototype's app.jsx (KypcarApp + App),
// minus the dev-only tweaks panel. Exported as KypcarDemo for embedding in the case study.
import { useState } from "react";
import { PhoneFrame } from "./PhoneFrame";
import { TabBar } from "./ui";
import { CARS, FAVORITES, TRIPS } from "./data";
import type { Trip } from "./data";
import { SplashScreen, WelcomeScreen, SignInScreen } from "./screens-auth";
import { HomeScreen, FiltersSheet, CarDetailScreen, CheckoutScreen, SuccessScreen } from "./screens-shop";
import type { TripDates } from "./screens-shop";
import { TripsScreen, FavoritesScreen, ChatScreen, ChatThread, ProfileScreen } from "./screens-tabs";

type Route = {
  name: string;
  carId?: string;
  dates?: TripDates;
  filters?: boolean;
  chatId?: string;
};

const TAB_NAMES = ["encontrar", "viagem", "favoritos", "chat", "perfil"];

function KypcarApp() {
  const [route, setRoute] = useState<Route>({ name: "splash" });
  const [history, setHistory] = useState<Route[]>([]);
  const [signedIn, setSignedIn] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(FAVORITES);
  const [trips, setTrips] = useState<Trip[]>(TRIPS);

  const go = (next: Route) => {
    setHistory((h) => [...h, route]);
    setRoute(next);
  };
  const back = () => {
    if (history.length === 0) return;
    const h = [...history];
    const prev = h.pop() as Route;
    setHistory(h);
    setRoute(prev);
  };
  const replace = (next: Route) => setRoute(next);
  const resetTo = (next: Route) => {
    setRoute(next);
    setHistory([]);
  };

  const toggleFavorite = (id: string) => setFavorites((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));

  const user = { name: "Vitor Albuquerque", avatar: "https://i.pravatar.cc/200?img=53" };

  const activeTab = TAB_NAMES.includes(route.name) ? route.name : null;
  const showTabs = !!activeTab;

  const goTab = (key: string) => {
    if (TAB_NAMES.includes(key)) resetTo({ name: key });
  };

  const currentCar = route.carId ? CARS.find((c) => c.id === route.carId) : null;
  const hasActiveTrip = trips.some((x) => x.status === "In progress");

  let content: React.ReactNode = null;
  switch (route.name) {
    case "splash":
      content = <SplashScreen onDone={() => replace({ name: "welcome" })} />;
      break;
    case "welcome":
      content = (
        <WelcomeScreen
          onContinue={() => go({ name: "signin" })}
          onSkip={() => {
            setSignedIn(false);
            resetTo({ name: "encontrar" });
          }}
        />
      );
      break;
    case "signin":
      content = (
        <SignInScreen
          onSignIn={() => {
            setSignedIn(true);
            resetTo({ name: "encontrar" });
          }}
          onBack={back}
        />
      );
      break;
    case "encontrar":
      content = (
        <HomeScreen
          onOpenCar={(id) => go({ name: "detail", carId: id })}
          onOpenFilters={() => go({ name: "encontrar", filters: true })}
          onAddTrip={() => go({ name: "viagem" })}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          hasActiveTrip={hasActiveTrip}
        />
      );
      break;
    case "detail":
      content = (
        <CarDetailScreen
          carId={route.carId as string}
          onBack={back}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          onReserve={(car, dates) => go({ name: "checkout", carId: car.id, dates })}
          onOpenChat={() => go({ name: "thread", chatId: "c1" })}
        />
      );
      break;
    case "checkout":
      content = (
        <CheckoutScreen
          car={currentCar || CARS[0]}
          dates={route.dates as TripDates}
          onBack={back}
          onConfirm={() => {
            const dates = route.dates as TripDates;
            const car = currentCar as (typeof CARS)[number];
            const nt: Trip = {
              id: "tn" + Math.random().toString(36).slice(2, 6),
              car: `${car.name} ${car.year}`,
              host: car.host.name,
              dates: `${dates.start.d}/${dates.start.m + 1} — ${dates.end.d}/${dates.end.m + 1}`,
              price: dates.days * car.price * 1.13,
              status: "Confirmed",
              img: car.img,
            };
            setTrips((prev) => [nt, ...prev]);
            resetTo({ name: "success", carId: car.id, dates });
          }}
        />
      );
      break;
    case "success":
      content = (
        <SuccessScreen
          car={currentCar || CARS[0]}
          dates={route.dates as TripDates}
          onDone={() => resetTo({ name: "viagem" })}
          onChat={() => resetTo({ name: "thread", chatId: "c1" })}
        />
      );
      break;
    case "viagem":
      content = <TripsScreen trips={trips} onOpenCar={(id) => go({ name: "detail", carId: id })} onOpenChat={() => go({ name: "thread", chatId: "c1" })} />;
      break;
    case "favoritos":
      content = <FavoritesScreen favorites={favorites} toggleFavorite={toggleFavorite} onOpenCar={(id) => go({ name: "detail", carId: id })} />;
      break;
    case "chat":
      content = <ChatScreen onOpenThread={(id) => go({ name: "thread", chatId: id })} />;
      break;
    case "thread":
      content = <ChatThread chatId={route.chatId as string} onBack={back} />;
      break;
    case "perfil":
      content = (
        <ProfileScreen
          user={user}
          signedIn={signedIn}
          onSignIn={() => go({ name: "signin" })}
          onSignOut={() => {
            setSignedIn(false);
            resetTo({ name: "splash" });
          }}
        />
      );
      break;
    default:
      content = <div style={{ color: "#fff", padding: 40 }}>404</div>;
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      {content}
      {showTabs && <TabBar active={activeTab} onChange={goTab} />}
      {route.name === "encontrar" && <FiltersSheet open={!!route.filters} onClose={back} onApply={back} />}
    </div>
  );
}

export function KypcarDemo() {
  return (
    <div
      style={{
        width: "100%", display: "flex", alignItems: "center", justifyContent: "center",
        padding: "40px 20px",
        fontFamily: "'Host Grotesk', system-ui, -apple-system, sans-serif",
      }}
    >
      <style>{`
        @keyframes kFadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes kPop { 0% { transform: scale(0); } 60% { transform: scale(1.1); } 100% { transform: scale(1); } }
        @keyframes kBlink { 0%, 80%, 100% { opacity: 0.3; transform: translateY(0); } 40% { opacity: 1; transform: translateY(-2px); } }
      `}</style>
      <PhoneFrame width={360} height={780}>
        <KypcarApp />
      </PhoneFrame>
    </div>
  );
}
