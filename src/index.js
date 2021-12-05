import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createGlobalStyle } from "styled-components";
import normalize from "normalize.css";

export const GlobalStyle = createGlobalStyle`
    ${ normalize }
    
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');
    
    :root {
        // Border
        --fiy-border_width: 1px;
        --fiy-border_style: solid;
        --fiy-border_color: rgb(229, 232, 236);
        --fiy-border: var(--fiy-border_width) var(--fiy-border_style) var(--fiy-border_color);
        
        // Background colors
        --fiy-background-color_primary: white;
        --fiy-background-color_secondary: rgb(243, 246, 249);
        
        // Text colors
        --fiy-color_input: rgb(70, 80, 90);
        
        --fiy-border_radius: 0.25rem;
    }

    * {
        line-height: normal;
    }

    body {
        font-family: 'Nunito', sans-serif;
    }
`;

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
