
const addEventOnElement = function(elements, eventType, callback) {
    for(let i=0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType,callback)
    }
}

const sidebar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.close-icon')
const openBtn = document.querySelector('.open-icon')
console.log(sidebar,);

const toggleSideBar = function() {
    sidebar.classList.toggle('active')

}
addEventOnElement([openBtn, closeBtn], 'click', toggleSideBar)