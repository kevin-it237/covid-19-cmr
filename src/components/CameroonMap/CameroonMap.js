import React from 'react';
import {BigLoader} from '../../components/Loader/Loader'
import './CameroonMap.scss';

export default class CameroonMap extends React.Component {

    state = {
        loading: true
    }

    componentDidMount() {
        const data = `var data =[
            ['cm-es', 0],
            ['cm-ad', 1],
            ['cm-nw', 2],
            ['cm-no', 3],
            ['cm-ce', 4],
            ['cm-ou', 5],
            ['cm-en', 6],
            ['cm-sw', 7],
            ['cm-lt', 8],
            ['cm-su', 9]
        ];
        
        Highcharts.mapChart('container', {
              chart: {
                  map: 'countries/cm/cm-all'
              },
        
              title: {
                  text: 'Répartition des cas de COVID-19 par régions'
              },
        
              subtitle: {
                  text: ''
              },
        
              mapNavigation: {
                  enabled: true,
                  buttonOptions: {
                      verticalAlign: 'bottom'
                  }
              },
        
              colorAxis: {
                  min: 0
              },
        
              series: [{
                  data: data,
                  name: 'Random data',
                  states: {
                      hover: {
                          color: '#BADA55'
                      }
                  },
                  dataLabels: {
                      enabled: true,
                      format: '{point.name}'
                  }
              }]
        });`

        setTimeout(() => {
            const s = document.createElement('script');
            s.async = true;
            s.innerHTML = data;
            this.instance.appendChild(s);
        }, 2000)

    }

    render() {
        const {loading} = this.state;

        return (
            <div id="container" className="pt-4 mt-5" ref={el => (this.instance = el)}>
                {loading&&<div className="mt-5 pt-5 d-flex justify-content-center align-items-center"><BigLoader /></div>}
            </div>
        );
    }
}