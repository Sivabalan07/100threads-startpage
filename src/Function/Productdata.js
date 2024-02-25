import productdata from "./Products.json"
// import categorydata from "./CategoryId.json"
import stocks from "./Stock.json"

const request=()=>{
    fetch("https://firebasestorage.googleapis.com/v0/b/threads-23c16.appspot.com/o/Products.json?alt=media&token=8ef98f68-eed0-4a10-bb38-01fab2a12b87",{method:"get",mode:'no-cors'})
    .then((response)=>console.log(response.json())).catch((err)=> console.log(err))
    // $.ajax({
    //     url: 'https://firebasestorage.googleapis.com/v0/b/threads-23c16.appspot.com/o/Products.json?alt=media&token=8ef98f68-eed0-4a10-bb38-01fab2a12b87',
    //     method: 'GET',
    //     crossdomain:true,
    //     mode:'no-cors',
    //     success: function(response) {
    //         console.log(response)
    //         const parsedData = JSON.parse(response);
    //         // Process the parsed data here
    //     },
    //     error: function(xhr, status, error) {
    //         // Handle any errors
    //     }
    // });


    

}
request()
let data = productdata;
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
// const category=(name)=>{
//     var menId= categorydata.men.filter(x=>categorydata[name].includes(x));
//     var womenId=categorydata.women.filter(x=>categorydata[name].includes(x));
//     console.log(menId,womenId);
//     var list={
//         men:[],
//         women:[]
//     }
//     menId.forEach(a=>list.men.push(data.filter(x=>x.id.localeCompare(a))));
//     womenId.forEach(a=>list.women.push(data.filter(x=>x.id.localeCompare(a))));
//     return list
// }
const stock=(id)=>{
    return stocks[id];
}
const stockids=()=>{
    var ids=Object.keys(stocks);
    return ids
}
export {product,products,stock,stockids}
