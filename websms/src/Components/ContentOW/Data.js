import React, {useState, useEffect} from "react";

const Data = (imageSlider) => {
  
  return (
    <div className="container" style={{ display: 'block'}}>
        {imageSlider.map((data, index) => (
          <div key={index}>
            <h1>{data.prod}</h1>
            <h2>{data.name}</h2>
            <h3>{data.desc}</h3>
          </div> 
        ))}
    </div>
  );
};
//  {imageSlider[0].data[0].product.map((data, index) => (
//         <div key={index}>
//           <h1>{data.name}</h1>
//           <h2>{data.desc}</h2>
//         </div>
//       ))}
export default Data;
