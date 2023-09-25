
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const CustomScrollLink = ({ to, spy, smooth, offset, duration, children }) => (
    <ScrollLink
        to={to}
        spy={spy}
        smooth={smooth}
        offset={offset}
        duration={duration}
    >
        {children}
    </ScrollLink>
);

export default CustomScrollLink;
