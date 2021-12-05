import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "../routes";
import Container from "./Container.js";

function Body () {
    return (
        <Container>
            <BrowserRouter>
                <Routes>
                    { routes.map(route => (
                        <Route { ...route } />
                    )) }
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default Body;