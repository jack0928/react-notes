import React from "react";
import ReactDOM from 'react-dom/client';

// Root DOM 노드 가져오기
const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
    const element = (
        <div>
            <h1>React Element Update Test</h1>
            <h2>지금 시간은 {new Date().toLocaleTimeString()}입니다.</h2>
        </div>
    )

    // Root DOM 노드에 리액트 엘리먼트 렌더링
    root.render(element);

}

// 1초마다 업데이트
setInterval(tick, 1000);

export default tick; 

