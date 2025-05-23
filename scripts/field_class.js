// This is a drawable Vectorfield in 2d
// Convention: i,j -> Canvas Coordinates, x,y -> Coordinates with origing in middle
// This could easly be dealt with if I translate the canvas ... work for later
import { Vector2d } from "./vector_class.js";
export class Field {
	x;
	y;
	canvas;
	canvas_middle;
	norm_factor;
	max_possible_len;
	vectors = [];
	fieldscanner_vectors = [];
	rec_vectors = [];
	partial_x_vecs = [];
	partial_y_vecs = [];
	partial_r_vecs = [];
	partial_phi_vecs = [];
	p_wheel_partial_x = [];
	p_wheel_partial_y = [];
	p_wheel_partial_r = [];
	p_wheel_partial_phi = [];
	background_color = "white";
	base_arrow_color = "black";
	
	
	constructor(x, y, canvas, amount_of_vectors, coordinate_system) {
		this.x_component = x;
		this.y_component = y;

		// modify the expressions for x and y component for certain motifs (don't question what I am doing here, it works)
		// console.log("x-component string pre: " + this.x_component);
		// console.log("y-component string pre: " + this.y_component);			

		this.x_component = this.x_component.replace("x^2", "x^2+0.00001");
		this.y_component = this.y_component.replace("x^2", "x^2+0.00001");

		this.x_component = this.x_component.replace("y^2", "y^2+0.00001");
		this.y_component = this.y_component.replace("y^2", "y^2+0.00001");

		// console.log("x-component string post: " + this.x_component);
		// console.log("y-component string post: " + this.y_component);

		this.coordinate_system = coordinate_system;
		this.canvas = canvas;
		// this is actually smart: ensures that vectors are not overlapping
		this.max_possible_len = canvas.width / amount_of_vectors;							// vector spacing defined by x-width
		this.x_amount_of_vectors = amount_of_vectors;										// vectors count in x-direction
		this.y_amount_of_vectors = parseInt(canvas.height / this.max_possible_len);			// vector count in y-direction recalculated according to height
		if (canvas.height / amount_of_vectors < this.max_possible_len) {
			this.max_possible_len = canvas.height / amount_of_vectors;						// vector spacing determined by y-height
			this.x_amount_of_vectors = parseInt(canvas.width / this.max_possible_len);		// vector count in x-direction recalculated according to width
			this.y_amount_of_vectors = amount_of_vectors;									// vectors count in y-direction
		}
		this.canvas_middle = { x: canvas.width / 2, y: canvas.height / 2 };
		this.create_vectors();
		this.normalize_to(0.9*this.max_possible_len);
		// amount of vectors in x and y direction
	}
	
	
	// transformation of canvas coordinates to internal coordinates of the vector field
	transform(point) {
		let x = ((point.x - this.canvas_middle.x) / (this.canvas.width / 2)) * 10; /// this.canvas_middle.x;
		let y = ((this.canvas_middle.y - point.y) / (this.canvas.height / 2)) * 10; /// this.canvas_middle.y;
		return { x: x, y: y };
	}

	
	/// Math operations //
	value_at(x, y) {
    	let Fx, Fy = 0;
    	if (this.coordinate_system == "cartesian") {
			// evaluate entries to calculate cartesian vectors
			Fx = math.evaluate(this.x_component, { x: x, y: y });
			Fy = math.evaluate(this.y_component, { x: x, y: y });
    	} else if (this.coordinate_system == "polar") {
			// calculation of r, phi from input
			let r = Math.hypot(x, y);
			let phi = Math.atan2(y, x);														// atan2 output negative for phi > pi
			// fixing the negative atan2 output
			if (phi < 0) {
				phi = 2*Math.PI + phi;
			}
			
			// evaluate entries to calculate polar vectors
			let Fr = math.evaluate(this.x_component, { r: r, φ: phi, phi: phi });
			let Fphi = math.evaluate(this.y_component, { r: r, φ: phi, phi: phi });
			Fx = Fr * Math.cos(phi) - Fphi * Math.sin(phi);
			Fy = Fr * Math.sin(phi) + Fphi * Math.cos(phi);
    	}
    	return new Vector2d(Fx, Fy, this.base_arrow_color);
  	}


