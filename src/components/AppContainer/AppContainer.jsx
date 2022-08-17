import React from "react";
import PropTypes from "prop-types";

export const AppContainer = ({children}) => {
    return (
        <div className="app-container">
            {children}
        </div>
    );
};

AppContainer.propTypes = {
    children: PropTypes.node
};
