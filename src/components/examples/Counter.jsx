import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add'

const Counter = (props) => {

    // let count = 5;
    const [count,setCount] = React.useState(5);
    // let color = props.theme === "light" ? "black" : "white";
    // let backgroundColor = props.theme === "light" ? "white" : "black";

    let isLight = props.theme === "light";

    const countUp = () => {
        // count++;
        // alert(count);
        setCount(count + 1);
    }

    const countDown = () => {
        setCount(count - 1);
    }
    return ( 
        // <div style={{color:color, backgroundColor:backgroundColor}}>
        <div style={{color:isLight?"black":"white", backgroundColor:isLight?"white":"black"}}>
        {/* <div> */}
            <h5>My Counter</h5>
            <Button onClick={countDown} varient="contained" color="secondary">-</Button> {count} <Button onClick={countUp} varient="contained" color="primary"><AddIcon /></Button> <br />
            Current count value is {count}
            {count < 5 && <div>Count is in dangerous state.</div>}
            {count < 5 ? <div>Red Counter</div> : <div>Green Counter</div>}
            <hr />
        </div>
     );
}
 
export default Counter;