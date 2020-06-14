import React, { useState, useEffect, useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import "./chart.css";
import ChartContext from "../../Context/ChartContext";
import _ from "lodash";

export default function () {
  const chartContext = useContext(ChartContext);
  const initialState = () => ({
    labels: [],
    datasets: [
      {
        label: ["Coal"],
        backgroundColor: '#DF2935',
        data: []
      },
      {
        label: ["Hydroelectric Conventional"],
        backgroundColor: '#3066BE',
        data: []
      },
      {
        label: ["Natural Gas"],
        backgroundColor: '#F56416',
        data: []
      },
      {
        label: ["Other"],
        backgroundColor: '#FCD471',
        data: []
      },
      {
        label: ["Petroleum"],
        backgroundColor: '#8F0200',
        data: []
      },
      {
        label: ["Other Biomass"],
        backgroundColor: '#3FA254',
        data: []
      },
      {
        label: ["Wind"],
        backgroundColor: '#109EE5',
        data: []
      },
      {
        label: ["Wood and Wood Derived Fuels"],
        backgroundColor: '#AF232B',
        data: []
      },
      {
        label: ["Nuclear"],
        backgroundColor: '#6D435A',
        data: []
      },
      {
        label: ["Other Gases"],
        backgroundColor: '#23638D',
        data: []
      },
      {
        label: ["Solar Thermal and Photovoltaic"],
        backgroundColor: '#70C1B3',
        data: []
      },
      {
        label: ["Pumped Storage"],
        backgroundColor: '#792359',
        data: []
      },
      {
        label: ["Geothermal"],
        backgroundColor: '#00233D',
        data: []
      }
    ],
  })
  const [chartData, setChartData] = useState(initialState);

  const buildData = () => {
    const dataObject = initialState();
    Object.keys(chartContext.chosenStates).map(eachState => {
      dataObject.labels.push(eachState);
      dataObject.datasets[0].data.push((chartContext.chosenStates[eachState].generation.Coal) / (chartContext.chosenStates[eachState].population));
      dataObject.datasets[1].data.push((chartContext.chosenStates[eachState].generation["Hydroelectric Conventional"]) / (chartContext.chosenStates[eachState].population));
      dataObject.datasets[2].data.push((chartContext.chosenStates[eachState].generation["Natural Gas"]) / (chartContext.chosenStates[eachState].population));
      dataObject.datasets[3].data.push((chartContext.chosenStates[eachState].generation.Other) / (chartContext.chosenStates[eachState].population));
      dataObject.datasets[4].data.push((chartContext.chosenStates[eachState].generation.Petroleum) / (chartContext.chosenStates[eachState].population));
      dataObject.datasets[5].data.push((chartContext.chosenStates[eachState].generation["Other Biomass"]) / (chartContext.chosenStates[eachState].population));
      dataObject.datasets[6].data.push((chartContext.chosenStates[eachState].generation.Wind) / (chartContext.chosenStates[eachState].population));
      dataObject.datasets[7].data.push((chartContext.chosenStates[eachState].generation["Wood and Wood Derived Fuels"]) / (chartContext.chosenStates[eachState].population));
      dataObject.datasets[8].data.push((chartContext.chosenStates[eachState].generation.Nuclear) / (chartContext.chosenStates[eachState].population));
      dataObject.datasets[9].data.push((chartContext.chosenStates[eachState].generation["Other Gases"]) / (chartContext.chosenStates[eachState].population));
      dataObject.datasets[10].data.push((chartContext.chosenStates[eachState].generation["Solar Thermal and Photovoltaic"]) / (chartContext.chosenStates[eachState].population));
      dataObject.datasets[11].data.push((chartContext.chosenStates[eachState].generation["Pumped Storage"]) / (chartContext.chosenStates[eachState].population));
      dataObject.datasets[12].data.push((chartContext.chosenStates[eachState].generation.Geothermal) / (chartContext.chosenStates[eachState].population));
    });
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
          data={chartData}
          options={{
            title: {
              display: true,
              text: `Types of Generation Per Capita`,
              fontSize: 24
            },
            scales: {
              yAxes: [{
                stacked: true,
                ticks: {
                  beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: "Metric Tons"
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
  );
}