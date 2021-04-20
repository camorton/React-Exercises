import { useState } from 'react';
import './Switch.css';

function Switch() {
   const [ on, setOn ] = useState(false);
   
    
    return (
    <div className="Switch">
        <h3>Switch</h3>
        <p>{on ? "on" : "off"}</p>
        <p>
            <button type="button" onClick={() => setOn(true)}>On</button>
            <button type="button" onClick={() => setOn(false)}>Off</button>
        </p>
    </div>
    );
}

export default Switch;