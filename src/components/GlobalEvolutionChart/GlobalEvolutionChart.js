import React from 'react';
import {BigLoader} from '../Loader/Loader'
import './GlobalEvolutionChart.scss';
import $ from  'jquery';
var Highcharts = require('highcharts');  
// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);

class Chart extends React.Component {

    state = {
        townData: [],
        loading: true,
        error: ""
    }
    
    componentDidMount() {
        this.readData()
    }

    displayChart = () => {
        Highcharts.chart('covid-cmr-chart', {
            chart: {
                type: 'spline',
                scrollablePlotArea: {
                    minWidth: 700,
                    scrollPositionX: 1
                }
            },
            title: {
                text: 'Evolution du COVID-19 au Cameroun'
            },
            subtitle: {
                text: 'Progression Journalière'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                zoneAxis: 'x',
                lineWidth: 3,
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
                                <div id="covid-cmr-chart" className="col-sm-12">
                                    
                                </div>
                            </div>
                        </div>
                    </section>
        )
    }
}

export default Chart;