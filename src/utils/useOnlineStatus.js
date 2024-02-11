import { useEffect, useState } from "react";

/**
 * no need to mandatorly specify use in the custom hook name
 */
const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState (true);
    useEffect (() => {
        window.addEventListener ('online', () => {
            setOnlineStatus (true);
        });
        window.addEventListener ('offline', () => {
            setOnlineStatus (false);
        });
    }, []);
    return onlineStatus;
}

export default useOnlineStatus;