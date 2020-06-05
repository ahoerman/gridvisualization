import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import "./chart.css";
import ChartContext from "../../Context/ChartContext";
import _ from "lodash";


export default class StateDoughnutChart extends React.Component {
  getKeyColor(keyName) {
    switch(keyName) {
      case "Coal":
        return "#E03440";
      case "Hydroelectric Conventional":
        return "#47A973";
      case "Natural Gas":
        return "#3288B5";
      case "Other":
        return "#FCD471";
      case "Petroleum":
        return "#6B1162";
      case "Other Biomass":
        return "#003049";
      case "Wind":
        return "#F75C03";
      case "Wood and Wood Derived Fuels":
        return "#AF232B";
      case "Nuclear":
        return "#327E51";
      case "Other Gases":
        return "#23638D";
      case "Solar Thermal and Photovoltaic":
        return "#D1AA5A";
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
                              '#FFFFFF'
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