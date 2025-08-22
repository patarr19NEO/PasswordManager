import React, {useState} from "react"
import "./GetIntoAccount.css"

function GetIntoAccount() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }
    const handlePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!email || !password || !email.includes("@") || password.length <= 5) {
            setError("Please, enter a valid email address or password");

            setTimeout(() => {
                setError("")
            }, 5000)
        } else {
            alert("Ok");
        }
    }

    return (
        <div className="GetIntoAccount">
            <form onSubmit={handleSubmit}>
                <div className="window">
                    <div className="window-reg">
                        <input onChange={handleEmail} value={email} type="text" placeholder="Mail" />
                        <input onChange={handlePassword} value={password} type="password" placeholder="Password" />
                        <div className="agreement">
                            <p>By sending the form you agree to our </p>
                            <span className="tos">Terms of service</span>
                            <p> and </p>
                            <span className="pp">Privacy policy</span>
                        </div>
                        <p className="error">{error}</p>
                        <a className="submit" onClick={handleSubmit}>Go!</a>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default GetIntoAccount