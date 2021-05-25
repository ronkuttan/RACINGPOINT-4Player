class Form {

  constructor() {
    this.input = createInput("").attribute("placeholder", "Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('RESET');
    this.instruction = createButton('Go To Instructions')
    this.rules = createElement('h3');
    this.rule1 = createElement('h4');
    this.rule2 = createElement('h4');
    this.rule3 = createElement('h4');
    this.rule4 = createElement('h4');
    this.rule5 = createElement('h4');
    this.rule6 = createElement('h4');
    this.note1 = createElement('h4');
    this.back = createButton('Back');
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.instruction.hide();
    this.back.hide()
  }
  show(){
    this.greeting.show();
    this.button.show();
    this.input.show();
    this.title.show();
    this.instruction.show();
    this.back.show()
  }

  enter() {
    this.title.hide();
    this.input.hide();
    this.button.hide();

    player.name = this.input.value();
    playerCount++;
    player.index = playerCount;
    player.updateName();
    player.updateCount(playerCount);

    this.greeting.html("Welcome " + player.name + "!");
    this.greeting.position(displayWidth / 2.1 - player.name.length * (displayWidth / 110),125);
  }

  display(){
    this.title.html("RACING POINT..");
    this.title.position(windowWidth/2 -220,windowHeight/4-170);
    this.title.style('font-size', '65px');
    this.title.style('color', 'blacl');

    this.input.position(windowWidth/2 - 100 , windowHeight/2 - 20);
    this.input.style('width', '200px');
    this.input.style('height', '20px');
    this.input.style('background', 'lavender');
    this.button.position(windowWidth/2-30 , windowHeight/2+50);
    this.button.style('width', '70px');
    this.button.style('height', '30px');
    this.button.style('background', 'yellow');
    this.reset.position(windowWidth-160,windowHeight-50);
    this.reset.style('width', '100px');
    this.reset.style('height', '30px');
    this.reset.style('background', 'lightpink');

    this.instruction.position(windowWidth-1500,windowHeight/4-150);
    this.instruction.style('width', '150px');
    this.instruction.style('height', '30px');
    this.instruction.style('background', 'white');
   
    
    this.back.position(windowWidth-280,windowHeight/4+450);
    this.back.style('width', '50px');
    this.back.style('height', '30px');
    this.back.style('background', 'white');
    this.back.hide();

    this.button.mousePressed(()=>{
     
      this.input.hide();
      this.button.hide();
      this.instruction.hide()
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name.toUpperCase())
      this.greeting.position(windowWidth/2 - 180, windowHeight/4+20);
      this.greeting.style('color', 'white');
      this.greeting.style('font-size', '80px');
    });

    this.back.mousePressed(()=>{
     
      this.input.show();
      this.button.show();
      this.title.show();
      this.instruction.show();
      
      this.back.hide();
      this.rules.hide();
      this.rule1.hide();
      this.rule2.hide();
      this.rule3.hide();
      this.rule4.hide();
      this.rule5.hide();
      this.rule6.hide();
      this.note1.hide();
     
    });
    this.instruction.mousePressed(()=>{
     
      this.title.hide();
      this.input.hide();
      this.button.hide();
      this.instruction.hide();
      this.rules.html("Instructions")
      this.rules.position(windowWidth/2 - 200, windowHeight/4-180);
      this.rules.style('color', 'red');
      this.rules.style('font-size', '60px');

      this.rule1.html("1) Press Arrow Keys to Move")
      this.rule1.position(windowWidth/4 - 300, windowHeight/4-40);
      this.rule1.style('color', '#050503');
      this.rule1.style('font-size', '30px');
      this.rule2.html("2) The one who first finishes the race will win the game!!")
      this.rule2.position(windowWidth/4 - 300, windowHeight/4+20);
      this.rule2.style('color', '#0B0B09');
      this.rule2.style('font-size', '30px');
      this.rule3.html(" 3) If the sounds are too disturbing pls mute the site")
      this.rule3.position(windowWidth/4 - 300, windowHeight/4+80);
      this.rule3.style('color', '#0B0B09');
      this.rule3.style('font-size', '30px');
      this.rule4.html("4) You ranks will be displayed after everyone finishes the race")
      this.rule4.position(windowWidth/4 - 300, windowHeight/4+140);
      this.rule4.style('color', '#050503');
      this.rule4.style('font-size', '30px');
      this.rule5.html("5) You should collect coins to get boosters (to increase your speed)")
      this.rule5.position(windowWidth/4 - 300, windowHeight/4+200);
      this.rule5.style('color', 'black');
      this.rule5.style('font-size', '30px');
      this.rule6.html(" * If you want to play again just click the reset button placed at the bottom corner and refresh the page  ")
      this.rule6.position(windowWidth/4 - 250, windowHeight/4+280);
      this.rule6.style('color', 'white');
      this.rule6.style('font-size', '30px');
      this.note1.html(" NOTE * This is a Multiplayer Car Racing Game (can only be played in PC)- Game will only start when 2 players are ready to play *")
      this.note1.position(windowWidth/4 - 300, windowHeight/4+360);
      this.note1.style('color', 'yellow');
      this.note1.style('font-size', '30px');
      
      this.back.show();
    
    })

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
     
    database.ref("/").update({
      players: null,
      finishedPlayers: 0,
    })
      
    });
   
  }
}
