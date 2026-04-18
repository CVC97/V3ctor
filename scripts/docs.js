/// Get Elements from DOM

const icon_btn = document.querySelector("#icon-btn");
const info_btn = document.querySelector("#info-btn");
//Theorems
const theorem_button = document.querySelector("#dropdown-menu-tooltip");
const latex_image = document.querySelector("#latex_img");

//Field defeinition
const entry_label = document.querySelector("#vectorfield_define_label");
const x_component_entry = document.querySelector("#x-component");
const x_component_entry_label = document.querySelector("#x_comp_label");
const y_component_entry = document.querySelector("#y-component");
const y_component_entry_label = document.querySelector("#y_comp_label");

//Vectoramount
const vector_amount_entry = document.querySelector("#vector-amount");
const vector_amount_entry_label = document.querySelector("#vector-amount-label");
// Coordinate System
const coordinate_checkbox_label = document.querySelector("#coordinatesystem-label");
const coordinate_tick_checkbox_label = document.querySelector("#coordinatesystem_ticks-label");
const btn_gauss = document.querySelector("#Btn-Gauss");
const btn_stokes = document.querySelector("#Btn-Stokes");

//Fieldscanner
const fieldscanner_checkbox = document.querySelector("#fieldscanner");
const fieldscanner_checkbox_label = document.querySelector("#fieldscanner-label");
//Partial x and y
const partial_x_checkbox = document.querySelector("#xcomponentview");
const partial_x_checkbox_label = document.querySelector("#xcomponentview-label");
const partial_y_checkbox = document.querySelector("#ycomponentview");
const partial_y_checkbox_label = document.querySelector("#ycomponentview-label");
// partial r and phi
const partial_r_checkbox = document.querySelector("#rcomponentview");
const partial_r_checkbox_label = document.querySelector("#rcomponentview-label");
const partial_phi_checkbox = document.querySelector("#phicomponentview");
const partial_phi_checkbox_label = document.querySelector("#phicomponentview-label");
//Projections
const projections_checkbox = document.querySelector("#projection");
const projections_checkbox_label = document.querySelector("#projection-label");
// Output Labels
const div_rot_label = document.querySelector("#div-rot-value");
const integral_label = document.querySelector("#integral-value");
//Changing between Gauss and Stokes
const div_rot_header = document.querySelector("#div_rot_header");
const flux_header = document.querySelector("#flux_header");
const projection_label = document.querySelector("#projection_label");
const paddlewheel_div = document.querySelector("#paddlewheel_div");
paddlewheel_div.style.visibility = "hidden";
const paddlewheel_checkbox = document.querySelector("#paddlewheel");
const paddlewheel_checkbox_label = document.querySelector("#paddlewheel-label");

const value_rot = document.querySelector("#div-rot-value-header")
const value_circ = document.querySelector("#integral-value-header")

// setting the Tooltip strings -> end them with a whitespace for gluing them together

///// German tooltip strings
const info_text_ger =
  	`Halte die Maus über den einzelnen Elementen still, um mehr über sie zu erfahren. `;
const icon_text_ger =
	`Die Applikation wurde an der Fakultät für Physik der Universität Göttingen in der Didaktik der Physik (Prof. Dr. Pascal Klein) für Lehrzwecke entwickelt. 
	Kontakt für Feedback und Fragen: Simon Blaue, Carlo von Carnap, Larissa Hahn (larissa.hahn@uni-goettingen.de). `;
const theorem_text_ger =
  	`Wähle zwischen den Theoremen, um zwischen Divergenz und Rotation zu wechseln. `;
const field_creation_text_ger =
	`Definiere das Feld über seine Komponenten abhängig von x, y, Skalaren und den Operationen (+, -, *, /, sqrt(), ^). 
	Es müssen Operatoren zwischen Zahlen und Variablen verwendet werden. Die Änderung muss mit Enter oder <i>Neu berechnen</i> bestätigt werden. `;
const field_creation_text_polar_ger =
  	`Definiere das Feld über seine Komponenten abhängig vom Radius r und Winkel φ, Skalaren und den Operationen (+, -, *, /, sqrt(), ^). 
	Es müssen Operatoren zwischen Zahlen und Variablen verwendet werden. Die Änderung muss mit Enter oder <i>Neu berechnen</i> bestätigt werden. `;
const vector_amount_text_ger =
  	`Veränderung der Anzahl an Vektoren. Eine Änderung muss mit Enter oder <i>Neu berechnen</i> bestätigt werden. Mit den Pfeiltasten kann die Anzahl in Einer-Schritten erfolgen. `;
