import { useEffect, useState } from "react";
const UserCard = (props) => {
    /**
     * behind the scenes react maintain in one big object for state
     * unlike multiple items defined as we created.
     */
    const [count, setCount] = useState (0);
    const [count1, setCountOne] = useState (1);

    /**
     * what happens if setInterval inside useEffect ?
     */
    useEffect (() => {
        //api calls
        const interval = setInterval (() => {
            console.log ('setInterval : userCard');
        },1000) 

        /**
         * it will return a function called only when 
         * called when unmounting the component 
         */
        return () => {
            console.log ('useEffect. return');
            clearInterval (interval);
        };
    }, []);

    async function getUserDetails () {
        const data = await fetch ('https://api.github.com/users/sudikrt');
        const json  = await data.json ();

        console.log (json);
    }
    return (
        <div className="user-card">
            <h1> count = {count}</h1>
            <h1> count = {count1}</h1>
            <h2>Name : {props.name}</h2>
            <h2>Location : {props.location}</h2>
            <h2>Contact : @sud</h2>
        </div>
    )
}
export default UserCard;