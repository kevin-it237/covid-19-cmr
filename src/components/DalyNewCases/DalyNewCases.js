import React from 'react';
import {BigLoader} from '../Loader/Loader';
var Highcharts = require('highcharts');  
// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);

class DalyNewCases extends React.Component {

    state = {
        loading: true,
        error: ""
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false});
            this.displayChart();
        }, 2500);
    }

    displayChart = () => {
        Highcharts.chart('covid-cmr-dayly-chart', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Nouveaux Cas Journaliers'
            },
            subtitle: {
                text: 'Nombre de malades par jour'
            },
            xAxis: {
                categories: ["Mar 01","Mar 02","Mar 03","Mar 04","Mar 05","Mar 06","Mar 07","Mar 08","Mar 09","Mar 10","Mar 11","Mar 12","Mar 13",
                "Mar 14","Mar 15","Mar 16","Mar 17","Mar 18","Mar 19","Mar 20","Mar 21","Mar 22","Mar 23","Mar 24","Mar 25","Mar 26","Mar 27",
                "Mar 28","Mar 29","Mar 30","Mar 31","Apr 01","Apr 02","Apr 03","Apr 04","Apr 05","Apr 06","Apr 07","Apr 08","Apr 09"]  
            },
            yAxis: {
                title: {
                    text: 'Total des Cas'
                }
            },
            series: [{
                name: 'Cas',
                data: [null,null,null,null,null,null,0,0,0,0,0,0,0,1,1,1,5,3,0,14,13,0,16,10,9,0,16,0,48,0,54,40,73,203,46,95,8,27,45,21],
                zoneAxis: 'x',
                color: '#FF9900',
                lineWidth: 5,
            }]
        });
    }

    render() {
        const {error, loading} = this.state
        return (
            loading ? <div className="mt-5 pt-2"><BigLoader /></div>:
                error.length ? <div className="alert alert-danger text-center">{error}</div>:
                    <section>
                        <div className="container chart mt-5 pt-3 mb-5">
                            <div className="row">
                                <div id="covid-cmr-dayly-chart" className="col-sm-12">
                                    
                                </div>
                            </div>
                        </div>
                    </section>
        )
    }
}

export default DalyNewCases;