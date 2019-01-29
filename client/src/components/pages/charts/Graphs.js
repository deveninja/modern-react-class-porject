import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class Graphs extends Component {

  state = {
    options: {
      chart: {
        background: '#f4f4f4',
        foreColor: '#333'
      },
      
      xaxis: {
        categories: [
          "Lake Danao",
          "Taal lake",
          "Lake Commerce"
        ]
      },

      yaxis: {
        categories: [
          'small',
          'medium',
          'large'
        ]
      },

      fill: {
        colors: ['#4026d4', '#4026d4', '#546E7A']
      },

      dataLabels: {
        enabled: false,
        formatter: val => {
          return val + " votes"
        }
      },
    
      title: {
        text: "What is your lake?",
        align: "center",
        margin: 20,
        offsetY: 20,
        style: {
          fontSize: "25px"
        }
      },
      markers: {
        colors: ['#4026d4', '#4026d4', '#546E7A']
     }

    },
    series: [
      {
        name: "Votes",
        data: [
          5,
          6,
          2
        ]
      }
    ]
  }

  style = {
    
    margin: '70px auto',
    overflow: 'hidden',
    width: '80%',
    textAlign: 'center' 
  
  }

  render() {
    
    return (
      <div id="graph-chart" className="bordered" style={this.style}>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type='bar'
          height='450'
          width='100%'
        />
      </div>
    )
  }
}

export default Graphs
