import React from "react";

function Pizza(props) {
    return (
        <div>
            <h1>{`이 피자의 이름은 ${props.name}입니다.`}</h1>
            <h2>{`${props.price}원만 저에게 주시면 이 맛있는 걸 드실 수 있습니다.`}</h2>
        </div>
    )
}

export default Pizza;