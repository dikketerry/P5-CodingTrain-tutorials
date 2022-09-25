let x = 0;

function setup() {
	createCanvas(600, 600);
	colorMode(HSB, 360, 100, 100, 1);	
}

function mousePressed() 
{
	setTimeout(rainbow, 3000);
}

function rainbow()
{
	createP('rainbow');
}

function draw() {
	background(51);
	stroke(255);
	line(x, 0, x, height);

	x = x + 3;
	if (x > width)
	{
		x = 0;
	}
	
}