const coordinate_checkbox_text_ger =
  	`Durch Aktivierung werden die Koordinatenachsen in den kartesischen Koordinaten x und y eingeblendet. `;
const coordinate_tick_checkbox_text_ger =
  	`Durch Aktivierung werden die feinere Achseneinteilung eingeblendet. `;
const rectangle_text_gauss_ger =
  	`Mit dem Mauszeiger kann ein Rechteck in das Vektorfeld gezogen werden (<i>Feld abtasten</i> muss deaktiviert sein). 
	Dieses kann mit der Maus im Feld bewegt und seine Ränder können beliebig verschoben werden. Der Fluss durch/entlang des Randes der aufgezogenen Rechteckfläche wird angezeigt. 
	Die Divergenz wird am Mittelpunkt des Rechtecks berechnet. Ein Doppelklick entfernt das Rechteck und sämtliche eingezeichneten Vektoren. `;
const rectangle_text_stokes_ger =
  	`Mit dem Mauszeiger kann ein Rechteck in das Vektorfeld gezogen werden (<i>Feld abtasten</i> muss deaktiviert sein). 
	Dieses kann mit der Maus im Feld bewegt und seine Ränder können beliebig verschoben werden. Die Zirkulation durch/entlang des Randes der aufgezogenen Rechteckfläche wird angezeigt. 
	Die Rotation wird am Mittelpunkt des Rechtecks berechnet. Ein Doppelklick entfernt das Rechteck und sämtliche eingezeichneten Vektoren. `;
const fieldscanner_text_gauss_ger =
  	`Bei Aktivierung von <i>Feld abtasten</i> können durch Festhalten der Maustaste Vektorern eingezeichnet werden. Für diese Stelle wird der Wert der Divergenz angezeigt. `;
const fieldscanner_text_stokes_ger =
  	`Wenn Sie das <i>Feld abtasten </i> aktivieren, können Sie Vektoren zeichnen, indem Sie die Maustaste gedrückt halten. 
	Der Wert der Rotation für diesen Punkt wird unten angezeigt. Zeigen Sie x- oder y-Komponenten innerhalb eines gezeichneten Rechtecks (<i>Feld abtasten deaktiviert), 
	für gezeichnete Vektoren oder in der Nähe eines eingefügten Schaufelrads an, indem Sie <i>x-Komponente / y-Komponente anzeigen</i> aktivieren. `;
const partial_x_text_gauss_ger =
  	`Durch Aktivierung der x-Komponente kann diese innerhalb eines Rechtecks oder an den eingezeichneten Vektoren eingeblendet werden. `;
const partial_y_text_gauss_ger =
  	`Durch Aktivierung der y-Komponente kann diese innerhalb eines Rechtecks oder an den eingezeichneten Vektoren eingeblendet werden. `;
const partial_x_text_stokes_ger =
  	`Durch Aktivierung der x-Komponente kann diese innerhalb eines Rechtecks, an den eingezeichneten Vektoren und in der nähe des Schaufelrads eingeblendet werden. `;
const partial_y_text_stokes_ger =
	`Durch Aktivierung der y-Komponente kann diese innerhalb eines Rechtecks, an den eingezeichneten Vektoren und in der nähe des Schaufelrads eingeblendet werden. `;
const partial_r_text_gauss_ger =
	  `Durch Aktivierung der r-Komponente kann diese innerhalb eines Rechtecks oder an den eingezeichneten Vektoren eingeblendet werden. `;
const partial_phi_text_gauss_ger =
	  `Durch Aktivierung der φ-Komponente kann diese innerhalb eines Rechtecks oder an den eingezeichneten Vektoren eingeblendet werden. `;
const partial_r_text_stokes_ger =
	`Durch Aktivierung der r-Komponente kann diese innerhalb eines Rechtecks, an den eingezeichneten Vektoren und in der nähe des Schaufelrads eingeblendet werden. `;
const partial_phi_text_stokes_ger =
  	`Durch Aktivierung der φ-Komponente kann diese innerhalb eines Rechtecks, an den eingezeichneten Vektoren und in der nähe des Schaufelrads eingeblendet werden. `;
const projections_text_gauss_ger =
  	`Die Projektion der Feldkomponenten auf die Normalen an den Rand der Rechteckfläche wird durch Aktivierung der Box eingeblendet. `;
const projections_text_stokes_ger =
  	`Die Projektion der Feldkomponenten auf die vektoriellen Wegelemente der Rechteckkurve wird durch Aktivierung der Box eingeblendet. `;
