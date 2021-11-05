import React from 'react'

const Counter = () => {

    let count = 5;
    return ( 
        <div>
            <h5>My Counter</h5>
            <button>-</button> {count} <button>+</button> <br />
            Current count value is {count}

        </div>
     );
}
 
export default Counter;