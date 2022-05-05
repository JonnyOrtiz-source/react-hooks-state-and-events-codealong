import React, { useState } from 'react';

function Toggle() {
   /*
Thinking in React
  - Is data passed as a prop? If so, no state
  - Can you compute data based on any other state or props in your component? If so, no state
  - Does data remain unchanged over time? If so, no state
*/
   const [toggle, setToggle] = useState(false);
   function handleClick() {
      let newToggle = !toggle;
      setToggle(newToggle); // my solution
      // setToggle((toggle) => !toggle) // Canvas solution
   }
   const color = toggle ? 'red' : 'white';

   return (
      <button style={{ background: color }} onClick={handleClick}>
         {toggle ? 'ON' : 'OFF'}{' '}
      </button>
   );
}

export default Toggle;
