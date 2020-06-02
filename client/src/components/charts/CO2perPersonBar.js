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
        backgroundColor: '#E03440',
        data: []
      },
      {
        label: ["Natural Gas"],
        backgroundColor: '#47A973',
        data: []
      },
      {
        label: ["Petroleum"],
        backgroundColor: '#3288B5',
        data: []
      }
    ],
  })
  const [chartData, setChartData] = useState(initialState);

  const buildData = () => {
    const dataObject = initialState();
    Object.keys(chartContext.chosenStates).map(eachState => {
      dataObject.labels.push(eachState);
      dataObject.datasets[0].data.push((chartContext.chosenStates[eachState].co2emission.Coal) * 2000 / (chartContext.chosenStates[eachState].population));
      dataObject.datasets[1].data.push((chartContext.chosenStates[eachState].co2emission["Natural Gas"]) * 2000 / (chartContext.chosenStates[eachState].population));
      dataObject.datasets[2].data.push((chartContext.chosenStates[eachState].co2emission.Petroleum) * 2000 / (chartContext.chosenStates[eachState].population));
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
          data={chartData}
          options={{
            title: {
              display: true,
              text: `Total cO${"2".sub()} Emissions Per Person Per State`,
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
                    labelString: "lbs"
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