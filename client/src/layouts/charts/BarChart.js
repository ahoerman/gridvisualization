import React from 'react';
import {Bar} from 'react-chartjs-2';
import "./chart.css";

const state = {
    labels: ['Maine', 'New Hampshire'],
  datasets: [
    {
        label: ['Coal'],
        backgroundColor: '#E03440',
        data: [65, 32]
    },
    {
        label: ['Pumped Storage'],
        backgroundColor: '#47A973',
        data: [59,44]
    },
    {
        label: ['Hyrdoelectric Conventional'],
        backgroundColor: '#3288B5',
        data: [80, 81]
    },
    {
        label: ['Nuclear'],
        backgroundColor: '#FCD471',
        data: [81, 56]
    },
    {
        label: ['Other'],
        backgroundColor: '#D138BF',
        data: [44, 24]
    },
    {
        label: ['Natural Gas'],
        backgroundColor: '#003049',
        data: [56, 44]
    },
    {
        label: ['Petroleum'],
        backgroundColor: '#F75C03',
        data: [12, 32]
    },
  ],
}

export default class StateBarChart extends React.Component {
  render() {
    return (
      <div className="StateBarChart">
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Types of Energy Generation: Maine vs New Hampshire',
              fontSize:24
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
      </div>
    );
  }
}