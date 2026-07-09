import React from 'react';
import Service from './Service';
import '../styles/Services.css';
import { FaHome, FaBuilding, FaDraftingCompass } from 'react-icons/fa';

const servicesData = [
    {
        number: '01',
        title: 'Residential Design',
        desc: 'Create elegant, functional, and personalized homes tailored to your lifestyle. From concept development and space planning to material selection and furniture layouts, every design is crafted to maximize comfort, aesthetics, and everyday living.',
        icon: <FaHome />,
        image: '/assets/res.jpg',
        reverse: false,
    },
    {
        number: '02',
        title: 'Commercial Design',
        desc: 'Design inspiring commercial environments that strengthen brand identity and improve user experience. Whether it is offices, retail spaces, showrooms, or hospitality interiors, each project focuses on efficiency, visual appeal, and long-term functionality.',
        icon: <FaBuilding />,
        image: '/assets/com.jpg',
        reverse: true,
    },
    {
        number: '03',
        title: '2D Blueprint Planning',
        desc: 'Develop precise architectural floor plans, working drawings, and detailed construction documents with architect approval. Every blueprint is carefully coordinated to ensure smooth execution, regulatory compliance, and accurate project implementation.',
        icon: <FaDraftingCompass />,
        image: '/assets/2d.jpg',
        reverse: false,
    },
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="services-container">
                <span className="services-subtitle">What I Do</span>
                <h2>Design Services</h2>

                <div className="services-rows">
                    {servicesData.map((service, index) => (
                        <Service
                            key={index}
                            number={service.number}
                            title={service.title}
                            desc={service.desc}
                            icon={service.icon}
                            image={service.image}
                            reverse={service.reverse}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;