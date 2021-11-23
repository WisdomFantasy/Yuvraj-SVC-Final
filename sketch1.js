var gamestate="wait"
var level=0;
var count=0;

function preload(){

    waitimg=loadImage("movingbackground.gif")
levelimg=loadImage("infoPage.jpg")
    boyknifeimg = loadAnimation(
        "knife.png",
        "KNIFE2.png",
        "KNIFE3.png",
        "KNIFE4.png",
        "KNIFE6.png"
      );
    
    img=loadImage("video.gif")
    leftbuttonimg=loadImage("dancingleftarrow.gif")
    rightbuttonimg=loadImage("dancingrightarrow.gif")

    startimg= loadImage("start.gif")

      boyjetpackimg = loadAnimation("JETPACK1.png", "JETPACK2.png", "JETPACK3.png");
      boygunimg = loadAnimation("GUN1.png", "GUN2.png", "GUN3.png");
      jetpackimg = loadImage("JETPACKICON.png");
      knifeimg = loadImage("KNIFEICON.png");
      gunimg = loadImage("GUNICON.png");
      boyimg = loadAnimation(
        "RUNNING1.png",
        "RUNNING2.png",
        "RUNNING3.png",
        "RUNNING4.png",
        "RUNNING5.png",
        "RUNNING6.png",
        "RUNNING7.png"
      );
}

function setup(){
createCanvas(windowWidth,windowHeight)

wait= createSprite(windowWidth/2,windowHeight/2)
wait.addImage(img)
wait.visible=false
wait.scale=3

leftbutton=createSprite(100,100,50,50)
leftbutton.addImage(leftbuttonimg)
leftbutton.scale=0.5
leftbutton.visible=false

rightbutton=createSprite(windowWidth-100,100,50,50)
rightbutton.addImage(rightbuttonimg)
rightbutton.scale=0.5


start=createSprite(windowWidth/2,windowHeight-windowHeight/4,50,50)
start.addImage(startimg)
start.scale=0.5
start.visible=false

boy = createSprite(windowWidth / 8, 100);
  endSprite = createSprite(windowWidth/1.15, 100,200, 200)
  endSprite.visible=false
  boy.addAnimation("running", boyimg);
  boy.addAnimation("boyjetpack", boyjetpackimg);
  boy.addAnimation("boyknife", boyknifeimg);
  boy.addAnimation("boygun", boygunimg);
  boy.setCollider("circle", 0, 0, 30);
  boy.visible=false
  randomPositionX = Math.round(random(150, windowWidth-150))
  randomPositionY = Math.round(random(150, windowHeight-150))
  randomPositionX2 = Math.round(random(200, windowWidth-200))
  randomPositionY2 = Math.round(random(200, windowHeight-200))
  randomPositionX3 = Math.round(random(200, windowWidth-200))
  randomPositionY3 = Math.round(random(250, windowHeight-250))
  reactionTimeButton1 = createSprite(randomPositionX, randomPositionY, 20, 20)
  reactionTimeButton1.visible=false;
  reactionTimeButton2 = createSprite(randomPositionX2,randomPositionY2, 20, 20)
  reactionTimeButton2.visible=false;
  reactionTimeButton3 = createSprite(randomPositionX3, randomPositionY3, 20, 20)
  reactionTimeButton3.visible=false;
  startButton = createSprite(windowWidth/2, windowHeight/2, 100, 50)
  startButton.visible=false
  /*playAgainButton = createSprite(windowWidth/2, windowHeight/2, 100, 50)
  playAgainButton.visible=false*/


  reactionTimeButton1.addImage(gunimg)
    reactionTimeButton2.addImage(knifeimg)
    reactionTimeButton3.addImage(jetpackimg)
    



  }




