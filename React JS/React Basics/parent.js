import boxFunc from "./box.js";
import circleFunc from "./circle.js";

parent = () => {
    return React.createElement('div' , null , [boxFunc() , circleFunc()])
}

export default parent ;