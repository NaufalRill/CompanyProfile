document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.getElementById('close-btn');

burger.addEventListener('click', () => {
    if (sidebar.style.right === '0px') {
        sidebar.style.right = '-300px'; 
    } else {
        sidebar.style.right = '0'; 
    }
    
    burger.classList.toggle('toggle');
});

closeBtn.addEventListener('click', function() {
    sidebar.style.right = '-300px'; 
});





