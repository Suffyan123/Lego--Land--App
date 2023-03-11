import React, { useState } from "react";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import "./sidebar.css";
function Sidebar() {
  const [display, setDisplay] = useState("none");
  const [ageDisplay, setAgedisplay] = useState("none");
  const [iconUp, setIconup] = useState("none");
  const [iconDown, setIcondown] = useState("block");
  const [iconUpdisplay, setIconupdisplay] = useState("none");
  const [iconDowndisplay, setIcondowndisplay] = useState("block");

  const theme = () => {
    if (display === "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
    if (iconUp === "none") {
      setIconup("block");
    } else {
      setIconup("none");
    }
    if (iconDown === "block") {
      setIcondown("none");
    } else {
      setIcondown("block");
    }
  };

  const toggleAge = () => {
    if (ageDisplay === "none") {
      setAgedisplay("block");
    } else {
      setAgedisplay("none");
    }
    if (iconUpdisplay === "none") {
      setIconupdisplay("block");
    } else {
      setIconupdisplay("none");
    }
    if (iconDowndisplay === "block") {
      setIcondowndisplay("none");
    } else {
      setIcondowndisplay("block");
    }
  };
  return (
    <>
      <div className="sidebar">
        <div className="mg-left">
          <button className="btn">Price</button>
          <div className="from">
            <h6 className="btn-small">
              <span className="text-span"> From </span>
              <span className="num-span">200 $</span>
            </h6>
            <h6 className="btn-small">
              <span className="text-span">Up to</span>{" "}
              <span className="num-span">9000 $</span>
            </h6>
          </div>
          <input type="range" className="range-width" />
        </div>
        <div className="mg-left">
          <div>
            <button className="btn">
              <span>Theme</span>
              <span onClick={theme}>
                <RiArrowDropDownLine
                  style={{ display: iconDown }}
                  className="dropdown"
                />
                <RiArrowDropUpLine
                  style={{ display: iconUp }}
                  className="dropdown"
                />
              </span>
            </button>
          </div>
          <div style={{ display: display }}>
            <div className="scroll border">
              <div>
                <input type="checkbox" className="checkbox" />{" "}
                <span className="span-one"> Space (44)</span>
              </div>
              <div>
                <input type="checkbox" className="checkbox" />
                <span className="span-one">Ninga (44)</span>
              </div>
              <div>
                <input type="checkbox" className="checkbox" />
                <span className="span-one">Transport (44)</span>
              </div>
              <div>
                <input type="checkbox" className="checkbox" />
                <span className="span-one">Buildings (44)</span>
              </div>
              <div>
                <input type="checkbox" className="checkbox" />
                <span className="span-one">Homes (44) </span>
              </div>
              <div>
                <input type="checkbox" className="checkbox" />
                <span className="span-one">Cars (44) </span>
              </div>
              <div>
                <input type="checkbox" className="checkbox" />
                <span className="span-one">Shoppings (44)</span>
              </div>
              <div>
                <input type="checkbox" className="checkbox" />
                <span className="span-one">Health (44)</span>
              </div>
              <div>
                <input type="checkbox" className="checkbox" />
                <span className="span-one">Education (44)</span>
              </div>
              <div>
                <input type="checkbox" className="checkbox" />
                <span className="span-one">Family (44)</span>
              </div>
              <div>
                <input type="checkbox" className="checkbox" />
                <span className="span-one">Engineering (44)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mg-left">
          <button className="btn">
            <span>Age</span>
            <span onClick={toggleAge} className="icon-style">
              <RiArrowDropDownLine
                style={{ display: iconDowndisplay }}
                className="dropdown"
              />
              <RiArrowDropUpLine
                style={{ display: iconUpdisplay }}
                className="dropdown"
              />
            </span>
          </button>
          <div className="display" style={{ display: ageDisplay }}>
            <div>
              <input type="checkbox" className="checkbox" />
              <span className="span-one"> Up to a Year </span>
            </div>
            <div>
              <input type="checkbox" className="checkbox" />
              <span className="span-one">1 year - 2 years </span>
            </div>
            <div>
              <input type="checkbox" className="checkbox" />
              <span className="span-one">3 years - 5 years </span>
            </div>
            <div>
              <input type="checkbox" className="checkbox" />
              <span className="span-one">6 years - 10 years </span>
            </div>
            <div>
              <input type="checkbox" className="checkbox" />
              <span className="span-one">Older than 12 years</span>
            </div>
          </div>
        </div>
        <div className="mg-left">
          <button className="btn">
            <span> Brand</span>
            <RiArrowDropDownLine className="dropdown" />
          </button>
        </div>
        <div className="mg-left">
          <button className="btn">
            <span>Characters</span>
            <RiArrowDropDownLine className="dropdown" />
          </button>
        </div>
        <div className="mg-left">
          <button className="btn">
            <span>Stock Availability</span>
            <RiArrowDropDownLine className="dropdown" />
          </button>
        </div>
        <div className="mg-left btn-flex">
          <button className="fliter-btn">Apply Filter</button>
          <span className="dl-icon">
            <AiOutlineDelete />
          </span>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
