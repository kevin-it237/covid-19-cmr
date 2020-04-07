import React from 'react';
import {BigLoader} from '../Loader/Loader'
import './DeathChart.scss';
import $ from  'jquery';
var Highcharts = require('highcharts');  
// Load module after Highcharts is loaded
require('highcharts/modules/map')(Highcharts);

class DeathChart extends React.Component {

    state = {
        townData: [],
        loading: true,
        error: ""
    }
    
    componentDidMount() {
        this.readData()
    }

    displayChart = () => {
        Highcharts.chart('covid-cmr-deathchart', {
            chart: {
                type: 'spline',
                scrollablePlotArea: {
                    minWidth: 700,
                    scrollPositionX: 1
                }
            },
            title: {
                text: 'Evolution des Décès du COVID-19 au Cameroun'
            },
            subtitle: {
                text: 'Nombre de Décès'
            },
            xAxis: {
                categories: ["Mar 01","Mar 02","Mar 03","Mar 04","Mar 05","Mar 06","Mar 07","Mar 08","Mar 09","Mar 10","Mar 11","Mar 12","Mar 13","Mar 14","Mar 15","Mar 16","Mar 17","Mar 18","Mar 19","Mar 20","Mar 21","Mar 22","Mar 23","Mar 24","Mar 25","Mar 26","Mar 27","Mar 28","Mar 29","Mar 30","Mar 31","Apr 01","Apr 02","Apr 03","Apr 04","Apr 05","Apr 06"]
            },
            yAxis: {
                title: {
                    text: 'Total des Décès'
                }
            },
            series: [{
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,6,6,6,6,7,8,9,9,9],
                zoneAxis: 'x',
                lineWidth: 5,
                name: 'Décès',
                color: 'red',
            }]
        });
    }

    // Get csv that contain town covid-19 infos
    readData = () => {
        $.ajax({
            type: "GET",
            url: "https://raw.githubusercontent.com/kevin-it237/covid-19-cmr/master/covid-19-cmr.csv",
            dataType: "text",
            success: (data) => {this.processData(data);},
            error: (err) => {
                this.setState({loading: false, error: "Veuillez Recharger la page"})
            }
        });
    }

    // Parse cv fetched
    processData = (allText) => {
        var allTextLines = allText.split(/\r\n|\n/);
        var headers = allTextLines[0].split(',');
        var lines = [];
    
        for (var i=1; i<allTextLines.length; i++) {
            var data = allTextLines[i].split(',');
            if (data.length === headers.length) {
    
                var tarr = [];
                for (var j=0; j<headers.length; j++) {
                    // tarr.push(headers[j]+":"+data[j]);
                    tarr.push(data[j]);
                }
                lines.push(tarr);
            }
        }
        this.setState({townData: lines, error: "", loading: false}, () => this.displayChart())
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