const paddlewheel_text_ger =
  	`Durch Aktivierung der Box wird ein Schaufelrad in das Feld eingefügt. Dieses kann mit der Maus verschoben werden. `;
const div_header_text_2_ger =
	`Zeige x- oder y-Komponenten innerhalb eines gezeichneten Rechtecks (<i>Scanfeld</i> deaktiviert), indem du  indem du <i>x-Komponente / y-Komponente anzeigen</i> aktivierst. `;
const stokes_header_text_2_ger =
	`Zeige x- oder y-Komponenten innerhalb eines gezeichneten Rechtecks (<i>Scanfeld</i> deaktiviert), 
	für gezeichnete Vektoren oder in der Nähe eines eingefügten Paddelrades, indem du <i>x-Komponente / y-Komponente anzeigen</i> aktivierst. `;
const value_text_gauss_ger =
	`Der angegebene Wert entspricht der Divergenz. `;
const value_text_gauss_integration_ger =
	`Der angegebene Wert entspricht dem Fluss durch die Fläche. `;
const value_text_stokes_ger =
	`Der angegebene Wert entspricht der z-Komponente der Rotation. `;
const value_text_stokes_integration_ger =
	`Der angegebene Wert entspricht der Zirkulation entlang der Kurve. `;

// mobile
const info_text_mobile_ger =
  	`Berühre die einzelnen Elemente, um mehr über sie zu erfahren. `;
const rectangle_text_gauss_mobile_ger =
  	`Mit zwei Fingern kann ein Rechteck in das Vektorfeld gezogen werden (<i>Feld abtasten</i> muss deaktiviert sein). 
	Dieses kann mit dem Finger im Feld bewegt werde. Der Fluss durch/entlang des Randes der aufgezogenen Rechteckfläche wird angezeigt. 
	Die Divergenz wird am Mittelpunkt des Rechtecks berechnet. Ein Berührung außerhalb des Rechtecks entfernt das Rechteck und sämtliche eingezeichneten Vektoren. `;
const rectangle_text_stokes_mobile_ger =
  	`Mit zwei Fingern kann ein Rechteck in das Vektorfeld gezogen werden (<i>Feld abtasten</i> muss deaktiviert sein). 
	Dieses kann mit dem Finger im Feld bewegt und seine Ränder können beliebig verschoben werden. Die Zirkulation durch/entlang des Randes der aufgezogenen Rechteckfläche wird angezeigt. 
	Die Rotation wird am Mittelpunkt des Rechtecks berechnet. Eine Berührung außerhalb des Rechtecks entfernt das Rechteck und sämtliche eingezeichneten Vektoren. `;
const fieldscanner_text_gauss_mobile_ger =
  	`Bei Aktivierung von <i>Feld abtasten</i> können durch Bewegen des Fingers Vektorern eingezeichnet werden. Für diese Stelle wird der Wert der Divergenz angezeigt. `;
const fieldscanner_text_stokes_mobile_ger =
   	`Wenn Sie das <i>Feld abtasten </i> aktivieren, können Sie Vektoren zeichnen, indem Sie den Finger bewegen. 
	Der Wert der Rotation für diesen Punkt wird unten angezeigt. Zeigen Sie x- oder y-Komponenten innerhalb eines gezeichneten Rechtecks (<i>Feld abtasten deaktiviert), 
	für gezeichnete Vektoren oder in der Nähe eines eingefügten Schaufelrads an, indem Sie <i>x-Komponente / y-Komponente anzeigen</i> aktivieren. `;
const paddlewheel_text_mobile_ger =
	`Durch Aktivierung der Box wird ein Schaufelrad in das Feld eingefügt. Dieses kann mit dem Finger verschoben werden. `;


///// English tooltip strings
const info_text_eng =
	`To learn more about the features and elements of the simulation, hold your mouse still over them. `;
const icon_text_eng =
	`The application was developed by the Physics Education Research Group (Prof. Dr. Pascal Klein) at the University of Göttingen (Faculty of Physics) for teaching purposes. 
	Contact for feedback and questions: Simon Blaue, Carlo von Carnap, Larissa Hahn (larissa.hahn@uni-goettingen.de). `;
const theorem_text_eng =
	`Choose an integral theorem to switch between divergence and curl. `;
const field_creation_text_eng =
	`Define the field through its components depending on x, y, scalars, and operations (+, -, *, /, sqrt(), ^). 
	Between numbers and variables, operators have to be used. Confirm changes with <i>Enter</i> or <i>Recalculate</i>. Remove all changes with <i>Reset all</i>. `;
