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
        <div style={{color:"white", backgroundColor:"black"}}>
        {/* <div> */}
            <h5>My Counter</h5>
            <button onClick={countDown} className='btn btn-danger'>-</button> {count} <button onClick={countUp} className='btn btn-success'>+</button> <br />
            Current count value is {count}
            {count < 5 && <div>Count is in dangerous state.</div>}
            {count < 5 ? <div>Red Counter</div> : <div>Green Counter</div>}
            <hr />
        </div>
     );
}
 
export default Counter;