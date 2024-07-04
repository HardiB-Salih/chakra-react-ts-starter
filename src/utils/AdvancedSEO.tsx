import React from "react";
import { Helmet } from "react-helmet-async";

enum TwitterCard {
  Summary = "summary",
  SummaryLargeImage = "summary_large_image",
  App = "app",
  Player = "player",
}

enum OgType {
  WEBSITE = "website",
  ARTICLE = "article",
  BOOK = "book",
  MOVIE = "movie",
  MUSIC_SONG = "music.song",
  MUSIC_ALBUM = "music.album",
  PLACE = "place",
  PROFILE = "profile",
  EVENT = "event",
}

interface AdvancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;

  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: OgType;

  twitterCard?: TwitterCard;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;

  themeColor?: string;
}

const AdvancedSEO: React.FC<AdvancedSEOProps> = ({
  title = "Default Title",
  description = "Default Description",
  keywords = "Default Keywords",
  author = "Default Author",

  ogTitle = "Default OG Title",
  ogDescription = "Default OG Description",
  ogImage = "Default OG Image",
  ogUrl = "Default OG URL",
  ogType = OgType.WEBSITE,

  twitterCard = TwitterCard.Summary,
  twitterTitle = "Default Twitter Title",
  twitterDescription = "Default Twitter Description",
  twitterImage = "Default Twitter Image",

  themeColor = "#34160A",
}) => {
  return (
    <Helmet>
      {/* Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph (OG) Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content={ogType} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={twitterImage} />

      {/* Canonical Link */}
      {/* <link rel="canonical" href={'https://example.com/default-page-url'} /> */}

      {/* Other Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <meta name="robots" content={'index, follow'} /> */}

      {/* RSS Feed */}
      {/* <link
        rel="alternate"
        type="application/rss+xml"
        title="Your RSS Feed"
        href="https://example.com/default-rss-feed.xml"
      /> */}

      {/* Favicon */}
      {/* <link rel="icon" href={'/favicon.ico'} /> */}
      <meta name="theme-color" content={themeColor} />
    </Helmet>
  );
};

export default AdvancedSEO;
