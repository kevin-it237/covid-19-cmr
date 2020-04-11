import React from 'react';
import './Conseils.scss';
import Footer from '../../components/Footer/Footer';

import img from '../../assets/images/gestes.gif'
import gestes from '../../assets/images/gestes.png'

class Conseils extends React.Component {

    render() {
        return(
            <section>
                <div className="container my-5 conseils">
                    <div className="row py-5">
                        <div className="col-sm-12 wrap">
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Symptômes</a>
                                <a className="nav-link active" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Gestes Barrières</a>
                                {/* <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a> */}
                            </div>
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <div className="symptomes">
                                        <p>
                                        La maladie à coronavirus 2019 (COVID-19) se caractérise par des symptômes bénins parmi lesquels un mal de gorge, de la toux, et de la fièvre. L'atteinte peut être plus sévère chez certaines personnes et peut entraîner une pneumonie ou des difficultés respiratoires.
                                        </p>
                                        <p>
                                        Plus rarement, la maladie peut être mortelle. Les personnes âgées, et les personnes qui présentent d'autres problèmes médicaux (p. ex. asthme, diabète, ou maladie cardiaque), peuvent être plus vulnérables et tomber gravement malades.
                                        </p>
                                        <p>Les symptômes sont les suivants:</p>
                                        <div className="card mt-5">
                                            <div className="card-body">
                                                <h5 className="card-title"><span></span>Une fièvre supérieure à 37,5°C</h5>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title"><span></span>Une &nbsp;<strong>toux sèche ou grasse</strong></h5>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title"><span></span>Des signes respiratoires de type, toux, sensation d'oppression et/ou douleur thoracique, avec parfois dyspnée (essoufflement)</h5>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title"><span></span>Des frissons</h5>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title"><span></span>Des courbatures</h5>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title"><span></span>Une fatigue inhabituelle</h5>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title"><span></span>Des&nbsp; <strong> maux de tête</strong></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <div className="text-center">
                                        <img src={img} alt="Gestes barrières" />
                                        <h2 className="text-bold">RESTEZ CHEZ VOUS.</h2>
                                        <h2 className="text-bold">SAUVEZ DES VIES.</h2>
                                        <h5 className="py-3">Contribuez à arrêter le coronavirus.</h5>
                                    </div>
                                    <div className="mesures">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">1</h5>
                                                <p className="card-text"><strong>RESTEZ</strong> chez vous autant que possible.</p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">2</h5>
                                                <p className="card-text"><strong>GARDEZ</strong> une distance de sécurité.</p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">3</h5>
                                                <p className="card-text"><strong>LAVEZ-VOUS</strong> souvent les mains.</p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">4</h5>
                                                <p className="card-text"><strong>COUVREZ-VOUS</strong> la bouche quand vous toussez.</p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">5</h5>
                                                <p className="card-text"><strong>VOUS ÊTES MALADE?</strong> Appelez votre médecin.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-center mt-5"><strong>CONSEILS DU MINSANTE</strong></h4>
                                        <img id="gestes" src={gestes} alt="" />
                                    </div>
                                </div>
                                {/* <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        )
    }
}

export default Conseils;