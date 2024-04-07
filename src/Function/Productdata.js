// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getStorage,getDownloadURL,ref} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC6rAlYl5mgtLP5RUY_OKP8nt_eSfb9ZuY",
  authDomain: "threads-23c16.firebaseapp.com",
  projectId: "threads-23c16",
  storageBucket: "threads-23c16.appspot.com",
  messagingSenderId: "470233942109",
  appId: "1:470233942109:web:017717d1398cefcf7265b4",
  measurementId: "G-1WG5SP2NDM",
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
const stge=getStorage(app,'gs://threads-23c16.appspot.com')
const Productrequest=async ()=>{
    let products=localStorage["product"];
    let date=localStorage["productexpire"];
    if(products && Date.now() < date){
        return JSON.parse(products);}
    return await getDownloadURL(ref(stge,"Products.json")).then(async (url)=>{return await fetch(url,{method:"get"})
    .then((response)=>{
        if(response.status!==200)
            throw response.status
        return response.json()})
    .then((data)=> {
        localStorage["product"]=JSON.stringify(data);
        localStorage["productexpire"]=Date.now()+86400000
        return data;
    })})
    .catch((err)=> console.log(err))   
}
const stockRequest=async ()=>{
    let localstocks=localStorage["stock"];
    let date=localStorage["Stockexpire"];
    if(localstocks && Date.now() < date){
        return JSON.parse(localstocks);}
    return await getDownloadURL(ref(stge,"Stock.json")).then(async (url)=>{return await fetch(url,{method:"get"})
    .then((response)=>{
        if(response.status!==200)
            throw response.status
        return response.json()})
    .then((data)=> {
        localStorage["stock"]=JSON.stringify(data);
        localStorage["Stockexpire"]=Date.now()+10800000
        return data;
    })})
    .catch((err)=> console.log(err))
}
let data = await Productrequest();
let stocks=await stockRequest();
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
