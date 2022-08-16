import React from "react";
import PropTypes from "prop-types";
import "./EventListing.css";

export const EventListing = ({title, start, end, location}) => {
    return (
        <div className="event-listing">
            <div className="event-listing__date-snippet">
                <p className="event-listing__date-snippet-text">{start}</p>
            </div>
            <div className="event-listing__event-content">
                <p className="event-listing__title">{title}</p>
                <p className="event-listing__subtitle">{start} to {end}</p>
                <p className="event-listing__location">{location}</p>
            </div>
        </div>
    );
};

EventListing.propTypes = {
    title: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};