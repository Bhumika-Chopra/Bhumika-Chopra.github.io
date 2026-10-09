import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='home__socials' >
            <a aria-label="GitHub" href='https://github.com/Bhumika-Chopra' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub aria-hidden="true" />
            </a>

            <a aria-label="LinkedIn" href='https://www.linkedin.com/in/bhumika-chopra-740717165/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn aria-hidden="true" />
            </a>

            <a aria-label="Instagram" href='https://www.instagram.com/bhumika.647/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaInstagram aria-hidden="true" />
            </a>

            <a aria-label="X" href='https://x.com/bhumika_647' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaTwitter aria-hidden="true" />
            </a>
        </div>
    );
};

export default HeaderSocials;
