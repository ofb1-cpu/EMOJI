function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //face base
  fill ("#ffde34")
  noStroke()
  circle (200,200,250)
  
  //eyebrows
  stroke("black")
  strokeWeight(5)
  line(170,150,130,145)
  
   //eyebrows 2
  stroke("black")
  strokeWeight(5)
  line(230,120,270,140)
  
  //eye left 
  fill ("black")
  circle (150,180,30)
  
    //eye right
  fill ("black")
  circle (250,180,30)
  
    //mouth 
  fill ("black")
  circle (200,250,20)
  
  
}