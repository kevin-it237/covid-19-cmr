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
                        <a href="https://inchtechs.com" target="_blank"> <img src={logo1} alt="logo Inchtechs" /></a>
                        <a href="https://opentechnology.inchtechs.com" target="_blank"><img src={logo2} alt="logo Opentechnology" /></a>
                    </div>
                    <h4 class="display-6 mb-4 mt-5 text-center text-white">Suivez nous</h4>
                    <div class="flex-row d-flex justify-content-center">
                        <div class="p-2 mr-3"><a href="https://www.facebook.com/inchtechs" target="_blank"><img src="/img/icons/facebook.png" width="66" height="66" alt=""/></a></div>
                        <div class="p-2 mr-3"><a href="https://www.instagram.com/inchtechss" target="_blank"><img src="/img/icons/insta.png" width="66" height="66" alt=""/></a></div>
                        <div class="p-2 mr-3"><a href="https://twitter.com/_InchTechs" target="_blank"><img src="/img/icons/twitter.png" width="66" height="66" alt=""/></a></div>
                        <div class="p-2 mr-3"><a href="https://www.youtube.com/channel/UCs0QiaFyPDFFCYAr8doNJvw" target="_blank"><img src="/img/icons/youtube.png" alt="" width="66" height="66"/></a></div>
                        <div class="p-2 mr-3"><a href="https://www.linkedin.com/in/inchtech-s-inchtech-s-521720190/" target="_blank"><img src="/img/icons/linkedin.png" alt="" width="66" height="66"/></a></div>
                    </div>
                    <hr/>
                    <p className="text-white text-center">Powered by <a target="_blank" rel="noopener noreferrer" href="http://inchtechs.com">Inchtech's.</a></p>
                </div>

            </footer>
        )
    }
}

export default Footer;