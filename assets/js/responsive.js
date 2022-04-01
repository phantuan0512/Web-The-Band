// đong mo menu
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var heightHeader = header.clientHeight;

mobileMenu.onclick = function(){
    var isClosed = header.clientHeight === heightHeader;
    if(isClosed){
        header.style.height = 'auto';
    }else{
        header.style.height = null;
    }
}

// dong mo sub menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for(var i=0; i<menuItems.length; i++){

    var menuItem = menuItems[i]

    menuItem.onclick = function(event){  
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
            
        }else{
            header.style.height = null;
        }
            
    }
}