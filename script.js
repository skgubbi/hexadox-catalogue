const folderNames = {

    trichology: "images/trichology/",
    cosmetology: "images/cosmetology/",
    clinical: "images/clinical/"

};



const products = {


    trichology:[

        "mincaffin-plus.webp",
        "mincaffin-f.webp",
        "mincaffin-oral-tablets.webp",
        "tufhair-serum.webp",
        "tufhair-tablets.webp",
        "hexaphyte-p-shampoo.webp"
        
    ],


    cosmetology:[

        "neoshield-ultra-plus-50.webp",
        "neohidrate-cream.webp",
        "hydradew-max-cream.webp",
        "hydradew-lotion.webp",
        "octiwash.webp",
        "hexasoft-syndet-bar.webp"

    ],


    clinical:[

        "grisohex-500-tablets.webp",
        "zerophyte-cream.webp",
        "lulidox-cream.webp",
        "reticlear-gel.webp",
        "bacticort-h-cream.webp",
        "isohex-caps.webp",
        "hexsalic-cream.webp",
        "hexaspor-caps.webp",
        "antihistamines.webp"  
        
    ]

};




function openCategory(category){


    document.getElementById("home")
    .classList.add("hidden");


    document.getElementById("gallery")
    .classList.remove("hidden");


    let area=document.getElementById("products");


    area.innerHTML="";



    products[category].forEach(function(image){


        let box=document.createElement("div");


        box.className="glass product";


        let path =
        folderNames[category] +
        encodeURIComponent(image);



        box.innerHTML=

        `
        <img src="${path}" 
        onclick="openImage('${path}')">
        `;



        area.appendChild(box);


    });


}





function openImage(src){


    document.getElementById("gallery")
    .classList.add("hidden");


    document.getElementById("viewer")
    .classList.remove("hidden");


    document.getElementById("largeImage")
    .src=src;


}




function backGallery(){


    document.getElementById("viewer")
    .classList.add("hidden");


    document.getElementById("gallery")
    .classList.remove("hidden");


}




function goHome(){


    document.getElementById("gallery")
    .classList.add("hidden");


    document.getElementById("home")
    .classList.remove("hidden");


}

function openFullscreen(src) {
    const viewer = document.createElement("div");
    viewer.className = "image-viewer";

    viewer.innerHTML = `
        <img src="${src}">
        <button onclick="this.parentElement.remove()">✕</button>
    `;

    document.body.appendChild(viewer);
}
