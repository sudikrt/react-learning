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
        console.log (this.props.name + ' : UserClass constructor is called : ');
    }
    componentDidMount () {
        console.log (this.props.name + ' :UserClass componentDidMount is called : ');
    }
    render () {
        console.log (this.props.name + ':  UserClass render is called : ');
        //this can be destructured
        const {name, location} = this.props;
        return (
            <div className="user-card">
                <h1>count : {this.state.count}</h1> {/*refer the state variable like this */}
                <h1>count : {this.state.count1}</h1>  
                <h2>Name : {this.props.name}</h2>
                <h2>Location : {location}</h2>
                <h2>Contact : @sud</h2>
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