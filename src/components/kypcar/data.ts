// Mock data for the Kypcar demo — ported from the original prototype's data.jsx.

export type Host = {
  name: string;
  since: string;
  trips: number;
  super: boolean;
  langs: string;
  avatar: string;
  rating: number;
};

export type Car = {
  id: string;
  name: string;
  year: number;
  price: number;
  rating: number;
  distance: string;
  transmission: string;
  img: string;
  imgFallback: string;
  location: string;
  seats: number;
  fuel: string;
  features: string[];
  host: Host;
};

const carImg = (name: string, bg = "0f0f10", fg = "c2ec13") =>
  `https://placehold.co/900x600/${bg}/${fg}.png?text=${encodeURIComponent(name)}&font=montserrat`;

const unsplash = (id: string) => `https://images.unsplash.com/${id}?w=900&auto=format&fit=crop`;

export const CARS: Car[] = [
  {
    id: "audi-tt", name: "Audi TT", year: 2023, price: 460, rating: 4.8, distance: "420m",
    transmission: "Automatic", img: unsplash("photo-1606664515524-ed2f786a0bd6"),
    imgFallback: carImg("Audi TT", "161416", "c2ec13"),
    location: "Pinheiros, São Paulo — SP", seats: 2, fuel: "Gasoline",
    features: ["2 seats with leather upholstery", "Air conditioning", "Keyless entry", "Android Auto", "Apple CarPlay", "Bluetooth", "Backup camera"],
    host: { name: "Tereza Torres", since: "2023", trips: 128, super: true, langs: "Portuguese, English, Spanish", avatar: "https://i.pravatar.cc/120?img=47", rating: 4.58 },
  },
  {
    id: "mini-cooper", name: "Mini Cooper S", year: 2022, price: 390, rating: 4.9, distance: "220m",
    transmission: "Automatic", img: unsplash("photo-1617469767053-d3b523a0b982"),
    imgFallback: carImg("Mini Cooper S", "1c1530", "e0d4ff"),
    location: "Vila Madalena, São Paulo — SP", seats: 4, fuel: "Gasoline",
    features: ["Sport seats", "Sunroof", "Apple CarPlay", "Backup camera"],
    host: { name: "Marcos Lima", since: "2022", trips: 89, super: true, langs: "Portuguese, English", avatar: "https://i.pravatar.cc/120?img=12", rating: 4.91 },
  },
  {
    id: "byd-dolphin", name: "BYD Dolphin Mini", year: 2024, price: 160, rating: 4.6, distance: "180m",
    transmission: "Automatic", img: unsplash("photo-1593941707882-a5bba14938c7"),
    imgFallback: carImg("BYD Dolphin Mini", "0d1f1c", "7CFFA8"),
    location: "Moema, São Paulo — SP", seats: 5, fuel: "Electric",
    features: ["100% electric", "Air conditioning", "Fast charging", "Android Auto"],
    host: { name: "Júlia Pereira", since: "2024", trips: 22, super: false, langs: "Portuguese", avatar: "https://i.pravatar.cc/120?img=44", rating: 4.62 },
  },
  {
    id: "jeep-compass", name: "Jeep Compass", year: 2023, price: 290, rating: 4.7, distance: "640m",
    transmission: "Automatic", img: unsplash("photo-1533473359331-0135ef1b58bf"),
    imgFallback: carImg("Jeep Compass", "1e1d18", "f0c674"),
    location: "Brooklin, São Paulo — SP", seats: 5, fuel: "Flex fuel",
    features: ["4x4 drive", "Digital climate control", "Leather seats", "360° camera"],
    host: { name: "Rafael Souza", since: "2021", trips: 204, super: true, langs: "Portuguese, English", avatar: "https://i.pravatar.cc/120?img=68", rating: 4.83 },
  },
  {
    id: "ford-ranger", name: "Ford Ranger", year: 2024, price: 350, rating: 4.8, distance: "1.2km",
    transmission: "Automatic", img: unsplash("photo-1568844293986-8d0400bd4745"),
    imgFallback: carImg("Ford Ranger", "15191e", "6CB5FF"),
    location: "Itaim Bibi, São Paulo — SP", seats: 5, fuel: "Diesel",
    features: ["4x4 drive", "Lined cargo bed", "Bluetooth", "Tow hitch"],
    host: { name: "Pedro Antunes", since: "2023", trips: 47, super: false, langs: "Portuguese", avatar: "https://i.pravatar.cc/120?img=15", rating: 4.71 },
  },
  {
    id: "mercedes-cla", name: "Mercedes CLA 200", year: 2023, price: 520, rating: 4.9, distance: "880m",
    transmission: "Automatic", img: unsplash("photo-1618843479313-40f8afb4b4d8"),
    imgFallback: carImg("Mercedes CLA 200", "0c0c10", "E5E5EE"),
    location: "Jardins, São Paulo — SP", seats: 5, fuel: "Gasoline",
    features: ["Leather seats", "Panoramic roof", "Apple CarPlay", "MBUX"],
    host: { name: "Beatriz Almeida", since: "2022", trips: 156, super: true, langs: "Portuguese, English, French", avatar: "https://i.pravatar.cc/120?img=49", rating: 4.96 },
  },
  {
    id: "vw-golf-gti", name: "VW Golf GTI", year: 2022, price: 410, rating: 4.7, distance: "1.5km",
    transmission: "Manual", img: unsplash("photo-1604054094723-3a949e4fca0b"),
    imgFallback: carImg("VW Golf GTI", "1e1116", "FF6B9D"),
    location: "Perdizes, São Paulo — SP", seats: 5, fuel: "Gasoline",
    features: ["Sport tuned", "Race mode", "Apple CarPlay", "Backup camera"],
    host: { name: "Lucas Faria", since: "2021", trips: 98, super: true, langs: "Portuguese, English", avatar: "https://i.pravatar.cc/120?img=33", rating: 4.79 },
  },
  {
    id: "toyota-hilux", name: "Toyota Hilux", year: 2024, price: 380, rating: 4.9, distance: "2.1km",
    transmission: "Automatic", img: unsplash("photo-1605559911160-a3d95d213904"),
    imgFallback: carImg("Toyota Hilux", "161814", "C2EC13"),
    location: "Tatuapé, São Paulo — SP", seats: 5, fuel: "Diesel",
    features: ["4x4 drive", "Cargo bed", "Bluetooth", "Backup camera"],
    host: { name: "Carlos Mendes", since: "2020", trips: 312, super: true, langs: "Portuguese", avatar: "https://i.pravatar.cc/120?img=60", rating: 4.88 },
  },
];

