
function setup() {
  createCanvas(700,700,);
}

function draw() 
{
  background("lightblue");

  if (KeyIsDown(DOWN_ARROW)){
    background('red');
  }
  if (KeyIsDown(UP_ARROW)) {
     background('yellow');
  }

   
}




