export interface Product {
  id: string;
  nameId: string;
  nameEn: string;
  descriptionId: string;
  descriptionEn: string;
  category: "lanyard" | "kalung" | "anting";
  image: string;
  shopeeLink: string;
  featured: boolean;
  price: number;
}

export const products: Product[] = [
  // ===== LANYARD =====
  {
    id: "lanyard-batik-tanjung",
    nameId: "Lanyard Batik Tanjung",
    nameEn: "Tanjung Batik Lanyard",
    descriptionId: "Lanyard handmade dengan liontin kayu batik lukis motif bunga Tanjung dan manik kaca Jombang. Tali tenun NTT dengan detail yang indah.",
    descriptionEn: "Handmade lanyard featuring a hand-painted Tanjung flower batik wood pendant and Jombang glass beads. Beautiful NTT woven rope details.",
    category: "lanyard",
    image: "/images/products/lanyard-1.png",
    shopeeLink: "https://shopee.co.id/kalungbatik_3iswari",
    featured: true,
    price: 125000,
  },
  {
    id: "lanyard-kopi-jember",
    nameId: "Lanyard Kayu Kopi Jember",
    nameEn: "Jember Coffee Wood Lanyard",
    descriptionId: "Lanyard elegan dari manik kayu kopi Jember yang dipoles halus, dipadukan dengan tali tenun tradisional dan aksen logam.",
    descriptionEn: "Elegant lanyard crafted from polished Jember coffee wood beads, paired with traditional woven rope and metal accents.",
    category: "lanyard",
    image: "/images/products/lanyard-2.png",
    shopeeLink: "https://shopee.co.id/kalungbatik_3iswari",
    featured: false,
    price: 95000,
  },
  {
    id: "lanyard-etnik-nusantara",
    nameId: "Lanyard Etnik Nusantara",
    nameEn: "Nusantara Ethnic Lanyard",
    descriptionId: "Lanyard dengan perpaduan bahan dari berbagai daerah Indonesia — manik kaca, kayu batik, dan tali tenun tradisional.",
    descriptionEn: "Lanyard combining materials from various Indonesian regions — glass beads, batik wood, and traditional woven rope.",
    category: "lanyard",
    image: "/images/products/lanyard-1.png",
    shopeeLink: "https://shopee.co.id/kalungbatik_3iswari",
    featured: false,
    price: 110000,
  },
  {
    id: "lanyard-truntum-gold",
    nameId: "Lanyard Truntum Emas",
    nameEn: "Gold Truntum Lanyard",
    descriptionId: "Lanyard premium dengan liontin kayu batik motif Truntum dicat emas, simbol cinta sejati yang selalu bersemi.",
    descriptionEn: "Premium lanyard with gold-painted Truntum batik wood pendant, symbolizing true love that always blooms.",
    category: "lanyard",
    image: "/images/products/lanyard-2.png",
    shopeeLink: "https://shopee.co.id/kalungbatik_3iswari",
    featured: false,
    price: 145000,
  },

  // ===== KALUNG (NECKLACES) =====
  {
    id: "kalung-batik-jepara",
    nameId: "Kalung Batik Kayu Jepara",
    nameEn: "Jepara Wood Batik Necklace",
    descriptionId: "Kalung statement dari kayu Jepara dengan ukiran motif batik, dipadukan manik kaca warna-warni dan rantai perak.",
    descriptionEn: "Statement necklace crafted from Jepara wood with batik motif carvings, paired with colorful glass beads and silver chain.",
    category: "kalung",
    image: "/images/products/necklace-1.png",
    shopeeLink: "https://shopee.co.id/kalungbatik_3iswari",
    featured: true,
    price: 185000,
  },
  {
    id: "kalung-tenun-manik",
    nameId: "Kalung Tenun Manik Kaca",
    nameEn: "Woven Glass Bead Necklace",
    descriptionId: "Kalung cantik dengan manik kaca Jombang yang dirangkai di atas tali tenun NTT. Setiap manik dipilih dengan cermat untuk harmoni warna.",
    descriptionEn: "Beautiful necklace with Jombang glass beads strung on NTT woven rope. Each bead carefully selected for color harmony.",
    category: "kalung",
    image: "/images/products/necklace-2.png",
    shopeeLink: "https://shopee.co.id/kalungbatik_3iswari",
    featured: false,
    price: 155000,
  },
  {
    id: "kalung-etnik-perunggu",
    nameId: "Kalung Etnik Perunggu",
    nameEn: "Bronze Ethnic Necklace",
    descriptionId: "Kalung etnik dengan liontin perunggu bermotif tradisional, dipadukan dengan manik kayu dan kain tenun.",
    descriptionEn: "Ethnic necklace with traditional bronze pendant, paired with wooden beads and woven fabric.",
    category: "kalung",
    image: "/images/products/necklace-1.png",
    shopeeLink: "https://shopee.co.id/kalungbatik_3iswari",
    featured: false,
    price: 210000,
  },
  {
    id: "kalung-mangajapa-becik",
    nameId: "Kalung Mangajapa Becik",
    nameEn: "Mangajapa Becik Necklace",
    descriptionId: "Kalung spesial edisi 'Mangajapa Becik' — selalu berharap yang baik. Perpaduan manik kaca, kayu kopi, dan batik lukis.",
    descriptionEn: "Special 'Mangajapa Becik' edition necklace — always hoping for the good. Combination of glass beads, coffee wood, and painted batik.",
    category: "kalung",
    image: "/images/products/necklace-2.png",
    shopeeLink: "https://shopee.co.id/kalungbatik_3iswari",
    featured: true,
    price: 195000,
  },
  {
    id: "kalung-tanjung-perak",
    nameId: "Kalung Tanjung Perak",
    nameEn: "Silver Tanjung Necklace",
    descriptionId: "Kalung elegan dengan liontin perak bermotif bunga Tanjung, simbol keindahan Lamita.",
    descriptionEn: "Elegant necklace with silver Tanjung flower pendant, symbol of Lamita's beauty.",
    category: "kalung",
    image: "/images/products/necklace-1.png",
    shopeeLink: "https://shopee.co.id/kalungbatik_3iswari",
    featured: false,
    price: 225000,
  },

  // ===== ANTING (EARRINGS) =====
  {
    id: "anting-batik-bulat",
    nameId: "Anting Batik Bulat",
    nameEn: "Round Batik Earrings",
    descriptionId: "Anting bulat dari kayu batik lukis dengan motif tradisional Jawa, ringan dan nyaman dipakai sehari-hari.",
    descriptionEn: "Round earrings from hand-painted batik wood with traditional Javanese motifs, lightweight and comfortable for daily wear.",
    category: "anting",
    image: "/images/products/earring-1.png",
    shopeeLink: "https://shopee.co.id/kalungbatik_3iswari",
    featured: false,
    price: 75000,
  },
  {
    id: "anting-drop-manik",
    nameId: "Anting Drop Manik Kaca",
    nameEn: "Glass Bead Drop Earrings",
    descriptionId: "Anting juntai elegan dengan manik kaca Jombang warna amber dan aksen kawat perak. Cocok untuk acara spesial.",
    descriptionEn: "Elegant drop earrings with amber Jombang glass beads and silver wire accents. Perfect for special occasions.",
    category: "anting",
    image: "/images/products/earring-2.png",
    shopeeLink: "https://shopee.co.id/kalungbatik_3iswari",
    featured: true,
    price: 89000,
  },
  {
    id: "anting-truntum-mini",
    nameId: "Anting Truntum Mini",
    nameEn: "Mini Truntum Earrings",
    descriptionId: "Anting mungil dengan motif Truntum mini yang dilukis tangan, simbol cinta abadi dalam budaya Jawa.",
    descriptionEn: "Tiny earrings with hand-painted mini Truntum motif, symbol of eternal love in Javanese culture.",
    category: "anting",
    image: "/images/products/earring-1.png",
    shopeeLink: "https://shopee.co.id/kalungbatik_3iswari",
    featured: false,
    price: 65000,
  },
  {
    id: "anting-hoop-etnik",
    nameId: "Anting Hoop Etnik",
    nameEn: "Ethnic Hoop Earrings",
    descriptionId: "Anting hoop dengan balutan kawat dan manik kayu batik kecil, perpaduan modern dan tradisional.",
    descriptionEn: "Hoop earrings with wire wrapping and small batik wood beads, a blend of modern and traditional.",
    category: "anting",
    image: "/images/products/earring-2.png",
    shopeeLink: "https://shopee.co.id/kalungbatik_3iswari",
    featured: false,
    price: 85000,
  },
  {
    id: "anting-daun-tanjung",
    nameId: "Anting Daun Tanjung",
    nameEn: "Tanjung Leaf Earrings",
    descriptionId: "Anting berbentuk daun bunga Tanjung dari logam kuningan antik, terinspirasi dari simbol Lamita.",
    descriptionEn: "Tanjung flower leaf-shaped earrings from antique brass metal, inspired by Lamita's symbol.",
    category: "anting",
    image: "/images/products/earring-1.png",
    shopeeLink: "https://shopee.co.id/kalungbatik_3iswari",
    featured: false,
    price: 95000,
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export const categories = [
  { id: "semua", labelId: "Semua", labelEn: "All" },
  { id: "lanyard", labelId: "Lanyard", labelEn: "Lanyard" },
  { id: "kalung", labelId: "Kalung", labelEn: "Necklace" },
  { id: "anting", labelId: "Anting", labelEn: "Earring" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
