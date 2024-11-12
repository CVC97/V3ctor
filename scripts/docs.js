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
// Coordinate System
const coordinate_checkbox = document.querySelector("#coordinatesystem");
const btn_gauss = document.querySelector("#Btn-Gauss");
const btn_stokes = document.querySelector("#Btn-Stokes");

//Fieldscanner
const fieldscanner_checkbox = document.querySelector("#fieldscanner");
//Partial x and y
const partial_x_checkbox = document.querySelector("#xcomponentview");
const partial_y_checkbox = document.querySelector("#ycomponentview");
//Projections
const projections_checkbox = document.querySelector("#projection");
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

/// Setting the Tooltip strings -> End them with a whitespace for gluing them together
let info_text =
  "Halte die Maus über den einzelnen Elementen still, um mehr über sie zu erfahren.";

let icon_text =
  "Die Applikation wurde an der Fakultät für Physik der Universität Göttingen in der Didaktik der Physik (Prof. Dr. Pascal Klein) für Lehrzwecke entwickelt. Kontakt für Feedback und Fragen: Simon Blaue, Larissa Hahn (larissa.hahn@uni-goettingen.de).";

let theorem_text =
  "Wähle zwischen den Theoremen, um zwischen Divergenz und Rotation zu wechseln.";

let field_creation_text =
  "Definiere das Feld über seine Komponenten abhängig von x, y, Skalaren und den Operationen (+, -, *, /, sqrt(), ^). Es müssen Operatoren zwischen Zahlen und Variablen verwendet werden. Die Änderung muss mit Enter oder <i>Neu berechnen</i> bestätigt werden. ";

let field_creation_text_polar =
  "Definiere das Feld über seine Komponenten abhängig vom Radius r und Winkel φ, Skalaren und den Operationen (+, -, *, /, sqrt(), ^). Es müssen Operatoren zwischen Zahlen und Variablen verwendet werden. Die Änderung muss mit Enter oder <i>Neu berechnen</i> bestätigt werden. ";

let vector_amount_text =
  "Veränderung der Anzahl an Vektoren. Eine Änderung muss mit Enter oder <i>Neu berechnen</i> bestätigt werden. Mit den Pfeiltasten kann die Anzahl in Einer-Schritten erfolgen. ";

let coordinate_checkbox_text =
  "Durch Aktivierung werden die Koordinatenachsen in den kartesischen Koordinaten x und y  eingeblendet. ";

let rectangle_text_gauss =
  "Mit dem Mauszeiger kann ein Rechteck in das Vektorfeld gezogen werden (<i>Feld abtasten</i> muss deaktiviert sein). Dieses kann mit der Maus im Feld bewegt und seine Ränder können beliebig verschoben werden. Der Fluss durch/entlang des Randes der aufgezogenen Rechteckfläche wird angezeigt. Die Divergenz wird am Mittelpunkt des Rechtecks berechnet. Ein Doppelklick entfernt das Rechteck und sämtliche eingezeichneten Vektoren. ";

let rectangle_text_stokes =
  "Mit dem Mauszeiger kann ein Rechteck in das Vektorfeld gezogen werden (<i>Feld abtasten</i> muss deaktiviert sein). Dieses kann mit der Maus im Feld bewegt und seine Ränder können beliebig verschoben werden. Die Zirkulation durch/entlang des Randes der aufgezogenen Rechteckfläche wird angezeigt. Die Rotation wird am Mittelpunkt des Rechtecks berechnet. Ein Doppelklick entfernt das Rechteck und sämtliche eingezeichneten Vektoren. ";

let fieldscanner_text_gauss =
  "Bei Aktivierung von <i>Feld abtasten</i> können durch Festhalten der Maustaste Vektorern eingezeichnet werden. Für diese Stelle wird der Wert der Divergenz angezeigt. ";

let fieldscanner_text_stokes =
  "Wenn Sie das <i>Feld abtasten </i> aktivieren, können Sie Vektoren zeichnen, indem Sie die Maustaste gedrückt halten. Der Wert der Rotation für diesen Punkt wird unten angezeigt. Zeigen Sie x- oder y-Komponenten innerhalb eines gezeichneten Rechtecks (<i>Feld abtasten deaktiviert), für gezeichnete Vektoren oder in der Nähe eines eingefügten Schaufelrads an, indem Sie <i>x-Komponente / y-Komponente anzeigen</i> aktivieren.";

