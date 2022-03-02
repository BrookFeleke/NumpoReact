import React, { useState } from "react";
import ResultBlock from "./ResultBlock";

function History({ n, p, raray, f }) {
  const [histArray, setHistArray] = useState([[]]);
  
      // setHistArray([...histArray, raray]);
      // var hey = [...histArray]
      // hey.map((single, index) => {
      //   return <ResultBlock resultArray={[1, 2, 3, 4]} n={n} p={p} />;
      // });
 console.log("rarttyy" + raray)
  const comp = raray.map((single, index)=>{
    if(f)
    return <ResultBlock resultArray={single} n={single[4]} p={single[5]}/>
  })
 
  return (
    <div className="history">
      <div className="history-inner">{comp}</div>
      <button className="back-button">Back</button>
    </div>
  );
}

export default History;
