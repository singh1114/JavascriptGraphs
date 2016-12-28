//function which calculate data points through formula.

function Normalgraph(k,a) { 
  var f = data["yfunction"];   //calculate d point for ploting 
  f = eval(f);
  return f;
  }
 

/**
 * Calculate data
 */

// Initialize the chartData to store the details of the graph
var chartData = [];

// length is the number of lines that we want to make.
var length = data["constants"]["constant1"].length;

// The x in the equation y = f(x)
var xAxisTitle = data["xAxisTitle"];

for(var k = 0; k < 100; k += 1){
  var x = length; 
  var p1 = {
    category: k,
  };
  for(let temp = 0; temp < length; temp++){
    var constantValues = data["constants"]["constant1"][temp]["value" + (temp+1)];
    var executeFunction = Normalgraph(eval(xAxisTitle), eval(constantValues));
    var string = "value" + (temp+1) + ": " + executeFunction;
    p1["value" + (temp+1)] = executeFunction;
  }
  chartData.push(p1);
  //chartData.push(p1);   //ploting Here.
}
                 
        
/**
 * Create a chart
 */
var chart = AmCharts.makeChart( "chartdiv", {
  "type": "serial",
  "theme": "light",
  "dataProvider": chartData,
  "precision": 2,

 //Legend shows Label on right side and their changing values.
  "legend": {
    "horizontalGap": 10,
    "useGraphSettings": true,
    "markerSize": 16,
    "position":"right"
  },

  "valueAxes": [{
    "title": data["yAxisTitle"],   //show LabelName on Yaxis.
    "gridAlpha": 0.2,
    "dashLength": 0,
  }],

/*"valueAxes": [ {
    "position": "left",
    "title": "Y axis"
  }, {
    "position": "bottom",
    "title": "X axis"
  } ], */


  "titles":[{
      "text":data["graphTitle"]
  }],

  "startDuration":1,
  "graphs": [ {
    "id":"g1",       
    "balloonText": "<b>k: [[category]]<br/>d/A:[[value]]</b>",
    "lineThickness": 3,
    "title":"a/A=0.05",
    "valueField": "value1",
         
  }, {
    "id":"g2",       
    "balloonText": "<b>k:[[category]]<br/> d/A:[[value]]</b>",
    "lineThickness": 3,
    "title":"a/A=0.10",
    "valueField": "value2"
     
  }, {
     "id":"g3",       
    "balloonText": "<b>k:[[category]]<br/>d/A:[[value]]</b>",
    "lineThickness": 3,
    "title":"a/A=0.15",
    "valueField": "value3"
     
  }, {  
     "id":"g4",       
    "balloonText": "<b>k:[[category]]<br/> d/A:[[value]]</b>",
    "lineThickness": 3,
    "title":"a/A=0.20",
    "valueField": "value4"
     
  }, { 
      "id":"g5",       
    "balloonText": "<b>k:[[category]]<br/>d/A:[[value]]</b>",
    "lineThickness": 3,
    "title":"a/A=0.25",
    "valueField": "value5"
    
     
  }, {  
     "id":"g6",       
    "balloonText": "<b>k:[[category]]<br/>d/A:[[value]]</b>",
    "lineThickness": 3,
    "title":"a/A=0.30",
    "valueField": "value6"       
                  
  } ],

//Zoom effect
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": true,
    "oneBalloonOnly": true
  },

"balloon": {
    "borderThickness": 4,
    "horizontalPadding": 8,
    "pointerWidth":10
},

  "categoryField": "category",
    "categoryAxis": {
    "gridAlpha": 0.05,
    "startOnAxis": true,
    "tickLength": 5,
    "title":"k",        //show LabelName on Xaxis.
    "labelFunction": function( label, item ) {
     return '' + Math.round( item.dataContext.category * 10 ) / 10;
    }
  }

});