const field_creation_text_polar_eng =
	`Define the field through its components depending on the raidus r and angle φ, scalars, and operations (+, -, *, /, sqrt(), ^). 
	Between numbers and variables, operators have to be used. Confirm changes with <i>Enter</i> or <i>Recalculate</i>. Remove all changes with <i>Reset all</i>. `;
const vector_amount_text_eng =
	`Change the number of vectors. The arrow keys can be used to change the number one step at a time. Confirm changes with <i>Enter</i> or <i>Recalculate</i>. Remove all changes with <i>Reset all</i>. `;
const coordinate_checkbox_text_eng =
	`Display the coordinate axes in Cartesian coordinates x and y. `;
const coordinate_tick_checkbox_text_eng =
  	`Disply finer spacing on the axes ticks. `;
const rectangle_text_gauss_eng =
	`Draw a rectangle into the vector field with the mouse held down (<i>Scan field</i> must be deactivated). 
	Move the drawn rectangle in the field with the mouse and shift its borders arbitrary. The flow through the boundary of the drawn rectangle area is shown below. 
	The divergence is calculated at the center of the rectangle. Double-clicking on the rectangle removes the rectangle and all additionally drawn vectors. `;
const rectangle_text_stokes_eng =
	`Draw a rectangle into the vector field with the mouse held down (<i>Scan field</i> must be deactivated). 
	Move the drawn rectangle in the field with the mouse and shift its borders arbitrary. The circulation along the boundary of the drawn rectangle area is shown below. 
	The curl is calculated at the center of the rectangle. Display the projection of the field vectors on the vector path element of the rectangle curve by activating the corresponding box. 
	Insert a paddle wheel in the vector field and move it in the field using the mouse. Double-clicking on the rectangle removes the rectangle and all additionally drawn vectors. `;
const fieldscanner_text_gauss_eng =
	`Activate <i>Scan field</i> to draw additional vectors in the vector field by holding down the mouse button. The value of divergence for that point is displayed below. `;
const fieldscanner_text_stokes_eng =
	`Activate <i>Scan field</i> to draw additional vectors in the vector field by holding down the mouse button. The value of curl for that point is displayed below. `;
const div_header_text_2_eng =
	`Display x or y components within a drawn rectangle (<i>scan field</i> deactivated), or for drawn vectors by activating <i>show x component / y component.</i> `;
const stokes_header_text_2_eng =
	`Display x or y components within a drawn rectangle (<i>scan field</i> deactivated), for drawn vectors, or near an inserted paddle wheel by activating <i>show x component / y component.</i> `;
const partial_x_text_gauss_eng =
	`Display x components within a drawn rectangle (<i>Scan field</i> deactivated) or for drawn vectors. `;
const partial_y_text_gauss_eng =
	`Display y components within a drawn rectangle (<i>Scan field</i> deactivated) or for drawn vectors. `;
const partial_x_text_stokes_eng =
	`Display x components within a drawn rectangle (<i>Scan field</i> deactivated), for drawn vectors, or near an inserted paddle wheel. `;
const partial_y_text_stokes_eng =
	`Display y components within a drawn rectangle (<i>Scan field</i> deactivated), for drawn vectors, or near an inserted paddle wheel. `;
const partial_r_text_gauss_eng =
	`Display r components within a drawn rectangle (<i>Scan field</i> deactivated) or for drawn vectors. `;
const partial_phi_text_gauss_eng =
	`Display φ components within a drawn rectangle (<i>Scan field</i> deactivated) or for drawn vectors. `;
const partial_r_text_stokes_eng =
	`Display r components within a drawn rectangle (<i>Scan field</i> deactivated), for drawn vectors, or near an inserted paddle wheel. `;
const partial_phi_text_stokes_eng =
	`Display φ components within a drawn rectangle (<i>Scan field</i> deactivated), for drawn vectors, or near an inserted paddle wheel. `;
const projections_text_gauss_eng =
	`Display the projection of the field vectors on the outer normal vectors of the boundary of the rectangle area. `;
const projections_text_stokes_eng =
	`Display the projection of the field vectors on the vector path element of the rectangle curve. `;
const paddlewheel_text_eng =
	`Insert a paddle wheel in the vector field and move it in the field using the mouse. `;
const value_text_gauss_eng =
	`The given value corresponds to the divergence. `;
const value_text_gauss_integration_eng =
	`The given value corresponds to the flux through the area. `;
const value_text_stokes_eng =
	`The given value corresponds to the z-component of the rotation. `;
const value_text_stokes_integration_eng =
	`The given value corresponds to the circulation along the curve. `;