	// calculates the divergence at a given point (with p.x, p.y)
  	divergence_at(p) {
		var expr_x = math.parse(this.x_component);
		var expr_y = math.parse(this.y_component);
		if (this.coordinate_system == "cartesian") {
			var diff_Fx_x = math.derivative(expr_x, "x");
			var diff_Fy_y = math.derivative(expr_y, "y");
			var divergence =
				diff_Fx_x.evaluate({ x: p.x, y: p.y }) +
				diff_Fy_y.evaluate({ x: p.x, y: p.y });
    	} else if ((this.coordinate_system = "polar")) {
			var diff_Fx_x = math.derivative("r*(" + expr_x + ")", "r");
			var diff_Fy_y = math.derivative(expr_y, "φ");
			var r = Math.hypot(p.x, p.y);
			var φ = Math.atan2(p.y, p.x);
			var divergence =
				(1 / r) * diff_Fx_x.evaluate({ r: r, φ: φ }) +
				(1 / r) * diff_Fy_y.evaluate({ r: r, φ: φ });
		}
   		return divergence;
  	}


	// calculates the curl at a given point (with p.x, p.y)
  	curl_at(p) {
		var expr_x = math.parse(this.x_component);
		var expr_y = math.parse(this.y_component);
		if (this.coordinate_system == "cartesian") {
			var diff_Fx_y = math.derivative(expr_x, "y");
			var diff_Fy_x = math.derivative(expr_y, "x");
			var curl =
				diff_Fy_x.evaluate({ x: p.x, y: p.y }) -
				diff_Fx_y.evaluate({ x: p.x, y: p.y });
    	} else if (this.coordinate_system == "polar") {
			var diff_Fr_phi = math.derivative(expr_x, "φ");						// differentiate F_r to phi
			var diff_rFphi_r = math.derivative("r*(" + expr_y + ")", "r");		// differentiate r*F_phi to r
			var r = Math.hypot(p.x, p.y);
			var φ = Math.atan2(p.y, p.x);
			var curl =
				(1 / r) * diff_rFphi_r.evaluate({
					r: Math.hypot(p.x, p.y),
					φ: Math.atan2(p.y, p.x),
					
				}) -
				(1 / r) * diff_Fr_phi.evaluate({
					r: Math.hypot(p.x, p.y),
					φ: Math.atan2(p.y, p.x),
			});
    	}
    return curl;
  	}


	// Creating it now truly beautiful
	create_vectors() {
		// rewrote iteration: vectors now placed symmetrical to both axes
		for (let i = this.canvas_middle.x - (this.x_amount_of_vectors-1)/2*this.max_possible_len; i < this.canvas.width; i += this.max_possible_len) {
			for (let j = this.canvas_middle.y - this.y_amount_of_vectors/2*this.max_possible_len; j < this.canvas.height; j += this.max_possible_len) {
				var coord = this.transform({ x: i, y: j });									// calculates the internal coordinates for given canvas coordinates i, j
				var vector = this.value_at(coord.x, coord.y);								// evaluates the internal coordinates for the initialized vector field				
        		this.vectors.push({ p: { x: i, y: j }, v: vector });						// pushes vector to the list (vectors) with canvas coordinates p (i,j) and internal Field vector v (Fx, Fy, color)
			}
		}
  	}


