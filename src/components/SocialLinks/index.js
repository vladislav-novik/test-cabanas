import React from 'react';

const SocilaLinks = ({ socialLinks }) => (
    
    <ul className="list-inline">
    {
        socialLinks && socialLinks.map((item, index) => (
            <li key={index} className="list-inline-item ml-2">
                <a href={item.to} className="text-secondary" target="_blank" >
                    <i className={`fa fa-${item.class}`} aria-label={item.name}></i>
                </a>
            </li>
        ))
    }
    </ul>
);

export default SocilaLinks;
