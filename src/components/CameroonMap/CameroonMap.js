import React from 'react';
import {BigLoader} from '../../components/Loader/Loader'
import './CameroonMap.scss';

export default class CameroonMap extends React.Component {

    state = {
        loading: true
    }

    componentDidMount() {
        const data = `var data =[
            ['cm-es', 52],
            ['cm-ad', 5],
            ['cm-nw', 17],
            ['cm-no', 14],
            ['cm-ce', 1605],
            ['cm-ou', 133],
            ['cm-en', 5],
            ['cm-sw', 37],
            ['cm-lt', 960],
            ['cm-su', 12]
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
                  name: 'Cas',
                  states: {
                      hover: {
                          color: '#33CCFF'
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