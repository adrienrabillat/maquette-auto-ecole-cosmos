import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEOHead({ title, description, path = '/', keywords }) {
  const baseUrl = 'https://www.auto-moto-ecole-idf.fr';
  const fullTitle = title
    ? `${title} | Auto-École Cosmos Levallois-Perret`
    : 'Auto-École Cosmos | Permis B & Moto à Levallois-Perret | 4.4★ Google';

  const defaultKeywords = "auto-école, Levallois-Perret, permis B, permis moto, code de la route, formation accélérée, conduite, 92300, Hauts-de-Seine, Cosmos";
  const metaKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={`${baseUrl}${path}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${baseUrl}${path}`} />
    </Helmet>
  );
}
