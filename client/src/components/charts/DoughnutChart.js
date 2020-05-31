import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import "./chart.css";
import ChartContext from "../../Context/ChartContext";
import _ from "lodash";

const fakeData = {
  "NH": {
    stateName:  "New Hampshire",
    stateAbbrev:  "NH",
    population: "1,234,567",
    generation: {
      coal: 12,
      petroleum: 34,
      nuclear: 45,
      hydro: 76,
      solar: 87,
      other: 24,
    },
    co2emission: {
      coal: 123,
      petroleum: 456,
      naturalGas: 789,
    }
  },
  "ME": {
    stateName:  "Maine",
    stateAbbrev:  "NH",
    population: "1,234,567",
    generation: {
      coal: 66,
      petroleum: 34,
      nuclear: 12,
      hydro: 34,
      solar: 46,
      other: 24,
    },
    co2emission: {
      coal: 123,
      petroleum: 456,
      naturalGas: 789,
    }
  }
}


export default class StateDoughnutChart extends React.Component {
  render() {
    return (
      <ChartContext.Consumer>
        {(value) => (
          <div className="StateDoughnutChart">
            {!(_.isEmpty(value.chosenStates)) &&
              Object.keys(fakeData).map((eachState, i) => {
                console.log(eachState, i)
                const dataLabels = Object.keys(fakeData[eachState].generation);
                const dataNumbers = dataLabels.map(key => fakeData[eachState].generation[key]);
                return (
                  <Doughnut
                    key={fakeData[eachState].stateName}
                    data={
                      {
                        labels: dataLabels,
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
                            data: dataNumbers
                          }
                        ]
                      }
                    }
                    options={{
                      title: {
                        display: true,
                        text: `Types of Energy Generation for ${fakeData[eachState].stateName}`,
                        fontSize: 24
                      },
                      legend: {
                        display: true,
                        position: 'right'
                      }
                    }}
                  />
                )
              })
            }
          </div>
        )}
      </ChartContext.Consumer>
    );
  }
}