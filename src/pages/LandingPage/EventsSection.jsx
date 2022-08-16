import React from "react";
import { EventListing } from "../../components/EventListing/EventListing";
import "./EventsSection.css";

export const EventsSection = () => {
    return (
        <section className="events">
            <h3 className="events__heading">Past Events</h3>
            <EventListing title="Hawkhacks 2022" start="Sat, Aug 13" end="Mon, Aug 15" location="Online" />
        </section>
    );
};
