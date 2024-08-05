
const addEventOnElement = function(elements, eventType, callback) {
    for(let i=0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType,callback)
    }
}

const sidebar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.close-icon')
const openBtn = document.querySelector('.open-icon')

const header = document.querySelector('.header');

// Function to add or remove box shadow based on scroll position
const handleScroll = function() {
    if (window.scrollY > 50) { // Change the value as needed
        header.classList.add('box-shadow');
    } else {
        header.classList.remove('box-shadow');
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

const toggleSideBar = function() {
    sidebar.classList.toggle('active')
   
}
addEventOnElement([openBtn, closeBtn,], 'click', toggleSideBar)

const sidebarLinks = document.querySelectorAll('.nav-links a')

const closeSidebar = function() {
    sidebar.classList.remove('active');
}
addEventOnElement(sidebarLinks, 'click', closeSidebar);

const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const menuButtons = document.querySelector('.menu-buttons');
const menuFloatBtn = document.querySelectorAll('.menu-float-btns a')

const toggleMenu = function() {
    if (menuButtons.classList.contains('open')) {
        
        menuButtons.classList.remove('open');
        menuOpen.classList.add('rotated');
        menuClose.classList.remove('rotated');
        menuFloatBtn.forEach((ele) => {
            ele.style.opacity = 0; 
            ele.style.transform = 'translateY(-20px)'; 
        });
        
    } else {

        menuFloatBtn.forEach((ele, i) => {
            ele.style.opacity = 1; 
            ele.style.transform = 'translateY(0)'; 
        });
        
        menuButtons.classList.add('open');
        menuOpen.classList.remove('rotated');
        menuClose.classList.add('rotated');
       
         
    }
}

addEventOnElement([menuOpen, menuClose,], 'click', toggleMenu)



    document.querySelectorAll('.stars').forEach((starsContainer) => {
        starsContainer.addEventListener('click', (event) => {
            if (event.target.tagName === 'I') {
                const stars = starsContainer.querySelectorAll('i');
                const index = Array.from(stars).indexOf(event.target);
                
                stars.forEach((star, i) => {
                    if (i <= index) {
                        star.classList.add('active');
                    } else {
                        star.classList.remove('active');
                    }
                });
            }
        });
    });
    


    const menuBtnsCollection = document.querySelector('.menu-float-btns').children;
    const totalMenuBtns = menuBtnsCollection.length;
    console.log(totalMenuBtns);
    
    const menuFilterBtns = document.querySelectorAll('.cards');
    const totalMenuFilterBtns = menuFilterBtns.length;
    console.log(totalMenuFilterBtns);
    
    for (let i = 0; i < totalMenuBtns; i++) {
        menuBtnsCollection[i].addEventListener('click', function(event) {
            event.preventDefault(); 
            
            document.querySelector('.menu-float-btns .active')?.classList.remove('active');
            
            // Add 'active' class to the clicked button
            this.classList.add("active");
    
            // Get the filter value from the clicked button
            const filterValue = this.getAttribute("data-filter");
    
            // Filter the cards based on the filter value
            for (let k = 0; k < totalMenuFilterBtns; k++) {
                const cardCategory = menuFilterBtns[k].getAttribute('data-category');
                if (filterValue === cardCategory || filterValue === 'all') {
                    menuFilterBtns[k].classList.remove('hide');
                    menuFilterBtns[k].classList.add('show');
                } else {
                    menuFilterBtns[k].classList.add('hide');
                    menuFilterBtns[k].classList.remove('show');
                }
            }
        });
    }
    


var swiper = new Swiper('.testimonial-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    }
});