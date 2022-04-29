
/* function updatePhoneNumber(isIncreassing) {
    const inputPhone = document.getElementById('phone-number');
    const phoneNumber = parseInt(inputPhone.value);
    if (isIncreassing == true) {
        inputPhone.value = phoneNumber + 1;
    }
    else if(isIncreassing == false && phoneNumber > 0){
        inputPhone.value = phoneNumber - 1;
    }

    const phoneTotal = document.getElementById('phone-total');
    const phoneTotalNumber = parseInt(phoneTotal.innerText);
    phoneTotal.innerText = parseInt(inputPhone.value) * 1219;

}


document.getElementById('phone-plus').addEventListener('click', function () {
    updatePhoneNumber(true)
})


document.getElementById('phone-minus').addEventListener('click', function () {
    updatePhoneNumber(false)
})
 */



function updateProductNumber(product, price, isIncrease) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    if (isIncrease == true) {
        productInput.value = productNumber + 1;
    }
    else if (productNumber > 0) {
        productInput.value = productNumber - 1;
    }

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = parseInt(productInput.value) * price;

     // calculate total 
     calculateTotal()
    
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const produtNumber = parseInt(productInput.value);
    return produtNumber;
}

function calculateTotal(){
    
    const phoneTotal = getInputValue('phone') * 1219;
    
    const caseTotal = getInputValue('case') * 59;
     const subTotal = phoneTotal + caseTotal;
     const tax = subTotal / 10;
     const totalprice = subTotal + tax;
     // update on the html

     document.getElementById('sub-total').innerText = subTotal;
     document.getElementById('tax-amount').innerText = tax;
     document.getElementById('total-price').innerText = totalprice;

}

// const phonet = calculateTotal();
// console.log(phonet)




document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true)
    
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
    
})





document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
    
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
    
})

/* function getInputValue() {
    const productInput = document.getElementById(products);
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone-number') * 1219;
    const caseTotal = getInputValue('case-number') * 59;
    const subTotal = phoneTotal + caseTotal;
    console.log(subTotal)


} */

