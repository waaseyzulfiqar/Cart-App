const myItem = localStorage.getItem('cart')

const myCart = JSON.parse(myItem)




const div = document.querySelector('div')

const lastTotalAmount = document.querySelector('#totalAmount')

const shopMoreBtn = document.querySelector('.shopmore')


function render(){

    let totalAmount = 0

    lastTotalAmount.innerHTML = ''

    if(myCart.length > 0){

        for(let i = 0; i < myCart.length; i++){

            totalAmount += myCart[i].price * myCart[i].quantity

            div.innerHTML += `<div class = "mycart">
                            <h3>Brand : ${myCart[i].brand}</h3>
                            <h3>Model : ${myCart[i].model}</h3>
                            <h3>Quantity : ${myCart[i].quantity}</h3>
                            <h3>Price : ${myCart[i].price}</h3>
                            <h3>Total Price : ${myCart[i].totalPrice = myCart[i].price * myCart[i].quantity}</h3>
                            <button class= "addbtn" onclick='add(${i})'>+</button>${myCart[i].quantity}<button  class= "subtractbtn" onclick='subtract(${i})'>-</button>
                            <br><br>
                            <button class= "delbtn" onclick='deleteItem(${i})'>Delete</button>` 
                            
                            lastTotalAmount.innerHTML = `Total Amount : ${totalAmount}    
                                                                                        </div>`
        }


    }else{

        div.innerHTML = '<h2 class= "notfound">No item Found..</h2>'
    }
  
}

render()




function add(index){

    div.innerHTML = ''

    myCart[index].quantity +=1

    render()
}



function subtract(index){

    div.innerHTML = ''

if(myCart[index].quantity === 1){

    myCart.splice(index,1)

    localStorage.removeItem('cart', index)

}else{

    div.innerHTML = ''

    myCart[index].quantity -= 1
}

render()
    
}




function deleteItem(del){

    div.innerHTML = ''

    myCart.splice(del,1)

    localStorage.removeItem('cart', del)

    render()

    Swal.fire({
        position: "top",
        icon: "success",
        title: "You Deleted this Item",
        showConfirmButton: false,
        timer: 1500
      });
}




shopMoreBtn.addEventListener('click', function(){

    window.location = 'index.html'
})