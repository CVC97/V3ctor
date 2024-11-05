import { Vector2d } from './vector_class.js'
// This is a drawable and moveable rectangle on a canvas
export class Rectangle {
    startpoint;
    width = 0;
    height = 0;
    vecs_in_rect = [];
    field;
    color = "black"

    constructor(field) {
        this.active = true;
        this.startpoint = {x:0, y:0};
        this.field = field
    }
    set_width_and_height(p) {
        this.width = p.x - this.startpoint.x;
        this.height = p.y - this.startpoint.y;
    }


    middle(){
        let x = this.startpoint.x+this.width/2
        let y = this.startpoint.y + this.height/2
        return {x:x, y:y}
    }

    ordered_ccords() {
        // orderd so that (x0,y0) is top left
        var x0 = this.startpoint.x
        var x1 = this.startpoint.x+this.width
        if (this.width < 0){
            x1 = this.startpoint.x
            x0 = this.startpoint.x+this.width
        }
        var y0 = this.startpoint.y
        var y1 = this.startpoint.y+this.height
        if (this.height < 0){
            y1 = this.startpoint.y
            y0 = this.startpoint.y+this.height
        }
        return {x_0:x0,y_0:y0,x_1:x1,y_1:y1}
    }

    flux(){
        const ordered_coords = this.ordered_ccords()
        const coord_0 = this.field.transform({x:ordered_coords.x_0, y:ordered_coords.y_0})
        const coord_1 = this.field.transform({x:ordered_coords.x_1, y:ordered_coords.y_1})
        const x0 = coord_0.x
        const x1 = coord_1.x
        const y0 = coord_0.y
        const y1 = coord_1.y

        var n_top = new Vector2d(0,1)
        var n_bottom = new Vector2d(0,-1)
        var n_left = new Vector2d(-1,0)
        var n_right = new Vector2d(1,0)

        var value = 0
        var precison = 200

            var max_riemann_error = 0
            let delta_x = (x1-x0)/precison
            let delta_y = (y0-y1)/precison

            // this is a left handed riemann sum  
        for (var i=x0; i<x1; i+= delta_x){
            value += this.field.value_at(i,y0).scalar(n_top)
            value += this.field.value_at(i,y1).scalar(n_bottom)
        }
        value *= delta_x
        for (var i=y1; i<y0; i+= delta_y){
            value += this.field.value_at(x0,i).scalar(n_left)
            value += this.field.value_at(x1,i).scalar(n_right)
            }

            value *= delta_y
            
            /// Error Calculations
            max_riemann_error += Math.abs((this.field.value_at(x1,y0).scalar(n_top) - this.field.value_at(x0,y0).scalar(n_top))) * delta_x
            max_riemann_error += Math.abs((this.field.value_at(x1,y1).scalar(n_bottom) - this.field.value_at(x0,y1).scalar(n_bottom))) * delta_x
            max_riemann_error += Math.abs((this.field.value_at(y1,x0).scalar(n_left) - this.field.value_at(y0,x0).scalar(n_left))) * delta_y
            max_riemann_error += Math.abs((this.field.value_at(y1,x1).scalar(n_right) - this.field.value_at(y0,x1).scalar(n_right))) * delta_y


        //    value = value/(4*precison)*perimeter

        return {value: value, error:max_riemann_error}
    }

        circulation(){
            const ordered_coords = this.ordered_ccords()
            const coord_0 = this.field.transform({x:ordered_coords.x_0, y:ordered_coords.y_0})
            const coord_1 = this.field.transform({x:ordered_coords.x_1, y:ordered_coords.y_1})
            const x0 = coord_0.x
            const x1 = coord_1.x
            const y0 = coord_0.y
            const y1 = coord_1.y

            var n_top = new Vector2d(-1,0)
            var n_bottom = new Vector2d(1,0)
            var n_left = new Vector2d(0,-1)
            var n_right = new Vector2d(0,1)

            var value = 0
            var precison = 200

            var perimeter = 2*(x1-x0)+2*(y0-y1)
            var max_riemann_error = 0

            for (var i=x0; i<x1; i+= (x1-x0)/precison){
                value += this.field.value_at(i,y0).scalar(n_top)
                value += this.field.value_at(i,y1).scalar(n_bottom)
            }
            for (var i=y1; i<y0; i+= (y0-y1)/precison){
                value += this.field.value_at(x0,i).scalar(n_left)
                value += this.field.value_at(x1,i).scalar(n_right)
            }

            /// Error Calculations
            max_riemann_error += Math.abs((this.field.value_at(x1,y0).scalar(n_top) - this.field.value_at(x0,y0).scalar(n_top)) * (x1-x0)/precison)
            max_riemann_error += Math.abs((this.field.value_at(x1,y1).scalar(n_bottom) - this.field.value_at(x0,y1).scalar(n_bottom)) * (x1-x0)/precison)
            max_riemann_error += Math.abs((this.field.value_at(y1,x0).scalar(n_left) - this.field.value_at(y0,x0).scalar(n_left)) * (y1-y0)/precison)
            max_riemann_error += Math.abs((this.field.value_at(y1,x1).scalar(n_right) - this.field.value_at(y0,x1).scalar(n_right)) * (y1-y0)/precison)

            value = value/(4*precison)*perimeter

            return {value: value, error:max_riemann_error}
        }


