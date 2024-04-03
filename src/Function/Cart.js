const AddToCart = (stock) => {
    if (localStorage["cartlist"] === undefined)
        localStorage["cartlist"] = JSON.stringify([stock]);
    else {
        var list = JSON.parse(localStorage["cartlist"]);
        if (list.some(x => x.id === stock.id && x.size === stock.size)) {
            list[list.findIndex(x => x.id === stock.id && x.size === stock.size)].quantity += stock.quantity;
        }
        else {
            list.push(stock)
        }
        localStorage["cartlist"] = JSON.stringify(list);
    }
}

const SetToCart = (stock) => {
    if (stock.quantity > 0) {
        if (localStorage["cartlist"] === undefined)
            localStorage["cartlist"] = JSON.stringify([stock]);
        else {
            var list = JSON.parse(localStorage["cartlist"]);
            if (list.some(x => x.id === stock.id && x.size === stock.size)) {
                list[list.findIndex(x => x.id === stock.id && x.size === stock.size)] = stock;
            }
            else {
                list.push(stock)
            }
            localStorage["cartlist"] = JSON.stringify(list);
        }
    }
    else
    RemoveFromCart(stock);
}

const RemoveFromCart = (stock) => {
    if (localStorage["cartlist"] !== undefined) {
        if (list.some(x => x.id === stock.id && x.size === stock.size)) {
            delete list[list.findIndex(x => x.id === stock.id && x.size === stock.size)]
        }
    }
}