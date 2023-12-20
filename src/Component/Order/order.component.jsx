import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import HeadNavbar from "../Header.Component";
import { wait } from '@testing-library/user-event/dist/utils';

const Order = () => {
  const { id } = useParams();
  const [searchquery] = useSearchParams();
  const quantity = searchquery.get("quantity");
  const size = searchquery.get("size");
  const price = searchquery.get("price");
  const name = searchquery.get("name");
  useEffect(() => {
    if (id !== "100T0001" || !quantity || quantity.length === 0 || !size || size.length === 0 || !price || price.length === 0 || !name || name.length === 0) {
      alert("select order details is not found");
      window.location.href = "/products";
    }
  }, [])
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
    price_amount: price,
    order_quality: quantity, //formData.get("Quality"),
    referral_code: "007", //formData.get("Referral")
  }
  const checkjsonst = () => {
    if (jsonst.customer_address.length > 15 && jsonst.customer_name.length > 5 && jsonst.customer_email.includes('@') && jsonst.customer_email.includes('.') && jsonst.customer_email.length > 10 && (jsonst.customer_number.length === 10 || jsonst.customer_number.length === 13))
      return false;
    return true;
  };
  const submitform = (event) => {
    event.preventDefault();
    event.target.disabled=true;
    console.log("off");
    if (checkjsonst()) {
      alert("given data is not enough");
    }
    else {
      jsonst.customer_number = jsonst.customer_number.includes(+91) ? jsonst.customer_number : `+91${jsonst.customer_number}`;
      console.log(jsonst);
      fetch('https://demo-flask-app-nandhadeva.vercel.app/orderplace', {
        method: 'POST',
        body: JSON.stringify({
          // Add parameters here
          data: jsonst
        }),
        headers: {
          'Authorization': 'Bearer tuWYQQdD6Rge3uT2JfCVEE5zg5ZIZPVTC5i7Bq1HL7TyLIQ1SoS1AiVMu8900',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          var data = response.json();
          if (response.status !== 200) {
            alert("There has been a issue data. please try after some times");
            throw "order failed";
          }
          return data;
        })
        .then((data) => {
          console.log(data);
          alert(`Order placed successfully with order id: ${data.order_id} `);
          window.location.href = "/products";
          // Handle data
        })
        .catch((err) => {
          console.log(err.message, err);
        });
    }
  }
  const jsonchange = (event) => {
    jsonst[event.target.name] = event.target.value;
  }

  const FormRender = () => {
    return (
      <div className='container-xl d-flex justify-content-center  ' style={{ paddingLeft: 50, paddingTop: 50 }}>
        <form onSubmit={submitform}>
          <div className="form-row" >
            <div className="form-group col-md-6" style={{ minWidth: 'max-content' }}>
              <label htmlFor="inputEmail">Email</label>
              <input type="email" className="form-control" id="inputEmail" placeholder="Email" name="customer_email" onChange={jsonchange} />
            </div>
            <div className="form-group col-md-6" style={{ minWidth: 'max-content' }}>
              <label htmlFor="inputname">Name</label>
              <input type="text" className="form-control" id="inputname" placeholder="Name" name="customer_name" onChange={jsonchange} />
            </div>
          </div>
          <div className="form-group col-md-6 " style={{ minWidth: 'max-content' }}>
            <label htmlFor="inputAddress">Address</label>
            <input type="text" className="form-control" placeholder="your full address" name="customer_address" onChange={jsonchange} />
          </div>

          <div className="form-group col-md-6 " style={{ minWidth: 'max-content' }}>
            <label htmlFor="inputAddress">Phone no</label>
            <input type="text" className="form-control" placeholder="your mobile number" name="customer_number" onChange={jsonchange} />
          </div>

          <div style={{ padding: 10 }}></div>

          <button type="submit" className="btn btn-dark">Place order</button>
        </form>
      </div>);
  }
  const Formpage = () => {
    return (<>
      <div className='container-sm align-item-center mx-auto' style={{ textAlign: 'center', borderRadius: '25%', marginTop: 30 }}>
        <div style={{ fontSize: 20 }}>
          <p><b>Order Details:</b><br /><br />
            {name}
          </p>
        </div>
        <p>
          Size : {size} and Id : {id} <br /> quantity: {quantity} <br /> Total Price: {parseInt(quantity) * parseInt(price)}</p>
      </div >
      <FormRender />
    </>
    );
  }

  //   const Loadingpage=()=>{
  //     return(<>
  //     <div style={{height:'max',width:'max',justifyContent:'center'}}>
  //     <div class="spinner-border" role="status">
  //   <span class="sr-only">Loading...</span>
  // </div>
  //     </div>
  //     </>)
  //   }




  return (
    <>
      <HeadNavbar />
      {/* {
        ordersubmitbtn?
          <Formpage/>
          : <Loadingpage/>
      } */}
      <Formpage />

    </>
  );
}
export default Order;