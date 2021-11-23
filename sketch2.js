gamestate="wait"
var count=0
var  level=1

function preload(){
buttonsound=loadSound("gamegetitsound.mp3")
    waitimg=loadImage("movingbackground.gif")
    gamesound=loadSound("gameplaysound.mp3")
    winsound=loadSound("winSound.mp3")
    lostsound=loadSound("lost.mp3")
youwinimg=loadImage("youwin.gif")
    boyknifeimg = loadAnimation(
        "knife.png",
        "KNIFE2.png",
        "KNIFE3.png",
        "KNIFE4.png",
        "KNIFE6.png"
      );
gameoverimg=loadImage("gameover.gif")
      restartimg=loadImage("restart.png")
    
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
      level1img=loadImage("infoPage.jpg")
}

function setup(){
createCanvas(windowWidth,windowHeight)

boy = createSprite(windowWidth / 8, 100);
boy.scale=2
  endSprite = createSprite(windowWidth/1.15, 100,20, 20)
  endSprite.visible=false
  boy.addAnimation("running", boyimg);
  boy.addAnimation("boyjetpack", boyjetpackimg);
  boy.addAnimation("boyknife", boyknifeimg);
  boy.addAnimation("boygun", boygunimg);
  boy.setCollider("circle", 0, 0, 30);
  boy.visible=false

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



startbutton=createSprite(windowWidth/2,windowHeight-windowHeight/4.5,50,50)
startbutton.addImage(startimg)
startbutton.scale=0.5
startbutton.visible=false

randomPositionX = Math.round(random(150, windowWidth-150))
  randomPositionY = Math.round(random(150, windowHeight-150))
  randomPositionX2 = Math.round(random(200, windowWidth-200))
  randomPositionY2 = Math.round(random(200, windowHeight-200))
  randomPositionX3 = Math.round(random(250, windowWidth-250))
  randomPositionY3 = Math.round(random(250, windowHeight-250))
  reactionTimeButton1 = createSprite(randomPositionX, randomPositionY, 20, 20)
  reactionTimeButton1.visible=false;
  reactionTimeButton2 = createSprite(randomPositionX2,randomPositionY2, 20, 20)
  reactionTimeButton2.visible=false;
  reactionTimeButton3 = createSprite(randomPositionX3,randomPositionY3, 20, 20)
  reactionTimeButton3.visible=false;
  reactionTimeButton1.addImage(gunimg)
  reactionTimeButton2.addImage(knifeimg)
  reactionTimeButton3.addImage(jetpackimg)
  gamesound.loop()

}

function draw(){

if (gamestate==="wait"){
   wait.visible=true
     rightbutton.visible=true
     leftbutton.visible=false
     startbutton.visible=false
     
    
}

if (mousePressedOver(rightbutton)){
    gamestate="next"
    
}

if (mousePressedOver(leftbutton)){
    gamestate="wait"
    
}


if (mousePressedOver(startbutton)){
    gamestate="play"
    
}


if (gamestate==="next"){
    background("pink")
    
    leftbutton.visible=true
    wait.visible=false
    startbutton.visible=true
    textSize(50)
    fill(0)
    text("How to Play the Game", windowWidth/2-400,50)
    textSize(30)

    text("This is a reaction time game. In this Game you have to complete the Task in order to WIN ", 50,150)
     text(" and find out you REACTION TIME! Once you press the Gun ,the Boy  will start moving" ,50,200)
    text(" towards the finish line. You have to press all 3 weapons before the Boy reaches the goal.",50 ,250)
    text("First you have to press the Gun, the Knife and then finaly Jetpack.",50,300)
    text("IF you press on all 3 weapons before the Boy reaches the finish line, you win and you can find  ",50,350)
    text("your reaction time. However, if you fail to do so..so..so..so... You Lose the Game.. Good luck!",50,400)

}

if (gamestate==="play"){
    background(level1img)
    leftbutton.visible=false
    //leftbutton.visible=false
    rightbutton.visible=false
boy.visible=true
    wait.visible=false
    startbutton.visible=false

    reactionTimeButton1.visible=true
    gamesound.stop()
   

    if(mousePressedOver(reactionTimeButton1)){
      boy.changeAnimation("boygun", boygunimg)
      level=2
      count=count+1
      buttonsound.play()
    }

    if(level==2){
      //reactionTimeButton1.visible=false;
      reactionTimeButton1.destroy()
      reactionTimeButton2.visible=true
      boy.changeAnimation("boygun", boygunimg)
  boy.velocityX=20
      count=count+1
      //counter=counter-1;
  
    }



   // second button knife

   if(mousePressedOver(reactionTimeButton2)){
    boy.changeAnimation("boyknife", boyknifeimg)
    level=3
    count=count+1
    //counter=counter-1;
    buttonsound.play()
  }
  if(level==3){
    reactionTimeButton2.visible=false;
    reactionTimeButton3.visible=true
    count=count+1
    boy.velocityX=25
    boy.changeAnimation("boyknife", boyknifeimg)

    //counter=counter-1;

  }

  if(mousePressedOver(reactionTimeButton3)){
    boy.changeAnimation("boyjetpack", boyjetpackimg)
    reactionTimeButton3.visible=false
    level=4
    boy.velocityX=30
    count=count+1
    buttonsound.play()
      }
  
if(level==4 && boy.isTouching(endSprite)){
 background(youwinimg)
  boy.changeAnimation("boyjetpack", boyjetpackimg)
endSprite.visible=false
 boy.velocityX=0


}
   else if( boy.isTouching(endSprite)){
     background(gameoverimg)
    level=5
   boy.velocityX=0
   reactionTimeButton3.destroy()
   reactionTimeButton2.destroy()
   lostsound.play()
  }


    

 if(  level===4){
  background(youwinimg)
  textSize(50)
  fill("red")
    text("YOUR REACTION TIME IN FRAMECOUNT WAS : " + count/3, 50, windowHeight-windowHeight/4)
  boy.velocityX=0
  winsound.play()
 }
 

}




drawSprites()

}