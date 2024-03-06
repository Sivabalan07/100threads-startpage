import { wait } from "@testing-library/user-event/dist/utils";

 const Productrequest=async ()=>{
    let products=localStorage["product"];
    let date=localStorage["productexpire"];
    if(products && Date.now() < date){
        return JSON.parse(products);}
    return await fetch("https://firebasestorage.googleapis.com/v0/b/threads-23c16.appspot.com/o/Products.json?alt=media&token=b6fbb5cc-f397-4622-9975-13f2ff945822",{method:"get"})
    .then((response)=>response.json())
    .then((data)=> {
        localStorage["product"]=JSON.stringify(data);
        localStorage["productexpire"]=Date.now()+86400000
        return data;
    })
    .catch((err)=> console.log(err))   
}
const stockRequest=async ()=>{
    let localstocks=localStorage["stock"];
    let date=localStorage["Stockexpire"];
    if(localstocks && Date.now() < date){
        return JSON.parse(localstocks);}
    return await fetch("https://firebasestorage.googleapis.com/v0/b/threads-23c16.appspot.com/o/Stock.json?alt=media&token=15c89f58-035f-4c3a-8ef6-8fc67ea66c52",{method:"get"})
    .then((response)=>response.json())
    .then((data)=> {
        localStorage["stock"]=JSON.stringify(data);
        localStorage["Stockexpire"]=Date.now()+10800000
        return data;
    })
    .catch((err)=> console.log(err))
}
let data = await Productrequest();
let stocks=stockRequest();
const products=()=>{
    for(let i =0;i<data.length;i++)
    data[i].image=data[i].images.filter(x=>x.order>=0).sort(x=>x.order).map(x=>x.url);
    return data
}
const product=(id)=>{
    data.forEach(x=>x.image=x.images.filter(x=>x.order>=0).sort(x=>x.order).map(x=>x.url))
    let index =data.findIndex(x=>x.id===id);
    if(index<0){
        return undefined;
    }
    var {images,...p}=data[index];
    return p;
}
const stock=(id)=>{
    return stocks[id];
}
const stockids=()=>{
    var ids=Object.keys(stocks);
    return ids
}
export {product,products,stock,stockids}
