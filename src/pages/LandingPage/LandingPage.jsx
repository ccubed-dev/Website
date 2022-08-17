import React from "react";
import "./LandingPage.css";

import { PageContainer } from "@components";
import { HeroSection, AboutSection, ContactSection } from "@landing";

export const LandingPage = () => {
    return (
        <PageContainer>
            <HeroSection />
            <AboutSection />
            <ContactSection />
        </PageContainer>
    );
};
