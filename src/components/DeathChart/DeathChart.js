import React from 'react';
import {BigLoader} from '../Loader/Loader'
import './DeathChart.scss';
var Highcharts = require('highcharts');  
// Load module after Highcharts is loaded
require('highcharts/modules/map')(Highcharts);

class DeathChart extends React.Component {

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
        Highcharts.chart('covid-cmr-deathchart', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Evolution des Décès du COVID-19 au Cameroun'
            },
            subtitle: {
                text: 'Nombre de Décès'
            },
            xAxis: {
                categories: ["Mar 11","Mar 12","Mar 13","Mar 14","Mar 15","Mar 16","Mar 17","Mar 18","Mar 19","Mar 20","Mar 21","Mar 22","Mar 23","Mar 24",
                "Mar 25","Mar 26","Mar 27","Mar 28","Mar 29","Mar 30","Mar 31","Apr 01","Apr 02","Apr 03","Apr 04","Apr 05","Apr 06","Apr 07","Apr 08","Apr 09"]
            },
            yAxis: {
                title: {
                    text: 'Total des Décès'
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,6,6,6,6,7,8,9,9,9,9,10,12],
                zoneAxis: 'x',
                lineWidth: 5,
                name: 'Décès',
                color: 'red',
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 800
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        });
    }

    render() {
        const {error, loading} = this.state
        return (
            loading ? <div className="mt-5 pt-4"><BigLoader /></div>:
                error.length ? <div className="alert alert-danger text-center">{error}</div>:
                    <section>
                        <div className="container chart mt-5 pt-3 mb-5">
                            <div className="row">
                                <div id="covid-cmr-deathchart" className="col-sm-12">
                                    
                                </div>
                            </div>
                        </div>
                    </section>
        )
    }
}

export default DeathChart;