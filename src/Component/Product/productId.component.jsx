import React from 'react';
import { useParams } from 'react-router-dom'
import HeadNavbar from "../Header.Component";

const ProductId = () => {
    const {id }=useParams();
    return (<>
        <HeadNavbar />
        <p>{id}</p>
        <p></p>
    </>);
}
export default ProductId;