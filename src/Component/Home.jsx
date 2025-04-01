import Navbar from "./navBar";
import Portfolio from "./portfolio";

export default function Home() {   
    const navLinks = [
        {text: 'Home', path: '/home'},
        {text: 'About', path: '/about'},
        {text: 'Contact', path: '/contact'},
        {text: 'Services', path: '/services'},
        {text: 'Projects', path: '/projects'},
        {text: 'Blog', path: '/blog'},
        {text: 'FAQ', path: '/faq'},
        {text: 'Portfolio', path: '/portfolio'}, // Added portfolio link
        {text: 'Invoice', path: '/invoice'}, // Added invoice link
    ];
    return (
        <>
            <Navbar
                title='Alphonce Owiti'
                links={navLinks}
            />
            <div style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
                <div style={{ flex: 1 }}>
                    <h1 style={{ fontWeight: 'bold' }}>Alphonce Owiti</h1>
                    <p>
                        Hello, I am Alphonce Ochieng Owiti a TUM student in Software Engineering and an innovative leader who is passionate about innovation, sustainability, and technology. I'm the director of MESUCT HUB, where I applies software application in aquaculture, waste management, and marine conservation. Having a background in programming, project management, and data analytics, I'm committed to developing innovative digital solutions. My leadership and problem-solving skills shape his vision to develop sustainable transformation through technology.
                    </p>
                    <button style={{ backgroundColor: '#130614', color: 'white', borderRadius: '5px', width: '100px', height: '20px', marginTop: '20px' }}>About Us</button>
                </div>
                <div>
                    <img src="Boss.jpg" alt="Alphonce Owiti" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
                </div>
            </div>
            <Portfolio />
            <div>
                <p>.</p>
            </div>
        </>
    );
}

