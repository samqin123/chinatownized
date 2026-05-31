type Props = {
  jsonLd: Record<string, unknown> | Record<string, unknown>[];
};

export default function SeoJsonLd({ jsonLd }: Props) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
