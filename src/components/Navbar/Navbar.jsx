import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigazione = useNavigate();

    return (
        //Navbar con home e lingue
        <div className="navbar">
            <div className="home">
                <button onClick={function () {
                    navigazione("/");
                }}>
                    Home
                </button>
            </div>
            <div>
                <ul className="languages-container">
                    <li className="it">
                        <button>Italiano</button>
                    </li>
                    <li className="en">
                        <button>English</button>
                    </li>
                    <li className="de">
                        <button>Deutsch</button>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar;