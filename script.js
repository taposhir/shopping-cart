//Get element
let cartOne = document.getElementById('item_one');
let cartTwo = document.getElementById('item_two');
let cartThree = document.getElementById('item_three');
let cartFour = document.getElementById('item_four');
let cartList = document.getElementById('cart-item-list');
let showalert = document.getElementById('show_alert');
let clearCart = document.getElementById('clearcart');

//Class
class Cart {
    constructor() {

    }
    showAlert(msg, classname) {
        let div = document.createElement('div');
        div.className = classname;
        div.appendChild(document.createTextNode(msg));
        showalert.appendChild(div);
    }
    addCart(title) {
        //console.log(title,img);
        this.setLSTextvalue(title);
        //this.setLSImgvalue(img);

    }
    setLSTextvalue(title) {
        let cartText;
        //alert(title);
        //console.log(localStorage.getItem('carts') === null);
        if (localStorage.getItem('cartText') === null) {
            cartText = [];
        } else {
            cartText = JSON.parse(localStorage.getItem('cartText'));

        }
        //cartText="s";
        //console.log(cartText=='');
        let tmp = 1;
        if (cartText == '') {
            // cartText.push(title);
            // localStorage.setItem('cartText', JSON.stringify(cartText));
            tmp = 1;
        } else {
            cartText.forEach((item) => {
                //alert(item);
                if (item === title) {
                    tmp = 0;
                }
            });
        }
        if (tmp) {
            cartText.push(title);
            localStorage.setItem('cartText', JSON.stringify(cartText));
        }




    }
    // setLSImgvalue(img) {
    //     let cartImg;
    //     //console.log(localStorage.getItem('carts') === null);
    //     if (localStorage.getItem('cartImg') === null) {
    //         cartImg = [];
    //     } else {
    //         cartImg = JSON.parse(localStorage.getItem('carts'));
    //     }


    //     if (cartImg == '') {
    //         cartImg.push(img);
    //         localStorage.setItem('cartImg', JSON.stringify(cartImg));
    //     } else {
    //         cartImg.forEach((item) => {
    //             //alert(item);
    //             if (item === img) {
    //                 console.log('Already Data is Inserted');
    //             } else {
    //                 cartImg.push(img);
    //                 localStorage.setItem('cartImg', JSON.stringify(cartImg));
    //             }
    //         });
    //     }
    // }


    //show Data on cart list
    showLSdata() {
        let title, image;
        let cartText, cartImg;
        if (localStorage.getItem('cartText') === null) {
            cartText = [];
        } else {
            cartText = JSON.parse(localStorage.getItem('cartText'));

        }
        // if (localStorage.getItem('cartImg') === null) {
        //     cartImg = [];
        // } else {
        //     cartImg = JSON.parse(localStorage.getItem('carts'));
        // }

        // cartText.forEach((item)=>{
        //     title=item;
        //     console.log(title);

        // })

        for (let i = 0; i < cartText.length; i++) {
            if(cartText[i].length>0){
            // alert(image);
            let li = document.createElement('li');
            // let img = document.createElement('img');
            let a = document.createElement('a');
            // li.className = "dropdown-item";
            // img.className = "img-fluid";
            // img.setAttribute('width', "20");
            // img.setAttribute('height', '20');
            // img.src = image;
            a.setAttribute('href', '#');
            a.className = "link"
            a.appendChild(document.createTextNode(' X'));
            // li.appendChild(img);
            li.appendChild(document.createTextNode("# " + cartText[i]));
            li.appendChild(a);
            cartList.appendChild(li);
            }
        }



    }

    deleteCart(title) {
        let cartText;
        //alert(title);
        //console.log(localStorage.getItem('carts') === null);
        if (localStorage.getItem('cartText') === null) {
            cartText = [];
        } else {
            cartText = JSON.parse(localStorage.getItem('cartText'));

        }
        let tmp = 0;
        let val = 0;
        for (let i = 0; i < cartText.length; i++) {
            //console.log("# " + cartText[i] + " X" == title);
            if ("# " + cartText[i] + " X" == title) {
                tmp = 1;
                val = i + 1;
            } else {
                tmp = 0;
            }
        }

        
        if (val) {
            let x = val - 1;
            
            //cartText = cartText.splice(x,1);
            cartText[x]='';
            localStorage.setItem('cartText', JSON.stringify(cartText));
        }


    }
    ClearCart(){
        localStorage.clear();
    }


}


//Event Listener
let cart = new Cart();
//cart.showLSdata();
cartOne.addEventListener('click', addToCartOne);
cartTwo.addEventListener('click', addToCartTwo);
cartThree.addEventListener('click', addToCartThree);
cartFour.addEventListener('click', addToCartFour);
document.addEventListener('DOMContentLoaded', cart.showLSdata);
cartList.addEventListener('click', deleteCartItem);
clearCart.addEventListener("click",cart.ClearCart);

//Define Function
function addToCartOne(e) {
    let cartTextValue = document.querySelector('.cart_one_title').textContent;
    let cartImgValue = document.querySelector(".cart_one_img").src;
    cartImgValue = cartImgValue.substring(22, cartImgValue.length - 1)
    //cartOneValue = cartOne.parentElement.parentElement.querySelector('.one').textContent;
    //console.log(cartOneTextValue);
    //console.log(cartOneImgValue);
    cart.addCart(cartTextValue);
    //cart.showAlert("Product added to cart successfully", "alert alert-success");
}

function addToCartTwo(e) {
    let cartTextValue = document.querySelector('.cart_two_title').textContent;
    let cartImgValue = document.querySelector(".cart_two_img").src;
    cartImgValue = cartImgValue.substring(22, cartImgValue.length - 1);
    cart.addCart(cartTextValue);
    //cart.showAlert("Product added to cart successfully", "alert alert-success");
}

function addToCartThree(e) {
    let cartTextValue = document.querySelector('.cart_three_title').textContent;
    let cartImgValue = document.querySelector(".cart_three_img").src;
    cartImgValue = cartImgValue.substring(22, cartImgValue.length - 1);
    cart.addCart(cartTextValue);
    //cart.showAlert("Product added to cart successfully", "alert alert-success");
}

function addToCartFour(e) {
    let cartTextValue = document.querySelector('.cart_four_title').textContent;
    let cartImgValue = document.querySelector(".cart_four_img").src;
    cartImgValue = cartImgValue.substring(22, cartImgValue.length - 1);
    //cart.showAlert("Product added to cart successfully", "alert alert-success");
    cart.addCart(cartTextValue);

}

//remove cart item
function deleteCartItem(e) {

    if (e.target.hasAttribute("href")) {
        //console.log(e.target.parentElement.textContent);

        e.target.parentElement.remove();

        cart.deleteCart(e.target.parentElement.textContent);

    }

}