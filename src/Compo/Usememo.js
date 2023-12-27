
import React, { useMemo, useState } from 'react'

function Usememo() {

     const [count,setcount]=useState(0);
     const [item,setitem]=useState(0);

     const memorized = useMemo(() => {
          console.log("CNT = "+(count*10));
          return count*count;
     })

return (
<>
     <center>
          <h1>Count : {count}</h1>
          <h1>Square : {memorized}</h1>
          <br />
          <button onClick={()=>{setcount(count+1)}}>Count Update</button>
          <button onClick={()=>{setitem(item+1)}}>Item Update</button>
     </center>
</>
)
}

export default Usememo