import React from 'react';
import {BigLoader} from '../../components/Loader/Loader'
import './CameroonMap.scss';

export default class CameroonMap extends React.Component {

    state = {
        loading: true
    }

    componentDidMount() {
        const data = `var data =[
            ['cm-es', 783],
            ['cm-ad', 57],
            ['cm-nw', 270],
            ['cm-no', 122],
            ['cm-ce', 6227],
            ['cm-ou', 540],
            ['cm-en', 93],
            ['cm-sw', 411],
            ['cm-lt', 2378],
            ['cm-su', 406]
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