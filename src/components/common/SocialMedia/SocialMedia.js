import React from 'react';
import PropTypes from 'prop-types';
import {
    FaFacebookF as IconFacebook,
    FaGithub as IconGithub,
    FaInstagram as IconInstagram,
    FaTwitter as IconTwitter,
    FaLinkedin as IconLinkedin,
} from 'react-icons/fa';

import './SocialMedia.css';

const mapNameToComponent = {
    facebook: IconFacebook,
    github: IconGithub,
    instagram: IconInstagram,
    twitter: IconTwitter,
    linkedin: IconLinkedin,
};

const mapNameToUrl = {
    facebook: social => `https://facebook.com/${social}`,
    github: social => `https://github.com/${social}`,
    instagram: social => `https://instagram.com/${social}`,
    twitter: social => `https://twitter.com/${social}`,
    linkedin: social => `https://linkedin.com/company/${social}`
};

const SocialMedia = ({ socialNetworks }) => {
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

SocialMedia.propTypes = {
    socialNetworks: PropTypes.shape({
        facebook: PropTypes.string,
        github: PropTypes.string,
        instagram: PropTypes.string,
        twitter: PropTypes.string,
        linkedin : PropTypes.string,
    }),
};

export default SocialMedia;
