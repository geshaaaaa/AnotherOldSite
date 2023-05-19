const product = [
   {
       id: 0,
       image: 'img/ironman.png', 
       title: 'Iron Man', 
       price: 120,
   },
   {
       id: 1,
       image: 'img/Neo.png', 
       title: 'Neo', 
       price: 120,
   },
   {
       id: 2,
       image: 'img/HarryPotter.png', 
       title: 'HarryPotter', 
       price: 120,
   },
   {
       id: 3,
       image: 'img/Yoda.png', 
       title: 'Yoda', 
       price: 120,
   },
   {
       id: 5,
       image: 'img/nothing.jpg', 
       title: 'Spiderman', 
       price: 120,
   },
   {
       id: 6,
       image: 'img/nothing.jpg', 
       title: 'Hulk', 
       price: 120,
   }
];


const categories = [...new Set(product.map((item)=>{return item}))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
   const searchData = e.target.value.toLowerCase();
   const filteredData = categories.filter((item) => {
       return (
           item.title.toLowerCase().includes(searchData)
       )
   })
   displayItem(filteredData)
});

const displayItem = (items) => {
   document.getElementById('root').innerHTML = items.map((item)=>
   {
       var {image, title, price, id} = item;
       return(
           `<div class='box'>
               <div class='img-box'>
                   <img class='images' src=${image}></img>
               </div>
               <p>${title}</p>
           <div class='bottom'>
           <h2>₴ ${price}.00</h2>`+
           "<button onclick='addtocart("+(id)+")'><i class='fa-solid fa-bag-shopping'></i></button>"+
           `</div>
           </div>`
       )
   }).join('')
};


var cart=[];

function addtocart(a){
   cart.push({...categories[a]});
   displaycart();
}
function delElement(a){
   cart.splice(a, 1);
   displaycart();
}

function displaycart(){
   let j = 0; total = 0;
   document.getElementById("count").innerHTML=cart.length;
   
   if(cart.length==0){
       document.getElementById('cartItem').innerHTML = "Your cart is empty";
       document.getElementById("total").innerHTML = "₴ "+0+".00";
   }
   else{
       document.getElementById("cartItem").innerHTML = cart.map((items)=>
       {
           var{image, title, price} = items;
           total=total+price;
           document.getElementById("total").innerHTML = "₴ "+total+".00";
           return(
               `<div class='cart-item'>
               <div class='row-img'> 
                   <img class='rowimg' src=${image}>
               </div>
               <p style='font-size:12px;'>${title}</p>
               <h2 style='font-size: 15px;'>₴ ${price}.00</h2>`+
               "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
           );
       }).join('');
   }
   document.getElementById("total-price").innerHTML=total;
}

// Получаем ссылки на элементы
var modal = document.getElementById('modal');
var modalBtn = document.getElementById('modal-btn');
var closeBtn = document.getElementsByClassName('close')[0];

// Открываем модальное окно при нажатии на кнопку
modalBtn.addEventListener('click', function() {
 modal.style.display = 'block';
});

// Закрываем модальное окно при нажатии на "X"
closeBtn.addEventListener('click', function() {
 modal.style.display = 'none';
});

// Закрываем модальное окно, если пользователь щелкает за его пределами
window.addEventListener('click', function(event) {
 if (event.target == modal) {
   modal.style.display = 'none';
 }
});

displayItem(categories);