import React, { useState, useEffect } from "react";
import "assets/css/dashboard/stock.css";
import "assets/css/dashboard/feedback.css";
import "assets/css/home/home.css";
import { useHistory } from "react-router-dom";
import { InputSuggestions } from "react-input-suggestions";
import { getSymbols } from "utility";
import { getJsonFile } from "utility";

const StockFinder = () => {
  let router = useHistory();

  const [text, setText] = useState("");
  const [symbol, setSymbol] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onClickSuggest = (data) => {
    setText(data);
    setSymbol("");
  };

  const onChangeText = async (data) => {
    setText(data);
    setSymbol(data);
    const list = await getJsonFile(data , "../data.json");
    setSuggestions(list);
  };

  const onClick = () => {
    if (text) {
      router.push("/dashboard/halal-stock-search?symbol=" + text);
    }
  };
  const onClickAdvance = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData.freeUser) {
      router.push("/dashboard/subscription");
    }
  };

  useEffect(() => {}, [suggestions]);

  // const onClickSuggest = (data) => {
  //   var divs = document.querySelectorAll('.css-1g6zq87')
  //   const elem = document.getElementsByClassName("stock-search");
  //   const div = elem[0];
  //   const input = div.firstChild;
  //   input.value = data;
  //   setText(data);
  // };

  return (
    <div className="container-fluid m-p-0">
      <div className="row">
        <div className="col-12">
          <div className="card mb-3">
            <div className="card-header bg-white shadow d-flex justify-center m-px-1">
              <button className="btn bg-green text-white w-50 btn-mbl">
                Search Companies
              </button>
              <button
                className="btn btn-secondary w-50 btn-mbl"
                onClick={onClickAdvance}
              >
                Advance Search
              </button>
            </div>
            <div className="text-center w-100 mt-4">
              <div className="padding-search">
                <h4 className="weight-700 font-mon text-black my-3">
                  Halal Stock Finder
                </h4>
                <div className=" input-group  text-center bg-white shadow">
                  <input
                    type="text"
                    value={text}
                    className="form-control"
                    onChange={(e) => onChangeText(e.target.value)}
                    placeholder="Search for ticket or company (TSLA, APPLE, NFLX)"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />

                  <div className="input-group-append ">
                    <button
                      className="btn bg-green text-white font-10"
                      type="button"
                      onClick={onClick}
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="bg-white text-left shadow mb-4">
                  {suggestions.map((d) => (
                    <p
                      className="suggestions"
                      onClick={() => onClickSuggest(d.symbol)}
                    >
                      {d.symbol} - {d.title} 
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockFinder;
