import React from "react";
import PropTypes from "prop-types";
import "./EventListing.css";
import { format } from "date-fns";

export const EventListing = ({title, start, end, location}) => {
    return (
        <div className="event-listing">
            <div className="event-listing__date-snippet">
                <p className="event-listing__date-snippet-text">
                    {format(start, "LLL")}
                    <p className="event-listing__date-snippet-day">{format(start, "d")}</p>
                </p>
            </div>
            <div className="event-listing__event-content">
                <p className="event-listing__title">{title}</p>
                <p className="event-listing__subtitle">
                    {format(start, "eee, LLL d")} to {format(end, "eee, LLL d")}
                </p>
                <p className="event-listing__location">{location}</p>
            </div>
        </div>
    );
};

EventListing.propTypes = {
    title: PropTypes.string.isRequired,
    start: PropTypes.instanceOf(Date).isRequired,
    end: PropTypes.instanceOf(Date).isRequired,
    location: PropTypes.string.isRequired,
};