import { useState } from 'react';
import './Counter.css';

function Counter() {
    // define all the data that Counter has to keep track of
    // count is the variable=THE DATA, setCount is what it will do, the function you're using to change data=HOW YOU WILL CHANGE THE DATA, 0 is where it will start 
    // state is the DATA that goes with that component
    //process is called array destructuring-set two variables in one line from the useState
    const [ count, setCount ] = useState(5);

function handleReset() {
    setCount(0); //use setCount to modify the state at runtime
}
function handleUp() {
    setCount(prevCount => prevCount + 1);
}
//like in HTML, classes in React are specified as a string, separated by spaces.
let classes = "Counter";
if (count < 0) {
    classes += " negative";
}

// this JSX should come last because it's what you're displaying
    return (
    <div className={classes}>
        <h3>Counter</h3>
        <p className="Counter__count">{count}</p> {/* will insert count variable (use state) here */}
        <p>
            {/* another way to do it; CANNOT modify the variable directly= count ++, MUST USE PREV */}
            <button type="button" onClick={() => setCount(prev => prev - 1)}>Down</button>
            {/* the onClick takes on a function; only shows reset if the value is NOT zero */}
            {count !== 0 && <button type="button" onClick={handleReset}>Reset</button>}
            <button type="button" onClick={handleUp}>Up</button>
        </p>
    </div>
    );
}

export default Counter;