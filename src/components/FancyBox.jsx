import React, { useRef, useEffect } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function Fancybox(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return (
    <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4 p-4" ref={containerRef}>
      {props.children}
    </div>
  );
}

export default Fancybox;

// <div className="row">
//   <div className="column">
//     <img src="https://www.w3schools.com/w3images/wedding.jpg" className=' w-full' />
//     <img src="https://www.w3schools.com/w3images/rocks.jpg" className=' w-full' />
//     <img src="https://www.w3schools.com/w3images/falls2.jpg" className=' w-full' />
//     <img src="https://www.w3schools.com/w3images/paris.jpg" className=' w-full' />
//     <img src="https://www.w3schools.com/w3images/nature.jpg" className=' w-full' />
//     <img src="https://www.w3schools.com/w3images/mist.jpg" className=' w-full' />
//     <img src="https://www.w3schools.com/w3images/paris.jpg" className=' w-full' />
//   </div>
//   <div className="column">
//     <img src="https://www.w3schools.com/w3images/underwater.jpg" className=' w-full' />
//     <img src="https://www.w3schools.com/w3images/ocean.jpg" className=' w-full' />
//     <img src="https://www.w3schools.com/w3images/wedding.jpg" className=' w-full' />
//     <img src="https://www.w3schools.com/w3images/mountainskies.jpg" className=' w-full' />
//     <img src="https://www.w3schools.com/w3images/rocks.jpg" className=' w-full' />
//     <img src="https://www.w3schools.com/w3images/underwater.jpg" className=' w-full' />
//   </div>
//   <div className="column">
//     <img src="https://www.w3schools.com/w3images/wedding.jpg" className=' w-full' />
//     <img src="https://www.w3schools.com/w3images/rocks.jpg" className=' w-full' />
//     <img src="https://www.w3schools.com/w3images/falls2.jpg" className=' w-full' />
//     <img src="https://www.w3schools.com/w3images/paris.jpg" className=' w-full' />
//     <img src="https://www.w3schools.com/w3images/nature.jpg" className=' w-full' />
//     <img src="https://www.w3schools.com/w3images/mist.jpg" className=' w-full' />
//     <img src="https://www.w3schools.com/w3images/paris.jpg" className=' w-full' />
//   </div>
//   <div className="column">
//     <img src="https://www.w3schools.com/w3images/underwater.jpg" className=' w-full' />
//     <img src="https://www.w3schools.com/w3images/ocean.jpg" className=' w-full' />
//     <img src="https://www.w3schools.com/w3images/wedding.jpg" className=' w-full' />
//     <img src="https://www.w3schools.com/w3images/mountainskies.jpg" className=' w-full' />
//     <img src="https://www.w3schools.com/w3images/rocks.jpg" className=' w-full' />
//     <img src="https://www.w3schools.com/w3images/underwater.jpg" className=' w-full' />
//   </div>
// </div>