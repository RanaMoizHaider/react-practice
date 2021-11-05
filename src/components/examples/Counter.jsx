import React from 'react'

const Counter = () => {

    // let count = 5;
    const [count,setCount] = React.useState(5);

    const countUp = () => {
        // count++;
        // alert(count);
        setCount(count + 1);
    }

    const countDown = () => {
        setCount(count - 1);
    }
    return ( 
        <div>
            <h5>My Counter</h5>
            <button onClick={countDown}>-</button> {count} <button onClick={countUp}>+</button> <br />
            Current count value is {count}
            {count<5 && <div>Count is in dangerous state.</div>}

        </div>
     );
}
 
export default Counter;