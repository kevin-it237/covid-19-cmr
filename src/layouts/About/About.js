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
                                <p>COVID-19 CMR est une plateforme web de suivi et de renseignement quotidien des
                                    données et d'informations chiffrées traduisant l'évolution de la pandémie du coronavirus
                                    dans les régions du cameroun ... Son intervention en cette période critique pour de nombreux
                                    pays et le nôtre en particulier n’est pas sans intérêt, il témoigne de la volonté des jeunes
                                    startupers d'Inchtech's l'ayant mise sur pied, d'accompagner le gouvernement dans la lutte
                                    contre la propagation de cette épidémie ...</p>
                            </div>

                            <div className="mt-5">
                                <h2 className="text-bold">Comment ça fonctionne ?</h2>
                                <p>Axé sur des principes de datas analytics, ce mécanisme de fonctionnement lui permet de
                                    traiter et de gérer les données collectées au près des sources d’informations officielles
                                    reconnues par l’ETAT (Ministère de la Santé & OMS).
                                    Des mises à jour en temps opportun sont rendues possibles
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