function draw(){

if (gamestate==="wait"){
   wait.visible=true
     rightbutton.visible=true
     leftbutton.visible=false
     start.visible=false
     boy.visible=false
     
     startButton.visible=false
    
}

if (mousePressedOver(rightbutton)){
    gamestate="next"
    
}

if (mousePressedOver(leftbutton)){
    gamestate="wait"
    
}


if (mousePressedOver(start)){
    gamestate="play"
    boy.visible=false
     reactionTimeButton1.visible=false
     reactionTimeButton2.visible=false
     reactionTimeButton3.visible=false
     startButton.visible=false
}


if (gamestate==="next"){
    background("pink")
    
    leftbutton.visible=true
    wait.visible=false
    start.visible=true
    textSize(70)
    fill(0)
    text("How to Play the Game", windowWidth/2-400,100)
    textSize(50)

    text("This is a reaction time game. ", windowWidth/2-200,200)
    text("In this Game you have to complete against an NPC in order to win and find out you reaction time! Once you press the start button below, the NPC will start to move towards the finish line. You have to press 3 reaction time buttons before the NPC reaches the goal. First you have to press the Gun, the Knife and then finaly Jetpack. IF you press on all 3 before the NPC reaches the finish line, you win and you can find your reaction time. However, if you fail to do so, you can try again and compete with the NPC again! Keep note that when you progress with the reaction time, the NPC moves slightly faster. Good luck!",windowWidth/2-200,250)
}

if (gamestate==="play"){
    background(levelimg)
    
    //leftbutton.visible=false
    rightbutton.visible=false

    wait.visible=false
    start.visible=false
boy.visible=true

    //add playcodes from Yuvraj's sketch file here
    boy.changeAnimation("running", boyimg)

      boy.velocityX = 10
      count=count+1
      //counter=counter-1;
      level=1
    
    reactionTimeButton1.visible=true

    if(mousePressedOver(reactionTimeButton1)){
      boy.changeAnimation("boygun", boygunimg)
      reactionTimeButton1.visible=false
      reactionTimeButton2.visible=true
      reactionTimeButton1.destroy()

      level=2
      count=count+1
      
  
    }
    if(level==2){
      //reactionTimeButton1.visible=false;
      reactionTimeButton1.destroy()
      reactionTimeButton2.visible=true
      //reactionTimeButton3.visible=false;
      boy.changeAnimation("boygun", boyknifeimg)
  boy.velocityX=12
      count=count+1
      //counter=counter-1;
  
    }
    if(mousePressedOver(reactionTimeButton2)){
      boy.changeAnimation("boyknife", boyjetpackimg)
      reactionTimeButton3.visible=true
      reactionTimeButton1.visible=false;
      reactionTimeButton2.visible=false

      level=3
      count=count+1
      //counter=counter-1;
  
    }
    if(level===3){
      reactionTimeButton1.visible=false;
      reactionTimeButton2.visible=false;
      reactionTimeButton3.visible=true
      count=count+1
      boy.velocityX=13
      boy.changeAnimation("boyknife", boyknifeimg)
  
      //counter=counter-1;
  
    }
    if(mousePressedOver(reactionTimeButton3)){
      boy.changeAnimation("boyjetpack", boyjetpackimg)
      reactionTimeButton1.visible=false;
      reactionTimeButton2.visible=false;
      reactionTimeButton3.visible=false
      level=4
      count=count+1
      //counter=counter-1;
    }
 
   if(level===4){
      //jetpackimg.visible=false;
      //boy.changeAnimation("boyjetpack", boyjetpackimg)
  
 // if(level===4 && boy.isTouching(endSprite)){
   gamestate="end"

 if(boy.isTouching(endSprite)){
    text("REACTION TIME IN FRAMECOUNT: " + count/3, windowWidth/2, windowHeight/2)
    boy.changeAnimation("boyjetpack", boyjetpackimg)
  //endSprite.visible=false
    text("YOU WIN", windowWidth/2, windowHeight/3)
  boy.velocityX=0
  }
    } else /*(if(boy.isTouching(endSprite))*/{
     // boy.velocityX=0
      textSize(50)
      fill("red")
     // text("YOU LOSE", windowWidth/2, windowHeight/3)
      //playAgainButton.visible=true
    }
    /*if(mousePressedOver(playAgainButton)){
      level=1   
    }*/
    
  }


drawSprites()
if(gamestate==="end"){
  background(0)
  textSize(50)
  fill (255)
  text("you win", windowWidth/2,windowHeight/2)
}

}