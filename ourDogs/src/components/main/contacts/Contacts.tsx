import { Link } from "react-router-dom";
import icons from "../../../assets/img/boxIcon";
import "./contacts.scss";
// import { useState } from "react";

function Contacts() {
  console.log(window.location.href === "http://localhost:5173/contacts");

  return (
    <div className="wrapper_contacts">
      <ul
        className={
          window.location.href === "http://localhost:5173/contacts"
            ? "open_icons"
            : "close_icons"
        }>
        <li>
          <Link to="">
            <span>
              <img src={icons.instagram} alt="instagram" />
            </span>
          </Link>
        </li>
        <li>
          <Link to="">
            <span>
              <img src={icons.facebook} alt="facebook" />
            </span>
          </Link>
        </li>
        <li>
          <Link to="">
            <span>
              <img src={icons.whatsapp} alt="whatsapp" />
            </span>
          </Link>
        </li>
        <li>
          <Link to="">
            <span>
              <img src={icons.mail} alt="mail" />
            </span>
          </Link>
        </li>
        <li>
          <Link to="">
            <span>
              <img src={icons.phone} alt="phone" />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
