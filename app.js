const div = document.querySelector('div')



const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },
    {
        brand: 'Abdullah',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    },

]


for(let i = 0; i < phones.length; i++){

    div.innerHTML += `<div class = "homediv">
                    <h3>Brand : ${phones[i].brand}</h3>
                    <h3>Model : ${phones[i].model}</h3>
                    <h3>Ram : ${phones[i].ram}</h3>
                    <h3>Rom : ${phones[i].rom}</h3>
                    <h3>Camera : ${phones[i].camera}</h3>
                    <h3>Price : ${phones[i].price}</h3>
                    
                    <button onclick= "addToCart(${i})">Add to cart</button></div>`

}



let cart = []

function addToCart(index){

    phones[index].quantity = 1
    cart.push(phones[index])
    localStorage.setItem('cart',JSON.stringify(cart))

    // console.log(cart)

    Swal.fire({
        position: "top",
        icon: "success",
        title: "Item Added Successfully",
        showConfirmButton: false,
        timer: 1500
      });
}

function checkout(){

    window.location = 'cart.html'
}