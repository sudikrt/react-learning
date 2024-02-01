import React from "react";
import UserCard from "./usercard";
import UserClass from "./userClass";
class About extends React.Component {
    constructor (props) {
        super (props);
        console.log ('About constructor is called : ');
    }
    render () {
        console.log ('About render is called : ');
        return (
            <div>
                <h1>About us</h1>
                <UserClass name={"Sud-class"} location="Mlore"></UserClass>
                {
                    /**
                     * for example first About comp's is invoked,
                     * first thing when the instance of the class loads, then constructor is invoked
                     * then render is called 
                     */
                }
            </div> 
        )
    }

    /**
     * Order in which life cycle methods are called.
     *  1. constructor
     *  2. render
     *  3. componentDidMount
     * notifies the component when the comp is loader, called after the current comp loading completes
     * called when the comp is mounted on to the web page
     * 
     * once all the children componentDidMount () called, then the parent componentDidMount is called
     * 
     * why do we need componentDidMount is needed  ? -  used to make api calls after the component is loaded into the dom,
     * 
     */
    componentDidMount () {
        console.log ('About componentDidMount is called : ');
    }
}
// const About = () => {
//     return (
//         <div>
//             <h1>About us</h1>
//             <UserCard name={"Sud-functional"} location="Blore"></UserCard>
//             <UserClass name={"Sud-class"} location="Mlore"></UserClass>
//             {
//                 /**
//                  * for example first About comp's is invoked,
//                  * first thing when the instance of the class loads, then constructor is invoked
//                  * then render is called 
//                  */
//             }
//         </div>
//     );
// }
export default About;