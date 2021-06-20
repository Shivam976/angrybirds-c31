class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  this.smokeImage = loadImage("sprites/smoke.png")
  this.trajectory = []
  }

  display() {
    if(this.body.velocity.x>5 && this.body.position.x>200){
      var position = [this.body.position.x, this.body.position.y]
      this.trajectory.push(position)
    }

//console.log(this.trajectory)
for(var index = 0;index<this.trajectory.length;index=index+1){
  image(this.smokeImage,this.trajectory[index][0],this.trajectory[index][1])
}

    super.display();
  }
}
