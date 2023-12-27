import React, { useRef } from 'react'

function Useref() {

     const inputRef=useRef(null)

     const handleInput = () => {

          inputRef.current.value='1000';
          inputRef.current.style.display='none';

     }

  return (
    <div>
          <input type="text" ref={inputRef} />
          <button onClick={handleInput}>Click</button>
    </div>
  )
}

export default Useref