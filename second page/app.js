const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth =document.querySelector(".card").offsetWidth;

let isDragging = false, startX, startScrollleft;

//Add even listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click",() => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth
    })
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the caruousel
    startX = e.pageX;
    startScrollleft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; //if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollleft - (e.pageX - startX); 
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mousecap", dragStop);