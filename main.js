var canvas = new fabric.Canvas('myCanvas');

ball_x=0;
ball_y=0;

hole_y=400;
hole_x=800


//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Imagr.fromURL("golf-n.png"),function(Img){
	hole_obj=Img;
	hole_object.scaleToWidth(50);
	hole_object.scaleToHeight(50);
	hole_object.set({
top:hole_y,
left:hole_x

	});
	canvas.add(hole_obj)
	};new_image();
		
	
}

function new_image()
{
	// we code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y>=0)
	
	ball_y=ball_y-block_image_height;
	console.log("When up arrow is clicked, X = "+ball_x +, Y= ball_y)
	canvas.remove(player_object);

}
	function down()
	{
		if(ball_y>=500)
	
		ball_y=ball_y-block_image_height;
		console.log("When up arrow is clicked, X = "+ball_x +, Y= ball_y)
		canvas.remove(player_object);
	}

	function left()
	{
		if(ball_x >5)
		{
			player_x = player_x - block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			player_x = player_x + block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
			canvas.remove(player_object);
			player_update();	
		}
	}
	
}

