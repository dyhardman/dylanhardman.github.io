function setup() 
{
  createCanvas(1000, 800);
}

function draw() 
{
  if (mouseIsPressed)
  {
    frameRate(2);
    background(random(255), random(255), random(255));
  }
  else 
  {
    background(216, 253, 255);
  }
	// Landscape 
  fill(237, 234, 225); 
  quad(0, 1000, 250, 400, 750, 400, 1000, 1000);

  // Tree 
  fill(0); 
  rect(700, 350, 10, 50); 
  fill(24, 73, 11); 
  triangle(600, 350, 700, 100, 800, 350);

  // Snowman Body 
  fill(255, 255, 255); 
  ellipse(500, 350, 200, 200); 
  ellipse(500, 550, 275, 275); 
  ellipse(500, 800, 350, 350); 
  line(600, 525, 675, 650);
  if (mouseIsPressed)
  {
    line(425, 500, mouseX, mouseY); 
    ellipse(mouseX, mouseY, 30, 30);
  }
  else
  {
    line(425, 500, 300, 400); 
  }
  
  // Snowman Hat 
  fill(0); 
  stroke(0); 
  line(375, 250, 650, 300); 
  quad(465, 175, 600, 200, 580, 290, 445, 265); 
  fill(0); 
  stroke(0);

  //Snowman Face 
  if (mouseIsPressed)
  {
    frameRate(24);
    fill(random(255), random(255), random(255));
  }
  else 
  {
    fill(0);
  }
  ellipse(520, 325, 20, 40); 
  ellipse(480, 325, 20, 40); 
  arc(500, 375, 40, 30, 0, PI, CHORD);

  // Snowman Buttons 
  if (mouseIsPressed)
  {
    frameRate(24);
    fill(random(255), random(255), random(255));
    
  }
  else 
  {
    fill(0);
  }
  ellipse(500, 475, 20, 20); 
  ellipse(500, 525, 20, 20); 
  ellipse(500, 575, 20, 20);
}