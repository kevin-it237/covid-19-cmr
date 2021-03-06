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
                categories: ["Mar 13","Mar 14","Mar 15","Mar 16","Mar 17","Mar 18","Mar 19","Mar 20","Mar 21","Mar 22","Mar 23","Mar 24","Mar 25","Mar 26","Mar 27",
                "Mar 28","Mar 29","Mar 30","Mar 31","Apr 01","Apr 02","Apr 03","Apr 04","Apr 05","Apr 06",
                "Apr 07","Apr 08","Apr 09","Apr 10","Apr 11","Apr 12","Apr 13","Apr 14","Apr 15","Apr 16","Apr 17","Apr 18","Apr 19","Apr 20","Apr 21","Apr 22",
                    "Apr 23","Apr 24","Apr 25","Apr 26","Apr 27","Apr 28","Apr 29","Apr 30","May 1","May 4","May 6","May 7","May 8","May 9","May 11",
                    "May 12","May 13","May 16","May 17","May 20","May 21","May 22","May 23","May 24","May 25","May 26","May 29","May 30","May 31","June 1","June 2",
                    "June 3","June 4","June 5","June 6","June 7","June 8","June 9","June 10","June 12","June 13","June 14","June 15","June 18","June 19","June 20","June 21",
                    "June 22","June 23","June 24","June 30"]
            },
            yAxis: {
                title: {
                    text: 'Total des Cas'
                }
            },
            series: [{
                name: 'Cas',
                data: [0,1,1,1,5,3,0,14,13,0,16,10,9,0,16,0,48,0,54,40,73,203,46,95,8,27,45,73,17,0,12,0,16,0,148,0,21,0,146,0,0,171,96,88,103,84,101,26,
                    237,8,27,161,2,9,305,110,111,154,151,424,204,528,112,197,293,154,392,303,245,239,245,188,204,603,207,309,152,252,369,248,183,376,292,276,
                    498,642,329,282,149,229,551,1119],
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