// mobile
const info_text_mobile_eng =
  	`Touch elements of the simulationto to learn more about their features . `;
const rectangle_text_gauss_mobile_eng =
	`Draw a rectangle into the vector field with two fingers (<i>Scan field</i> must be deactivated). 
	Move the drawn rectangle in the field with the finger in the rectangle. The flow through the boundary of the drawn rectangle area is shown below. 
	The divergence is calculated at the center of the rectangle. A touch outside the rectangle removes the rectangle and all additionally drawn vectors. `;
const rectangle_text_stokes_mobile_eng =
	`Draw a rectangle into the vector field with two fingers (<i>Scan field</i> must be deactivated). 
	Move the drawn rectangle in the field with the finger inside the rectangle and shift its borders arbitrary. The circulation along the boundary of the drawn rectangle area is shown below. 
	The curl is calculated at the center of the rectangle. Display the projection of the field vectors on the vector path element of the rectangle curve by activating the corresponding box. 
	Insert a paddle wheel in the vector field and move it in the field using your finger. A touch outside the rectangle removes the rectangle and all additionally drawn vectors. `;
const fieldscanner_text_gauss_mobile_eng =
	`Activate <i>Scan field</i> to draw additional vectors in the vector field by moving your finger. The value of divergence for that point is displayed below. `;
const fieldscanner_text_stokes_mobile_eng =
	`Activate <i>Scan field</i> to draw additional vectors in the vector field by moving your finger. The value of curl for that point is displayed below. `;
const paddlewheel_text_mobile_eng =
	`Insert a paddle wheel in the vector field and move it in the field using your finger. `;


let info_text = info_text_ger;
let icon_text = icon_text_ger;
let theorem_text = theorem_text_ger;
let field_creation_text = field_creation_text_ger;
let field_creation_text_polar = field_creation_text_polar_ger;
let vector_amount_text = vector_amount_text_ger;
let coordinate_checkbox_text = coordinate_checkbox_text_ger;
let coordinate_tick_checkbox_text = coordinate_tick_checkbox_text_ger;
let rectangle_text_gauss = rectangle_text_gauss_ger;
let rectangle_text_stokes = rectangle_text_stokes_ger;
let fieldscanner_text_gauss = field_creation_text_ger;
let fieldscanner_text_stokes = fieldscanner_text_stokes_ger;
let div_header_text_2 = div_header_text_2_ger;
let stokes_header_text_2 = stokes_header_text_2_ger;
let partial_x_text_gauss = partial_x_text_gauss_ger;
let partial_y_text_gauss = partial_y_text_gauss_ger;
let partial_x_text_stokes = partial_x_text_stokes_ger;
let partial_y_text_stokes = partial_y_text_stokes_ger;
let partial_r_text_gauss = partial_r_text_gauss_ger;
let partial_phi_text_gauss = partial_phi_text_gauss_ger;
let partial_r_text_stokes = partial_r_text_stokes_ger;
let partial_phi_text_stokes = partial_phi_text_stokes_ger;
let projections_text_gauss = projections_text_gauss_ger;
let projections_text_stokes = projections_text_stokes_ger;
let paddlewheel_text = paddlewheel_text_ger;
let value_text_gauss = value_text_gauss_ger;
let value_text_gauss_integration = value_text_gauss_integration_ger;
let value_text_stokes = value_text_stokes_ger;
let value_text_stokes_integration = value_text_stokes_integration_ger;
// // mobile
// if (mobile_device) {
// 	info_text = info_text_mobile_ger;
// 	rectangle_text_gauss = rectangle_text_gauss_mobile_ger;
// 	rectangle_text_stokes = rectangle_text_stokes_mobile_ger;
// 	fieldscanner_text_gauss = fieldscanner_text_gauss_mobile_ger;
// 	fieldscanner_text_stokes = fieldscanner_text_stokes_mobile_ger;
// 	paddlewheel_text = paddlewheel_text_mobile_ger;
// }


