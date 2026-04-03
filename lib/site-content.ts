export const siteContent = {
  name: "Restaurant des Promeneurs",
  village: "Nolhac",
  postcodeCity: "43350 Saint-Paulien",
  region: "Haute-Loire",
  near: "À quelques minutes du Puy-en-Velay",
  phoneDisplay: "04 71 00 43 30",
  phoneLink: "tel:+33471004330",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Restaurant+des+Promeneurs+Nolhac+43350+Saint-Paulien",
  hours: [
    "Ouvert en général les midis toute l’année.",
    "Samedis et dimanches sur réservation.",
    "Un appel avant de venir reste le meilleur réflexe.",
  ],
  heroTitle: "Il existe des lieux que l’on ne découvre pas par hasard.",
  heroSubtitle:
    "Une route, un virage, une porte ouverte. Et soudain, la sensation d’arriver quelque part pour de vrai.",
  pathFragments: [
    {
      title: "L’appel",
      text: "Ce n’est pas une destination tapageuse. C’est une halte qui se laisse approcher.",
    },
    {
      title: "La dérive",
      text: "Le regard s’attarde, le temps ralentit, et le chemin fait un pas de côté.",
    },
    {
      title: "Le seuil",
      text: "Des voix, des rires, une table prête. On comprend que l’essentiel est ici.",
    },
  ],
  soulFragments: [
    "Un accueil qui vous reconnaît avant même de vous connaître.",
    "Une joie simple, solaire, jamais forcée.",
    "La campagne vivante, dans ce qu’elle a de plus sincère.",
    "Une maison où l’on partage plus qu’un repas.",
  ],
  signs: [
    {
      title: "Cuisine de tradition",
      text: "Des assiettes franches, familiales, portées par le goût des choses bien faites.",
    },
    {
      title: "Cadre soigné",
      text: "Matières, lumière, détails : une élégance rustique sans ostentation.",
    },
    {
      title: "Halte des connaisseurs",
      text: "On y vient souvent par recommandation. On y revient par évidence.",
    },
    {
      title: "Signe d’atelier",
      text: "Par endroits, des couleurs et des traces de main rappellent qu’ici, le lieu a une personnalité.",
    },
  ],
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Restaurant des Promeneurs",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nolhac",
    postalCode: "43350",
    addressLocality: "Saint-Paulien",
    addressRegion: "Haute-Loire",
    addressCountry: "FR",
  },
  areaServed: "Le Puy-en-Velay et environs",
  telephone: "+33471004330",
  servesCuisine: ["Cuisine traditionnelle", "Cuisine familiale"],
  url: "https://restaurant-des-promeneurs.vercel.app",
  priceRange: "€€",
};
