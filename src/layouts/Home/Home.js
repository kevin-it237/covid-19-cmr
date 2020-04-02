import React, {Fragment} from 'react';
import './Home.scss';
import TownsInfos from '../../components/TownsInfos/TownsInfos'
import Chart from '../../components/Chart/Chart'
import BubbleChart from '../../components/BubbleChart/BubbleChart'

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
                        <div className="row mt-5 justify-content-center align-items-center">
                            <div className="col-sm-10 col-md-4 mt-3 text-center">
                                <div className="stat">
                                    <h2 className="display-3">Cas Total</h2>
                                    <h3 className="display-3 one">233</h3>
                                </div>
                            </div>
                            <div className="col-sm-10 col-md-4 mt-3  text-center">
                                <div className="stat">
                                    <h2 className="display-3">Décès</h2>
                                    <h3 className="display-3 two">6</h3>
                                </div>
                            </div>
                            <div className="col-sm-10 col-md-4 mt-3  text-center">
                                <div className="stat">
                                    <h2 className="display-3">Guérisons</h2>
                                    <h3 className="display-3 tree">10</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <BubbleChart /> */}
                <Chart />
                <TownsInfos />
            </Fragment>
        )
    }
}

export default Home;