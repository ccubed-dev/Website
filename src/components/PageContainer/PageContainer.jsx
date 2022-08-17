import React from "react";
import PropTypes from "prop-types";

export const PageContainer = ({children}) => {
    return (
        <div className="page-container">
            {children}
        </div>
    );
};

PageContainer.propTypes = {
    children: PropTypes.node
};
