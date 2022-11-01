import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <div>
            <Link to="/">Home</Link> -
            <Link to="/sobre">Sobre</Link>
        </div>
    );
};
