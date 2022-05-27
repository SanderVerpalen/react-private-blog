import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

function Login() {

    const [state, setState] = useState({name: '', password: ''})
    const history = useHistory();

    function login() {
        console.log("Je wordt ingelogd!")
/*video @ 1.12.36 week 14*/
        history.push('/');
    }

    return (
        <main>
            <div className="content-page">

                <h1>Login</h1>

                <fieldset>
                    <form
                        onSubmit={(e) =>
                        {
                            e.preventDefault();
                            console.log(state.name);
                            console.log(state.password);
                            login();
                        }}
                    >

                        <label>Naam:</label>
                        <input
                            type="text"
                            onChange={(e) =>

                                setState(prevState =>
                                {
                                    return {
                                        ...prevState,
                                        name: e.target.value}
                                })}

                        />

                        <label>Wachtwoord:</label>
                        <input
                            type="text"
                            onChange={(e) =>

                                setState(prevState =>
                                { return {
                                    ...prevState,
                                    password: e.target.value}
                                })}
                        />

                        <button type="submit">Inloggen</button>

                    </form>
                </fieldset>

            </div>
        </main>
    )
}

export default Login;