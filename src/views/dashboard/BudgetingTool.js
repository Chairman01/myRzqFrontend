import React,{useState} from 'react'
import "assets/css/dashboard/stock.css";
import "assets/css/dashboard/feedback.css";
import "assets/css/dashboard/budgeting-tool.css";
import "assets/css/home/home.css";
import swal from 'sweetalert';
import { BASE_URL } from 'utility';

const BudgetingTool = () => {

  const [email , setEmail] = useState("")

  const onClick = () => {
    let body =  [{email}]

    fetch(BASE_URL + "/newsletter/", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if(data && data.status == "0000"){
          swal("Success!", "We will notify you!", "success");
        }else{
          swal("Error!", data.message, "error");
        }
        // setLoaded(true)
        // if(data && data.response.financialData && data.response.summaryDetail){
    
        // }
      });

  }

  return (
    <div className="container-fluid m-p-0">
    <div className="row">
      <div className="col-12">
        <div className="card mb-3 shadow">
          <div className="card-header bg-white shadow text-center">
            <img src={require('assets/img/dashboard/salam.png')} className="salam-img" alt="Salam img" />
            <text className='font-mon weight-600 text-black d-inline font-20'>As-salamu alaykum</text>
          </div>
          <div className="text-center w-100 mt-4">
              <div className="">
                  <h3 className="weight-700 font-mon text-green mt-3 font-mon">All Good Things Come to Those who Wait....</h3>
                  <text className='text-black weight-500 font-12 font-mon '>Budget Tool Coming soon Insha’Allah</text>
                  <br />
                  <br />
                  <br />


                  <div className='padding-newsletter text-center'>
                  <text className='text-black weight-600 font-17 font-mon '>Join Our Newsletter</text>
                  <div className=" input-group  text-center bg-white shadow-sm">
                      <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Your email Address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                      <div className="input-group-append ">
                          <button className="btn bg-green text-white" type="button" onClick={onClick}><text className='font-mon font-10'>Join</text></button>
                      </div>
                  </div>
                      <text className='text-muted font-12' >* Will send you weekly updates for your better finance management</text>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BudgetingTool