import React from 'react';
import {Bar} from 'react-chartjs-2';
import "./chart.css";
import ChartContext from "../../util/ChartContext";

export default class StateBarChart extends React.Component {
  render() {
    return (
      <ChartContext.Consumer>
      { (value) => (
      <div className="StateBarChart">
        { value.chosenStates.length &&
        <Bar
          data={{
            labels: [value.chosenStates[0].stateAbbrev],
          datasets: [
            {
                label: [value.chosenStates[1].EnergySource.typeName],
                backgroundColor: '#E03440',
                data: [value.chosenStates[1].amount]
            },
            {
                label: [value.chosenStates[2].EnergySource.typeName],
                backgroundColor: '#47A973',
                data: [value.chosenStates[2].amount]
            },
            {
                label: [value.chosenStates[3].EnergySource.typeName],
                backgroundColor: '#3288B5',
                data: [value.chosenStates[3].amount]
            },
            // {
            //     label: ['Nuclear'],
            //     backgroundColor: '#FCD471',
            //     data: [81, 56]
            // },
            // {
            //     label: ['Other'],
            //     backgroundColor: '#6B1162',
            //     data: [44, 24]
            // },
            // {
            //     label: ['Natural Gas'],
            //     backgroundColor: '#003049',
            //     data: [56, 44]
            // },
            // {
            //     label: ['Petroleum'],
            //     backgroundColor: '#F75C03',
            //     data: [12, 32]
            // },
          ],
        }}
          options={{
            title:{
              display:true,
              text:`Types of Energy Generation: ${value.chosenStates[0].stateAbbrev}`,
              fontSize:24
            },
            scales: {
                yAxes: [{
                  stacked: true,
                  ticks: {
                    beginAtZero: true
                  }
              }],
              xAxes: [{
                  stacked: true,
                  ticks: {
                    beginAtZero: true
                  }
                }]
          }
          }}
        />
      }
      </div>
      )}
      </ChartContext.Consumer>
    );
  }
}