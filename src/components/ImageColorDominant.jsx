import React from "react";
import Color from "color-thief-react";
import { Image } from "@unpic/react";

export default function ImageColorDominant({ imgSrc, alt, layout, width, height }) {

  return (
    <>
      <Color src={imgSrc} crossOrigin="anonymous" format="hex">
        {({ data, loading }) => {
          const containerStyle = {
            backgroundColor: loading ? data : data,
          };

          return (
            <div className="rounded mb-4" style={containerStyle}>
              {loading ? (
                <div className="rounded" style={containerStyle}></div>
              ) : (
                <Image className="rounded" layout={layout} src={imgSrc} alt={alt} width={width} height={height} />
              )}
            </div>
          );
        }}
      </Color>
    </>
  );
}
