import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit , AfterViewInit{

  constructor() { }
  ngAfterViewInit(): void {

    var chartDom:any = document.getElementById('lamouni');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: 'statistics for this week',
     textStyle: {
      color: '#2c343c'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['News', 'Interviews', 'Candidatures', 'Offers', 'Candidates']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    
    left: '3%',
    right: '4%',
    bottom: '0%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'News',
      type: 'line',
      color: '#DAF7A6 ',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [1, 3, 0, 4, 4, 6, 8]
    },
    {
      name: 'Interviews',
      type: 'line',
      stack: 'Total',
      color:'#FFC300',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [2, 4, 3, 7, 9, 7, 11]
    },
    {
      name: 'Candidatures',
      type: 'line',
      stack: 'Total',
      color:'#FF5733',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [5, 6, 7, 8, 11, 8, 12]
    },
    {
      name: 'Offers',
      type: 'line',
      color:'#C70039',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [7, 9, 8, 10, 12,10, 15]
    },
    {
      name: 'Candidates',
      type: 'line',
      stack: 'Total',
      color:'#900C3F',
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [10, 15, 13, 12, 16, 18, 20]
    }
  ]
};

option && myChart.setOption(option);


  }

  ngOnInit(): void {

var chartDom:any = document.getElementById('cha3');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '5%',
    right: '2%',
    bottom: '10%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  series: [
    {
      name: 'News',
      type: 'bar',
      stack: 'total',
      color: '#DAF7A6 ',

      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [1, 3, 0, 4, 4, 6, 8]
    },
    {
      name: 'Interviews',
            color:'#FFC300',

      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [2, 4, 3, 7, 9, 7, 11]
    },
    {
      name: 'Candidatures',
      type: 'bar',
            color:'#FF5733',

      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [5, 6, 7, 8, 11, 8, 12]
    },
    {
      name: 'Offers',
      type: 'bar',
      stack: 'total',
            color:'#C70039',

      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [7, 9, 8, 10, 12,10, 15]
    },
    {
      name: 'Candidates',
      type: 'bar',
      stack: 'total',
            color:'#900C3F',

      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 15, 13, 12, 16, 18, 20]
    }
  ]
};

option && myChart.setOption(option);

  }

}
