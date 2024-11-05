import { Vector2d } from './vector_class.js'

export class Paddlewheel {

   visible;
   position;
   vecs_near_wheel = [];

   constructor(){
      this.visible = false
      this.position = {x:100, y:100}
      this.angle = 0
      this.speed = 0
   }

   draw(c){
      // Save for rotateing
      if (this.visible == false) {return}
      c.save()
      c.translate(this.position.x, this.position.y);
      c.rotate(this.angle*Math.PI/180);
      // Acctual Path of Paddlewhee, one circle and four lines
      c.beginPath()
      c.arc(0,0, 3.5, 0, 2*Math.PI)
      c.fillStyle = 'black'
      c.fill()
      c.moveTo(0,15)
      c.lineTo(0,-15)

      c.moveTo(-15, 0)
      c.lineTo(15, 0)
      
      c.moveTo(-10, -10)
      c.lineTo(10, 10)

      c.moveTo(-10, 10)
      c.lineTo(10, -10)
      // White coloring
      c.strokeStyle = 'black'
      c.lineWidth = 1
      c.stroke() 
      
      c.restore();
   }

   near(p, distance=10){
      return (this.visible && Math.abs(this.position.x-p.x) < distance && Math.abs(this.position.y-p.y)<distance)
   }

   set_vectors_near_wheel(field){
      this.vecs_near_wheel.splice(0,this.vecs_near_wheel.length)
       field.vectors.forEach((p_and_v) => {
           var p = p_and_v.p;
           var v = p_and_v.v
           if (this.near(p, 80)){
               let new_object = {p:p, v: new Vector2d(v.x,v.y)}
               this.vecs_near_wheel.push(new_object)
           }
       })
   }

   update(c){
      if (this.visible){
         this.angle -= this.speed
      }
   }

   move_to(p,field){
      // Change position based on event
      this.position = p
      this.speed = field.curl_at(this.position)
   }
}




