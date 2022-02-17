const zz =  () => {
    let btn = document.querySelector(".icon");
    let links = document.querySelector(".links");

    btn.addEventListener("click" , () => {
        links.classList.toggle("nav-active");

    });
};
zz();




