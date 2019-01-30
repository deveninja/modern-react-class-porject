import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import { connect } from 'react-redux'

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
          "Lake Commerce",
          "Lake Lake",
          "Lake liit",
          "Lake medium",
          "Lake large"
         
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
          return val
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
          2,
          7,
          12,
          4,
          7
        ]
      }
    ]
  }

  style = {
    
    margin: '70px auto',
    overflow: 'hidden',
    width: '50%',
    textAlign: 'center'
  }
  componentDidMount() {
    console.log(this.props.data)

  }



  render() {
    
    return (
      <div id="graph-chart" className="bordered" style={this.style}>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type='bar'
          height='400'
          width='100%'
        />
        
      </div>
    )
  }
}

const matpStateToProps = (state) => {
  return {
    data: state.streams
  }
}

export default connect(matpStateToProps, null)(Graphs)
