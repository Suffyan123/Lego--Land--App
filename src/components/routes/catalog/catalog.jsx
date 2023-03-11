import React, { useState, useEffect, useCallback } from "react";
import { CiSearch } from "react-icons/ci";
import { HiBars4 } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsSuitHeart } from "react-icons/bs";
import { RiPriceTag2Line } from "react-icons/ri";
import axios from "axios";
import "./catalog.css";
function Catalog() {
  const [myData, setMyData] = useState([]);
  const [productName, setProductname] = useState([""]);
  const [items, setItems] = useState([]);
  const [inputVal, setInputval] = useState([]);

  const showProducts = useCallback(async () => {
    const res = await axios.get("http://localhost:4000/api/showProducts");
    try {
      setMyData(res.data.showProducts);
    } catch (error) {}
  }, []);

  useEffect(() => {
    showProducts();
  }, [showProducts]);

  const getInputValue = (event) => {
    setProductname(event.target.value);
    setInputval(event.target.value);
  };

  const checkProducts = useCallback(async () => {
    const res = await axios.post("http://localhost:4000/api/findProduct", {
      productName,
    });
    try {
      setItems(res.data.product);
    } catch (error) {

    }
  }, [productName]);

  return (
    <>
      <div className="catalog">
        <div className="heading">
          <h2>Catalog</h2>
        </div>
        <div className="input">
          <div className="input-search">
            <button
              title="mytitle"
              className="searchIcon"
              onClick={checkProducts}
            >
              <CiSearch className="icons" />
            </button>
            <input
              type="text"
              className="search"
              placeholder="Search Among 100+ Products"
              onChange={getInputValue}
            />
          </div>
          <div className="input-catagoery">
            <button title="mytitle" className="bars-icon">
              <HiBars4 className="bars" />
            </button>
            <input
              type="text"
              className="catagoery RiArrowDropDownne"
              placeholder="categoery"
            />
            <button className="drop-down">
              <RiArrowDropDownLine />
            </button>
          </div>
        </div>
        <br />
        <div className="cards">
          {items &&
            items.map((post, index) => {
              const {
                actualPrice,
                discountPrice,
                productName,
                url,
                vendorCode,
              } = post;
              console.log("btn is clicked ", items);
              if (typeof items === "object" && inputVal === productName) {
                return (
                  <div key={index} className="card">
                    <div className="img-icon">
                      <div className="hrt-circle">
                        <span className="hrt-icn">
                          <BsSuitHeart />
                        </span>
                      </div>
                      <div className="crd-img">
                        <img className="img" src={url} alt="" />
                      </div>
                    </div>
                    <div className="card-data">
                      <h5 className="text-style">Vendor code {vendorCode}</h5>
                      <h4 className="product-title">{productName}</h4>
                      <h4 className="text-style">Price</h4>
                      <div className="price-icon">
                        <h2>
                          <span className="discount-price">
                            {discountPrice}$
                          </span>
                          <span className="actual-price">{actualPrice}$</span>
                        </h2>
                        <span className="price-tag">
                          <RiPriceTag2Line />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
        </div>
        <div className="cards">
          {myData.map((post, inddex) => {
            const { actualPrice, discountPrice, productName, url, vendorCode } =
              post;
            if (inputVal.length === 0) {
              return (
                <div key={inddex} className="card">
                  <div className="img-icon">
                    <div className="hrt-circle">
                      <span className="hrt-icn">
                        <BsSuitHeart />
                      </span>
                    </div>
                    <div className="crd-img">
                      <img className="img" src={url} alt="" />
                    </div>
                  </div>
                  <div className="card-data">
                    <h5 className="text-style">Vendor code {vendorCode}</h5>
                    <h4 className="product-title">{productName}</h4>
                    <h4 className="text-style">Price</h4>
                    <div className="price-icon">
                      <h2>
                        <span className="discount-price">{discountPrice}$</span>
                        <span className="actual-price">{actualPrice}$</span>
                      </h2>
                      <span className="price-tag">
                        <RiPriceTag2Line />
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}
export default Catalog;
