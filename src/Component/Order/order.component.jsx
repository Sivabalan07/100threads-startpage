import React from 'react';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import HeadNavbar from "../Header.Component";

const Order =() =>{
    const {id} = useParams();
    const size = "f";
    function submitform(formData){
      'use server';
        var date = new Date().toLocaleString("en-GB", {timeZone: 'Asia/Kolkata'});
        const jsonst={
            product_id:id+size,
            customer_name:formData.get("Name"),
            customer_email:formData.get("Email"),
            customer_number:formData.get("PhoneNumber"),
            customer_address:formData.get("Address"),
            order_date:date.slice(0,10),
            order_time:date.slice(12,29),
            stkid:"",
            order_quality:formData.get("Quality"),
            referral_code:formData.get("Referral")
        }
        console.log(jsonst);
        // jsonst.product_id=id+size;
        // jsonst.customer_name=formData.get("Name");
        var orderId=fetch('', {
      body: JSON.stringify(jsonst),
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      referrer: 'no-referrer',
    })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          alert('Saved');
        } else {
          alert('Issues saving');
        }
        return response.json();
      });
    }

    const FormRender=()=>{
      return (<form onSubmit={submitform}>
        <div className="form-row" >
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail">Email</label>
            <input type="email" className="form-control" id="inputEmail" placeholder="Email" name="Email"/>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputname">Name</label>
            <input type="text" className="form-control" id="inputname" placeholder="Name"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="your full address" name="Address"/>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Address 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity"/>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip"/>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"/>
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>);
    }
    function search() {
      console.log("alert");
      // const query = formData.get("query");
      // alert(`You searched htmlFor '${query}'`);
    }
   function Search() {
      return (
      <>
          <input name="query"/>
          <button type="submit" onClick={search}>Search</button>
        
      </>
      );
    }
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
    return(
        <>
    <HeadNavbar />
    <p>Size : {size} and Id : {id}</p>
    {/* <FormRender/> */}
    <ExpenseForm/>
    <Search/>
    </>
    );
}
export default Order;