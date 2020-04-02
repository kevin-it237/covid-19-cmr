import React from 'react';
import {BigLoader} from '../../components/Loader/Loader'
import './BubbleChart.scss';
import $ from  'jquery';
var Highcharts = require('highcharts');  
// Load module after Highcharts is loaded
require('highcharts/modules/map')(Highcharts);

class BubbleChart extends React.Component {

    state = {
        townData: [],
        loading: true,
        error: ""
    }
    
    componentDidMount() {
        // this.readData()
    }

    displayChart = () => {
        
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
            if (data.length == headers.length) {
    
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
        const {error, townData, loading} = this.state
        return (
            loading ? <div className="mt-5 pt-4"><BigLoader /></div>:
                error.length ? <div className="alert alert-danger text-center">{error}</div>:
                    <section>
                        <div className="container chart mt-5 pt-3 mb-5">
                            <div className="row">
                                <div id="covid-cmr-bubblechart" className="col-sm-12">
                                    
                                </div>
                            </div>
                        </div>
                    </section>
        )
    }
}

export default BubbleChart;