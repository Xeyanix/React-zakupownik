import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const navigate = useNavigate();

    const handleFirstName = (event) => {
        setfirstName(event.target.value);
    }
    const handleSecondName = (event) => {
        setlastName(event.target.value);
    }
    const handleButtonClick = () => {
        const userData = { userFirstName: firstName, userLastName: lastName }
        localStorage.setItem('loggedUser', JSON.stringify(userData));
        navigate('/dashboard')
    }
    return (
        <>
            <label> Imię</label>
            <input onChange={handleFirstName}></input>
            <label> Nazwisko</label>
            <input onChange={handleSecondName}></input>
            <button onClick={handleButtonClick}>Sign in </button>
        </>
    )
};
