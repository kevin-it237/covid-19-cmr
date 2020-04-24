import React from 'react';
import './About.scss'
import Footer from '../../components/Footer/Footer'

class About extends React.Component {

    render() {
        return (
            <section>
                <div className="container" id="about">
                    <div className="row pb-5">
                        <div className="col-sm-12">
                            <h1 className="text-bold">A Propos</h1>
                            <div className="mt-4">
                                <p>Covid-19 Cameroon est géré par une équipe de jeunes développeurs informatiques dans le but de rendre les statistiques du COVID-19 disponibles 
                                    dans un format stimulant et pertinent pour un large public à travers le cameroun et le monde.</p>
                            </div>
                            <div className="mt-5">
                                <h2 className="text-bold">Comment ça fonctionne ?</h2>
                                <p>Pour ces données COVID-19, nous les collectons à partir de rapports officiels, 
                                    directement à partir des canaux de communication du gouvernement ou indirectement, 
                                    via des sources médiatiques locales lorsque cela est jugé fiable. Des mises à jour en temps opportun sont rendues possibles 
                                    grâce à la participation de notre équipe dynamique.</p>
                            </div>
                            <div className="mt-5">
                                <h2 className="text-bold">Nous contacter</h2>
                                <h4 className="mt-5"><strong>Téléphone:</strong></h4>
                                <p>(+237) 696-263-641</p>
                                <p>(+237) 676-532-558</p>
                                <p>(+237) 655-891-562</p>
                                <h4 className="mt-5"><strong>Email:</strong></h4>
                                <p>contact@inchtechs.com</p>
                                <p>ngaleu.kevin@inchtechs.com</p>
                                <p>ndunglajoel@inchtechs.com</p>
                                <h4 className="mt-5"><strong>Adresse:</strong></h4>
                                <p>Yaoundé,  Chapelle Nsimeyong</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        )
    }
}

export default About;