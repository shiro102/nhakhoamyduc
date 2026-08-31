import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/dark-mode.css';
import App from './App';
import {
    BrowserRouter,
} from "react-router-dom";
import "./components/LangConfig";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
