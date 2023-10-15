const initSlider=()=>{
    const imageList=document.querySelector(".wrapper .image-list");
    const slideButtons=document.querySelectorAll(".wrapper .slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    slideButtons.forEach(button=>{
        button.addEventListener("click",()=>{
            const direction=button.id==="prev-slide" ? -1:1;
            const scrollAamount=imageList.clientWidth*direction;
            imageList.scrollBy({left : scrollAamount, behavior:"smooth"});
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
    });


}
window.addEventListener("load",initSlider);
