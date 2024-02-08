import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";

const useRestroMenu = (resId) => {
    
    const [restroInfo, setRestroInfo] = useState (null);
    useEffect (() => {
        fetchData ();
    }, [])

    const fetchData = async () => {
        const data = await fetch (
            `${MENU_API_URL + resId}`
        );
        const json = await data.json ();
        console.log (json);
        setRestroInfo (json.data)
    }

    return restroInfo;
}
export default useRestroMenu;