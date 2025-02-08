document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('hidden');
    menu.classList.toggle('block');
})


document.querySelector('a[href="#services"]').addEventListener('click',function (e){
    e.preventDefault();
    document.querySelector('#services').scrollIntoView({behavior:'smooth'});
});

document.querySelector('a[href="#home"]').addEventListener('click',function (e){
    e.preventDefault();
    document.querySelector('#home').scrollIntoView({behavior:'smooth'});
});

// working on services.html
function toggleServiceDetails(element){
    const details=element.nextElementSibling;
    details.classList.toggle('hidden');
}

