import "../styles/redBlue.css";
import { useState } from "react";

const RedBlue = () => {
    const [state, setState] = useState({
        count1: 0,
        count2: 0,
    });

    let { count1, count2 } = state;

    const red = () => {
        setState({ ...state, count1: count1 + 1 });
    };
    const blue = () => {
        setState({ ...state, count2: count2 + 1 });
    };

    const a = () => {
        const sum = count1 + count2;
        
    }
    return (
        <>
            <div className="flex column">
                <div className="container1 flex space-between center">
                    <div className="count1">{count1}</div>
                    <button>reset</button>
                    <div className="count2">{count2}</div>
                </div>
                <div className="container2 flex center">
                    <div className="red" onClick={red} ></div>
                    <div className="blue"  onClick={blue}></div>
                </div>
            </div>
        </>
    );
};

export default RedBlue;
