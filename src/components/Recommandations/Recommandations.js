import React from 'react';
import './Recommandations.scss';
import Footer  from '../../components/Footer/Footer'

class Recommandations extends React.Component {
    
    componentDidMount() {
        
    }

    render() {
        return (
           <section>
               <div className="container py-5 mt-4 recommadations">
                   <div className="row">
                        <div className="col-sm-12">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="cameroon-tab" data-toggle="tab" href="#cameroon" role="tab" aria-controls="cameroon" aria-selected="true">7 Nouvelles Mesures</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="africa-tab" data-toggle="tab" href="#africa" role="tab" aria-controls="africa" aria-selected="false">13 Premières Mesures</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="cameroon" role="tabpanel" aria-labelledby="cameroon-tab">
                                    <div className="row py-5">
                                        <div className="col-sm-12">
                                            <h1 className="mb-4 text-bold text-dark">Nouvelles mesures du gouvernement</h1>
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
                                <div className="tab-pane fade" id="africa" role="tabpanel" aria-labelledby="africa-tab">
                                    <div className="row py-5">
                                        <div className="col-sm-12">
                                            <p className="desc">A compter du mercredi 18 mars 2020 et jusqu’à nouvel ordre.</p>
                                        </div>
                                        <div className="col-sm-12">
                                            <div class="card mt-4">
                                                <h5 class="card-header bg-white">Mesure 1</h5>
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        Les frontières terrestres, aériennes et maritimes du Cameroun seront fermées : tous les vols passagers en provenance de l’étranger sont suspendus, à l’exception des vols cargos et des navires transportant les produits de consommation courante ainsi que les biens et matériels essentiels, dont les temps d’escale seront limités et encadrés ; les camerounais désireux de retourner dans leur pays devront prendre l’attache de nos différentes représentations diplomatiques 
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div class="card mt-4">
                                                <h5 class="card-header bg-white">Mesure 2</h5>
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        La délivrance des visas d’entrée au Cameroun aux différents aéroports est suspendue.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div class="card mt-4">
                                                <h5 class="card-header bg-white">Mesure 3</h5>
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        Tous les  établissements publics et privés de formation relevant des différents ordres d’enseignement, de la maternelle au supérieur, y compris les centres de formation professionnelle et les grandes écoles seront fermés 
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div class="card mt-4">
                                                <h5 class="card-header bg-white">Mesure 4</h5>
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        Les rassemblements de plus de cinquante (50) personnes sont interdits sur toute l’étendue du territoire national. 
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div class="card mt-4">
                                                <h5 class="card-header bg-white">Mesure 5</h5>
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        Les compétitions scolaires et universitaires sont reportées, à l’instar des jeux FENASSCO et des jeux universitaires 
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div class="card mt-4">
                                                <h5 class="card-header bg-white">Mesure 6</h5>
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        Les débits de boissons, les restaurants et les lieux de loisirs seront systématiquement fermés à partir de 18 heures, sous le contrôle des autorités administratives.  
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div class="card mt-4">
                                                <h5 class="card-header bg-white">Mesure 7</h5>
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        Un système de régulation des flux des consommateurs sera instauré dans les marchés et les centres commerciaux.  
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div class="card mt-4">
                                                <h5 class="card-header bg-white">Mesure 8</h5>
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        Les déplacements urbains et interurbains ne devront s’effectuer qu’en cas d’extrême nécessité.  
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div class="card mt-4">
                                                <h5 class="card-header bg-white">Mesure 9</h5>
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        Les conducteurs de bus, de taxis et de mototaxis sont invités à éviter des surcharges dans les transports publics : les forces de maintien de l’ordre y veilleront particulièrement.  
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div class="card mt-4">
                                                <h5 class="card-header bg-white">Mesure 10</h5>
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        Les formations sanitaires privées, les hôtels et autres lieux d’hébergement, les véhicules ainsi que les équipements spécifiques nécessaires à la mise en œuvre du plan de riposte contre la pandémie du COVID-19 au Cameroun pourront être réquisitionnées en tant que de besoin, à la diligence des autorités compétentes   
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div class="card mt-4">
                                                <h5 class="card-header bg-white">Mesure 11</h5>
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        Les administrations publiques devront privilégier les moyens de communications électroniques et les outils numériques pour les réunions susceptibles de regrouper plus de dix (10) personnes.   
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div class="card mt-4">
                                                <h5 class="card-header bg-white">Mesure 12</h5>
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        Les missions à l’étranger des membres du Gouvernement et des agents du secteur public et parapublic sont suspendues.   
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div class="card mt-4">
                                                <h5 class="card-header bg-white">Mesure 13</h5>
                                                <div class="card-body">
                                                    <p class="card-text">
                                                        Les populations sont invitées à observer strictement les mesures d’hygiène recommandées par l’Organisation Mondiale de la Santé, à savoir notamment se laver régulièrement les mains au savon, éviter des contacts rapprochés tels que se serrer les mains ou s'embrasser, se couvrir la bouche pour éternuer.   
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <h4 className="mt-4">
                                            Il s’agit des mesures certes difficiles mais nécessaires pour garantir la protection de tous et de chacun et limiter la propagation de cette pandémie. En cas de nécessité, les populations sont invitées à appeler le numéro vert <strong>1510</strong> mis en place pour la mobilisation des équipes de secours.
                                            </h4>
                                        </div>
                                    </div>
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