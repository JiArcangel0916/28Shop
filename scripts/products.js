// INITIALIZATION
let availabilityPageIndex = 1;
let categoryPageIndex = 1; 

// SECTION PICS FOR AVAILABLE PRODUCTS
const availBraceBangSecPics = [
    ["Resources/Products Page/Available/Bracelets slash Bangle/1.png", "Resources/Products Page/Available/Bracelets slash Bangle/2.png"],
    ["Resources/Products Page/Available/Bracelets slash Bangle/3.png", "Resources/Products Page/Available/Bracelets slash Bangle/4.png"]
];
const availBroochPendSecPics = [
    ["Resources/Products Page/Available/Broochs slash Pendant/1.png", "Resources/Products Page/Available/Broochs slash Pendant/2.png"],
    ["Resources/Products Page/Available/Broochs slash Pendant/3.png", "Resources/Products Page/Available/Broochs slash Pendant/4.png"],
    ["Resources/Products Page/Available/Broochs slash Pendant/5.png", "Resources/Products Page/Available/Broochs slash Pendant/6.png"],
    ["Resources/Products Page/Available/Broochs slash Pendant/7.png", "Resources/Products Page/Available/Broochs slash Pendant/8.png"],
    ["Resources/Products Page/Available/Broochs slash Pendant/9.png", "Resources/Products Page/Available/Broochs slash Pendant/10.png"]
];
const availEarringSecPics = [
    ["Resources/Products Page/Available/Earrings/1.png", "Resources/Products Page/Available/Earrings/2.png"],
    ["Resources/Products Page/Available/Earrings/3.png", "Resources/Products Page/Available/Earrings/4.png"],
    ["Resources/Products Page/Available/Earrings/5.png", "Resources/Products Page/Available/Earrings/6.png"],
    ["Resources/Products Page/Available/Earrings/7.png", "Resources/Products Page/Available/Earrings/8.png"],
    ["Resources/Products Page/Available/Earrings/9.png", "Resources/Products Page/Available/Earrings/10.png"],
    ["Resources/Products Page/Available/Earrings/11.png", "Resources/Products Page/Available/Earrings/12.png"],
    ["Resources/Products Page/Available/Earrings/13.png", "Resources/Products Page/Available/Earrings/14.png"]
];
const availNecklaceSecPics = [
    ["Resources/Products Page/Available/Necklaces/1.png", "Resources/Products Page/Available/Necklaces/2.png"],
    ["Resources/Products Page/Available/Necklaces/3.png", "Resources/Products Page/Available/Necklaces/4.png"],
    ["Resources/Products Page/Available/Necklaces/5.png", "Resources/Products Page/Available/Necklaces/6.png"],
    ["Resources/Products Page/Available/Necklaces/7.png", "Resources/Products Page/Available/Necklaces/8.png"],
    ["Resources/Products Page/Available/Necklaces/9.png", "Resources/Products Page/Available/Necklaces/10.png"],
    ["Resources/Products Page/Available/Necklaces/11.png", "Resources/Products Page/Available/Necklaces/12.png"],
    ["Resources/Products Page/Available/Necklaces/13.png", "Resources/Products Page/Available/Necklaces/14.png"],
    ["Resources/Products Page/Available/Necklaces/15.png", "Resources/Products Page/Available/Necklaces/16.png"],
    ["Resources/Products Page/Available/Necklaces/17.png", "Resources/Products Page/Available/Necklaces/18.png"],
    ["Resources/Products Page/Available/Necklaces/19.png", "Resources/Products Page/Available/Necklaces/20.png"],
    ["Resources/Products Page/Available/Necklaces/21.png", "Resources/Products Page/Available/Necklaces/22.png"],
    ["Resources/Products Page/Available/Necklaces/23.png", "Resources/Products Page/Available/Necklaces/24.png"],
    ["Resources/Products Page/Available/Necklaces/25.png", "Resources/Products Page/Available/Necklaces/26.png"]
];
const availRingSecPics = [
    ["Resources/Products Page/Available/Rings/1.png", "Resources/Products Page/Available/Rings/2.png"],
    ["Resources/Products Page/Available/Rings/3.png", "Resources/Products Page/Available/Rings/4.png"],
    ["Resources/Products Page/Available/Rings/5.png", "Resources/Products Page/Available/Rings/6.png"],
    ["Resources/Products Page/Available/Rings/7.png", "Resources/Products Page/Available/Rings/8.png"],
    ["Resources/Products Page/Available/Rings/9.png", "Resources/Products Page/Available/Rings/10.png"],
    ["Resources/Products Page/Available/Rings/11.png", "Resources/Products Page/Available/Rings/12.png"],
    ["Resources/Products Page/Available/Rings/13.png", "Resources/Products Page/Available/Rings/14.png"],
    ["Resources/Products Page/Available/Rings/15.png", "Resources/Products Page/Available/Rings/16.png"],
    ["Resources/Products Page/Available/Rings/17.png", "Resources/Products Page/Available/Rings/18.png"],
    ["Resources/Products Page/Available/Rings/19.png", "Resources/Products Page/Available/Rings/20.png"],
    ["Resources/Products Page/Available/Rings/21.png", "Resources/Products Page/Available/Rings/22.png"],
    ["Resources/Products Page/Available/Rings/23.png", "Resources/Products Page/Available/Rings/24.png"],
    ["Resources/Products Page/Available/Rings/25.png", "Resources/Products Page/Available/Rings/26.png"],
    ["Resources/Products Page/Available/Rings/27.png", "Resources/Products Page/Available/Rings/28.png"],
    ["Resources/Products Page/Available/Rings/29.png", "Resources/Products Page/Available/Rings/30.png"],
    ["Resources/Products Page/Available/Rings/31.png", "Resources/Products Page/Available/Rings/32.png"],
    ["Resources/Products Page/Available/Rings/33.png", "Resources/Products Page/Available/Rings/34.png"],
    ["Resources/Products Page/Available/Rings/35.png", "Resources/Products Page/Available/Rings/36.png"],
    ["Resources/Products Page/Available/Rings/37.png", "Resources/Products Page/Available/Rings/38.png"],
    ["Resources/Products Page/Available/Rings/39.png", "Resources/Products Page/Available/Rings/40.png"],
    ["Resources/Products Page/Available/Rings/41.png", "Resources/Products Page/Available/Rings/42.png"],
    ["Resources/Products Page/Available/Rings/43.png", "Resources/Products Page/Available/Rings/44.png"],
    ["Resources/Products Page/Available/Rings/45.png", "Resources/Products Page/Available/Rings/46.png"],
    ["Resources/Products Page/Available/Rings/47.png", "Resources/Products Page/Available/Rings/48.png"],
    ["Resources/Products Page/Available/Rings/49.png", "Resources/Products Page/Available/Rings/50.png"],
    ["Resources/Products Page/Available/Rings/51.png", "Resources/Products Page/Available/Rings/52.png"],
    ["Resources/Products Page/Available/Rings/53.png", "Resources/Products Page/Available/Rings/54.png"],
    ["Resources/Products Page/Available/Rings/55.png", "Resources/Products Page/Available/Rings/56.png"],
    ["Resources/Products Page/Available/Rings/57.png", "Resources/Products Page/Available/Rings/58.png"],
    ["Resources/Products Page/Available/Rings/59.png", "Resources/Products Page/Available/Rings/60.png"],
    ["Resources/Products Page/Available/Rings/61.png", "Resources/Products Page/Available/Rings/62.png"],
    ["Resources/Products Page/Available/Rings/63.png", "Resources/Products Page/Available/Rings/64.png"],
    ["Resources/Products Page/Available/Rings/65.png", "Resources/Products Page/Available/Rings/66.png"],
    ["Resources/Products Page/Available/Rings/67.png", "Resources/Products Page/Available/Rings/68.png"],
    ["Resources/Products Page/Available/Rings/69.png", "Resources/Products Page/Available/Rings/70.png"],
    ["Resources/Products Page/Available/Rings/71.png", "Resources/Products Page/Available/Rings/72.png"]
];
const availSetSecPics = [
    ["Resources/Products Page/Available/Sets/1.png", "Resources/Products Page/Available/Sets/2.png"]
];
const availStoneChainSecPics = [
    ["Resources/Products Page/Available/Stones Necklace slash Chain/1.png", "Resources/Products Page/Available/Stones Necklace slash Chain/2.png"],
    ["Resources/Products Page/Available/Stones Necklace slash Chain/3.png", "Resources/Products Page/Available/Stones Necklace slash Chain/4.png"],
    ["Resources/Products Page/Available/Stones Necklace slash Chain/5.png", "Resources/Products Page/Available/Stones Necklace slash Chain/6.png"],
    ["Resources/Products Page/Available/Stones Necklace slash Chain/7.png", "Resources/Products Page/Available/Stones Necklace slash Chain/8.png"],
    ["Resources/Products Page/Available/Stones Necklace slash Chain/9.png", "Resources/Products Page/Available/Stones Necklace slash Chain/10.png"],
    ["Resources/Products Page/Available/Stones Necklace slash Chain/11.png", "Resources/Products Page/Available/Stones Necklace slash Chain/12.png"],
    ["Resources/Products Page/Available/Stones Necklace slash Chain/13.png", "Resources/Products Page/Available/Stones Necklace slash Chain/14.png"]
];

