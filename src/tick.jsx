import React from "react";
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
    const element = (
        <div>
            <h1>React Element Update Test</h1>
            <h2>지금 시간은 {new Date().toLocaleTimeString()}입니다.</h2>
        </div>
    )

    root.render(element);

}

setInterval(tick, 1000);

export default tick; 

