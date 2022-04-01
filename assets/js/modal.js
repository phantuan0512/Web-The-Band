
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modalclose = document.querySelector('.js-modal-close');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const pay = document.querySelector('#btn-buy-tickets');
const help = document.querySelector('.js-modal-help');

function showBuyticket(){
    modal.classList.add('open');
}
function hideBuyticket(){
    modal.classList.remove('open');
}
// do co nhieu nut buy nen phai dung vong lap
for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click',showBuyticket)
};

// modalclose.addEventListener('click',hideBuyticket);   cach 1
 modalclose.onclick = function() {hideBuyticket()};   // cach 2


modal.addEventListener('click',hideBuyticket);

// noi bot ngan chan khong tiep can toi su kien click vao cac thanh phan trong container
modalContainer.addEventListener('click',function(event){
    event.stopPropagation();
})







help.addEventListener('click',function(){
    alert('HELP con cặc, không mua thì cút !!!')
})
pay.addEventListener('click',function(){
    alert('Bạn đã mua thành công !!!');
})
