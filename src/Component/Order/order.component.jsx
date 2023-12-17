import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import HeadNavbar from "../Header.Component";

const Order = () => {
  const { id } = useParams();
  const [searchquery] = useSearchParams();
  const quantity = searchquery.get("quantity");
  const size = searchquery.get("size");
  const price=searchquery.get("price");
  const name=searchquery.get("name");
  const jsonst = {
    product_id: id,
    product_size: size,
    product_name: name,
    customer_name: "", //formData.get("Name")
    customer_email: "",  //formData.get("Email"),
    customer_number: "", //formData.get("PhoneNumber"),
    customer_address: "",  //formData.get("Address"),
    order_date: new Date().toLocaleString("en-GB", { timeZone: 'Asia/Kolkata' }).slice(0, 10),
    order_time: new Date().toLocaleString("en-GB", { timeZone: 'Asia/Kolkata' }).slice(12, 29),
    stkid: "",
    price_amount:price,
    order_quality: quantity, //formData.get("Quality"),
    referral_code: "007", //formData.get("Referral")
  }
  const submitform = (event) => {
    event.preventDefault();
    jsonst.customer_number=jsonst.customer_number.includes(+91)?jsonst.customer_number: `+91${jsonst.customer_number}`;
    console.log(jsonst);
    var orderId = 
      fetch('https://demo-flask-app-nandhadeva.vercel.app/orderplace', {
        method: 'POST',
        body: JSON.stringify({
          // Add parameters here
          jsonst
        }),
        headers: {
          'Authorization': 'Bearer tuWYQQdD6Rge3uT2JfCVEE5zg5ZIZPVTC5i7Bq1HL7TyLIQ1SoS1AiVMu8900',
          'Content-Type': 'application/json',
        },
      })
         .then((response) => {
          var data =response.json();
          if(response.status!==200){
          alert("There has been a issue data. please try after some times");
          throw "order failed"
        }
          return data;})
         .then((data) => {
            console.log(data);
          alert(`Order placed successfully with order id: ${data.order_id} `)
            // Handle data
         })
         .catch((err) => {
            console.log(err.message,err);
         });
    //   $.ajax({
    //     url: 'https://demo-flask-app-nandhadeva.vercel.app/orderplace',
    //     type: 'post',
    //     data: JSON.stringify({
    //       data: jsonst}),
    //     headers: {
    //       'Authorization': 'Bearer tuWYQQdD6Rge3uT2JfCVEE5zg5ZIZPVTC5i7Bq1HL7TyLIQ1SoS1AiVMu8900',
    //       'Content-Type': 'application/json' , //for object property name, use quoted notation shown in second
    //       "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    //     },
    //     success: function (data) {
    //         console.info(data);
    //     }
    // });
    event.preventDefault();
  }
  const jsonchange = (event) => {
    jsonst[event.target.name] = event.target.value;
  }

  const FormRender = () => {
    return (
      <div className='container col-lg-2  ' style={{paddingLeft:50,paddingTop:50}}>
        <form onSubmit={submitform}>
          <div className="form-row" >
            <div className="form-group col-md-6" style={{minWidth:'max-content'}}>
              <label htmlFor="inputEmail">Email</label>
              <input type="email" className="form-control" id="inputEmail" placeholder="Email" name="customer_email" onChange={jsonchange} />
            </div>
            <div className="form-group col-md-6" style={{minWidth:'max-content'}}>
              <label htmlFor="inputname">Name</label>
              <input type="text" className="form-control" id="inputname" placeholder="Name" name="customer_name" onChange={jsonchange} />
            </div>
          </div>
          <div className="form-group col-md-7 " style={{minWidth:'max-content'}}>
            <label htmlFor="inputAddress">Address</label>
            <input type="text" className="form-control"  placeholder="your full address" name="customer_address" onChange={jsonchange} />
          </div>

          <div className="form-group col-md-6 " style={{minWidth:'max-content'}}>
            <label htmlFor="inputAddress">Phone no</label>
            <input type="text" className="form-control"  placeholder="your mobile number" name="customer_number" onChange={jsonchange} />
          </div>
          
          <div style={{padding:10}}></div>
  
          <button type="submit" className="btn btn-dark">Place order</button>
        </form>
      </div>);
  }


  //example file
  {/*
    const ExpenseForm = () => { const [enteredTitle, setEnteredTitle] = useState("") ;const [enteredAmount, setEnteredAmount] = useState(""); const [enteredDate, setEnteredDate] = useState("")

//   const [userInput, setUserInput] = useState({ //     enteredTitle: "", //     enteredAmount: "", //     enteredDate: "", //   })

const titleChangeHandler = (event) => { setEnteredTitle(event.target.value)} // setUserInput({ ...userInput, enteredTitle: event.target.value }) // setUserInput((prevValue) => { //   return { ...prevValue, enteredTitle: event.target.value } // }) }

const amountChangeHandler = (event) => { setEnteredAmount(event.target.value)} // setUserInput({ ...userInput, enteredAmount: event.target.value }) }

const dateChangeHandler = (event) => { setEnteredDate(event.target.value) }// setUserInput({ ...userInput, enteredDate: event.target.value }) }

const submitHander = (event) => { event.preventDefault()
const expenseData = {
  title: enteredTitle,
  amount: enteredAmount,
  date: new Date(enteredDate),
}
var date = new Date().toLocaleString("en-GB", {timeZone: 'Asia/Kolkata'});
console.log(date.slice(0,10)+"\n"+date.slice(12,29));
console.log(expenseData);
// props.onSaveExpenseData(expenseData)

setEnteredTitle("")
setEnteredAmount("")
setEnteredDate("")
}

return ( <form onSubmit={submitHander}> <div className="new-expense__controls"> <div className="new-expense__control"> <label>TItle</label> <input
            type="text"
            value={enteredTitle || ""}
            onChange={titleChangeHandler}
          /> </div> <div className="new-expense__control"> <label>Amount</label> <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount || ""}
            onChange={amountChangeHandler}
          /> </div> <div className="new-expense__control"> <label>Date</label> <input
            type="date"
            min="2020-01-01"
            max="2050-12-31"
            value={enteredDate || ""}
            onChange={dateChangeHandler}
          /> </div> <div className="new-expense__actions"> <button type="submit">Add Expense</button> </div> </div> </form> ); }

*/}

  return (
    <>
      <HeadNavbar />
      <div className='container-sm align-item-center mx-auto' style={{textAlign:'center',borderRadius:'25%',marginTop:30}}>
      <p><div style={{fontSize:20}}><b>Order Details:</b><br/>
      <br/>
      {name}</div>
      Size : {size} and Id : {id}</p>
      </div>
      <FormRender />
      {/* <ExpenseForm/>
    <Search/> */}
    </>
  );
}
export default Order;