  	normalize_to(possible_size) {
		var longest = 0;
		this.vectors.forEach((p_and_v) => {
			var v = p_and_v.v;
			if (v.len > longest) {
        		longest = v.len;
      		}
    	});
		this.norm_factor = possible_size / (longest + 1);
		this.vectors.forEach((p_and_v) => {
      		var v = p_and_v.v;
			v.x *= this.norm_factor;
			v.y *= this.norm_factor;
      		v.recalc_len();
    	});
    	this.fieldscanner_vectors.forEach((p_and_v) => {
			var v = p_and_v.v;
			v.x *= this.norm_factor;
			v.y *= this.norm_factor;
			v.recalc_len();
    	});
    	this.rec_vectors.forEach((p_and_v) => {
			var v = p_and_v.v;
			v.x *= this.norm_factor;
			v.y *= this.norm_factor;
			v.recalc_len();
   	 	});
    	this.partial_x_vecs.forEach((p_and_v) => {
			var v = p_and_v.v;
			v.x *= this.norm_factor;
			v.y *= this.norm_factor;
			v.recalc_len();
    	});
    	this.partial_y_vecs.forEach((p_and_v) => {
			var v = p_and_v.v;
			v.x *= this.norm_factor;
			v.y *= this.norm_factor;
			v.recalc_len();
    	});
    	this.partial_r_vecs.forEach((p_and_v) => {
			var v = p_and_v.v;
			v.x *= this.norm_factor;
			v.y *= this.norm_factor;
			v.recalc_len();
    	});
    	this.partial_phi_vecs.forEach((p_and_v) => {
			var v = p_and_v.v;
			v.x *= this.norm_factor;
			v.y *= this.norm_factor;
			v.recalc_len();
    	});
    	this.p_wheel_partial_x.forEach((p_and_v) => {
			var v = p_and_v.v;
			v.x *= this.norm_factor;
			v.y *= this.norm_factor;
			v.recalc_len();
    	});
    	this.p_wheel_partial_y.forEach((p_and_v) => {
			var v = p_and_v.v;
			v.x *= this.norm_factor;
			v.y *= this.norm_factor;
			v.recalc_len();
    	});
    	this.p_wheel_partial_r.forEach((p_and_v) => {
			var v = p_and_v.v;
			v.x *= this.norm_factor;
			v.y *= this.norm_factor;
			v.recalc_len();
    	});
    	this.p_wheel_partial_phi.forEach((p_and_v) => {
			var v = p_and_v.v;
			v.x *= this.norm_factor;
			v.y *= this.norm_factor;
			v.recalc_len();
    	});
  	}

	
  	draw(canvas_context) {
    	this.vectors.forEach((p_and_v) => {
			var p = p_and_v.p;
			var v = p_and_v.v;
			v.draw_at(p, canvas_context);
    	});
    	if (this.rec_vectors.length != 0) {
			this.rec_vectors.forEach((p_and_v) => {
				var p = p_and_v.p;
				var v = p_and_v.v;
				v.draw_at(p, canvas_context);
      		});
    	}
    	if (this.partial_x_vecs.length != 0) {
			this.partial_x_vecs.forEach((p_and_v) => {
				var p = p_and_v.p;
				var v = p_and_v.v;
				v.draw_at(p, canvas_context);
      		});
    	}
    	if (this.partial_y_vecs.length != 0) {
			this.partial_y_vecs.forEach((p_and_v) => {
				var p = p_and_v.p;
				var v = p_and_v.v;
				v.draw_at(p, canvas_context);
			});
    	}
    	if (this.partial_r_vecs.length != 0) {
			this.partial_r_vecs.forEach((p_and_v) => {
				var p = p_and_v.p;
				var v = p_and_v.v;
				v.draw_at(p, canvas_context);
      		});
    	}
    	if (this.partial_phi_vecs.length != 0) {
			this.partial_phi_vecs.forEach((p_and_v) => {
				var p = p_and_v.p;
				var v = p_and_v.v;
				v.draw_at(p, canvas_context);
			});
    	}
		if (this.fieldscanner_vectors.length != 0) {
			this.fieldscanner_vectors.forEach((p_and_v) => {
				var p = p_and_v.p;
				var v = p_and_v.v;
				v.draw_at(p, canvas_context);
			});
		}
		if (this.p_wheel_partial_x.length != 0) {
			this.p_wheel_partial_x.forEach((p_and_v) => {
				var p = p_and_v.p;
				var v = p_and_v.v;
				v.draw_at(p, canvas_context);
			});
		}
		if (this.p_wheel_partial_y.length != 0) {
			this.p_wheel_partial_y.forEach((p_and_v) => {
				var p = p_and_v.p;
				var v = p_and_v.v;
				v.draw_at(p, canvas_context);
			});
		}
		if (this.p_wheel_partial_r.length != 0) {
			this.p_wheel_partial_r.forEach((p_and_v) => {
				var p = p_and_v.p;
				var v = p_and_v.v;
				v.draw_at(p, canvas_context);
			});
		}
		if (this.p_wheel_partial_phi.length != 0) {
			this.p_wheel_partial_phi.forEach((p_and_v) => {
				var p = p_and_v.p;
				var v = p_and_v.v;
				v.draw_at(p, canvas_context);
			});
		}
	}


