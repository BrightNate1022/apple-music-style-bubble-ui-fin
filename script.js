var img = [];
var names = [];
var obj = {};
var obj2 = {};
var test = "POP"

var nodes = new vis.DataSet([

]);


  $.ajax({url: "/myjsonfile.json",  success: function(Name){
  
   obj = Name;
   for (let i=0;i<10;i++)
    {
    var namest= obj[i]
    names.push(namest.Name)
     nodes.add({label:names[i],id:i,shape: "circularImage", image:img[i]})
    console.log(namest.Name)
    
    console.log(nodes.get[0])
  } 
 
  console.log(obj)  
  console.log(names)
  }}); 
  



  $.ajax({url: "Img.json", async:false, success: function(result,obj2){
    obj2 = result
    
    for (let i=0;i<10;i++)
     {
     images= obj2[i]
    img.push(images.Image)
    

   }    
    
    
    
  
  
}});
   console.log(img)

  
  console.log("hello");

    

  console.log("hello");
console.log(nodes);

var edges = new vis.DataSet();

var container = document.getElementById('bubbles');
var data = {
  nodes: nodes,
  edges: edges
};

var options = {
  nodes: {borderWidth:1, color:{background: "white",border:"black"}, font:{color:'black'}},
  physics: {
    stabilization: false,
    minVelocity:  0.01,
    solver: "repulsion",
    repulsion: {
      nodeDistance: 40
     
    }
  }
};
var network = new vis.Network(container, data, options);

network.on( 'click', function(properties) {
  var ids = properties.nodes;
  var clickedNodes = nodes.get(ids);
  console.log(properties)
  // var labels = clickedNodes[0["label"]]
  alert("Clicked Genre " + clickedNodes[0].label);
});



container.on("mouse-wheel", function(event) {
  // prevents zooming with the mouse-wheel event
  event.stopPropagation();
});