export type Review = { id: number; name: string; when: string; rating: number; text: string; avatar: string };

export const REVIEWS: Review[] = [
  { id: 1, name: "Carlos Mendes", when: "3 days ago", rating: 5, text: "Tereza was amazing! The car was spotless and she was super punctual. The Audi TT is a dream — 10/10 experience.", avatar: "https://i.pravatar.cc/80?img=60" },
  { id: 2, name: "Marina Freitas", when: "5 weeks ago", rating: 5, text: "Incredible experience! The car is immaculate, super comfortable and well looked after. Tereza was friendly and explained everything patiently.", avatar: "https://i.pravatar.cc/80?img=45" },
  { id: 3, name: "Gustavo Leal", when: "1 week ago", rating: 5, text: "First time using Kypcar and I loved it. The Audi TT felt brand new. Tereza was right on time for both pickup and drop-off.", avatar: "https://i.pravatar.cc/80?img=14" },
  { id: 4, name: "Felipe Antunes", when: "1 week ago", rating: 5, text: "Beautiful car and great on fuel. Tereza is a top-tier host — replied fast and left the tank full. Highly recommend.", avatar: "https://i.pravatar.cc/80?img=11" },
];

export type DatePoint = { m: number; d: number; y: number };
export type Trip = {
  id: string;
  car: string;
  host: string;
  dates: string;
  price: number;
  status: string;
  img: string;
  address?: string;
};

export const TRIPS: Trip[] = [
  { id: "t1", car: "Audi TT 2023", host: "Tereza Torres", dates: "Oct 30 — Nov 4", price: 2816.4, status: "In progress", img: CARS[0].img, address: "Pinheiros, São Paulo" },
  { id: "t2", car: "Mini Cooper S 2022", host: "Marcos Lima", dates: "Dec 12 — Dec 14", price: 780, status: "Confirmed", img: CARS[1].img, address: "Vila Madalena, São Paulo" },
];

export type PastTrip = { id: string; car: string; host: string; dates: string; price: number; status: string; img: string; rated: boolean };

export const PAST_TRIPS: PastTrip[] = [
  { id: "p1", car: "BYD Dolphin Mini", host: "Júlia Pereira", dates: "Sep 12 — Sep 14", price: 320, status: "Completed", img: CARS[2].img, rated: true },
  { id: "p2", car: "Jeep Compass", host: "Rafael Souza", dates: "Jul 22 — Jul 25", price: 870, status: "Completed", img: CARS[3].img, rated: true },
  { id: "p3", car: "VW Golf GTI", host: "Lucas Faria", dates: "May 8 — May 9", price: 410, status: "Completed", img: CARS[6].img, rated: false },
];

export type Chat = { id: string; name: string; avatar: string | null; last: string; when: string; unread: number; car: string | null; support?: boolean };

export const CHATS: Chat[] = [
  { id: "c1", name: "Tereza Torres", avatar: CARS[0].host.avatar, last: "You can pick up the car at 2pm, I'll be here waiting :)", when: "now", unread: 2, car: "Audi TT" },
  { id: "c2", name: "Marcos Lima", avatar: CARS[1].host.avatar, last: "Sounds good! All set then. Let me know if anything comes up.", when: "12h", unread: 0, car: "Mini Cooper S" },
  { id: "c3", name: "Kypcar Support", avatar: null, last: "How can we help you today?", when: "yesterday", unread: 0, car: null, support: true },
  { id: "c4", name: "Rafael Souza", avatar: CARS[3].host.avatar, last: "Thanks for the trip! Leave a review when you can ⭐", when: "2d", unread: 0, car: "Jeep Compass" },
];

export type ThreadMessage = { from: "me" | "them"; text: string; when: string };

export const THREAD: ThreadMessage[] = [
  { from: "them", text: "Hey Vitor! I saw you reserved the Audi TT. Everything good on your end?", when: "10:24" },
  { from: "me", text: "All good, Tereza! Can you confirm the pickup address?", when: "10:26" },
  { from: "them", text: "Of course — Rua dos Pinheiros, 312. There's a driveway out front, just park there when you return it.", when: "10:27" },
  { from: "me", text: "Perfect 🙌 See you at 2pm then.", when: "10:30" },
  { from: "them", text: "You can pick up the car at 2pm, I'll be here waiting :)", when: "10:32" },
];

export const FAVORITES: string[] = ["audi-tt", "mercedes-cla", "mini-cooper"];

export function pad(n: number) {
  return n < 10 ? "0" + n : "" + n;
}
