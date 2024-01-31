import UserCard from "./usercard";
import UserClass from "./userClass";
const About = () => {
    return (
        <div>
            <h1>About us</h1>
            <UserCard name={"Sud-functional"} location="Blore"></UserCard>
            <UserClass name={"Sud-class"} location="Mlore"></UserClass>
        </div>
    );
}
export default About;