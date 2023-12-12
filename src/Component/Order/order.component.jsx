import React from 'react';
import {useState   } from 'react-dom';
import {useParams, useSearchParams} from 'react-router-dom';
import HeadNavbar from "../Header.Component";


const Order =() =>{
    const {id} = useParams();
    const [searchparam] = useSearchParams();
    const size = searchparam.get("size");
    function submitform(formData){
        var date = new Date();
        const jsonst={
            product_id:id+size,
            customer_name:formData.get("Name"),
            customer_email:formData.get("Email"),
            customer_number:formData.get("PhoneNumber"),
            customer_address:formData.get("Address"),
            order_date:date.toJSON().slice(0,10),
            order_time:date.toJSON().slice(11,18),
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
    return(
        <>
    <HeadNavbar />
    <p>Size : {size} and Id : {id}</p>
    </>
    );
}
export default Order;