import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import "./chart.css";
import ChartContext from "../../util/ChartContext";


export default class StateDoughnutChart extends React.Component {
  state = {
    labels: ['Coal', 'Pumped Storage', 'Hydroelectric Conventional',
             'Nuclear', 'Other', 'Natural Gas', 'Petroleum'],
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
        data: [65, 59, 80, 81, 56, 44, 62]
      }
    ]
  }
  render() {
    return (
      <ChartContext.Consumer>
        { (value) => (
          <div className="StateDoughnutChart">
            { value.chosenStates.length &&
              <Doughnut
              data={this.state}
              options={{
                title:{
                  display:true,
                  text:`Types of Energy Generation for ${value.chosenStates[0].stateAbbrev}`,
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