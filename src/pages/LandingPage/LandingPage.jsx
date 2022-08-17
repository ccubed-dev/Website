import React from "react";
import "./LandingPage.css";

import { PageContainer } from "@components";
import { HeroSection, AboutSection, ContactSection, EventsSection } from "@pages/LandingPage";

export const LandingPage = () => {
    return (
        <PageContainer>
            <HeroSection />
            <AboutSection />
            <ContactSection />
            <EventsSection />
        </PageContainer>
    );
};
