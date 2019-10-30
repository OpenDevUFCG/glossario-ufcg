import React from 'react';
import PropTypes from 'prop-types';
import {
    FaFacebookF, FaTwitter, FaGithub, FaInstagram,
} from 'react-icons/fa';

import './Social.css';

const mapNameToComponent = {
    facebook: FaFacebookF,
    github: FaGithub,
    instagram: FaInstagram,
    twitter: FaTwitter,
};

const mapNameToUrl = {
    facebook: social => `https://facebook.com/${social}`,
    github: social => `https://github.com/${social}`,
    instagram: social => `https://instagram.com/${social}`,
    twitter: social => `https://twitter.com/${social}`,
};

const Social = ({ socialNetworks }) => {
    if (socialNetworks == null) {
        return (<></>);
    }
    return (
        <div className="term-card__content">
            <h2 className="term-card__title-2">Redes Sociais</h2>
            {Object.keys(socialNetworks).map(name => {
                const Component = mapNameToComponent[name];
                const socialUrl = socialNetworks[name];
                const url = mapNameToUrl[name](socialUrl);
                return (
                    <a href={url} key={name} rel="noopener noreferrer" target="_blank">
                        <Component size="30px" color="#30abae" />
                    </a>
                );
            })}
        </div>
    )
};

Social.propTypes = {
    socialNetworks: PropTypes.object,
};

export default Social;
