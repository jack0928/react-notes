import React from "react";
import Pizza from "./Pizza";

function PapaJohns(props) {
    return (
        <div>
            <Pizza name="치즈 피자" price={10000}/>
            <Pizza name="올미트" price={15000}/>
            <Pizza name="스파이시 치킨 랜치" price={20000}/>
            <Pizza name="존스 페이버릿" price={25000}/>
        </div>
    );
}

export default PapaJohns;