// SECTION PICS FOR SOLD PRODUCTS
const soldRingSecPics = [
    "Resources/Products Page/Sold/Rings/1.jpg",
    "Resources/Products Page/Sold/Rings/2.jpg",
    "Resources/Products Page/Sold/Rings/3.jpg",
    "Resources/Products Page/Sold/Rings/4.jpg",
    "Resources/Products Page/Sold/Rings/5.jpg",
    "Resources/Products Page/Sold/Rings/6.jpg",
    "Resources/Products Page/Sold/Rings/7.jpg",
    "Resources/Products Page/Sold/Rings/8.jpg",
    "Resources/Products Page/Sold/Rings/9.jpg",
    "Resources/Products Page/Sold/Rings/10.jpg",
    "Resources/Products Page/Sold/Rings/11.jpg",
    "Resources/Products Page/Sold/Rings/12.jpg",
    "Resources/Products Page/Sold/Rings/13.jpg",
    "Resources/Products Page/Sold/Rings/14.jpg",
    "Resources/Products Page/Sold/Rings/15.jpg",
    "Resources/Products Page/Sold/Rings/16.jpg",
    "Resources/Products Page/Sold/Rings/17.jpg",
    "Resources/Products Page/Sold/Rings/18.jpg",
    "Resources/Products Page/Sold/Rings/19.jpg",
    "Resources/Products Page/Sold/Rings/20.jpg",
    "Resources/Products Page/Sold/Rings/21.jpg",
    "Resources/Products Page/Sold/Rings/22.jpg",
    "Resources/Products Page/Sold/Rings/23.jpg",
    "Resources/Products Page/Sold/Rings/24.jpg",
    "Resources/Products Page/Sold/Rings/25.jpg",
    "Resources/Products Page/Sold/Rings/26.jpg",
    "Resources/Products Page/Sold/Rings/27.jpg",
    "Resources/Products Page/Sold/Rings/28.jpg",
    "Resources/Products Page/Sold/Rings/29.jpg",
    "Resources/Products Page/Sold/Rings/30.jpg",
    "Resources/Products Page/Sold/Rings/31.jpg",
    "Resources/Products Page/Sold/Rings/32.jpg",
    "Resources/Products Page/Sold/Rings/33.jpg",
    "Resources/Products Page/Sold/Rings/34.jpg",
    "Resources/Products Page/Sold/Rings/35.jpg",
    "Resources/Products Page/Sold/Rings/36.jpg",
    "Resources/Products Page/Sold/Rings/37.jpg",
    "Resources/Products Page/Sold/Rings/38.jpg",
    "Resources/Products Page/Sold/Rings/39.jpg",
];
const soldNecklaceSecPics = [
    "Resources/Products Page/Sold/Necklaces/1.jpg",
    "Resources/Products Page/Sold/Necklaces/2.jpg",
    "Resources/Products Page/Sold/Necklaces/3.jpg",
    "Resources/Products Page/Sold/Necklaces/4.jpg",
    "Resources/Products Page/Sold/Necklaces/5.jpg",
    "Resources/Products Page/Sold/Necklaces/6.jpg",
    "Resources/Products Page/Sold/Necklaces/7.jpg",
    "Resources/Products Page/Sold/Necklaces/8.jpg",
    "Resources/Products Page/Sold/Necklaces/9.jpg",
    "Resources/Products Page/Sold/Necklaces/10.jpg",
    "Resources/Products Page/Sold/Necklaces/11.jpg",
    "Resources/Products Page/Sold/Necklaces/12.jpg",
    "Resources/Products Page/Sold/Necklaces/13.jpg",
    "Resources/Products Page/Sold/Necklaces/14.jpg",
    "Resources/Products Page/Sold/Necklaces/15.jpg",
    "Resources/Products Page/Sold/Necklaces/16.jpg",
    "Resources/Products Page/Sold/Necklaces/17.jpg",
    "Resources/Products Page/Sold/Necklaces/18.jpg",
    "Resources/Products Page/Sold/Necklaces/19.jpg",
    "Resources/Products Page/Sold/Necklaces/20.jpg",
    "Resources/Products Page/Sold/Necklaces/21.jpg",
    "Resources/Products Page/Sold/Necklaces/22.jpg",
    "Resources/Products Page/Sold/Necklaces/23.jpg",
    "Resources/Products Page/Sold/Necklaces/24.jpg",
    "Resources/Products Page/Sold/Necklaces/25.jpg"
];
const soldEarringSecPics = [
    "Resources/Products Page/Sold/Earrings/1.jpg",
    "Resources/Products Page/Sold/Earrings/2.jpg",
    "Resources/Products Page/Sold/Earrings/3.jpg",
    "Resources/Products Page/Sold/Earrings/4.jpg",
    "Resources/Products Page/Sold/Earrings/5.jpg",
    "Resources/Products Page/Sold/Earrings/6.jpg",
    "Resources/Products Page/Sold/Earrings/7.jpg",
    "Resources/Products Page/Sold/Earrings/8.jpg",
    "Resources/Products Page/Sold/Earrings/9.jpg",
    "Resources/Products Page/Sold/Earrings/10.jpg",
    "Resources/Products Page/Sold/Earrings/11.jpg",
    "Resources/Products Page/Sold/Earrings/12.jpg",
    "Resources/Products Page/Sold/Earrings/13.jpg",
    "Resources/Products Page/Sold/Earrings/14.jpg",
    "Resources/Products Page/Sold/Earrings/15.jpg",
    "Resources/Products Page/Sold/Earrings/16.jpg",
    "Resources/Products Page/Sold/Earrings/17.jpg",
    "Resources/Products Page/Sold/Earrings/18.jpg",
    "Resources/Products Page/Sold/Earrings/19.jpg",
    "Resources/Products Page/Sold/Earrings/20.jpg",
    "Resources/Products Page/Sold/Earrings/21.jpg"
];
const soldBraceletSecPics = [
    "Resources/Products Page/Sold/Bracelets/1.jpg",
    "Resources/Products Page/Sold/Bracelets/2.jpg",
    "Resources/Products Page/Sold/Bracelets/3.jpg",
    "Resources/Products Page/Sold/Bracelets/4.jpg",
    "Resources/Products Page/Sold/Bracelets/5.jpg",
    "Resources/Products Page/Sold/Bracelets/6.jpg",
    "Resources/Products Page/Sold/Bracelets/7.jpg",
    "Resources/Products Page/Sold/Bracelets/8.jpg",
    "Resources/Products Page/Sold/Bracelets/9.jpg",
    "Resources/Products Page/Sold/Bracelets/10.jpg",
    "Resources/Products Page/Sold/Bracelets/11.jpg",
    "Resources/Products Page/Sold/Bracelets/12.jpg",
    "Resources/Products Page/Sold/Bracelets/13.jpg",
    "Resources/Products Page/Sold/Bracelets/14.jpg",
    "Resources/Products Page/Sold/Bracelets/15.jpg",
    "Resources/Products Page/Sold/Bracelets/16.jpg"
];
const soldWatchSecPics = [
    "Resources/Products Page/Sold/Watches/1.jpg",
    "Resources/Products Page/Sold/Watches/2.jpg",
    "Resources/Products Page/Sold/Watches/3.jpg",
    "Resources/Products Page/Sold/Watches/4.jpg",
    "Resources/Products Page/Sold/Watches/5.jpg",
    "Resources/Products Page/Sold/Watches/6.jpg",
    "Resources/Products Page/Sold/Watches/7.jpg",
    "Resources/Products Page/Sold/Watches/8.jpg",
    "Resources/Products Page/Sold/Watches/9.jpg",
    "Resources/Products Page/Sold/Watches/10.jpg",
    "Resources/Products Page/Sold/Watches/11.jpg",
    "Resources/Products Page/Sold/Watches/12.jpg",
    "Resources/Products Page/Sold/Watches/13.jpg",
    "Resources/Products Page/Sold/Watches/14.jpg",
    "Resources/Products Page/Sold/Watches/15.jpg",
    "Resources/Products Page/Sold/Watches/16.jpg",
    "Resources/Products Page/Sold/Watches/17.jpg",
    "Resources/Products Page/Sold/Watches/18.jpg",
];
const prodHeaders = document.getElementById('prodHeaders')

