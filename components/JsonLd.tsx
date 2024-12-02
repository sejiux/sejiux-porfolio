import Script from 'next/script';

interface JsonLdProps {
  data: Record<string, unknown>
}

const JsonLd = ({ data }: JsonLdProps) => (
  <Script
    id="json-ld"
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default JsonLd;