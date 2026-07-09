import React from 'react';
import useInView from '../hooks/useInView';

const Service = ({ number, title, desc, icon, image, reverse }) => {
    const [ref, isInView] = useInView();

    return (
        <div
            ref={ref}
            className={`service-row ${reverse ? 'reverse' : ''} ${isInView ? 'in-view' : ''}`}
        >
            <div className="service-text">
                <span className="service-number">{number}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>

            <div className="service-image-wrapper">
                <img src={image} alt={title} className="service-image" loading="lazy" />
                <div className="service-icon">{icon}</div>
            </div>
        </div>
    );
};

export default Service;