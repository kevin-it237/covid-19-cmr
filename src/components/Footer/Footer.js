import React from 'react';
import './Footer.scss';
import logo1 from './../../assets/images/inchtechs_logo.png'
import logo2 from './../../assets/images/open_logo.svg'

class Footer extends React.Component {

    render() {
        return (
            <footer className="bg-dark py-4">
                <div className="container-fluid py-5">
                    <h3 className="text-center text-white text-uppercase text-bold">COVID-19 Cameroon Statistics</h3>
                    <hr/>
                    <h4 className="text-center text-white">Partenaires:</h4>
                    <div className="logos">
                        <img src={logo1} alt="logo inchechs" />
                        <img src={logo2} alt="logo inchechs" />
                    </div>
                    <hr/>
                    <p className="text-white text-center">Powered by <a target="_blank" rel="noopener noreferrer" href="http://inchtechs.com">Inchtech's.</a></p>
                </div>
            </footer>
        )
    }
}

export default Footer;