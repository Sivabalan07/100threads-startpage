const Productrequest=async ()=>{
    let products=localStorage["product"];
    let date=localStorage["productexpire"];
    if(products && Date.now() < date){
        return JSON.parse(products);}
    return await fetch("https://firebasestorage.googleapis.com/v0/b/threads-23c16.appspot.com/o/Products.json?alt=media&token=38a35a7d-2188-4a28-a4c4-6b697f46a886",{method:"get"})
    .then((response)=>{
        if(response.status!==200)
            throw response.status
        return response.json()})
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
    return await fetch("https://firebasestorage.googleapis.com/v0/b/threads-23c16.appspot.com/o/Stock.json?alt=media&token=ed60ec27-6f94-45f6-8527-2d6ee2dabe5d",{method:"get"})
    .then((response)=>{
        if(response.status!==200)
            throw response.status
        return response.json()})
    .then((data)=> {
        localStorage["stock"]=JSON.stringify(data);
        localStorage["Stockexpire"]=Date.now()+10800000
        return data;
    })
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
