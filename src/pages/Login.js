import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

function Login({authenticator, authenticatorFunction}) {

    const [state, setState] = useState({name: '', password: '', wrongCred: false})

    const history = useHistory();

    const name = "Sander";
    const passWord = "p";

    function login() {

        if (state.name === name & state.password === passWord) {

            setState(prevState => {
                return {
                    ...prevState,
                    wrongCred: false
                }
            })

            authenticatorFunction(!authenticator)
            history.push('/blogposts')

        } else {
            setState(prevState => {
                return {
                    ...prevState,
                    wrongCred: true
                }
            })
        }
    }

    return (
        <main>
            <div className="content-page">

                <h1>Login</h1>

                <fieldset>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            login();

                        }}
                    >

                        <label>Naam:</label>
                        <input
                            type="text"
                            onChange={(e) =>

                                setState(prevState => {
                                    return {
                                        ...prevState,
                                        name: e.target.value
                                    }
                                })}

                        />

                        <label>Wachtwoord:</label>
                        <input
                            type="text"
                            onChange={(e) =>

                                setState(prevState => {
                                    return {
                                        ...prevState,
                                        password: e.target.value
                                    }
                                })}
                        />

                        <button type="submit">Inloggen</button>

                    </form>
                </fieldset>
            </div>
            {state.wrongCred &&
                <p>Verkeerde paswoord of gebruikersnaam.</p>
            }
        </main>
    )
}

export default Login;