// SUBHEADERS FOR EACH AVAILABILITY PAGE
const soldHeaders = ["Rings", "Necklaces", "Earrings", "Bracelets", "Watches"];
const availHeaders = ["Bracelets/Bangles", "Brooches/Pendants", "Earrings", "Necklaces", "Rings", "Sets", "Stone Necklaces/Chain"]

showAvailabilityPage(availabilityPageIndex);

// FUNCTION TO LOAD SUBHEADERS BASED ON AVAILABILITY
function loadHeaders(headers){
    prodHeaders.innerHTML = "";
    
    headers.forEach((text, index) => {
        const p = document.createElement("p");
        p.textContent = text;
        p.className = "prodHeader" + (index === 0 ? " active" : "");
        p.onclick = () => currentCategPage(index + 1);
        prodHeaders.appendChild(p);
    })
}

// FUNCTIONS TO CHANGE AVAILABILITY OF PRODUCT
function currentAvailability(n){                                        
    availabilityPageIndex = n;
    showAvailabilityPage(availabilityPageIndex);
}

// MAIN FUNCTION TO SHOW PAGES BASED ON AVAILABILITY
function showAvailabilityPage(n){                                       
   let availHeader = document.querySelectorAll(".prodAvailability");            
   let availPage = document.querySelectorAll(".availPage");
   categoryPageIndex = 1;

   for (let i = 0; i < availPage.length; i++){
        availHeader[i].classList.remove("active");
        availPage[i].style.display = "none";
   }
   availHeader[availabilityPageIndex - 1].classList.add("active");
   availPage[availabilityPageIndex - 1].style.display = "block";

   if (availabilityPageIndex === 1){
        loadHeaders(availHeaders);
   }
   else{
        loadHeaders(soldHeaders);
   }

   showCategPage(categoryPageIndex);
}

