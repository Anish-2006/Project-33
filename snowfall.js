class Snow{

  constructor(x,y){
 
    var opt = {

        friction : 0.1,
        restitution : 0,
        density : 0.01,
        frictionAir : 0.1
 
    }
 
    this.body = Bodies.circle(x,y,2,opt);
    World.add(world,this.body);

    this.image = loadImage("snow5.webp");

  }
  update_pos(){

    if(this.body.position.y > 400){
    
    Matter.Body.setPosition(this.body,{x:random(0,800),y : 0});
    
            
    }
  }
  

  display(){
    
    push();
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,20,20);
    pop();
     
   }
}