    on_outline(p){
        let rec_cords = this.ordered_ccords()
        let x0 = rec_cords.x_0
        let x1 = rec_cords.x_1
        let y0 = rec_cords.y_0
        let y1 = rec_cords.y_1
        // check if on vertical line:
        if (Math.abs(p.x-x0)<3 || Math.abs(p.x-x1)<3){
            // check if on y range
            if (Math.abs(y0-p.y)+Math.abs(y1-p.y)== Math.abs(y0-y1)){
                // check if on left
                if (Math.abs(p.x-x0)<3){
                    return "left"
                }
                else {
                    return "right"
                }
            }
        }
        // check if on horizontal line:
        if (Math.abs(p.y-y0)<3 || Math.abs(p.y-y1)<3){
            // check if on y range
            if (Math.abs(x0-p.x)+Math.abs(x1-p.x)== Math.abs(x0-x1)){
                // check if on left
                if (Math.abs(p.y-y0)<3){
                    return "top"
                }
                else {
                    return "bottom"
                }
            }
        }
        return false
    }

    in_rect(p){
        var x0 = this.startpoint.x
        var x1 = this.startpoint.x+this.width
        if (this.width < 0){
            x1 = this.startpoint.x
            x0 = this.startpoint.x+this.width
        }
        var y0 = this.startpoint.y
        var y1 = this.startpoint.y+this.height
        if (this.height < 0){
            y1 = this.startpoint.y
            y0 = this.startpoint.y+this.height
        }
        return (p.x-3 > x0 && p.x+3 < x1 && p.y-3 > y0 && p.y+3 < y1)
    }

    set_vectors_in_rect(field) {
        this.vecs_in_rect.splice(0,this.vecs_in_rect.length)
        field.vectors.forEach((p_and_v) => {
            var p = p_and_v.p;
            var v = p_and_v.v
            if (this.in_rect(p)){
                let new_object = {p:p, v: new Vector2d(v.x,v.y)}
                this.vecs_in_rect.push(new_object)
            }
        })
    }

   // Draw functions

    draw(canvas_context) {
        if (this.active) {
            canvas_context.save()
            canvas_context.beginPath();
            canvas_context.rect(this.startpoint.x, this.startpoint.y, this.width, this.height);
            canvas_context.strokeStyle = '#00000';
            canvas_context.stroke();
            canvas_context.closePath()
            canvas_context.restore()
        }
    }


