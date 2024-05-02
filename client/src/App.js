import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {Spinner} from "react-bootstrap";

const App = observer(() => {
    /*const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }*/

    return (
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
    );
})

export default App;
