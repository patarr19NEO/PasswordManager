import React from "react"
import { Link } from 'react-router-dom';
import "./Main.css";

function Main() {
    return (
        <div className="Main">
            <main>
                <div className="main-text">
                    <h1 className="main-text-h2">Your passwords under strong protect with</h1>
                    <div className="text-button">
                        <strong>Password Manager</strong>
                        <h4>Allows you keep your accounts passwords safety thanks our protections algorithms</h4>
                        <a>
                            <Link to="/getIntoAccount">Try NOW for FREE</Link>
                        </a>
                    </div>
                </div>
                <div className="img">
                    {/*here must be an img here*/}
                </div>
            </main>
        </div>
    )
}
export default Main