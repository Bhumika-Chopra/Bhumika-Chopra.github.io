import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='home__socials' >
            <a href='https://github.com/Bhumika-Chopra' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/bhumika-chopra-740717165/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://www.instagram.com/bhumika.647/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaInstagram />
            </a>

            <a href='https://x.com/bhumika_647' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;
