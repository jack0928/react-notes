// React 함수형 컴포넌트로 버튼을 생성
function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false); // useState(false)를 사용하여 클릭 여부(isClicked)를 상태로 관리

    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? 'Clicked' : 'Click here!'
    )
}

const domContainer = document.querySelector('#root'); // DOM에서 id가 'root'인 요소 선택
ReactDOM.render(React.createElement(MyButton), domContainer); // <div id="root"> 내부에 MyButton 컴포넌트를 렌더링.