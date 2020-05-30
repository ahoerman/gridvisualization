import React, { useState, useEffect, useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import "./chart.css";
import ChartContext from "../../Context/ChartContext";
import _ from "lodash";

const fakeData = {
  "NH": {
    stateName: "New Hampshire",
    stateAbbrev: "NH",
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
    stateName: "Maine",
    stateAbbrev: "ME",
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
      coal: 50,
      petroleum: 70,
      naturalGas: 90,
    }
  }
}

export default function() {
  const chartContext = useContext(ChartContext);
  const initialState = () => ({
    labels: [],
    datasets: [
      {
        label: ["Coal"],
        backgroundColor: '#E03440',
        data: []
      },
      {
        label: ["Petroleum"],
        backgroundColor: '#47A973',
        data: []
      },
      {
        label: ["Natural Gas"],
        backgroundColor: '#3288B5',
        data: []
      }
    ],
  })
  const [ chartData, setChartData ] = useState(initialState);

  const buildData = () => {
    const dataObject = initialState();
    Object.keys(fakeData).map(eachState => {
      dataObject.labels.push(eachState);
      dataObject.datasets[0].data.push(fakeData[eachState].co2emission.coal);
      dataObject.datasets[1].data.push(fakeData[eachState].co2emission.petroleum);
      dataObject.datasets[2].data.push(fakeData[eachState].co2emission.naturalGas);
    });
    console.log(dataObject);
    setChartData(dataObject);
  }

  useEffect(() => { 
    buildData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartContext.chosenStates]);

  useEffect(() => {
    buildData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    return (
          <div className="StateBarChart">
            {!(_.isEmpty(chartContext.chosenStates)) &&
                  <Bar
                    data= {chartData}
                    options={{
                      title: {
                        display: true,
                        text: `Types of Energy Generation`,
                        fontSize: 24
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
              })
            }
          </div>
    );
  }