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
        label: ["Natural Gas"],
        backgroundColor: '#F56416',
        data: []
      },
      {
        label: ["Petroleum"],
        backgroundColor: '#8F0200',
        data: []
      },
      {
        label: ["Other"],
        backgroundColor: '#FCD471',
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

      const dataLabels = Object.keys(chartContext.chosenStates[eachState].generation).sort();
      let totalGenerationNum = 0;
      dataLabels.forEach(key => {
        totalGenerationNum += chartContext.chosenStates[eachState].generation[key];
      });
      dataObject.labels.push(eachState);
      dataObject.datasets[0].data.push((chartContext.chosenStates[eachState].co2emission.Coal) / totalGenerationNum);
      dataObject.datasets[1].data.push((chartContext.chosenStates[eachState].co2emission["Natural Gas"]) / totalGenerationNum);
      dataObject.datasets[2].data.push((chartContext.chosenStates[eachState].co2emission.Petroleum) / totalGenerationNum);
      dataObject.datasets[3].data.push((chartContext.chosenStates[eachState].co2emission.Other) / totalGenerationNum);
      dataObject.datasets[4].data.push((chartContext.chosenStates[eachState].co2emission.Geothermal) / totalGenerationNum);
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
              text: `CO2 Emissions Per Total mWh`,
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
                labelString: "Metric Tons/mWh"
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