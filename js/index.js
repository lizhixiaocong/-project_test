var cartobj = document.querySelector('.topbar-cart');
var hiddenobj = document.querySelector('.hidden');
cartobj.addEventListener('mouseover', function () {
    hiddenobj.style.display = 'block';
})
// cartobj.onmouseover = function () {
//     hiddenobj.style.display = 'block';
// }
cartobj.addEventListener('mouseout', function () {
    hiddenobj.style.display = 'none';
})
// cartobj.onmouseout = function () {
//     hiddenobj.style.display = 'none';
// }
var searchobj = document.querySelector('.search');
var inpobj = document.querySelector('#inp');
var shobj = document.querySelector('.search-hidden')
inpobj.addEventListener('mouseover', function () {
    searchobj.style.border = '1px solid #b0b0b0';
    this.style.borderRight = '1px solid #b0b0b0';
})
// inpobj.onmouseover = function () {
//     searchobj.style.border = '1px solid #b0b0b0';
//     this.style.borderRight = '1px solid #b0b0b0';
// }
// inpobj.onmouseout = function () {
//     searchobj.style.border = '1px solid #ccc';
//     this.style.borderRight = '1px solid #ccc';
// }
inpobj.onfocus = function () {
    searchobj.style.border = '1px solid #ff6700';
    this.style.borderRight = '1px solid #ff6700';
    shobj.style.display = 'block';
}
inpobj.onblur = function () {
    searchobj.style.border = '1px solid #ccc';
    this.style.borderRight = '1px solid #ccc';
    shobj.style.display = 'none';
}