// function for change between stokes and gauss
export function switch_tooltips(old_theorem, mobile_device = false) {
	info_btn.setAttribute("data-bs-content", info_text);
	icon_btn.setAttribute("data-bs-content", icon_text);
	theorem_button.setAttribute("title", theorem_text);
	latex_image.setAttribute("title", theorem_text);
	entry_label.setAttribute("title", field_creation_text);
	// x_component_entry.setAttribute("title", field_creation_text);
	x_component_entry_label.setAttribute("title", field_creation_text);
	// y_component_entry.setAttribute("title", field_creation_text);
	y_component_entry_label.setAttribute("title", field_creation_text);
	// vector_amount_entry.setAttribute("title", vector_amount_text);
	vector_amount_entry.previousElementSibling.setAttribute("title", vector_amount_text);
	// coordinate_checkbox.setAttribute("title", coordinate_checkbox_text);
	coordinate_checkbox_label.setAttribute("title", coordinate_checkbox_text);
	coordinate_tick_checkbox_label.setAttribute("title", coordinate_tick_checkbox_text);

	if (old_theorem == "stokes") {
		div_rot_header.setAttribute("title", fieldscanner_text_gauss + " " + div_header_text_2);
		// fieldscanner_checkbox.setAttribute("title", fieldscanner_text_gauss);
		fieldscanner_checkbox_label.setAttribute("title", fieldscanner_text_gauss);
		flux_header.setAttribute("title", rectangle_text_gauss + projections_text_gauss);
		// projections_checkbox.setAttribute("title", projections_text_gauss);
		projections_checkbox_label.setAttribute("title", projections_text_gauss);
		// partial_x_checkbox.setAttribute("title", partial_x_text_gauss);
		partial_x_checkbox_label.setAttribute("title", partial_x_text_gauss);
		// partial_y_checkbox.setAttribute("title", partial_y_text_gauss);
		partial_y_checkbox_label.setAttribute("title", partial_y_text_gauss);
		partial_r_checkbox_label.setAttribute("title", partial_r_text_gauss);
		partial_phi_checkbox_label.setAttribute("title", partial_phi_text_gauss);
		value_rot.setAttribute("title", value_text_gauss);
		value_rot.nextElementSibling.setAttribute("title", value_text_gauss);
		value_circ.setAttribute("title", value_text_gauss_integration);
		value_circ.nextElementSibling.setAttribute("title", value_text_gauss_integration);
	} else {
		div_rot_header.setAttribute("title", fieldscanner_text_stokes + " " + stokes_header_text_2);
		// fieldscanner_checkbox.setAttribute("title", fieldscanner_text_stokes);
		fieldscanner_checkbox_label.setAttribute("title", fieldscanner_text_stokes);
		flux_header.setAttribute("title", rectangle_text_stokes);
		// projections_checkbox.setAttribute("title", projections_text_stokes);
		projections_checkbox_label.setAttribute("title", projections_text_stokes);
		// partial_x_checkbox.setAttribute("title", partial_x_text_stokes);
		partial_x_checkbox_label.setAttribute("title", partial_x_text_stokes);
		// partial_y_checkbox.setAttribute("title", partial_y_text_stokes);
		partial_y_checkbox_label.setAttribute("title", partial_y_text_stokes);
		partial_r_checkbox_label.setAttribute("title", partial_r_text_stokes);
		partial_phi_checkbox_label.setAttribute("title", partial_phi_text_stokes);

		// paddlewheel_checkbox.setAttribute("title", paddlewheel_text);
		paddlewheel_checkbox_label.setAttribute("title", paddlewheel_text);
		value_rot.setAttribute("title", value_text_stokes);
		value_rot.nextElementSibling.setAttribute("title", value_text_stokes);
		value_circ.setAttribute("title", value_text_stokes_integration);
		value_circ.nextElementSibling.setAttribute("title", value_text_stokes_integration);
  	}

	var all_with_title = document.querySelectorAll("[title]");

	all_with_title.forEach((elem) => {
		elem.setAttribute("data-bs-toggle", "tooltip");
		elem.setAttribute("data-bs-delay", '{"show":200,"hide":50}');
	});
}

export function switch_tooltip_coords(old_coord, mobile_device = false) {
	if (old_coord == "polar") {
		entry_label.setAttribute("title", field_creation_text);
		// x_component_entry.setAttribute("title", field_creation_text);
		x_component_entry_label.setAttribute("title", field_creation_text);
		// y_component_entry.setAttribute("title", field_creation_text);
		y_component_entry_label.setAttribute("title", field_creation_text);
	} else {
		entry_label.setAttribute("title", field_creation_text_polar);
		// x_component_entry.setAttribute("title", field_creation_text_polar);
		x_component_entry_label.setAttribute("title", field_creation_text_polar);
		// y_component_entry.setAttribute("title", field_creation_text_polar);
		y_component_entry_label.setAttribute("title", field_creation_text_polar);
	}

	var all_with_title = document.querySelectorAll("[title]");

	all_with_title.forEach((elem) => {
		elem.setAttribute("data-bs-toggle", "tooltip");
		elem.setAttribute("data-bs-delay", '{"show":200,"hide":50}');
	});
}

