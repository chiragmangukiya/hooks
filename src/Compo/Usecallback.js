import React, { useCallback, useState } from 'react'

function Usecallback() {

     const [count,setcount]=useState(0);

     const increment = () => {
          setcount(count + 1)
          console.log(count);
     }

     const memo = useCallback(()=>{
          setcount(count+1)
          console.log(count);
     },[count])

  return (
    <>

          <h1>{count}</h1>

          <ChildCompo increment={increment} />
          <ChildCompo increment={memo} />

          {/* <button onClick={increment}>Increment</button>
          <button onClick={memo}>Increment</button> */}

    </>
  )
}

function ChildCompo({increment}){
     return <button onClick={increment}>Increment</button>
}

export default Usecallback