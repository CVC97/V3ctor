// This is an euklidian coordinate system
export class Coordinatelines {
    active;
    constructor(canvas, field, stepsize = 2) {
        this.active = false;
        this.type = "Euclid";
        this.field = field;
        this.canvas = canvas;
        this.canvas_middle = { x: canvas.width / 2, y: canvas.height / 2 };
        this.color = "gray";
        this.stepsize = stepsize;
        this.x_axis_tick_label_offset_factor = (this.stepsize-2);            // ensures that x-axis starts with -9 for stepsize 1 and with 8 for stepsize 2
    }

    draw_euclid(canvas_context){
            // X-Axis:
            for (let i = canvas.width / 10 + this.x_axis_tick_label_offset_factor * (canvas.width / 20 * this.stepsize); i < canvas.width-10; i += canvas.width / 20 * this.stepsize) {
                // spare the middle coordinate y=0: updated to interval to avoid floating point inaccuracies
                if (i < this.canvas_middle.x - 0.1 || i > this.canvas_middle.x + 0.1) {
                    let p = this.field.transform({ x: i, y: i });
                    canvas_context.fillStyle = this.color;
                    canvas_context.textAlign = 'center';
                    canvas_context.font = "12px Verdana"
                    canvas_context.fillText((p.x).toFixed(0), i, this.canvas_middle.y + 17);
                    // Make a little line
                    canvas_context.beginPath();
                    canvas_context.moveTo(i, this.canvas_middle.y);
                    canvas_context.lineTo(i, this.canvas_middle.y+5);
                    canvas_context.strokeStyle = this.color;
                    canvas_context.stroke();
                    canvas_context.closePath()
                    canvas_context.restore();
                }
            }

        // Make the line
        canvas_context.beginPath();
        canvas_context.moveTo(0, this.canvas_middle.y);
        canvas_context.lineTo(canvas.width-5, this.canvas_middle.y);
        canvas_context.strokeStyle = this.color;
        canvas_context.stroke();
        canvas_context.restore();


        // Make the arrow head
        canvas_context.beginPath();
        canvas_context.moveTo(this.canvas.width-5, this.canvas_middle.y);
        canvas_context.lineTo(canvas.width-15, this.canvas_middle.y-5);
        canvas_context.moveTo(this.canvas.width-5, this.canvas_middle.y);
        canvas_context.lineTo(canvas.width-15, this.canvas_middle.y+5);
        canvas_context.strokeStyle = this.color;
        canvas_context.stroke();
        canvas_context.restore();

        // X-Axis label
        canvas_context.fillStyle = this.color;
        canvas_context.textAlign = 'center';
        canvas_context.font = "20px Verdane italic"
        canvas_context.fillText("x", this.canvas.width-10, this.canvas_middle.y+20)

        // Y-Axis
        for (let i = canvas.height / 10; i < canvas.height-10; i += canvas.height / 20 * this.stepsize) {
            // spare the middle coordinate y=0: updated to interval to avoid floating point inaccuracies
            if (i < this.canvas_middle.y - 0.1 || i > this.canvas_middle.y + 0.1) {
                let p = this.field.transform({ x: i, y: i });
                canvas_context.fillStyle = this.color;
                canvas_context.textAlign = 'center';
                canvas_context.font = "12px Verdana"
                canvas_context.fillText((p.y).toFixed(0), this.canvas_middle.x + 20, i+5);
                 // Make a little line
                canvas_context.beginPath();
                canvas_context.moveTo(this.canvas_middle.x, i);
                canvas_context.lineTo(this.canvas_middle.x +5, i);
                canvas_context.strokeStyle = this.color;
                canvas_context.stroke();
                canvas_context.closePath()
                canvas_context.restore();
            }
        }
        // Make the line
        canvas_context.beginPath();
        canvas_context.moveTo(this.canvas_middle.x, 5);
        canvas_context.lineTo(this.canvas_middle.x, canvas.height);
        canvas_context.strokeStyle = this.color;
        canvas_context.stroke();
        canvas_context.closePath()
        canvas_context.restore();

        // Make the arrow head
        canvas_context.beginPath();
        canvas_context.moveTo(this.canvas_middle.x, 5);
        canvas_context.lineTo(this.canvas_middle.x-5, 15);
        canvas_context.moveTo(this.canvas_middle.x, 5);
        canvas_context.lineTo(this.canvas_middle.x+5, 15);
        canvas_context.strokeStyle = this.color;
        canvas_context.stroke();
        canvas_context.restore();

        // Y-Axis label
        canvas_context.fillStyle = this.color;
        canvas_context.textAlign = 'center';
        canvas_context.font = "20px Verdane italic"
        canvas_context.fillText("y", this.canvas_middle.x+20, 20)
   }


