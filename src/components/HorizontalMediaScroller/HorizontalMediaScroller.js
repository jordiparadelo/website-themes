import React from 'react';
// Styles
import './HorizontalMediaScroller.scss'

const HorizontalMediaScroller = ({ children }) => {
    return (
        <div className="horizontal-media-scroller">
            {children}
        </div>
    );
};

export default HorizontalMediaScroller;