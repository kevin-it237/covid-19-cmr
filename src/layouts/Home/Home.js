import React, {Fragment} from 'react';
import CountUp from 'react-countup';
import './Home.scss';
import TownsInfos from '../../components/TownsInfos/TownsInfos'
import GlobalEvolutionChart from '../../components/GlobalEvolutionChart/GlobalEvolutionChart'
import DeathChart from '../../components/DeathChart/DeathChart';
import ActiveCasesChart from '../../components/ActiveCasesChart/ActiveCasesChart';
import DalyCases from '../../components/DalyNewCases/DalyNewCases';
import CameroonMap from './../../components/CameroonMap/CameroonMap'

import Footer from '../../components/Footer/Footer';

class Home extends React.Component {

    state = {
    }
    
    componentDidMount() {
    }

    render() {
        return (
            <Fragment>
                <section>
                    <div className="container mt-4 stats">
                        <div className="row mt-5 justify-content-center align-items-center statwrapper">
                            <div className="col-sm-10 col-md-3 mt-3 text-center wrappe">
                                <div className="stat">
                                    <h2 className="display-3">Cas Total</h2>
                                    <h3 className="display-3 one">
                                        <CountUp end={1430} />
                                    </h3>
                                </div>
                            </div>
                            <div className="col-sm-10 col-md-3 mt-3  text-center wrappe">
                                <div className="stat">
                                    <h2 className="display-3">Nouveaux Cas</h2>
                                    <h3 className="display-3 four">
                                        <CountUp end={96} />
                                    </h3>
                                    <p className="text-muted">Mise à jour le <strong>24 Avril 2020</strong></p>
                                </div>
                            </div>
                            <div className="col-sm-10 col-md-3 mt-3  text-center wrappe">
                                <div className="stat">
                                    <h2 className="display-3">Décès</h2>
                                    <h3 className="display-3 two">
                                        <CountUp end={43} />
                                    </h3>
                                </div>
                            </div>
                            <div className="col-sm-10 col-md-3 mt-3  text-center wrappe">
                                <div className="stat">
                                    <h2 className="display-3">Guéris</h2>
                                    <h3 className="display-3 tree">
                                        <CountUp end={668} />
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <CameroonMap />
                <GlobalEvolutionChart />
                <DalyCases />
                <ActiveCasesChart />
                <DeathChart />
                {/* <TownsInfos /> */}
                <Footer />
            </Fragment>
        )
    }
}

export default Home;