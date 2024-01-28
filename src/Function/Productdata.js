import productdata from "./Products.json"
import categorydata from "./CategoryId.json"

let data = productdata;
const products=()=>{
    for(let i =0;i<data.length;i++)
    data[i].image=data[i].images.filter(x=>x.order>=0).sort(x=>x.order).map(x=>x.url);
    return data
}
const product=(id)=>{
    data.forEach(x=>x.image=x.images.filter(x=>x.order>=0).sort(x=>x.order).map(x=>x.url))
    var {images,...p}=data[data.findIndex(x=>x.id===id)];
    return p;
}
const category=(name)=>{
    var menId= categorydata.men.filter(x=>categorydata[name].includes(x));
    var womenId=categorydata.women.filter(x=>categorydata[name].includes(x));
    console.log(menId,womenId);
    var list={
        men:[],
        women:[]
    }
    menId.forEach(a=>list.men.push(data.filter(x=>x.id.localeCompare(a))));
    womenId.forEach(a=>list.women.push(data.filter(x=>x.id.localeCompare(a))));
    return list
}
export {product,products,category}
