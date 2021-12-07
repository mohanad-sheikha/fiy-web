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
        --fiy-border-radius: 0.4rem;

        --fiy-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
        
        // Background colors
        --fiy-background-color_primary: white;
        --fiy-background-color_secondary: rgb(243, 246, 249);
        
        // Text colors
        --fiy-color_weak: rgb(70, 80, 90);

        --fiy-box-shadow_focus-x-offset: 0;
        --fiy-box-shadow_focus-y-offset: 0;
        --fiy-box-shadow_focus-blur: 0;
        --fiy-box-shadow_focus-size: 2px;
        --fiy-box-shadow_focus: var(--fiy-box-shadow_focus-x-offset)
                                var(--fiy-box-shadow_focus-y-offset)
                                var(--fiy-box-shadow_focus-blur)
                                var(--fiy-box-shadow_focus-size) blue;

        --fiy-transition-duration: 200ms;
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
