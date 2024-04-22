// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, getDownloadURL, ref, uploadString } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyC6rAlYl5mgtLP5RUY_OKP8nt_eSfb9ZuY",
    authDomain: "threads-23c16.firebaseapp.com",
    projectId: "threads-23c16",
    storageBucket: "threads-23c16.appspot.com",
    messagingSenderId: "470233942109",
    appId: "1:470233942109:web:017717d1398cefcf7265b4",
    measurementId: "G-1WG5SP2NDM",
};
const fileinfo = {
    product: "Products.json",
    stock: "Stock.json"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const stge = getStorage(app, 'gs://threads-23c16.appspot.com')
const Productrequest = async () => {
    let products = localStorage["product"];
    let date = localStorage["productexpire"];
    if (products && Date.now() < date) {
        return JSON.parse(products);
    }
    return await getDownloadURL(ref(stge, fileinfo.product)).then(async (url) => {
        return await fetch(url, { method: "get" })
            .then((response) => {
                if (response.status !== 200)
                    throw response.status
                return response.json()
            })
            .then((data) => {
                localStorage["product"] = JSON.stringify(data);
                localStorage["productexpire"] = Date.now() + 86400000  //1 day 
                return data;
            })
    })
        .catch((err) => console.log(err))
}

const updateStock = async (stockId, stockSize, quantity) => {
    let item = await getDownloadURL(ref(stge, fileinfo.stock)).then(async (url) => {
        return  fetch(url, { method: "get" })
            .then((response) => {
                if (response.status !== 200)
                    throw response.status
                return response.json()
            })
            .then((data) => {
                localStorage["stock"] = JSON.stringify(data);
                localStorage["Stockexpire"] = Date.now() + 10800000 //3 hours
                return data;
            })
    })
        .catch((err) => console.log(err));
        // console.log("gets the data");
    let filteredItem = Object.keys(item).filter(i => i.includes(stockId));
    // console.log("filters the key");
    if (filteredItem.every(x => item[x][stockSize] >= quantity)) {
        filteredItem.every(i => {
            item[i][stockSize] -= quantity;
            return true;
        });
        // console.log("assign the quantity",item);
        return uploadString(ref(stge, fileinfo.stock), JSON.stringify(item)).then((i) => {
            console.log('Uploaded ');
            localStorage["stock"] = JSON.stringify(item);
            return true;
        }).catch(x=>{console.log(x);return false});
        
        
    }
    return false;

}

const stockRequest = async () => {
    let localstocks = localStorage["stock"];
    let date = localStorage["Stockexpire"];
    if (localstocks && Date.now() < date) {
        return JSON.parse(localstocks);
    }
    return await getDownloadURL(ref(stge, fileinfo.stock)).then(async (url) => {
        return await fetch(url, { method: "get" })
            .then((response) => {
                if (response.status !== 200)
                    throw response.status
                return response.json()
            })
            .then((data) => {
                localStorage["stock"] = JSON.stringify(data);
                localStorage["Stockexpire"] = Date.now() + 10800000
                return data;
            })
    })
        .catch((err) => console.log(err))
}
let data = await Productrequest();
let stocks = await stockRequest();
const products = () => {
    for (let i = 0; i < data.length; i++)
        data[i].image = data[i].images.filter(x => x.order >= 0).sort(x => x.order).map(x => x.url);
    return data
}
const product = (id) => {
    data.forEach(x => x.image = x.images.filter(x => x.order >= 0).sort(x => x.order).map(x => x.url))
    let index = data.findIndex(x => x.id === id);
    if (index < 0) {
        return undefined;
    }
    var { images, ...p } = data[index];
    return p;
}
const stock = (id) => {
    let filteredIds=stockids().filter(x=>x.includes(id));
    let stocklocalitems={};
    if(filteredIds.length>0)
    {
        filteredIds.forEach(x=>{
            let s=stocks[x];
            Object.keys(s).forEach(z=>{
                if(stocklocalitems[z]==undefined || stocklocalitems[z]>s[z]){
                stocklocalitems[z]=s[z];
                }
            })
        })
    }
    // console.log(stocklocalitems);
    return stocklocalitems;
}
const stockids = () => {
    var ids = Object.keys(stocks);
    return ids
}
export { product, products, stock, stockids,updateStock }
