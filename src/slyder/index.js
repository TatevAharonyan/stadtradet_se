import React, { StrictMode } from "react";
import Carusel from "./carusel";

function CaruselSlyder() {
    return (
        <div className = "slider_wrapper">
            <StrictMode>
                <Carusel />
            </StrictMode>
        </div>
    );
}

export default CaruselSlyder;