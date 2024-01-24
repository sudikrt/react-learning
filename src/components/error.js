import { useRouteError } from "react-router-dom";

const Error = () => {

    //provides error information
    
    const err = useRouteError ();
    console.log (err);
    return (
        <div>
            <h1>Oops..!!</h1>
            <h2>Error something went wrong</h2>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    );
}
export default Error;