// FUNCTIONS TO CHANGE CATEGORY OF PRODUCT
function currentCategPage(n){                                          
    categoryPageIndex = n;
    showCategPage(categoryPageIndex);
}

// MAIN FUNCTION TO SHOW PAGES BASED ON CATEGORY
function showCategPage(n){                                              
    let header = document.querySelectorAll(".prodHeader");
    let availPage = document.querySelectorAll(".availPage");
    let activePage = null;
    let page = null;

    for (let i = 0; i < availPage.length; i++){                 // LOOP TO FIND WHICH AVAILABILTY PAGE IS ACTIVE
        if (availPage[i].style.display !== "none"){
            activePage = availPage[i];
            break;
        }
    }
    
    page = activePage.querySelectorAll(".allProds");

    for (let i = 0; i < page.length; i++){                      // LOOP TO HIDE ALL CATEGORIES
        header[i].classList.remove("active");
        page[i].style.display = "none";
    }
    header[categoryPageIndex - 1].classList.add("active");      // SETTING WHICH CATEGORY IS DISPLAYED
    page[categoryPageIndex - 1].style.display = "block";

    // IF "AVAILABLE" IS ACTIVE
    if (availabilityPageIndex === 1) {                          
        switch(categoryPageIndex){
            case 1: loadAvailPics(availBraceBangSecPics); break;
            case 2: loadAvailPics(availBroochPendSecPics); break;
            case 3: loadAvailPics(availEarringSecPics); break;
            case 4: loadAvailPics(availNecklaceSecPics); break;
            case 5: loadAvailPics(availRingSecPics); break;
            case 6: loadAvailPics(availSetSecPics); break;
            case 7: loadAvailPics(availStoneChainSecPics); break;
        }
    }

    // IF "SOLD" IS ACTIVE
    if (availabilityPageIndex === 2) {
        switch (categoryPageIndex){
            case 1: loadSoldPics(soldRingSecPics); break;
            case 2: loadSoldPics(soldNecklaceSecPics); break;
            case 3: loadSoldPics(soldEarringSecPics); break;
            case 4: loadSoldPics(soldBraceletSecPics); break;
            case 5: loadSoldPics(soldWatchSecPics); break;
        }
    }
}

