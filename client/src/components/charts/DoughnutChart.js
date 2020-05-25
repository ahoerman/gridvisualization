import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import "./chart.css";
import ChartContext from "../../Context/ChartContext";


export default class StateDoughnutChart extends React.Component {
  render() {
    return (
      <ChartContext.Consumer>
        { (value) => (
          <div className="StateDoughnutChart">
            { value.chosenStates.length &&
              <Doughnut
              data={
                {
                  labels: [value.chosenStates[1].EnergySource.typeName, value.chosenStates[2].EnergySource.typeName, value.chosenStates[3].EnergySource.typeName,
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
                      data: [value.chosenStates[1].amount, value.chosenStates[2].amount, value.chosenStates[3].amount]
                    }
                  ]
                }
              }
              options={{
                title:{
                  display:true,
                  text:`Types of Energy Generation for ${value.chosenStates[0].State.fullName}`,
                  fontSize:24
                },
                legend:{
                  display:true,
                  position:'right'
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