var canvas = new fabric.Canvas('myCanvas');

block_img_width = 30;
block_img_height = 30; 

player_x = 10;
player_y = 10;

var player_object = "";
var block_img_object = "";

function player_update()
{
fabric.Image.fromURL("groot.png",function(IMG){
    player_object=IMG;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(150);
    player_object.set({
     top : player_y,
     left : player_x
       });
       canvas.add(player_object);
});
}
 
function new_image(get_image)
{
fabric.Image.fromURL(get_image,function (IMG) {
    block_img_object = IMG;

    block_img_object.scaleToWidth(block_img_width);
    block_img_object.scaleToHeight(block_img_height);
    block_img_object.set({
        top:player_y,
        left : player_x
    });
    canvas.add(block_img_object);
});
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == "80"){
        console.log("p and shift pressed toghether");
        block_img_width = block_img_width+10;
        block_img_height = block_img_height+10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if(e.shiftKey == true && keyPressed == "77"){
        console.log("m and shift pressed toghether");
        block_img_width = block_img_width-10;
        block_img_height = block_img_height-10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

if(keyPressed=="38"){
    up();
    console.log("up");
}

if(keyPressed=="40"){
    down();
    console.log("down");
}

if(keyPressed=="37"){
    left();
    console.log("left");
}

if(keyPressed=="39"){
    right();
    console.log("right");
}

if(keyPressed=="84"){
    new_image("download(2).jpg");
    console.log("t");
}
if(keyPressed=="68"){
    new_image("iron man.png");
    console.log("d");
}
if(keyPressed=="76"){
    new_image("thor.jpg");
    console.log("l");
}
if(keyPressed=="71"){
    new_image("chest.jpg");
    console.log("g");
}
if(keyPressed=="87"){
    new_image("untitled(2).jpg");
    console.log("w");
}
}

function up()
{
    if(player_y>=0){
     player_y = player_y - block_img_height;
     console.log("block image height =" + block_img_height);
     console.log("when up arrow is pressed X ="+player_x  + ", y ="+ player_y);
     canvas.remove(player_object);
       player_update();
     
    }
}

function down()
{
    if(player_y<=500){
     player_y = player_y + block_img_height;
     console.log("block image height =" + block_img_height);
     console.log("when down arrow is pressed X ="+player_x  + ", y ="+ player_y);
     canvas.remove(player_object);
       player_update();
     
    }
}

function right()
{
    if(player_x<=850){
     player_x = player_x + block_img_width;
     console.log("block image width =" + block_img_width);
     console.log("when right arrow is pressed X ="+player_x  + ", y ="+ player_y);
     canvas.remove(player_object);
       player_update();
     
    }
}

function left()
{
    if(player_x>=0){
     player_x = player_x - block_img_width;
     console.log("block image width =" + block_img_width);
     console.log("when left arrow is pressed X ="+player_x  + ", y ="+ player_y);
     canvas.remove(player_object);
       player_update();
     
    }
}
