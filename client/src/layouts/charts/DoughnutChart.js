import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import "./chart.css";

const state = {
  labels: ['Coal', 'Pumped Storage', 'Hydroelectric Conventional',
           'Nuclear', 'Other', 'Natural Gas', 'Petroleum'],
  datasets: [
    {
      label: 'Energy Sources',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4',
        '#D138BF',
        '#F75C03'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F',
      '#6B1162',
      '#902501'
      ],
      data: [65, 59, 80, 81, 56, 44, 62]
    }
  ]
}

export default class StateDoughnutChart extends React.Component {
  render() {
    return (
      <div className="StateDoughnutChart">
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Types of Energy Generation for New Hampshire',
              fontSize:24
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}