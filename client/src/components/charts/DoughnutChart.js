import React from 'react';
import {Doughnut} from 'react-chartjs-2';
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


export default class StateDoughnutChart extends React.Component {
  render() {
    // let fakeData = [];
    return (
      <ChartContext.Consumer>
        { (value) => (
        // for (eachState in chosenStates) {
        //     fakeData.push({
        //       EnergySource1: eachState[1].EnergySource.typeName
        //     })
        // }
          <div className="StateDoughnutChart">
            { !(_.isEmpty(value.chosenStates)) &&
            fakeData.map(eachState => (
              <Doughnut
              data={
                {
                  labels: [eachState.EnergySource1, eachState.EnergySource2, eachState.EnergySource3, eachState.EnergySource4
                          ],
                  datasets: [
                    {
                      label: 'Energy Sources',
                      backgroundColor: [
                        '#E03440',
                        '#47A973',
                        '#3288B5',
                        '#FCD471',
                        '#6B1162',
                        '#003049',
                        '#F75C03'
                      ],
                      hoverBackgroundColor: [
                      '#AF232B',
                      '#327E51',
                      '#23638D',
                      '#D1AA5A',
                      '#792359',
                      '#00233D',
                      '#902501'
                      ],
                      data: [eachState.amount1, eachState.amount2, eachState.amount3, eachState.amount4]
                    }
                  ]
                }
              }
              options={{
                title:{
                  display:true,
                  text:`Types of Energy Generation for ${eachState.stateName}`,
                  fontSize:24
                },
                legend:{
                  display:true,
                  position:'right'
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