import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContainer } from "@components";
import { LandingPage } from "@pages";

export const Router = () => {
    return (
        <AppContainer>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </BrowserRouter>
        </AppContainer>
    );
};
