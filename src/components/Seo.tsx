import { Helmet } from "react-helmet-async";

const SITE_URL = "https://tvs.sarfpazari.com";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export const Seo = ({
  title,
  description,
  path,
  type = "website",
  image,
  jsonLd,
}: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  const ogImage =
    image ?? "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=1200";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};