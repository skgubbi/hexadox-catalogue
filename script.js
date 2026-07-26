const folderNames = {

    trichology: "images/trichology/",
    cosmetology: "images/cosmetology/",
    clinical: "images/clinical/"

};



const products = {


    trichology:[

        "Mincaffin F.png",
        "Tufhair Tablets.png",
        "Tufhair Serum.png",
        "Mincaffin Oral Tablets.png",
        "Mincaffin + Hair Solution.png",
        "Hexaphyte P Shampoo.png"

    ],


    cosmetology:[

        "Neoshield Ultra + Lotion.png",
        "Neohidrate Cream.png",
        "Hydradew Max Cream.png",
        "Hydradew Lotion.png",
        "HPPL Octiwash.png",
        "Hexasoft Syndet Bar.png"

    ],


    clinical:[

        "Zerophyte Cream.png",
        "Reticlear Gel.png",
        "Lulidox Cream.png",
        "Isohex Capsules.png",
        "Hexsalic Cream.png",
        "Hexaspor Capsules.png",
        "Grisohex 500 Tablets.png",
        "Bacticort H Cream.png",
        "Antihistamines.png"

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