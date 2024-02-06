import { useEffect, useState } from "react";
const UserCard = (props) => {
    /**
     * behind the scenes react maintain in one big object for state
     * unlike multiple items defined as we created.
     */
    const [count, setCount] = useState (0);
    const [count1, setCountOne] = useState (1);

    useEffect (() => {
        //api calls
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