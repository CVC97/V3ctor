// This is a drawable 2d Vector //
export class Vector2d {
   x;
   y;
   color;
   constructor(x, y, color = 'white') {
       this.x = x;
       this.y = y;
       this.color = color;
       this.len = Math.sqrt(this.x * this.x + this.y * this.y);
   }
   add(other) {
       return new Vector2d(this.x + other.x, this.y + other.y);
   }
   scalar(other) {
       return this.x * other.x + this.y * other.y;
   }

   recalc_len(){
    this.len = Math.sqrt(this.x * this.x + this.y * this.y);
   }

   draw_at(p, canvas_context) {
       if (this.len < 0.25) {
           return;
       }
       var fromx = p.x;
       var fromy = p.y;
       var tox = (fromx + this.x);
       var toy = (fromy - this.y);
       var headlen = 8; // length of head in pixels
       var dx = tox - fromx;
       var dy = toy - fromy;
       var angle = Math.atan2(dy, dx);
       canvas_context.save()
       canvas_context.lineWidth = 1.5
       canvas_context.beginPath();
       canvas_context.moveTo(fromx, fromy);
       canvas_context.lineTo(tox, toy);
       canvas_context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
       canvas_context.moveTo(tox, toy);
       canvas_context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
       canvas_context.strokeStyle = this.color;
       canvas_context.stroke();
       canvas_context.closePath()
       canvas_context.restore();
   }
}