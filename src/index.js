import React from "react";
import ReactDOM from "react-dom/client";
import { MoviesApp } from "./MoviesApp";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {MovieDetails} from "./components/MovieDetails";
import { useTheme } from "./utils/useTheme";
import ThemeBtn from "./components/ThemeBtn";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = function () {
    const theme = useTheme();

    return <BrowserRouter>
        <ThemeBtn />
        <Routes>
            <Route path="/" element={<MoviesApp/>}/>
            <Route path="/details/:id/" element={<MovieDetails/>}/>
        </Routes>
    </BrowserRouter>;
}
root.render(
    <App />
);
