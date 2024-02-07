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
                {
                    /**
                     * how the life cycle will work when there are two instance of of UserClass is used
                     * 
                     *  About constructor is called : 
                        about.js:10 About render is called : 

                            userClass.js:22 Sud-class : UserClass constructor is called : 
                            userClass.js:28 Sud-class:  UserClass render is called : 
                            
                            userClass.js:22 Mad-class : UserClass constructor is called : 
                            userClass.js:28 Mad-class:  UserClass render is called : 
                            
                            userClass.js:25 Sud-class :UserClass componentDidMount is called : 
                            userClass.js:25 Mad-class :UserClass componentDidMount is called : 
                            
                        about.js:46 About componentDidMount is called : 

                        why life cycle method works like this ? 

                        Something known as react lifecycle methods diagram 

                        project.wojtekmaj.pl/react-lifecycle-method-diagram

                        there are two phase 

                        render phase 
                            when comp is mounting - first constructor then render is call

                        commit phase 
                            then react actually updates the dom and componentdidmount is called 


                        recat optimizes the render phase for these two child, react will batch the render pahse for these two chile

                        these two child render pahse and commit phase will happen togather

                        calls render phase for 
                            first child
                            second child

                        commit phase is batched togather.


                        once the render phase is batched togathen, the commit phase will happen togather

                        why its like that ?  react is batching up if for multiple chiled 

                        once commit phase starts react tries to updates the dom 

                        dom manupilation is a costly job.

                        everything is happening inside a virtula dom 


                        commit phase takes time, it batchs the child comps are rendered, 

                        manipulatuion DOM is a expenseve task.

                        react tries to batch up the jobs


                     */
                }
                <UserClass name={"Mad-class"} location="Mlore"></UserClass>

                <UserCard name={"Card-class"} location="Mlore"></UserCard>
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
     * why do we need componentDidMount is needed  ? -  used to make api calls, why inside componentDidMount? after the component is loaded into the dom,
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