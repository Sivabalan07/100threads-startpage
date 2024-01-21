import productdata from "./Products.json"
import categorydata from "./CategoryId.json"

let data = productdata;
const products=()=>{
    return data
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
export {products,category}
