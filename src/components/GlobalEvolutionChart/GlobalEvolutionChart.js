import React from 'react';
import {BigLoader} from '../Loader/Loader'
import './GlobalEvolutionChart.scss';
var Highcharts = require('highcharts');  
// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);

class Chart extends React.Component {

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
        Highcharts.chart('covid-cmr-chart', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Evolution des cas de COVID-19 au Cameroun'
            },
            subtitle: {
                text: 'Nombre de personnes infectées'
            },
            xAxis: {
                categories: ["Mar 01","Mar 02","Mar 03","Mar 04","Mar 05","Mar 06","Mar 07","Mar 08","Mar 09",
                "Mar 10","Mar 11","Mar 12","Mar 13","Mar 14","Mar 15","Mar 16","Mar 17","Mar 18","Mar 19","Mar 20",
                "Mar 21","Mar 22","Mar 23","Mar 24","Mar 25","Mar 26","Mar 27","Mar 28","Mar 29","Mar 30","Mar 31",
                "Apr 01","Apr 02","Apr 03","Apr 04","Apr 05","Apr 06","Apr 07","Apr 08","Apr 09","Apr 10","Apr 11",
                "Apr 12","Apr 13","Apr 14","Apr 15","Apr 16","Apr 17","Apr 18","Apr 19","Apr 20","Apr 21","Apr 22",
                    "Apr 23","Apr 24","Apr 25","Apr 26","Apr 27","Apr 28","Apr 29","Apr 30","May 1","May 4","May 6",
                    "May 7","May 8","May 9","May 11","May 12","May 13","May 16","May 17","May 20","May 21","May 22",
                    "May 23","May 24","May 25","May 29","May 30","May 31","June 1","June 2","June 3","June 4","June 5","June 6","June 7"
                    ,"June 8","June 9","June 10","June 12","June 13","June 14","June 15","June 18","June 19","June 20","June 21","June 22",
                    "June 23","June 24","June 30"]
            },
            yAxis: {
                title: {
                    text: 'Total des Cas'
                }
            },
            series: [{
                name: 'Cas',
                data: [0,0,0,0,0,2,2,2,2,2,2,2,2,3,4,5,10,13,13,27,40,40,56,66,75,75,91,91,139,139,193,233,306,509,555,650,658,
                    685,730,803,820,820,832,832,848,848,996,996,1017,1017,1163,1163,1163,1334,1430,1518,1621,1705,1806,1832,2069,
                    2077,2014,2265,2267,2274,2579,2689,2800,2954,3105,3529,3733,4261,4373,4597,4890,5044,5436,5659,5904,6143,6397,6585,
                    6789,7392,7599,7908,8060,8312,8681,8929,9196,9572,9864,10140,10639,11281,11610,11892,12041,12270,12592,13711],
                zoneAxis: 'x',
                color: '#33CCFF',
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
                                <div id="covid-cmr-chart" className="col-sm-12">
                                    
                                </div>
                            </div>
                        </div>
                    </section>
        )
    }
}

export default Chart;