let partial_x_text_gauss =
  "Durch Aktivierung der x-Komponente kann diese innerhalb eines Rechtecks oder an den eingezeichneten Vektoren eingeblendet werden. ";
let partial_y_text_gauss =
  "Durch Aktivierung der y-Komponente kann diese innerhalb eines Rechtecks oder an den eingezeichneten Vektoren eingeblendet werden. ";

let partial_x_text_stokes =
  "Durch Aktivierung der x-Komponente kann diese innerhalb eines Rechtecks, an den eingezeichneten Vektoren und in der nähe des Schaufelrads eingeblendet werden. ";
let partial_y_text_stokes =
  "Durch Aktivierung der y-Komponente kann diese innerhalb eines Rechtecks, an den eingezeichneten Vektoren und in der nähe des Schaufelrads eingeblendet werden. ";

let projections_text_gauss =
  "Die Projektion der Feldkomponenten auf die Normalen an den Rand der Rechteckfläche wird durch Aktivierung der Box eingeblendet. ";
let projections_text_stokes =
  "Die Projektion der Feldkomponenten auf die vektoriellen Wegelemente der Rechteckkurve wird durch Aktivierung der Box eingeblendet. ";

let paddlewheel_text =
  "Durch Aktivierung der Box wird ein Schaufelrad in das Feld eingefügt. Dieses kann mit der Maus verschoben werden. ";

let div_header_text_2 =
  " Zeige x- oder y-Komponenten innerhalb eines gezeichneten Rechtecks (<i>Scanfeld</i> deaktiviert), indem du  indem du <i>x-Komponente / y-Komponente anzeigen</i> aktivierst.";

let stokes_header_text_2 =
  " Zeige x- oder y-Komponenten innerhalb eines gezeichneten Rechtecks (<i>Scanfeld</i> deaktiviert), für gezeichnete Vektoren oder in der Nähe eines eingefügten Paddelrades, indem du <i>x-Komponente / y-Komponente anzeigen</i> aktivierst.";

// function for change between stokes and gauss

export function switch_tooltips(old_theorem) {
  info_btn.setAttribute("data-bs-content", info_text);
  icon_btn.setAttribute("data-bs-content", icon_text);

  theorem_button.setAttribute("title", theorem_text);
  latex_image.setAttribute("title", theorem_text);

  entry_label.setAttribute("title", field_creation_text);
  x_component_entry.setAttribute("title", field_creation_text);
  x_component_entry_label.setAttribute("title", field_creation_text);

  y_component_entry.setAttribute("title", field_creation_text);
  y_component_entry_label.setAttribute("title", field_creation_text);

  vector_amount_entry.setAttribute("title", vector_amount_text);
  vector_amount_entry.previousElementSibling.setAttribute(
    "title",
    vector_amount_text,
  );

  coordinate_checkbox.setAttribute("title", coordinate_checkbox_text);
  coordinate_checkbox.nextElementSibling.setAttribute(
    "title",
    coordinate_checkbox_text,
  );

  if (old_theorem == "stokes") {
    div_rot_header.setAttribute(
      "title",
      fieldscanner_text_gauss + " " + div_header_text_2,
    );

    fieldscanner_checkbox.setAttribute("title", fieldscanner_text_gauss);
    fieldscanner_checkbox.nextElementSibling.setAttribute(
      "title",
      fieldscanner_text_gauss,
    );

    flux_header.setAttribute(
      "title",
      rectangle_text_gauss + projections_text_gauss,
    );
    projections_checkbox.setAttribute("title", projections_text_gauss);
    projections_checkbox.nextElementSibling.setAttribute(
      "title",
      projections_text_gauss,
    );

    partial_x_checkbox.setAttribute("title", partial_x_text_gauss);
    partial_x_checkbox.nextElementSibling.setAttribute(
      "title",
      partial_x_text_gauss,
    );
    partial_y_checkbox.setAttribute("title", partial_y_text_gauss);
    partial_y_checkbox.nextElementSibling.setAttribute(
      "title",
      partial_y_text_gauss,
    );
  } else {
    div_rot_header.setAttribute(
      "title",
      fieldscanner_text_stokes + " " + stokes_header_text_2,
    );

    fieldscanner_checkbox.setAttribute("title", fieldscanner_text_stokes);
    fieldscanner_checkbox.nextElementSibling.setAttribute(
      "title",
      fieldscanner_text_stokes,
    );

    flux_header.setAttribute("title", rectangle_text_stokes);
    projections_checkbox.setAttribute("title", projections_text_stokes);
    projections_checkbox.nextElementSibling.setAttribute(
      "title",
      projections_text_stokes,
    );

    partial_x_checkbox.setAttribute("title", partial_x_text_stokes);
    partial_x_checkbox.nextElementSibling.setAttribute(
      "title",
      partial_x_text_stokes,
    );
    partial_y_checkbox.setAttribute("title", partial_y_text_stokes);
    partial_y_checkbox.nextElementSibling.setAttribute(
      "title",
      partial_y_text_stokes,
    );

    paddlewheel_checkbox.setAttribute("title", paddlewheel_text);
    paddlewheel_checkbox.nextElementSibling.setAttribute(
      "title",
      paddlewheel_text,
    );
  }

  var all_with_title = document.querySelectorAll("[title]");

  all_with_title.forEach((elem) => {
    elem.setAttribute("data-bs-toggle", "tooltip");
    elem.setAttribute("data-bs-delay", '{"show":200,"hide":50}');
  });
}

