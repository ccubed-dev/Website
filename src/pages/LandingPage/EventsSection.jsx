import React from "react";
import { EventListing } from "../../components/EventListing/EventListing";
import "./EventsSection.css";

const EVENTS = [
    {
        title: "Hawkhacks 2022",
        start: "2022-08-13T10:00:00.000Z",
        end: "2022-08-15T18:00:00.000Z",
        location: "Online",
    },
    {
        title: "CCubed Conference 2022",
        start: "2022-08-13T10:00:00.000Z",
        end: "2022-08-15T18:00:00.000Z",
        location: "Online",
    },
    {
        title: "League of Legends Tournament",
        start: "2022-08-13T10:00:00.000Z",
        end: "2022-08-15T18:00:00.000Z",
        location: "Online",
    },
];

export const EventsSection = () => {
    return (
        <section className="events">
            <h3 className="events__heading">Past Events</h3>
            {EVENTS.map((ev, idx) =>
                <EventListing
                    key={idx}
                    title={ev.title}
                    start={new Date(ev.start)}
                    end={new Date(ev.end)}
                    location={ev.location}
                />
            )}
        </section>
    );
};
