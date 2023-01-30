import React, { useLayoutEffect, useRef, useState } from "react";
import classes from "./CommonImage.module.scss";

export const CommonImage = ({ scale = 1, css, options, ...atr }) => {
  const [loaded, setLoaded] = useState(false);
  const img = useRef(null);

  useLayoutEffect(() => {
    if (scale) {
      const baseScale =
        img.current.naturalHeight > 1500
          ? 0.3
          : img.current.naturalHeight > 1000
          ? 0.5
          : img.current.naturalHeight > 800
          ? 0.7
          : img.current.naturalHeight > 600
          ? 0.85
          : 1;
      const width = img.current.naturalWidth * scale * baseScale;
      const height = img.current.naturalHeight * scale * baseScale;
      img.current.width = width;
      img.current.height = height;
    }
  }, [loaded, setLoaded]);

  return (
    <img
      className={classes.commonImage}
      {...atr}
      style={{ ...css }}
      src={options.src}
      alt={options.alt}
      ref={img}
      onLoad={() => setLoaded(true)}
    ></img>
  );
};
