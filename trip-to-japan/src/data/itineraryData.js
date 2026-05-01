import img1 from "../assets/1 img.jpg";
import img2 from "../assets/2 img.jpg";
import img3 from "../assets/3 img.jpg";
import img4 from "../assets/4 img.jpg";
import img5 from "../assets/5 img.jpg";
import img6 from "../assets/6 img.jpeg";
import sensojiImg from "../assets/sensoji.png";
import goldenRouteImg from "../assets/golden-route.png";

export const japanItinerary = [
  {
    day: 1,
    title: "Arrival Tokyo",
    description: "Welcome to Japan! Upon arrival at Narita or Haneda Airport, enjoy a private airport pick-up and transfer to your hotel. Spend the rest of the day at leisure, relaxing after your flight.",
    highlights: ["Arrival in Tokyo", "Private airport pick-up", "Leisure time"],
    image: img1,
    location: "Tokyo"
  },
  {
    day: 2,
    title: "Tokyo City Tour",
    description: "Discover the vibrant highlights of Tokyo. Visit the Imperial Palace gardens, the historic Asakusa Senso-ji Temple, and experience the energy of the world-famous Shibuya Crossing.",
    highlights: ["Imperial Palace", "Asakusa Temple", "Shibuya Crossing"],
    image: sensojiImg,
    location: "Tokyo"
  },
  {
    day: 3,
    title: "Mt. Fuji & Hakone",
    description: "Experience the natural beauty of Mt. Fuji and Hakone. Take a scenic cruise on Lake Ashi and enjoy breathtaking views from the Mt. Fuji 5th Station.",
    highlights: ["Mt. Fuji 5th Station", "Lake Ashi Cruise", "Hakone Ropeway"],
    image: goldenRouteImg,
    location: "Mt. Fuji / Hakone"
  },
  {
    day: 4,
    title: "Kyoto Heritage",
    description: "Board the high-speed Shinkansen to Kyoto. Explore the stunning Golden Pavilion (Kinkaku-ji) and take a walk through the atmospheric Gion district.",
    highlights: ["Bullet Train Experience", "Kinkaku-ji Temple", "Gion District"],
    image: img2,
    location: "Kyoto"
  },
  {
    day: 5,
    title: "Arashiyama & Nara",
    description: "Visit the iconic Arashiyama Bamboo Grove. In the afternoon, head to Nara to see the Great Buddha at Todai-ji and meet the friendly deer in Nara Park.",
    highlights: ["Bamboo Grove", "Nara Deer Park", "Todai-ji Temple"],
    image: img3,
    location: "Kyoto / Nara"
  },
  {
    day: 6,
    title: "Hiroshima & Miyajima",
    description: "Travel to Hiroshima to visit the Peace Memorial Park. Then, take a ferry to Miyajima Island to witness the legendary Floating Torii Gate of Itsukushima Shrine.",
    highlights: ["Peace Memorial", "Miyajima Island", "Floating Torii Gate"],
    image: img4,
    location: "Hiroshima / Miyajima"
  },
  {
    day: 7,
    title: "Osaka Exploration",
    description: "Discover the majestic Osaka Castle and spend the evening exploring the vibrant street food and neon signs of Dotonbori.",
    highlights: ["Osaka Castle", "Dotonbori Street Food", "Umeda Sky Building"],
    image: img5,
    location: "Osaka"
  },
  {
    day: 8,
    title: "Departure",
    description: "Your journey concludes today. Enjoy some last-minute shopping before your private transfer to Kansai International Airport (KIX) for your flight home.",
    highlights: ["Last-minute shopping", "Private airport transfer", "Departure"],
    image: img6,
    location: "Osaka (KIX)"
  }
];
