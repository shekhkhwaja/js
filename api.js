// // fetch("apieLink").then((data)=>)
// let ul= document.querySelector("ul")
// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((data)=>{
//     return data.json()
// }).then((res)=>{
//     console.log(res);
//     show(res)
// })
// function show(res)
// {
//     for(let i of res)
//     {
//         let li= document.createElement("li")
//         let h4= document.createElement("h4")    
//     li.innerText=i.id
//     h4.innerText=i.title
//     ul.append(li,h4,)
// }
// }
let btn=document.querySelector("button")
let inp=document.querySelector("input")
btn.addEventListener("click",()=>{
    let searchText=inp.value
    fetch('https://api.tvmaze.com/search/shows?q='searchText).
    then((data)=>{
        return data.json()
    }).then((res)=>{
        console.log(res);
        show(res)
    })
})

function show(res) {
    