export function switch_language(old_lang, theorem, coords, mobile_device = false) {
	if (old_lang == "en") {
		info_text = info_text_eng;
		icon_text = icon_text_eng;
		theorem_text = theorem_text_eng;
		field_creation_text = field_creation_text_eng;
		field_creation_text_polar = field_creation_text_polar_eng;
		vector_amount_text = vector_amount_text_eng;
		coordinate_checkbox_text = coordinate_checkbox_text_eng;
		rectangle_text_gauss = rectangle_text_gauss_eng;
		rectangle_text_stokes = rectangle_text_stokes_eng;
		fieldscanner_text_gauss = fieldscanner_text_gauss_eng;
		fieldscanner_text_stokes = fieldscanner_text_stokes_eng;
		div_header_text_2 = div_header_text_2_eng;
		stokes_header_text_2 = stokes_header_text_2_eng;
		partial_x_text_gauss = partial_x_text_gauss_eng;
		partial_y_text_gauss = partial_y_text_gauss_eng;
		partial_x_text_stokes = partial_x_text_stokes_eng;
		partial_y_text_stokes = partial_x_text_stokes_eng;
		partial_r_text_gauss = partial_r_text_gauss_eng;
		partial_phi_text_gauss = partial_phi_text_gauss_eng;
		partial_r_text_stokes = partial_r_text_stokes_eng;
		partial_phi_text_stokes = partial_phi_text_stokes_eng;
		projections_text_gauss = projections_text_gauss_eng;
		//  display the projection of the field vectors on the vector path element of the rectangle curve.
		projections_text_stokes = projections_text_stokes_eng;
		paddlewheel_text = paddlewheel_text_eng;
		value_text_gauss = value_text_gauss_eng;
		value_text_gauss_integration = value_text_gauss_integration_eng;
		value_text_stokes = value_text_stokes_eng;
		value_text_stokes_integration = value_text_stokes_integration_eng;
		if (mobile_device) {
			info_text = info_text_mobile_eng;
			rectangle_text_gauss = rectangle_text_gauss_mobile_eng;
			rectangle_text_stokes = rectangle_text_stokes_mobile_eng;
			fieldscanner_text_gauss = fieldscanner_text_gauss_mobile_eng;
			fieldscanner_text_stokes = fieldscanner_text_stokes_mobile_eng;
			paddlewheel_text = paddlewheel_text_mobile_eng;
		}
	} else {
		info_text = info_text_ger;
		icon_text = icon_text_ger;
		theorem_text = theorem_text_ger;
		field_creation_text = field_creation_text_ger;
		field_creation_text_polar = field_creation_text_polar_ger;
		vector_amount_text = vector_amount_text_ger;
		coordinate_checkbox_text = coordinate_checkbox_text_ger;
		rectangle_text_gauss = rectangle_text_gauss_ger;
		rectangle_text_stokes = rectangle_text_stokes_ger;
		fieldscanner_text_gauss = fieldscanner_text_gauss_ger;
		fieldscanner_text_stokes = fieldscanner_text_stokes_ger;
		div_header_text_2 = div_header_text_2_ger;
		stokes_header_text_2 = stokes_header_text_2_ger;
		partial_x_text_gauss = partial_x_text_gauss_ger;
		partial_y_text_gauss = partial_y_text_gauss_ger;
		partial_x_text_stokes = partial_x_text_stokes_ger;
		partial_y_text_stokes = partial_x_text_stokes_ger;
		partial_r_text_gauss = partial_r_text_gauss_ger;
		partial_phi_text_gauss = partial_phi_text_gauss_ger;
		partial_r_text_stokes = partial_r_text_stokes_ger;
		partial_phi_text_stokes = partial_phi_text_stokes_ger;
		projections_text_gauss = projections_text_gauss_ger;
		projections_text_gauss = projections_text_gauss_ger;
		//  display the projection of the field vectors on the vector path element of the rectangle curve.
		projections_text_stokes = projections_text_stokes_ger;
		paddlewheel_text = paddlewheel_text_ger;
		value_text_gauss = value_text_gauss_ger;
		value_text_gauss_integration = value_text_gauss_integration_ger;
		value_text_stokes = value_text_stokes_ger;
		value_text_stokes_integration = value_text_stokes_integration_ger;
		if (mobile_device) {
			info_text = info_text_mobile_ger;
			rectangle_text_gauss = rectangle_text_gauss_mobile_ger;
			rectangle_text_stokes = rectangle_text_stokes_mobile_ger;
			fieldscanner_text_gauss = fieldscanner_text_gauss_mobile_ger;
			fieldscanner_text_stokes = fieldscanner_text_stokes_mobile_ger;
			paddlewheel_text = paddlewheel_text_mobile_ger;
		}
	}

	info_btn.setAttribute("data-bs-content", info_text);
	icon_btn.setAttribute("data-bs-content", icon_text);
	theorem_button.setAttribute("title", theorem_text);
	latex_image.setAttribute("title", theorem_text);
	// vector_amount_entry.setAttribute("title", vector_amount_text);
	vector_amount_entry_label.setAttribute("title", vector_amount_text);

	// coordinate_checkbox.setAttribute("title", coordinate_checkbox_text);
	coordinate_checkbox_label.setAttribute("title", coordinate_checkbox_text);

	if (theorem == "gauss") {
		div_rot_header.setAttribute("title", fieldscanner_text_gauss + " " + div_header_text_2);
		// fieldscanner_checkbox.setAttribute("title", fieldscanner_text_gauss);
		fieldscanner_checkbox_label.setAttribute("title", fieldscanner_text_gauss);
		flux_header.setAttribute("title", rectangle_text_gauss + " " + projections_text_gauss);
		// projections_checkbox.setAttribute("title", projections_text_gauss);
		projections_checkbox_label.setAttribute("title", projections_text_gauss);
		// partial_x_checkbox.setAttribute("title", partial_x_text_gauss);
		partial_x_checkbox_label.setAttribute("title", partial_x_text_gauss);
		// partial_y_checkbox.setAttribute("title", partial_y_text_gauss);
		partial_y_checkbox_label.setAttribute("title", partial_y_text_gauss);
		partial_r_checkbox_label.setAttribute("title", partial_r_text_gauss);
		partial_phi_checkbox_label.setAttribute("title", partial_phi_text_gauss);
		value_rot.setAttribute("title", value_text_gauss);
		value_rot.nextElementSibling.setAttribute("title", value_text_gauss);
		value_circ.setAttribute("title", value_text_gauss_integration);
		value_circ.nextElementSibling.setAttribute("title", value_text_gauss_integration);
	} else {
		div_rot_header.setAttribute("title", fieldscanner_text_stokes + " " + stokes_header_text_2);
		// fieldscanner_checkbox.setAttribute("title", fieldscanner_text_stokes);
		fieldscanner_checkbox_label.setAttribute("title", fieldscanner_text_stokes);
		flux_header.setAttribute("title", rectangle_text_stokes + " ");
		// projections_checkbox.setAttribute("title", projections_text_stokes);
		projections_checkbox_label.setAttribute("title", projections_text_stokes);
		// partial_x_checkbox.setAttribute("title", partial_x_text_stokes);
		partial_x_checkbox_label.setAttribute("title", partial_x_text_stokes);
		// partial_y_checkbox.setAttribute("title", partial_y_text_stokes);
		partial_y_checkbox_label.setAttribute("title", partial_y_text_stokes);
		// paddlewheel_checkbox.setAttribute("title", paddlewheel_text);
		partial_r_checkbox_label.setAttribute("title", partial_r_text_stokes);
		partial_phi_checkbox_label.setAttribute("title", partial_phi_text_stokes);
		paddlewheel_checkbox_label.setAttribute("title", paddlewheel_text);
		value_rot.setAttribute("title", value_text_stokes);
		value_rot.nextElementSibling.setAttribute("title", value_text_stokes);
		value_circ.setAttribute("title", value_text_stokes_integration);
		value_circ.nextElementSibling.setAttribute("title", value_text_stokes_integration);
  	}

	if (coords == "polar") {
		entry_label.setAttribute("title", field_creation_text_polar);
		// x_component_entry.setAttribute("title", field_creation_text_polar);
		x_component_entry_label.setAttribute("title", field_creation_text_polar);
		// y_component_entry.setAttribute("title", field_creation_text_polar);
		y_component_entry_label.setAttribute("title", field_creation_text_polar);
	} else {
		entry_label.setAttribute("title", field_creation_text);
		// x_component_entry.setAttribute("title", field_creation_text);
		x_component_entry_label.setAttribute("title", field_creation_text);
		// y_component_entry.setAttribute("title", field_creation_text);
		y_component_entry_label.setAttribute("title", field_creation_text);
	}

	var all_with_title = document.querySelectorAll("[title]");

	all_with_title.forEach((elem) => {
		elem.setAttribute("data-bs-toggle", "tooltip");
		elem.setAttribute("data-bs-delay", '{"show":200,"hide":50}');
	});
}