export function switch_tooltip_coords(old_coord) {
  if (old_coord == "polar") {
    entry_label.setAttribute("title", field_creation_text);
    x_component_entry.setAttribute("title", field_creation_text);
    x_component_entry_label.setAttribute("title", field_creation_text);
    y_component_entry.setAttribute("title", field_creation_text);
    y_component_entry_label.setAttribute("title", field_creation_text);
  } else {
    entry_label.setAttribute("title", field_creation_text_polar);
    x_component_entry.setAttribute("title", field_creation_text_polar);
    x_component_entry_label.setAttribute("title", field_creation_text_polar);

    y_component_entry.setAttribute("title", field_creation_text_polar);
    y_component_entry_label.setAttribute("title", field_creation_text_polar);
  }

  var all_with_title = document.querySelectorAll("[title]");

  all_with_title.forEach((elem) => {
    elem.setAttribute("data-bs-toggle", "tooltip");
    elem.setAttribute("data-bs-delay", '{"show":200,"hide":50}');
  });
}

export function switch_language(old_lang, theorem, coords) {
  if (old_lang == "en") {
    info_text =
      "To learn more about the features and elements of the simulation, hold your mouse still over them. ";

    icon_text =
      "The application was developed by the Physics Education Research Group (Prof. Dr. Pascal Klein) at the University of Göttingen (Faculty of Physics) for teaching purposes. Contact for feedback and questions: Simon Blaue, Larissa Hahn (larissa.hahn@uni-goettingen.de).";

    theorem_text =
      "Choose an integral theorem to switch between divergence and curl.";

    field_creation_text =
      "Define the field through its components depending on x, y, scalars, and operations (+, -, *, /, sqrt(), ^). Between numbers and variables, operators have to be used. Confirm changes with <i>Enter</i> or <i>Recalculate</i>. Remove all changes with <i>Reset all</i>. ";

    field_creation_text_polar =
      "Define the field through its components depending on the raidus r and angle φ, scalars, and operations (+, -, *, /, sqrt(), ^). Between numbers and variables, operators have to be used. Confirm changes with <i>Enter</i> or <i>Recalculate</i>. Remove all changes with <i>Reset all</i>. ";

    vector_amount_text =
      "Change the number of vectors. The arrow keys can be used to change the number one step at a time. Confirm changes with <i>Enter</i> or <i>Recalculate</i>. Remove all changes with <i>Reset all</i>. ";

    coordinate_checkbox_text =
      "Display the coordinate axes in Cartesian coordinates x and y.";

    rectangle_text_gauss =
      "Draw a rectangle into the vector field with the mouse held down (<i>Scan field</i> must be deactivated). Move the drawn rectangle in the field with the mouse and shift its borders arbitrary. The flow through the boundary of the drawn rectangle area is shown below. The divergence is calculated at the center of the rectangle. Double-clicking on the rectangle removes the rectangle and all additionally drawn vectors. ";

    rectangle_text_stokes =
      "Draw a rectangle into the vector field with the mouse held down (<i>Scan field</i> must be deactivated). Move the drawn rectangle in the field with the mouse and shift its borders arbitrary. The circulation along the boundary of the drawn rectangle area is shown below. The curl is calculated at the center of the rectangle. Display the projection of the field vectors on the vector path element of the rectangle curve by activating the corresponding box. Insert a paddle wheel in the vector field and move it in the field using the mouse. Double-clicking on the rectangle removes the rectangle and all additionally drawn vectors. ";

    fieldscanner_text_gauss =
      " Activate <i>Scan field</i> to draw additional vectors in the vector field by holding down the mouse button. The value of divergence for that point is displayed below. ";

    fieldscanner_text_stokes =
      "Activate <i>Scan field</i> to draw additional vectors in the vector field by holding down the mouse button. The value of curl for that point is displayed below. ";

    div_header_text_2 =
      " Display x or y components within a drawn rectangle (<i>scan field</i> deactivated), or for drawn vectors by activating <i>show x component / y component.</i>";

    stokes_header_text_2 =
      " Display x or y components within a drawn rectangle (<i>scan field</i> deactivated), for drawn vectors, or near an inserted paddle wheel by activating <i>show x component / y component.</i>";

    partial_x_text_gauss =
      "Display x components within a drawn rectangle (<i>Scan field</i> deactivated) or for drawn vectors. ";
    partial_y_text_gauss =
      "Display y components within a drawn rectangle (<i>Scan field</i> deactivated) or for drawn vectors. ";

    partial_x_text_stokes =
      "Display x components within a drawn rectangle (<i>Scan field</i> deactivated), for drawn vectors, or near an inserted paddle wheel. ";
    partial_y_text_stokes =
      "Display y components within a drawn rectangle (<i>Scan field</i> deactivated), for drawn vectors, or near an inserted paddle wheel. ";

    projections_text_gauss =
      "Display the projection of the field vectors on the outer normal vectors of the boundary of the rectangle area. ";
    //  Display the projection of the field vectors on the vector path element of the rectangle curve.
    projections_text_stokes =
      "Display the projection of the field vectors on the vector path element of the rectangle curve.  ";

    paddlewheel_text =
      "Insert a paddle wheel  in the vector field and move it in the field using the mouse. ";
  } else {
    info_text =
      "Halte die Maus über den einzelnen Elementen still, um mehr über sie zu erfahren.";

    icon_text =
      "Die Applikation wurde an der Fakultät für Physik der Universität Göttingen in der Didaktik der Physik (Prof. Dr. Pascal Klein) für Lehrzwecke entwickelt. Kontakt für Feedback und Fragen: Simon Blaue, Larissa Hahn (larissa.hahn@uni-goettingen.de).";

    theorem_text =
      "Wähle zwischen den Theoremen, um zwischen Divergenz und Rotation zu wechseln.";

    field_creation_text =
      "Definiere das Feld über seine Komponenten abhängig von x, y, Skalaren und den Operationen (+, -, *, /, sqrt(), ^). Es müssen Operatoren zwischen Zahlen und Variablen verwendet werden. Die Änderung muss mit Enter oder <i>Neu berechnen</i> bestätigt werden. ";

    field_creation_text_polar =
      "Definiere das Feld über seine Komponenten abhängig vom Radius r und Winkel φ, Skalaren und den Operationen (+, -, *, /, sqrt(), ^). Es müssen Operatoren zwischen Zahlen und Variablen verwendet werden. Die Änderung muss mit Enter oder <i>Neu berechnen</i> bestätigt werden. ";

    vector_amount_text =
      "Veränderung der Anzahl an Vektoren. Eine Änderung muss mit Enter oder <i>Neu berechnen</i> bestätigt werden. Mit den Pfeiltasten kann die Anzahl in Einer-Schritten erfolgen. ";

    coordinate_checkbox_text =
      "Durch Aktivierung werden die Koordinatenachsen in den kartesischen Koordinaten x und y  eingeblendet. ";

    rectangle_text_gauss =
      "Mit dem Mauszeiger kann ein Rechteck in das Vektorfeld gezogen werden (<i>Feld abtasten</i> muss deaktiviert sein). Dieses kann mit der Maus im Feld bewegt und seine Ränder können beliebig verschoben werden. Der Fluss durch/entlang des Randes der aufgezogenen Rechteckfläche wird angezeigt. Die Divergenz wird am Mittelpunkt des Rechtecks berechnet. Ein Doppelklick auf das Rechteck entfernt das Rechteck und sämtliche eingezeichneten Vektoren. ";

    rectangle_text_stokes =
      "Mit dem Mauszeiger kann ein Rechteck in das Vektorfeld gezogen werden (<i>Feld abtasten</i> muss deaktiviert sein). Dieses kann mit der Maus im Feld bewegt und seine Ränder können beliebig verschoben werden. Die Zirkulation durch/entlang des Randes der aufgezogenen Rechteckfläche wird angezeigt. Die Rotation wird am Mittelpunkt des Rechtecks berechnet. Ein Doppelklick auf das Rechteck entfernt das Rechteck und sämtliche eingezeichneten Vektoren. ";

    fieldscanner_text_gauss =
      "Bei Aktivierung von <i>Feld abtasten</i> können durch Festhalten der Maustaste Vektorern eingezeichnet werden. Für diese Stelle wird der Wert der Divergenz angezeigt. ";

    fieldscanner_text_stokes =
      "Wenn Sie das <i>Feld abtasten </i> aktivieren, können Sie Vektoren zeichnen, indem Sie die Maustaste gedrückt halten. Der Wert der Rotation für diesen Punkt wird unten angezeigt. Zeigen Sie x- oder y-Komponenten innerhalb eines gezeichneten Rechtecks (<i>Feld abtasten deaktiviert), für gezeichnete Vektoren oder in der Nähe eines eingefügten Schaufelrads an, indem Sie <i>x-Komponente / y-Komponente anzeigen</i> aktivieren.";

    div_header_text_2 =
      " Zeige x- oder y-Komponenten innerhalb eines gezeichneten Rechtecks (<i>Scanfeld</i> deaktiviert), indem du <i>x-Komponente / y-Komponente anzeigen</i> aktivierst.";
    stokes_header_text_2 =
      " Zeige x- oder y-Komponenten innerhalb eines gezeichneten Rechtecks (<i>Scanfeld</i> deaktiviert), für gezeichnete Vektoren oder in der Nähe eines eingefügten Paddelrades, indem du <i>x-Komponente / y-Komponente anzeigen</i> aktivierst.";

    partial_x_text_gauss =
      "Durch Aktivierung der x-Komponente kann diese innerhalb eines Rechtecks oder an den eingezeichneten Vektoren eingeblendet werden. ";
    partial_y_text_gauss =
      "Durch Aktivierung der y-Komponente kann diese innerhalb eines Rechtecks oder an den eingezeichneten Vektoren eingeblendet werden. ";

    partial_x_text_stokes =
      "Durch Aktivierung der x-Komponente kann diese innerhalb eines Rechtecks, an den eingezeichneten Vektoren und in der nähe des Schaufelrads eingeblendet werden. ";
    partial_y_text_stokes =
      "Durch Aktivierung der y-Komponente kann diese innerhalb eines Rechtecks, an den eingezeichneten Vektoren und in der nähe des Schaufelrads eingeblendet werden. ";

    projections_text_gauss =
      "Die Projektion der Feldkomponenten auf die Normalen an den Rand der Rechteckfläche wird durch Aktivierung der Box eingeblendet. ";
    projections_text_stokes =
      "Die Projektion der Feldkomponenten auf die vektoriellen Wegelemente der Rechteckkurve wird durch Aktivierung der Box eingeblendet. ";

    paddlewheel_text =
      "Durch Aktivierung der Box wird ein Schaufelrad in das Feld eingefügt. Dieses kann mit der Maus verschoben werden. ";
  }

  info_btn.setAttribute("data-bs-content", info_text);
  icon_btn.setAttribute("data-bs-content", icon_text);

  theorem_button.setAttribute("title", theorem_text);
  latex_image.setAttribute("title", theorem_text);

  vector_amount_entry.setAttribute("title", vector_amount_text);
  vector_amount_entry.previousElementSibling.setAttribute(
    "title",
    vector_amount_text,
  );

  coordinate_checkbox.setAttribute("title", coordinate_checkbox_text);
  coordinate_checkbox.nextElementSibling.setAttribute(
    "title",
    coordinate_checkbox_text,
  );

  if (theorem == "gauss") {
    div_rot_header.setAttribute(
      "title",
      fieldscanner_text_gauss + " " + div_header_text_2,
    );

    fieldscanner_checkbox.setAttribute("title", fieldscanner_text_gauss);
    fieldscanner_checkbox.nextElementSibling.setAttribute(
      "title",
      fieldscanner_text_gauss,
    );

    flux_header.setAttribute(
      "title",
      rectangle_text_gauss + " " + projections_text_gauss,
    );
    projections_checkbox.setAttribute("title", projections_text_gauss);
    projections_checkbox.nextElementSibling.setAttribute(
      "title",
      projections_text_gauss,
    );

    partial_x_checkbox.setAttribute("title", partial_x_text_gauss);
    partial_x_checkbox.nextElementSibling.setAttribute(
      "title",
      partial_x_text_gauss,
    );
    partial_y_checkbox.setAttribute("title", partial_y_text_gauss);
    partial_y_checkbox.nextElementSibling.setAttribute(
      "title",
      partial_y_text_gauss,
    );
  } else {
    div_rot_header.setAttribute(
      "title",
      fieldscanner_text_stokes + " " + stokes_header_text_2,
    );

    fieldscanner_checkbox.setAttribute("title", fieldscanner_text_stokes);
    fieldscanner_checkbox.nextElementSibling.setAttribute(
      "title",
      fieldscanner_text_stokes,
    );

    flux_header.setAttribute("title", rectangle_text_stokes + " ");
    projections_checkbox.setAttribute("title", projections_text_stokes);
    projections_checkbox.nextElementSibling.setAttribute(
      "title",
      projections_text_stokes,
    );

    partial_x_checkbox.setAttribute("title", partial_x_text_stokes);
    partial_x_checkbox.nextElementSibling.setAttribute(
      "title",
      partial_x_text_stokes,
    );
    partial_y_checkbox.setAttribute("title", partial_y_text_stokes);
    partial_y_checkbox.nextElementSibling.setAttribute(
      "title",
      partial_y_text_stokes,
    );

    paddlewheel_checkbox.setAttribute("title", paddlewheel_text);
    paddlewheel_checkbox.nextElementSibling.setAttribute(
      "title",
      paddlewheel_text,
    );
  }

  if (coords == "polar") {
    entry_label.setAttribute("title", field_creation_text_polar);
    x_component_entry.setAttribute("title", field_creation_text_polar);
    x_component_entry_label.setAttribute("title", field_creation_text_polar);

    y_component_entry.setAttribute("title", field_creation_text_polar);
    y_component_entry_label.setAttribute("title", field_creation_text_polar);
  } else {
    entry_label.setAttribute("title", field_creation_text);
    x_component_entry.setAttribute("title", field_creation_text);
    x_component_entry_label.setAttribute("title", field_creation_text);

    y_component_entry.setAttribute("title", field_creation_text);
    y_component_entry_label.setAttribute("title", field_creation_text);
  }

  var all_with_title = document.querySelectorAll("[title]");

  all_with_title.forEach((elem) => {
    elem.setAttribute("data-bs-toggle", "tooltip");
    elem.setAttribute("data-bs-delay", '{"show":200,"hide":50}');
  });
}
