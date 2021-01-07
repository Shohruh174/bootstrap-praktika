var accordionItem = document.querySelectorAll('.accordion');
var accordionToggle = document.querySelector('.btn');
var exampleModal = document.querySelectorAll('#exampleModal');

function removeAllClasses(clickedItem) {
  accordionItem.forEach(item => {
    if (item.dataset.accOrder != clickedItem.dataset.accOrder) {
      item.classList.remove('active');
    } else {
      item.classList.toggle('active');
    }
  })
};

accordionItem.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    removeAllClasses(item);
  })
});


var toster = document.querySelector('#toster_buton');
var toast = document.querySelector("#toast");

toster.addEventListener('click', function () {
  toast.classList.toggle("show");
});