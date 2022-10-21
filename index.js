let items = document.querySelector("#products");
let arr =[];
for (let i = 0; i < 8; ++i) {
    arr.push("a"+(i+1));
    items.innerHTML+=`<div class = 'prod' style='background-size: cover;background-image:url("Pictures/${arr[i]}.jpg")'></div>`
    
}
