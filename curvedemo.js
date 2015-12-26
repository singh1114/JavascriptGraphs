//function which calculate data points through formula.

function Normalgraph( k,a ) { 
 var d= ((a*k) + (2*a)-Math.sqrt((a*a)*(k*k) +(4*k) + 4));
 var f=-1/2*(d)/(k+1);   //calculate d point for ploting 
return f;
  }
 

/**
 * Calculate data
 */
var chartData = [];
for ( var k = 0; k < 100; k += 1 ) {
  var p1 = {
    category: k,
    value: Normalgraph( k,0.05), // function Call 
    value2: Normalgraph( k,0.10),
    value3: Normalgraph( k,0.15),
    value4: Normalgraph( k,0.20),
    value5: Normalgraph( k,0.25),
    value6: Normalgraph( k,0.30)
  };
  
  chartData.push( p1 );   //ploting Here.
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

  "valueAxes": [ {
  "title":"d/A",   //show LabelName on Yaxis.
  "gridAlpha": 0.2,
  "dashLength": 0,
} ],

/*"valueAxes": [ {
    "position": "left",
    "title": "Y axis"
  }, {
    "position": "bottom",
    "title": "X axis"
  } ], */


  "titles":[{
      "text":"DesignAids Graph"
  }],

  "startDuration":1,
  "graphs": [ {
    "id":"g1",       
    "balloonText": "<b>k: [[category]]<br/>d/A:[[value]]</b>",
    "lineThickness": 3,
    "title":"a/A=0.05",
    "valueField": "value",
         
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
