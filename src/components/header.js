import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

{
    /**
     * Link component;
     */
}
const Header = () => {
    //its a special local variable 
    // when the state variable changes react will render the components.
    //never use useState outside of yoru component
    //use at the top of the begining
    //never create inside if, can create incosistances 
    //never create inside loop

    const [btnName, setBtnName] = useState ('Login');

    //when useEffect called after every render of the component
    //2nd param- dependecny array changes the behaviours of its renders
    //its not mandatory for 2nd param 
    //if no dependency array useEffect is called every render
    //
    // what if there is a empty dependecy array - then useEffect is called on only initial render. 
    //and jsut once when the component is rendered
    //
    // what if we put somthing inside the array - it will be only be called when dependency changes
    //[btnName]- called everytime if [btnName] react changes useEffect is called

    useEffect (() => {

    }, [btnName]);

    const onlineStatus = useOnlineStatus ();
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img className="w-32" src={LOGO_URL}>
                </img>
            </div>
            <div className="flex items-center">
                <ul className="flex m-4 p-4">
                    <li className="px-4">
                        Online Status : {onlineStatus ? '✅' : '🔴'}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/aboutus">About us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contactus">Contact us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <button className="login-btn" onClick={() => {
                        setBtnName (btnName === 'Login' ? 'Logout' : 'Login');
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;
// export {Header}