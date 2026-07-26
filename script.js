const folderNames = {

    trichology: "images/trichology/",
    cosmetology: "images/cosmetology/",
    clinical: "images/clinical/"

};



const products = {


    trichology:[

        "mincaffin-f.png",
        "tufhair-tablets.png",
        "tufhair-serum.png",
        "mincaffin-oral-tablets.png",
        "mincaffin-plus.png",
        "hexaphyte-p-shampoo.png"

    ],


    cosmetology:[

        "neoshield-ultra-plus-50.png",
        "neohidrate-cream.png",
        "hydradew-max-cream.png",
        "hydradew-lotion.png",
        "octiwash.png",
        "hexasoft-syndet-bar.png"

    ],


    clinical:[

        "zerophyte-cream.png",
        "reticlear-gel.png",
        "lulidox-cream.png",
        "isohex-caps.png",
        "hexsalic-cream.png",
        "hexaspor-caps.png",
        "grisohex-500-tablets.png",
        "bacticort-h-cream.png",
        "antihistamines.png"

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
