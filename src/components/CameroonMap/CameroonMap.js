import React from 'react';

export default class CameroonMap extends React.Component {

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

        const s = document.createElement('script');
        s.async = true;
        s.innerHTML = data;
        this.instance.appendChild(s);
    }

    render() {
        return <div id="container" className="py-5" ref={el => (this.instance = el)} />;
    }
}