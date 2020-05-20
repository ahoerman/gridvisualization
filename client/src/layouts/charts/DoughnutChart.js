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