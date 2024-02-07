//if it extends React.Component its a class based component
//it has render () methods return the JSX
import React from "react";

/**
 * state is created when you create a instance of a class
 * 
 * rendering a functional comp => mountiong that function to the web page
 * 
 * Loading a class based comp on to web page means => creating a instance of the class, 
 * its constructor is called, and its best place to create state variable 
 * 
 * this.state variable is reserved word
 */
class UserClass extends React.Component {
    constructor (props) {
        super (props);// imp because : needs to instiate the Extended comp initialized: 
        this.state = {
            count : 0,
            count1 : 1,
            userInfo : {
                name : 'Dummy Name',
                location: 'default'
            }
        };
        console.log (this.props.name + ' : UserClass constructor is called : ');
    }

    /**
     * ---Its a mounting life cycle ----
     * constructor is called
     * render happens with dummy data
     * componentDidMount is invoked -> we make api call inside
     * it will set the state.
     * ---update process---
     * now it trigger reconcialliation process - update process
     * now it rerenders data 
     * render method begins with API Data.
     * now react updates the DOM 
     * then HTML is loaded with new API Data
     * then it will call componentDidUpdate ()
     */
    componentDidUpdate () {
        console.log (this.props.name + ' :UserClass componentDidUpdate is called : ');
    }

    componentWillUnmount () {
        clearInterval (this.interval);
        //called just before our component is unmounting
        console.log (this.props.name + ' :UserClass componentWillUnmount is called : ');
        //called when we leaving the page / unmounting 
    }

    async componentDidMount () {
        /**
         * now if I move to home page its still running the interval
         * It started two intervals
         * it is not reloading the page.
         * every time comp is instansiated it will create set interval
         */
        this.interval = setInterval (() => {
            console.log ('React op')
        }, 1000);
        

        console.log (this.props.name + ' :UserClass componentDidMount is called : ');
        const data = await fetch ('https://api.github.com/users/sudikrt');
        const json  = await data.json ();

        this.setState (
            {
                userInfo : json
            }
        );
        console.log (json);
    }
    render () {
        console.log (this.props.name + ':  UserClass render is called : ');
        //this can be destructured
        const {name, location} = this.props;
        const {userInfo} = this.state;
        return (
            <div className="user-card">
                <h1>count : {this.state.count}</h1> {/*refer the state variable like this */}
                <h1>count : {this.state.count1}</h1>  
                <h2>Name : {this.props.name}</h2>
                <h2>userInfo login : {userInfo.login}</h2>
                <h2>userInfo location : {userInfo.location}</h2>
                <h2>Location : {location}</h2>
                <h2>Contact : @sud</h2>
                <img src={userInfo.avatar_url}></img>
                <button onClick={(e) => {
                    /**
                     * we never modify the state variables directly
                     * like this.state.count ++
                     * you can update both state variable togather
                     * state variable is a big object, it will update only the passed valiables - values like it will update the portion of it. not all the other variables
                     */
                    this.setState ({count : ++this.state.count});
                }}>Increment</button>
            </div>
        );
    }
}
export default UserClass;