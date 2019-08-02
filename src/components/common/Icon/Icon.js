import React from 'react';

const Icon = ({ icon, iconColor, size }) => (
    <i className="material-icons" style={{color: iconColor, fontSize: size}}>
        {icon}
    </i>
);

export default Icon;