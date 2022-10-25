import React from "react";
import { Link } from "react-router-dom";
import { Image } from "../AppSettings";
function CustomItem({ icon, text, url }) {
  return (
    <>
      <Link className="customItemButton" to={url}>
        <img src={Image(icon)} alt={text} />
        <div>{text}</div>
      </Link>
    </>
  );
}
//`/concierge/images/${icon}`
export default function CustomItems() {
  return (
    <div className="customItemMenu">
      <CustomItem icon="customGasketIcon.png" text="Gaskets" url="/custom/Gasket" />
      <CustomItem
        url="/custom/Wire"
        icon="customWire.svg"
        text={
          <span>
            Warmer
            <br />
            Wires
          </span>
        }
      />
      <CustomItem icon="customHeater.svg" text="Heaters" url="/custom/Heater" />
      <CustomItem icon="customCoil.svg" text="Coils" url="/custom/Coil" />
      <CustomItem
        url="/custom/Door"
        icon="customDoor.svg"
        text={
          <span>
            Walk-In
            <br />
            Doors
          </span>
        }
      />
      <CustomItem
        url="/custom/WireShelf"
        icon="customWireShelf.svg"
        text={
          <span>
            Wire
            <br />
            Shelving
          </span>
        }
      />
      <CustomItem
        url="/custom/Board"
        icon="customBoard.svg"
        text={
          <span>
            Cutting
            <br />
            Boards
          </span>
        }
      />
    </div>
  );
}
