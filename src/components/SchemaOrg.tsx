import React from "react";
import { COMPANY } from "@/config/company";

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY.name,
    "legalName": COMPANY.corporateName,
    "image": "https://pontualbalancas.com.br/images/fachada-pontual-balancas.jpg",
    "@id": "https://pontualbalancas.com.br",
    "url": "https://pontualbalancas.com.br",
    "telephone": COMPANY.phone.display,
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY.address.street,
      "addressLocality": COMPANY.address.city,
      "addressRegion": COMPANY.address.state,
      "postalCode": COMPANY.address.cep,
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -18.8962299,
      "longitude": -48.2936932
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": COMPANY.reviews.rating,
      "reviewCount": COMPANY.reviews.count,
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "Venda, montagem, calibração com caminhão de pesos padrão INMETRO e assistência técnica de balanças de grande porte (rodoviária, industrial, ferroviária e gado) em Uberlândia e Triângulo Mineiro."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

