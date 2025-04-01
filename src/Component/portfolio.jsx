import React from 'react';
import Navbar from "./navBar";

export default function Portfolio() {
    const navLinks = [
        {text: 'Home', path: '/home'},
        {text: 'About', path: '/about'},
        {text: 'Contact', path: '/contact'},
        {text: 'Services', path: '/services'},
        {text: 'Projects', path: '/projects'},
        {text: 'Blog', path: '/blog'},
        {text: 'FAQ', path: '/faq'},
        {text: 'Portfolio', path: '/portfolio'},
    ];

    const projects = [
        {
            title: 'Aquaculture Management System',
            description: 'A web and mobile platform for fish farmers to monitor water quality, track fish growth, and manage inventory. Features: Automated alerts, sales tracking, and integration with IoT sensors. Tech Stack: Python (Django/Flask), React Native, PostgreSQL, IoT integration.',
            image: '1.webp'
        },
        {
            title: 'Waste Management & Recycling App',
            description: 'A digital platform connecting waste producers to recycling companies using AI-powered waste classification. Features: Waste pickup scheduling, rewards for users, and analytics for sustainability tracking. Tech Stack: Node.js, React, MongoDB, AI/ML for image recognition.',
            image: '2.webp'
        },
        {
            title: 'Marine Conservation & Eco-Tourism Booking System',
            description: 'A system for booking sustainable marine tourism experiences, promoting conservation efforts. Features: Tour scheduling, payment gateway, real-time updates, and educational resources. Tech Stack: PHP (Laravel), Vue.js, MySQL, Stripe API.',
            image: '3.webp'
        },
        {
            title: 'Smart Fisheries Supply Chain System',
            description: 'A blockchain-based solution ensuring transparency and traceability in fish sales and distribution. Features: Digital ledger for transactions, real-time tracking, and quality verification. Tech Stack: Solidity (Ethereum Smart Contracts), React, Node.js, PostgreSQL.',
            image: '4.webp'
        }
    ];
 
    return (
        <>
            
            <div style={{ padding: '20px' }}>
                <h1 style={{ fontWeight: 'bold' }}>Portfolio</h1>
                <p>Welcome to my portfolio. Here you can find some of the projects I have worked on.</p>
                <div style={{ 
                    display: 'flex', 
                alignItems:'center', 
                justifyContent:'space-around',
                    flexWrap: 'wrap'
                     }}>
                    {projects.map((project, index) => (
                        <div key={index} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '300px', elevation: '10px' }}>
                            <img src={project.image} alt={project.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
