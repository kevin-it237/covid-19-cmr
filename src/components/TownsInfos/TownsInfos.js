import React from 'react';
import {BigLoader} from '../../components/Loader/Loader'
import './TownsInfos.scss';
import $ from  'jquery';
import DataTable from 'datatables.net';

class TownInfos extends React.Component {

    state = {
        townData: [],
        loading: true,
        error: ""
    }

    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.readData()
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
        this.setState({townData: lines, error: "", loading: false}, () => $('#table_id').DataTable())
    }

    render() {
        const {error, townData, loading} = this.state
        return (
            loading ? <div className="mt-5 pt-4"><BigLoader /></div>:
                error.length ? <div className="alert alert-danger text-center">{error}</div>:
                    <section>
                        <div className="container stats-table">
                            <div className="row">
                                <div className="col-sm-12">
                                    <table className="table" id="table_id">
                                        <thead className="thead-light">
                                            <tr>
                                            <th scope="col">Ville</th>
                                            <th scope="col">Cas Total</th>
                                            <th scope="col">Nouveaux Cas</th>
                                            <th scope="col">Guéris</th>
                                            <th scope="col">Décès</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                townData.map((info, i) => (
                                                    <tr key={i}>
                                                        <th scope="row">{info[0]}</th>
                                                        <td>{info[1]}</td>
                                                        <td>+{info[2]}</td>
                                                        <td>{info[3]}</td>
                                                        <td>{info[4]}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
        )
    }
}

export default TownInfos;