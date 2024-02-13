import { blurhashToCssGradientString } from "@unpic/placeholder";
import { Image } from "@unpic/react";

export default function ImageColorDominant({ src, alt, blurhash }) {
  const placeholder = blurhashToCssGradientString(blurhash);
  return <Image className="rounded h-auto max-w-full" layout="constrained" width={800} height={600} src={src} alt={alt} background={placeholder} />;
}