import React from "react";
import { Link } from "react-router-dom";
import Task from "../../layout/Task";
import TaskStep from "../../layout/TaskStep";

export default function CustomParts(props) {
  const Item = ({ itemName, image, title, description, children }) => (
    <Link to={"/custom/" + itemName}>
      <div className="customItem">
      <h2>{title}</h2>
      <img className="link" alt={title} src={`/images/custom${itemName}.png`} />
      {children}
    </div>
    </Link>
  );

  return (
    <Task task="Custom Parts" className="white-on-blue">
      <TaskStep className="customParts">
        <Item itemName="Gasket" title="Gaskets">
          <p>
            Magnetic and compression gaskets built to your specifications for walk-ins, drawers, and other applications.
          </p>
        </Item>
        <Item itemName="Wire" title="Warmer Wires">
          <p>
            Electrical resistance warmer wires built to your specifications to ensure that freezers don't freeze shut or
            refrigerators to sweat condensation.
          </p>
        </Item>
        <Item itemName="Heater" title="Heaters">
          <p>
            We offer an extensive selection of tubular and finned heaters, we also can alter or custom-build for your
            specific application.
          </p>
        </Item>
        <Item itemName="Coil" title="Coils">
          <p>
            We offer an extensive selection of evaporator and condensate heaters and custom-build for your specific
            application.
          </p>
        </Item>
        <Item itemName="Door" title="Walk-In Doors">
          <p>
            Replacement door and frame assemblies for virtually all walk-in doors, custom-made for your specific
            application.
          </p>
        </Item>
        <Item itemName="WireShelf" title="Wire Shelving">
          <p>
            In addition to stocking replacement shelves for most manufacturers, we also can build wire shelves to your
            specific needs.
          </p>
        </Item>
        <Item itemName="Board" title="Cutting Boards">
          <p>Commercial cutting boards cut to your exact specifications up to 120" x 60"</p>
        </Item>
      </TaskStep>
    </Task>
  );
}