   draw_polar(canvas_context){
        // Draw r-axis line
        canvas_context.beginPath()
        canvas_context.moveTo(this.canvas_middle.x,this.canvas_middle.y)
        canvas_context.lineTo(this.canvas.width-10, this.canvas_middle.y)
        canvas_context.strokeStyle = this.color;
        canvas_context.stroke()
        canvas_context.restore()
        // Draw arrow head
        canvas_context.beginPath()
        canvas_context.moveTo(this.canvas.width-10, this.canvas_middle.y)
        canvas_context.lineTo(this.canvas.width-15, this.canvas_middle.y-5)
        canvas_context.moveTo(this.canvas.width-10, this.canvas_middle.y)
        canvas_context.lineTo(this.canvas.width-15, this.canvas_middle.y+5)
        canvas_context.strokeStyle = this.color;
        canvas_context.stroke();
        canvas_context.restore()

        // Draw r-axis labels and ticks
        for (let i = this.canvas_middle.x + this.x_axis_tick_label_offset_factor * (canvas.width / 20 * this.stepsize); i < this.canvas.width-10; i += this.canvas.width / 20 * this.stepsize){
            if (i > this.canvas_middle.x + 0.1) {
                let p = this.field.transform({ x: i, y: i });
                canvas_context.fillStyle = this.color;
                canvas_context.textAlign = 'center';
                canvas_context.font = "12px Verdana"
                canvas_context.fillText((p.x).toFixed(0), i, this.canvas_middle.y + 17);
                // Make a little line
                canvas_context.beginPath();
                canvas_context.moveTo(i, this.canvas_middle.y);
                canvas_context.lineTo(i, this.canvas_middle.y+5);
                canvas_context.strokeStyle = this.color;
                canvas_context.stroke();
                canvas_context.closePath()
                canvas_context.restore();
            }
        }

        // Draw th letter "r"
        // X-Axis label
        canvas_context.fillStyle = this.color;
        canvas_context.textAlign = 'center';
        canvas_context.font = "20px Verdane italic"
        canvas_context.fillText("r", this.canvas.width-10, this.canvas_middle.y+20)
        canvas_context.fillText("0", this.canvas.width-10, this.canvas_middle.y-10)
        canvas_context.fillText("π/4", this.canvas.width-25, 20)
        canvas_context.fillText("π/2", this.canvas_middle.x+20, 20)
        canvas_context.fillText("3π/4", 40, 20)
        canvas_context.fillText("π", 20, this.canvas_middle.y-10)
        canvas_context.fillText("5π/4", 40, this.canvas.height-5)
        canvas_context.fillText("3π/2", this.canvas_middle.x+25, this.canvas.height-5)
        canvas_context.fillText("7π/4", this.canvas.width-40, this.canvas.height-5)


        // Draw the theta components
        canvas_context.save()
        canvas_context.beginPath()
        canvas_context.fillStyle = this.color
        canvas_context.setLineDash([5, 5]);/*dashes are 5px and spaces are 5px*/
        canvas_context.moveTo(0,0)
        canvas_context.lineTo(this.canvas.width, this.canvas.height)
        canvas_context.moveTo(this.canvas_middle.x,this.canvas.height)
        canvas_context.lineTo(this.canvas_middle.x,0)
        canvas_context.moveTo(this.canvas.width,0)
        canvas_context.lineTo(0,this.canvas.height)
        canvas_context.moveTo(0,this.canvas_middle.y)
        canvas_context.lineTo(this.canvas_middle.x,this.canvas_middle.y)
        canvas_context.stroke()
        canvas_context.restore()
    }

    draw(canvas_context) {
        if (this.active) {
            if (this.type == "Euclid"){
                this.draw_euclid(canvas_context)
            }
            else if( this.type == "Polar"){
                console.log("Trying to draw polar")
                this.draw_polar(canvas_context)
            }
        }
   }
}