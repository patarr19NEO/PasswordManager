import React from "react"
import "./GetIntoAccount.css"

function GetIntoAccount() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="GetIntoAccount">
            <form onSubmit={handleSubmit}>
                <div className="window">
                    <div className="window-reg">
                        <input type="text" placeholder="Mail" />
                        <input type="password" placeholder="Password" />
                        <a>Go!</a>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default GetIntoAccount