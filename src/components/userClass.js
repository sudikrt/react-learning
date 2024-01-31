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
            count1 : 1
        };
    }
    render () {
        //this can be destructured
        const {name, location} = this.props;
        return (
            <div className="user-card">
                <h1>count : {this.state.count}</h1> {/*refer the state variable like this */}
                <h1>count : {this.state.count1}</h1>  
                <h2>Name : {this.props.name}</h2>
                <h2>Location : {location}</h2>
                <h2>Contact : @sud</h2>
            </div>
        );
    }
}
export default UserClass;