   draw_surface_vektores() {
       this.field.rec_vectors.splice(0, this.field.rec_vectors.length);
       let rec_cords = this.ordered_ccords()
       let x0 = rec_cords.x_0
       let x1 = rec_cords.x_1
       let y0 = rec_cords.y_0
       let y1 = rec_cords.y_1
           // Horizontal edges
           for (var i = x0; i <= x1 ; i += this.field.max_possible_len/2) {
               // Upper edge
               var p_top_canvas = { x: i, y: y0};
               var p_top_coords = this.field.transform(p_top_canvas);
               var v_top = this.field.value_at(p_top_coords.x, p_top_coords.y);
               v_top.x *= 0;
               v_top.y *= this.field.norm_factor;
               v_top.recalc_len()
               if (v_top.y < 0) {
                   v_top.color = 'red';
               }
               else {
                   v_top.color = 'green';
               }
               this.field.rec_vectors.push({ p: p_top_canvas, v: v_top });
               // Lower edge
               var p_bottom_canvas = { x: i, y: y1};
               var p_bottom_coords = this.field.transform(p_bottom_canvas);
               var v_bottom = this.field.value_at(p_bottom_coords.x, p_bottom_coords.y);
               v_bottom.x *= 0;
               v_bottom.y *= this.field.norm_factor;
               v_bottom.recalc_len()
               if (v_bottom.y < 0) {
                   v_bottom.color = 'green';
               }
               else {
                   v_bottom.color = 'red';
               }
               this.field.rec_vectors.push({ p: p_bottom_canvas, v: v_bottom });
           }
           // Vertical edges
           for (var i = y0; i <= y1; i += this.field.max_possible_len/2) {
               // Left edge
               var p_left_canvas = { x: x0 , y: i};
               var p_left_coords = this.field.transform(p_left_canvas);
               var v_left = this.field.value_at(p_left_coords.x, p_left_coords.y);
               v_left.x *= this.field.norm_factor;
               v_left.y *= 0;
               v_left.recalc_len()

               if (v_left.x > 0) {
                   v_left.color = 'red';
               }
               else {
                   v_left.color = 'green';
               }
               this.field.rec_vectors.push({ p: p_left_canvas, v: v_left });
               // Right edge
               var p_right_canvas = { x: x1, y: i};
               var p_right_coords = this.field.transform(p_right_canvas);
               var v_right = this.field.value_at(p_right_coords.x, p_right_coords.y);
               v_right.x *= this.field.norm_factor;
               v_right.y *= 0;
               v_right.recalc_len()
               if (v_right.x > 0) {
                   v_right.color = 'green';
               }
               else {
                   v_right.color = 'red';
               }
               this.field.rec_vectors.push({ p: p_right_canvas, v: v_right });
           }

           if (this.field.rec_vectors.length == 0){
               this.field.rec_vectors = []
           }
   }
   
   draw_line_vectores(){
       this.field.rec_vectors.splice(0, this.field.rec_vectors.length);
       let rec_cords = this.ordered_ccords()
       let x0 = rec_cords.x_0
       let x1 = rec_cords.x_1
       let y0 = rec_cords.y_0
       let y1 = rec_cords.y_1
           // Horizontal edges
           for (var i = x0; i <= x1 ; i += this.field.max_possible_len/2) {
               // Upper edge
               var p_top_canvas = { x: i, y: y0};
               var p_top_coords = this.field.transform(p_top_canvas);
               var v_top = this.field.value_at(p_top_coords.x, p_top_coords.y);
               v_top.x *= this.field.norm_factor;
               v_top.y *= 0;
               v_top.recalc_len()
               if (v_top.x > 0) {
                   v_top.color = 'red';
               }
               else {
                   v_top.color = 'green';
               }
               this.field.rec_vectors.push({ p: p_top_canvas, v: v_top });
               // Lower edge
               var p_bottom_canvas = { x: i, y: y1};
               var p_bottom_coords = this.field.transform(p_bottom_canvas);
               var v_bottom = this.field.value_at(p_bottom_coords.x, p_bottom_coords.y);
               v_bottom.x *= this.field.norm_factor;
               v_bottom.y *= 0;
               v_bottom.recalc_len()
               if (v_bottom.x > 0) {
                   v_bottom.color = 'green';
               }
               else {
                   v_bottom.color = 'red';
               }
               this.field.rec_vectors.push({ p: p_bottom_canvas, v: v_bottom });
           }
           // Vertical edges
           for (var i = y0; i <= y1; i += this.field.max_possible_len/2) {
               // Left edge
               var p_left_canvas = { x: x0 , y: i};
               var p_left_coords = this.field.transform(p_left_canvas);
               var v_left = this.field.value_at(p_left_coords.x, p_left_coords.y);
               v_left.x *= 0;
               v_left.y *= this.field.norm_factor;
               v_left.recalc_len()
               if (v_left.y > 0) {
                   v_left.color = 'red';
               }
               else {
                   v_left.color = 'green';
               }
               this.field.rec_vectors.push({ p: p_left_canvas, v: v_left });
               // Right edge
               var p_right_canvas = { x: x1, y: i};
               var p_right_coords = this.field.transform(p_right_canvas);
               var v_right = this.field.value_at(p_right_coords.x, p_right_coords.y);
               v_right.x *= 0;
               v_right.y *= this.field.norm_factor;
               v_right.recalc_len()
               if (v_right.y > 0) {
                   v_right.color = 'green';
               }
               else {
                   v_right.color = 'red';
               }
               this.field.rec_vectors.push({ p: p_right_canvas, v: v_right });
           }

           if (this.field.rec_vectors.length == 0){
               this.field.rec_vectors = []
           }
   }
   }


