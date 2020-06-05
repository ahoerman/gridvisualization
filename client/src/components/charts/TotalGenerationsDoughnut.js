import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import "./chart.css";
import ChartContext from "../../Context/ChartContext";
import _ from "lodash";


export default class StateDoughnutChart extends React.Component {
  getKeyColor(keyName) {
    switch(keyName) {
      case "Coal":
        return "#DF2935";
      case "Hydroelectric Conventional":
        return "#3066BE";
      case "Natural Gas":
        return "#F56416";
      case "Other":
        return "#FCD471";
      case "Petroleum":
        return "#AA5042";
      case "Other Biomass":
        return "#3FA254";
      case "Wind":
        return "#109EE5";
      case "Wood and Wood Derived Fuels":
        return "#AF232B";
      case "Nuclear":
        return "#6D435A";
      case "Other Gases":
        return "#23638D";
      case "Solar Thermal and Photovoltaic":
        return "#70C1B3";
      case "Pumped Storage":
        return "#792359";
      case "Geothermal":
        return "#00233D";
      default:
        return "#f2f2f2";
    }
  }
  render() {
    return (
      <ChartContext.Consumer>
        {(value) => (
          <div className="StateDoughnutChart">
            {!(_.isEmpty(value.chosenStates)) &&
              Object.keys(value.chosenStates).map((eachState, i) => {
                console.log(eachState, i)
                const dataLabels = Object.keys(value.chosenStates[eachState].generation).sort();
                const dataNumbers = [];
                const dataColors = [];
                dataLabels.forEach(key => {
                  dataNumbers.push(value.chosenStates[eachState].generation[key]);
                  dataColors.push(this.getKeyColor(key));
                });
                console.log(dataColors);
                return (
                  <Doughnut
                    key={value.chosenStates[eachState].stateName}
                    data={
                      {
                        labels: dataLabels,
                        datasets: [
                          {
                            label: 'Energy Sources',
                            backgroundColor: dataColors,
                            hoverBackgroundColor: [
                              '#DEDFE3',
                              '#DEDFE3',
                              '#DEDFE3',
                              '#DEDFE3',
                              '#DEDFE3',
                              '#DEDFE3',
                              '#DEDFE3',
                              '#DEDFE3',
                              '#DEDFE3',
                              '#DEDFE3',
                              '#DEDFE3',
                              '#DEDFE3',
                              '#DEDFE3'
                            ],
                            data: dataNumbers
                          }
                        ]
                      }
                    }
                    options={{
                      title: {
                        display: true,
                        text: `Types of Energy Generation in MWH for ${value.chosenStates[eachState].stateName}`,
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