	// method to fill the list of partial x-vectors
	add_partial_x_vectors(list) {
		this.partial_x_vecs.splice(0, this.partial_x_vecs.length);
		list.forEach((p_and_v) => {
			var v = new Vector2d(p_and_v.v.x, 0, "blue");
			this.partial_x_vecs.push({ p: p_and_v.p, v: v });
		});
		if (this.partial_x_vecs.length == 0) {
			this.partial_x_vecs = [];
		}
	}


	// method to fill the list of partial x-vectors
	add_partial_y_vectors(list) {
		this.partial_y_vecs.splice(0, this.partial_y_vecs.length);
		list.forEach((p_and_v) => {
			var v = new Vector2d(0, p_and_v.v.y, "orange");
			this.partial_y_vecs.push({ p: p_and_v.p, v: v });
		});
		if (this.partial_y_vecs.length == 0) {
			this.partial_y_vecs = [];
		}
	}


	// method to fill the list of partial x-vectors
	add_partial_r_vectors(list) {
		this.partial_r_vecs.splice(0, this.partial_r_vecs.length);
		list.forEach((p_and_v) => {
			// calculate the vector starting position in internal coordinates
			let vector_start = this.transform(p_and_v.p)
			// calculate angle using point x, y
			let p_phi = Math.atan2(vector_start.y, vector_start.x);							// atan2 output negative for phi > pi
			// fixing the negative atan2 output
			if (p_phi < 0) {
				p_phi = 2*Math.PI + p_phi;
			}
			// calculate length of r-component vector using x-, y-component of the vector
			let r_len = p_and_v.v.x*Math.cos(p_phi) + p_and_v.v.y*Math.sin(p_phi);

			// calculate r component in terms of x and y and create new r-component vector
			var v = new Vector2d(r_len*Math.cos(p_phi), r_len*Math.sin(p_phi), "#6495ED");																		
			this.partial_r_vecs.push({ p: p_and_v.p, v: v });
		});
		if (this.partial_r_vecs.length == 0) {
			this.partial_r_vecs = [];
		}
	}


	// method to fill the list of partial x-vectors
	add_partial_phi_vectors(list) {
		this.partial_phi_vecs.splice(0, this.partial_phi_vecs.length);
		list.forEach((p_and_v) => {
			// calculate the vector starting position in internal coordinates
			let vector_start = this.transform(p_and_v.p)
			// calculate angle using point x, y
			let p_phi = Math.atan2(vector_start.y, vector_start.x);							// atan2 output negative for phi > pi
			// fixing the negative atan2 output
			if (p_phi < 0) {
				p_phi = 2*Math.PI + p_phi;
			}

			// calculate length of phi-component using vector x, y
			let phi_len = -p_and_v.v.x*Math.sin(p_phi) + p_and_v.v.y*Math.cos(p_phi);		// atan2 output negative for phi > pi
			// calculate phi component in terms of x and y and create new phi-component vector
			var v = new Vector2d(-phi_len*Math.sin(p_phi), phi_len*Math.cos(p_phi), "#FF7F50");
			this.partial_phi_vecs.push({ p: p_and_v.p, v: v });
		});
		if (this.partial_phi_vecs.length == 0) {
			this.partial_phi_vecs = [];
		}
	}
}
