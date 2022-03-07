import "./snake.css";

const Box = () => {
    return <div className="box"></div>;
};

const Snake = () => {
    const array = [];
    for (let i = 0; i < 99; i++) {
        array.push(<Box />);
    }

    //    let ar=  array.map((el, i) => {
    //         return el;
    //     });

    //     let a = array.forEach((el, i) => {
    //         return el;
    //     });
    return array.map((el, i) => {
        return el;
    });
};
export { Snake };
