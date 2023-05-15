// ITERATION 1

 function updateSubtotal(product) {
   let price = product.querySelector('.price span');
   let quantity = product.querySelector('.quantity input');
   let priceValue = parseFloat(price.innerText);
   let quantityValue = quantity.value;

   let subTotalValue = priceValue * quantityValue;

   let subTotalContainer = product.querySelector('.subtotal span');

   subTotalContainer.innerText = subTotalValue;
   return subTotalValue;
 }

 function calculateAll() {
   let products = document.getElementsByClassName('product');

   let totalValue = 0;
   for (let product of products) {
     totalValue += updateSubtotal(product);
   }
   document.querySelector('#total-value span').innerText = totalValue;
 }
