import React from 'react';
import {BigLoader} from '../../components/Loader/Loader'
import './TownsInfos.scss';
import $ from  'jquery';
import DataTable from 'datatables.net';

class TownInfos extends React.Component {

    state = {
        townData: [],
        countryData: [],
        loading: true,
        loadingCountryData: true,
        error: "",
        error2: "",
    }
    
    componentDidMount() {
        this.readData()
    }

    // Get csv that contain town covid-19 infos
    readData = () => {
        // Get cameroon towns data
        $.ajax({
            type: "GET",
            url: "https://raw.githubusercontent.com/kevin-it237/covid-19-cmr/master/covid-19-cmr.csv",
            dataType: "text",
            success: (data) => {this.processData(data, 'Cameroon');},
            error: (err) => {
                this.setState({loading: false, error: "Veuillez Recharger la page"})
            }
         });
        // Get africa data
        // $.ajax({
        //     type: "GET",
        //     url: "https://raw.githubusercontent.com/kevin-it237/covid-19-cmr/master/covid-19-africa.csv",
        //     dataType: "text",
        //     success: (data) => {this.processData(data, 'Africa');},
        //     error: (err) => {
        //         this.setState({loadingCountryData: false, error2: "Veuillez Recharger la page"})
        //     }
        //  });
    }

    // Parse cv fetched
    processData = (allText, zone) => {
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
        if(zone = "Cameroon") {
            this.setState({townData: lines, error: "", loading: false}, () => $('#table_id').DataTable())
        }
        if(zone = "Africa") {
            this.setState({countryData: lines, error2: "", loadingCountryData: false}, () => $('#africa_table_id').DataTable())
        }
    }

    render() {
        const {error, townData, loading, countryData, loadingCountryData} = this.state
        return (
            loading ? <div className="mt-5 pt-4"><BigLoader /></div>:
                error.length ? <div className="alert alert-danger text-center">{error}</div>:
                    <section>
                        <div className="container stats-table">
                            <div className="row">
                                <div className="col-sm-12 tablecontainer">
                                    <h5 className="my-4">Bilan de l'épidemie</h5>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="cameroon-tab" data-toggle="tab" href="#cameroon" role="tab" aria-controls="cameroon" aria-selected="true">Cameroun</a>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a className="nav-link" id="africa-tab" data-toggle="tab" href="#africa" role="tab" aria-controls="africa" aria-selected="false">Afrique</a>
                                        </li> */}
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="cameroon" role="tabpanel" aria-labelledby="cameroon-tab">
                                            <table className="table" id="table_id">
                                                <thead className="thead-light">
                                                    <tr>
                                                    <th scope="col">Villes</th>
                                                    <th scope="col">Cas Total</th>
                                                    <th scope="col">Guéris</th>
                                                    <th scope="col">Actifs</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        townData.map((info, i) => (
                                                            <tr key={i}>
                                                                <th scope="row">{info[0]}</th>
                                                                <td>{info[1]}</td>
                                                                <td>{info[2]}</td>
                                                                <td>{info[3]}</td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>

                                        </div>
                                        {/* <div className="tab-pane fade" id="africa" role="tabpanel" aria-labelledby="africa-tab">
                                            {
                                                !loadingCountryData&&countryData&&<AfricaData countryData={countryData} />
                                            }
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
        )
    }
}

class AfricaData extends React.Component {

    render() {
        const {countryData} = this.props;

        return (
            <table className="table" id="africa_table_id">
                <thead className="thead-light">
                    <tr>
                    <th scope="col">Pays</th>
                    <th scope="col">Cas Total</th>
                    <th scope="col">Guéris</th>
                    <th scope="col">Actifs</th>
                    <th scope="col">Décès</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        countryData.map((info, i) => (
                            <tr key={i}>
                                <th scope="row">{info[0]}</th>
                                <td>{info[1]}</td>
                                <td>{info[2]}</td>
                                <td>{info[3]}</td>
                                <td>{info[4]}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    }
}

export default TownInfos;