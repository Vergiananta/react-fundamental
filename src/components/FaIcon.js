import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FaIcon(props) {
    const { icon: iconString, ...faProps } = props;
    const icon = iconString.split(" ");

    return <FontAwesomeIcon icon={icon} {...faProps} />
}

export default FaIcon;