class Block{
    constructor(x, y, width, height) {
     super(x,y,wridth,hight); 
      var options = {
                restitution : 0.5     
        }
        
       
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image=loadImage("block.png")
       
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        
        Push();
        if(this.body.speed<3){
          super.display()
      
      }
      
     
      else{
      World.remove(myworld,this.body)
      
      this.vis = this.vis-7.5
      tint(255,this.vis)
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
      
  

      }
      pop();
     
             translate(pos.x, pos.y);
        angleMode(RADIANS)
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        imageMode(CENTER)  
        image(this.image,0,0,this.width,this.height)
        
      }
}
