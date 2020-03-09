const data =[
    {
        name:"coffce-been",
        order: true,
        items:['americano','milk','green-tea']
    },
    {
        name:'starbucks',
        order:false
    },
    {
        name:"coffce-king",
        order: true,
        items:['juice','latte']
    }
]

//json으로 응답을 받고 js object로 변환 후에 어떠한 데이터 처리 조작 한 후에
//dom에 추가.
//데이터 + html 문자열의 결합이 필요하기 때문에 그러는거.

// const template = `<div>Hi this  ${data[0].name} !!`;
// console.log(template);
// Template 처리




//Tagged Trmplate literals
function fn(tags, name, items){
    console.log(tags);
    if(typeof items =="undefined"){
        items = "<span style='color:red;'>주문가능한 상품이 없습니다>span>";
    }
    return (tags[0]+name +tags[1]+items+tags[2]);
}

data.forEach((v) =>{
    let template = fn`<div>welcome ${v.name}</div>
     <h2> 주문가능항목</h2> <div> ${v.items}</div>`;
     console.log(template);
    document.querySelector("#massage").innerHTML += template;
});
// const template = fn`<div>welcome ${data[0].name}</div> <h2> 주문가능항목</h2> <div> ${data[0].items}</div>`;






