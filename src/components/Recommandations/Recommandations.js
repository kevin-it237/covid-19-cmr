import React from 'react';
import './Recommandations.scss';
import Footer  from '../../components/Footer/Footer'

class Recommandations extends React.Component {
    
    componentDidMount() {
        
    }

    render() {
        return (
           <section>
               <div className="container py-4 recommadations">
                    <div className="row py-5">
                        <div className="col-sm-12">
                            <h1 className="mb-4 text-bold text-dark">Nouvelles recommandations du gouvernement</h1>
                            <p className="desc">Les 7 mesures supplémentaires contre la propagation du COVID-19 au Cameroun.</p>
                        </div>
                        <div className="col-sm-12">
                            <div class="card mt-4">
                                <h5 class="card-header bg-white">Mesure 1: Port du Masque Obligatoire</h5>
                                <div class="card-body">
                                    <p class="card-text">Généralisation du port du masque à compter du lundi 13 avril 2020 dans tous les espaces ouverts au publics.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div class="card mt-5">
                                <h5 class="card-header bg-white">Mesure 2: Dispositions au plan local</h5>
                                <div class="card-body">
                                    <p class="card-text">La production locale des médicaments, des tests de dépistage, des masques de protection, des gels hydro-alcoliques.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div class="card mt-5">
                                <h5 class="card-header bg-white">Mesure 3: Des centres spécialisés dans les chefs lieux de région</h5>
                                <div class="card-body">
                                    <p class="card-text">Mise en place des centres spécialisés de traitement de COVID-19 dans tous les chefs lieux de région.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div class="card mt-5">
                                <h5 class="card-header bg-white">Mesure 4: Intensification de la campagne de dépistage</h5>
                                <div class="card-body">
                                    <p class="card-text">intensification de la campagne de dépistage avec la collaboration du centre pasteur.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div class="card mt-5">
                                <h5 class="card-header bg-white">Mesure 5: Sensibilisation en français, anglais et dans les langues locales</h5>
                                <div class="card-body">
                                    <p class="card-text">Intensification de la campagne de sensibilisation en zones urbaine et rurale aussi bien dans les deux langues officielles que les langues locales.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div class="card mt-5">
                                <h5 class="card-header bg-white">Mesure 6: Poursuite des activités économiques</h5>
                                <div class="card-body">
                                    <p class="card-text">La poursuite des activités essentielles à l'économie, dans le strict respect des directives du 17 mars 2020 et des gestes barrières recommandés par l'organisation Mondiale de la Santé.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div class="card mt-5">
                                <h5 class="card-header bg-white">Mesure 7: La sanction</h5>
                                <div class="card-body">
                                    <p class="card-text">La sanction systématique de tout contrevenant aux mesures de restrictions en vigueur et de confinement imposées aux personnes à risques.</p>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
               <Footer />
           </section>
        )
    }
}

export default Recommandations;