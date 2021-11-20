/**
 * Display a chart.
 *
 * @param string where
 *   A class name which may or may not be unique.
 * @param string type
 *   A type such as bar or line.
 * @param string i
 *   An index which will normally be 0.
 *
 * @return
 *
 * @throws \Exception
 */
const displayChart = function(where, type, i = 0) {
  var chartDom = document.getElementsByClassName(where)[i];
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: type
      }
    ]
  };

  option && myChart.setOption(option);
}
