import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/header/Header";
import Genres from "./components/genres/Genres";
import Recommendations from "./components/recommendations/Recommendations";
import Description from "./components/description/Description";
import Mail from "./components/subscription/Subscription";
import Contacts from "./components/contacts/Contacts";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Genres />
        <Recommendations />
        <Description />
        <Mail />
        <Contacts />
        <AppRouter />
    </BrowserRouter>
  );
}

export default App;
