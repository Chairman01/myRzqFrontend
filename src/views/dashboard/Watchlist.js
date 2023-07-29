import React, { useState, useEffect } from "react";
import "assets/css/comon.css";
import "assets/css/dashboard/watchlist.css";
import { BASE_URL } from "utility";
import { useHistory } from "react-router-dom";

const Watchlist = () => {
  const router = useHistory()
  const [array, setArray] = useState([]);
  const [sort, setSort] = useState({ key: "symbol", order: "asc" });

  function onClickSort(data) {
    // if(sort && sort.key == data){
    //     if(sort.order == 'asc'){
    //         setSort({key : data , order : 'desc'})
    //     }else{
    //         setSort({key : data , order : 'asc'})
    //     }
    // }else{
    //     setSort({key : data , order : 'asc'})
    // }
    // getFilterList(sort)
  }

  function getList() {
    return [
      {
        symbol: "S",
        name: "Sparint Corporation",
        price: "7.82",
        status: "Shariah Compliant",
        marketCap: "4.90",
        debtLevel: "4.30",
      },
      {
        symbol: "GOOGL",
        name: "Alphabet Inc.",
        price: "1,088.00",
        status: "Shariah Compliant",
        marketCap: "1.56",
        debtLevel: "2.33",
      },
      {
        symbol: "FB",
        name: "Facebook Inc.",
        price: "147.00",
        status: "Shariah Non-Compliant",
        marketCap: "5.30",
        debtLevel: "6.20",
      },
      {
        symbol: "S",
        name: "Sparint Corporation",
        price: "7.82",
        status: "Shariah Compliant",
        marketCap: "4.90",
        debtLevel: "4.30",
      },
      {
        symbol: "GOOGL",
        name: "Alphabet Inc.",
        price: "1,088.00",
        status: "Shariah Compliant",
        marketCap: "1.56",
        debtLevel: "2.33",
      },
      {
        symbol: "FB",
        name: "Facebook Inc.",
        price: "147.00",
        status: "Shariah Non-Compliant",
        marketCap: "5.30",
        debtLevel: "6.20",
      },
    ];
  }

  const getSymbols = async () => {
    let list = [];
    let user = JSON.parse(localStorage.getItem("user"));
    const data = await fetch(BASE_URL + "/follow/get-symbols", {
      method: "POST",
      body: JSON.stringify({ email: user.email }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await data.json();
    if (json.status == "0000") {
      list = json.data;
    }
    return list;
  };

  const fetchData = async (user) => {
    try {
      const data = await fetch(BASE_URL + "/follow/get-data", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const json = await data.json();
      return json;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const fetchDataByList = async (emailList) => {
    let finalArray = [];
    for (let user of emailList) {
      const data = await fetchData(user);
      if ((data.status = "0000")) {
        finalArray.push(data.data);
      }
    }
    console.log("All emails were sent");
    return finalArray;
  };

  function getFilterList(sort) {
    let array = getList();
    let sorted = [];
    // array
    if (sort.order == "asc") {
      sorted = array.sort(function (a, b) {
        return a[sort.key] - b[sort.key];
      });
    } else {
      sorted = array.sort(function (a, b) {
        return b[sort.key] - a[sort.key];
      });
    }
    setArray(sorted);
  }

  const onClickAdvance = () => {

    const userData = JSON.parse(localStorage.getItem("user"));
    if(userData.freeUser){
      router.push("/dashboard/subscription");
    }
  
};

  const combineData = async () => {
    let final = [];
    const listData = await getSymbols();
    console.log("NAUMAN 1", listData)
    const finalData = await fetchDataByList(listData);
    console.log("NAUMAN 2", finalData)
    setArray(finalData);
  };

  useEffect(() => {
    combineData();
    console.log("finalData  ");

    let user = localStorage.getItem("user");
    if (user) {
      let userData = JSON.parse(user);
      if(userData.freeUser){
        router.push('/dashboard/subscription')
      }
    }
    // setArray(finalData)

    // setArray(getList());
  }, []);

  return (
    <div className="container-fluid mb-5 mp-0">
      <div className="row text-left mb-3">
        <div className="col-12 ">
          <button className="btn bg-green text-white btn  font-12">
            My Watchlist
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card shadow border-radius-5 py-2 ">
            <div className="d-flex elem-end">
              <h5 className="font-poppins text-black weight-600 ml-3 d-inline">
                My Watchlist
              </h5>{" "}
              
              <button className="btn btn-sm text-green bg-green-opacity mr-3" onClick={onClickAdvance}>
                <text className="font-15 pt-1">+</text> Add symbols
              </button>
            </div>
            {/* <div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <div className="card watchlist-bg border-radius-8 shadow watchlist-table" style={{overflowX : "auto" }}>
            <table class="table custom-table w-table">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="cursor-pointer th-min-width"
                    onClick={() => onClickSort("symbol")}
                  >
                    Symbol <i class="fa fa-sort" aria-hidden="true"></i>
                  </th>
                  <th
                    scope="col"
                    className="cursor-pointer th-min-width"
                    onClick={() => onClickSort("name")}
                  >
                    Name <i class="fa fa-sort" aria-hidden="true"></i>
                  </th>
                  <th
                    scope="col"
                    className="cursor-pointer th-min-width"
                    onClick={() => onClickSort("price")}
                  >
                    Price <i class="fa fa-sort" aria-hidden="true"></i>
                  </th>
                  <th
                    scope="col"
                    className="cursor-pointer th-min-width"
                    onClick={() => onClickSort("status")}
                  >
                    Status <i class="fa fa-sort" aria-hidden="true"></i>
                  </th>
                  <th scope="col th-min-width">Market Cap</th>
                  <th scope="col th-min-width">Dept Level</th>
                </tr>
              </thead>
              <tbody>
                {array.length > 0 ? (
                  array.map((data, ind) => (
                    <tr>
                      <th className="text-black weight-600 font-mon font-14">
                        {data.symbol}
                      </th>
                      <th className="text-black weight-600 font-mon font-14">
                        {data.name}
                      </th>
                      <th className="text-black weight-600 font-mon font-14">
                        {data.price}
                      </th>
                      <th className="text-black text-center weight-400 font-mon font-14">
                        <p
                          className={`border-radius-5 width-pill weight-400 font-15 text-white status-padding ${
                            data.status ? "bg-green" : " bg-danger"
                          }`}
                        >
                          {data.status ? "Shariah Compliant" : "Shariah Non-Compliant"}
                        </p>
                      </th>
                      <th className="text-black weight-600 font-mon font-14">
                        {data.marketCap}
                      </th>
                      <th className="text-black weight-600 font-mon font-14">
                        {data.debtLevel}
                      </th>
                    </tr>
                  ))
                ) : (
                  <div className="w-100 text-center text-black">Loading...</div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
