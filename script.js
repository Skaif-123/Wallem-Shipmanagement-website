document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.querySelector('nav ul');
    let navnaming = document.querySelectorAll('li a');
    const titlename=document.querySelector('.pagetitle');
    menu.classList.toggle('hidden');
    menu.classList.toggle('block');
    titlename.classList.toggle('hidden');
    
    navnaming.forEach(links=>{
        links.classList.toggle('text-xl');
        links.classList.toggle('font-bold');
        links.classList.toggle('text-center');
    })
})


document.querySelector('a[href="#services"]').addEventListener('click',function (e){
    e.preventDefault();
    document.querySelector('#services').scrollIntoView({behavior:'smooth'});
});

document.querySelector('a[href="#home"]').addEventListener('click',function (e){
    e.preventDefault();
    document.querySelector('#home').scrollIntoView({behavior:'smooth'});
});



