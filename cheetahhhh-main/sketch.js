var rockLeft , rockRight , rockLeftGroup, rockRightGroup,panther, pantherGif , cheetah , cheetahGif , bgImg , bg


function preload() {
    bgImg = loadImage("background img.png");

    cheetahGif = loadAnimation("cheetah-running-icegif-8.gif");

    pantherGif = loadAnimation("panther.gif");

    snakeImg = loadImage("snake.png");

}

function setup() {
    createCanvas(windowWidth, windowHeight)

    bg = createSprite(width / 2, height / 2)
    bg.addImage(bgImg)
    bg.scale = 2.5

    cheetah = createSprite(150, height - 100)
    cheetah.addAnimation("gif", cheetahGif)
    cheetah.scale = 2

    panther = createSprite(width - 200, height - 150)
    panther.addAnimation("gif", pantherGif)
    panther.scale = 0.6


    inviG = createSprite(width/2 , height , width , 10)
    inviG.visible = false

    snake = createSprite(width/2 , height )
    snake.addImage(snakeImg)
    snake.scale = 0.5

     cheetah.debug = true
     panther.debug = true

    cheetah.setCollider("circle" , 0 , 0 , 50)

    panther.setCollider("circle" , 0 , 0 , 200)

}

function draw() {
    background("green")

    snake.velocityY = -3
    
    if(snake.y <= 0){
        snake.y = height
    }

    // ------------------------------------------ Cheetah Moves -------------------------------------

    if (keyWentDown("D")) {
        cheetah.velocityX = 3
    }

    if (keyWentUp("D")) {
        cheetah.velocityX = 0
    }

    if (keyWentDown("A")) {
        cheetah.velocityX = -3
    }

    if (keyWentUp("A")) {
        cheetah.velocityX = 0
    }

    // ------------------------------------------ Panther Moves -------------------------------------
    if (keyWentDown("left")) {
        panther.velocityX = -3
    }

    if (keyWentUp("left")) {
        panther.velocityX = 0
    }

    if (keyWentDown("right")) {
        panther.velocityX = 3
    }

    if (keyWentUp("right")) {
        panther.velocityX = 0
    }

    // console.log(cheetah.y)

    if (keyDown("space") && cheetah.y >= 477) {
        cheetah.velocityY = -15
    }

    cheetah.velocityY += 1


     console.log(panther.y)

    if (keyDown("down") && panther.y >= 451) {
        panther.velocityY = -15
    }

    panther.velocityY += 1

    if (panther.isTouching(snake)) {
        displayWinnerP()
    }

    if (cheetah.isTouching(snake)) {
        displayWinnerC()
    }

    cheetah.collide(inviG)
    panther.collide(inviG)

    drawSprites()
}

function displayWinnerP() {
    swal(
      {
        title: `Game Over!!!`,
        text: "Team Panther Won!!!",
        imageUrl: "https://www.shutterstock.com/image-vector/black-panther-animal-cartoon-character-260nw-642343936.jpg",
        imageSize: "150x150",
        confirmButtonText: "Play Again"
      },
      function(isConfirm) {
        if (isConfirm) {
          location.reload();
        }
      }
    );
  }
  

  
function displayWinnerC() {
    swal(
      {
        title: `Game Over!!!`,
        text: "Team Cheetah Won!!!",
        imageUrl: "https://thumbs.dreamstime.com/z/illustration-cute-baby-cheetah-cartoon-illustration-cute-baby-cheetah-cartoon-isolated-white-background-112001497.jpg",
        imageSize: "150x150",
        confirmButtonText: "Play Again"
      },
      function(isConfirm) {
        if (isConfirm) {
          location.reload();
        }
      }
    );
  }
  