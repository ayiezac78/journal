import { blurhashToCssGradientString } from "@unpic/placeholder";
import { Image } from "@unpic/react";

export default function ImageColorDominant({ src, alt, blurhash, width, height, layout }) {
  const placeholder = blurhashToCssGradientString(blurhash);
  return <Image className="rounded h-auto max-w-full" layout={layout} width={width} height={height} src={src} alt={alt} background={placeholder} />;
}