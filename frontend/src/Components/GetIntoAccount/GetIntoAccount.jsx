import React, {useState} from "react"
import "./GetIntoAccount.css"
import ModalWin from "/src/Components/Modal-Win/Modal-Win.jsx"
function GetIntoAccount() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
        if (isModalOpen) {
            return (
                <div className="modal-win">
                    <ModalWin title="Modal" content="Hello!" />
                </div>
            )
        }
        return null;
    }

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
        setLoading(true)

        if (!email || !password || !email.includes("@") || password.length <= 5) {
            setError("Please, enter a valid email address or password");
            setLoading(false);
            setIsModalOpen(true)

            setTimeout(() => {
                setError("")
            }, 5000)

            setTimeout(() => {
                setIsModalOpen(false)
            }, 5000)
            return;
        } else {
             try {
                 const response = await fetch("http://127.0.0.1:5000/api/users", {
                     method: "POST",
                     headers: {
                         "Content-Type": "application/json",
                     },
                     body: JSON.stringify({"email": email, "password": password})
                 })

                 if (!response.ok) {
                     const errorData = await response.json()
                     throw new Error("Failed to fetch users")
                 }

                 const res = await response.json()
                 setLoading(false)

                 //here next logic
                 alert(res.message)
             } catch (err) {
                 console.log(err)
                 setLoading(false)
                 setError("Some error. Please try again or wait")

                 setTimeout(() => {
                     setError("")
                 }, 5000)
             }
        }
    }

    return (
        <div className="GetIntoAccount">
            <form onSubmit={handleSubmit}>
                <div className="window">
                    <h1>Get into account</h1>
                    <div className="window-reg">
                        <input onChange={handleEmail} value={email} type="text" placeholder="Mail" />
                        <input onChange={handlePassword} value={password} type="password" placeholder="Password" />
                        <div className="agreement">
                            <p>By sending the form you agree to our </p>
                            <span className="tos">Terms of service</span>
                            <p> and </p>
                            <span className="pp">Privacy policy</span>
                        </div>
                        {loading && <p className="loading">Loading...</p>}
                        <p className="error">{error}</p>
                        <a onClick={handleSubmit} className="submit" disabled={loading}>Go</a>
                        {(() => {
                                if (loading) {
                                    return "Loading..."
                                } else {
                                    return ""
                                }
                            })()}
                    </div>
                </div>
            </form>
            {showModal()}
        </div>
    )
}
export default GetIntoAccount