let pageIndex = 1;
showPage(pageIndex);

function currentPage(n){
    pageIndex = n;
    showPage(pageIndex);
}

function showPage(n){
    let header = document.querySelectorAll(".prodHeader");
    let page = document.querySelectorAll(".allProds");

    for (let i = 0; i < page.length; i++){
        header[i].classList.remove("active");
        page[i].style.display = "none";
    }
    header[pageIndex - 1].classList.add("active");
    page[pageIndex - 1].style.display = "block";
}