import React from 'react';
import {Bar} from 'react-chartjs-2';
import "./chart.css";
import ChartContext from "../../Context/ChartContext";
import _ from "lodash";

const fakeData = [
  {
  EnergySource1: "coal",
  amount1: 100,
  EnergySource2: "hyrdo",
  amount2: 700,
  EnergySource3: "natural gas",
  amount3: 400,
  EnergySource4: "nuclear",
  amount4: 600,
  stateName: "Texas"
},
{
  EnergySource1: "coal",
  amount1: 700,
  EnergySource2: "hyrdo",
  amount2: 300,
  EnergySource3: "natural gas",
  amount3: 600,
  EnergySource4: "nuclear",
  amount4: 200,
  stateName: "Arizona"
},
]

export default class StateBarChart extends React.Component {
  render() {
    return (
      <ChartContext.Consumer>
      { (value) => (
      <div className="StateBarChart">
        { !(_.isEmpty(value.chosenStates)) &&
        fakeData.map(eachState => (
        <Bar
          data={{
            labels: [eachState.stateName],
          datasets: [
            {
                label: [eachState.EnergySource1],
                backgroundColor: '#E03440',
                data: [eachState.amount1]
            },
            {
                label: [eachState.EnergySource2],
                backgroundColor: '#47A973',
                data: [eachState.amount2]
            },
            {
                label: [eachState.EnergySource3],
                backgroundColor: '#3288B5',
                data: [eachState.amount3]
            },
            {
                label: [eachState.EnergySource4],
                backgroundColor: '#FCD471',
                data: [eachState.amount4]
            },
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
              text:`Types of Energy Generation: ${eachState.stateName}`,
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
        />))
      }
      </div>
      )}
      </ChartContext.Consumer>
    );
  }
}