// FUNCTION TO LOAD PICTURES BASED ON CATEGORY FOR SOLD ITEMS
function loadSoldPics(pics){
    const soldPage = document.querySelector("#sold");
    const soldProdContainers = soldPage.querySelectorAll(".prodContainer");
    const currentContainer = soldProdContainers[categoryPageIndex - 1];

    currentContainer.innerHTML = "";
    pics.forEach((directory) => {
        const img = document.createElement("img");
        img.src = directory; 
        img.className = "cardPic";
        img.alt = "Sold Product"
        currentContainer.appendChild(img)
    });
}

// FUNCTION TO LOAD PICTURES BASED ON CATEGORY FOR AVAILABLE ITEMS
function loadAvailPics(pairs){
    const availPage = document.querySelector("#available");
    const availProdContainers = availPage.querySelectorAll(".prodContainer");
    const currentContainer = availProdContainers[categoryPageIndex - 1];

    currentContainer.innerHTML = "";
    pairs.forEach(([front, back]) => {
        const prodItemDiv = document.createElement("div");
        prodItemDiv.className = "prodItem";

        const frontImg = document.createElement("img");
        frontImg.className = "frontImg";
        frontImg.src = front;

        const backImg = document.createElement("img");
        backImg.className = "backImg";
        backImg.src = back;

        prodItemDiv.appendChild(frontImg);
        prodItemDiv.appendChild(backImg);
        currentContainer.appendChild(prodItemDiv);
    });
}