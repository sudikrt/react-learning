import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    //its a special local variable 
    // when the state variable changes react will render the components.
    const [btnName, setBtnName] = useState ('Login');

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}>
                </img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Cart</li>
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