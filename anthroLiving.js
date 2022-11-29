
    let navtop1data = [
        {
            name1: "lifetime",
            name2: "EXTRA 40% OFF ON ALL SALE ITEMS",
            name3: "shop's summery hottest style",
            name4: "all sales final see details",
            name5: "teal",
        },
        {
            name1: "new styles added!",
            name2: "25% OFF SELECT BEDDING, PILLOWS, RUGS & MORE",
            name3: "shop",
            name4: "online executive-see details",
            name5: "orange"
        },
        {
            name1: "look polished.",
            name2: "dress sharp",
            name3: "JUST IN: SUIT & TIE",
            name4: "start shopping",
            name5: "cornflowerblue"
        }
    ]

    let left = document.querySelector("#left")
    let right = document.querySelector("#right")
    let currentvalue = 0;

    right.addEventListener("click", (e) => {
        currentvalue++;
        if (currentvalue == navtop1data.length) {
            currentvalue = 0;
        }
        document.querySelector("#navtop1>div:nth-child(1)").innerText = navtop1data[currentvalue].name1
        document.querySelector("#navtop1>div:nth-child(2)").innerText = navtop1data[currentvalue].name2
        document.querySelector("#navtop1>div:nth-child(3)").innerText = navtop1data[currentvalue].name3
        document.querySelector("#navtop1>div:nth-child(4)").innerText = navtop1data[currentvalue].name4
        document.querySelector("#navtop1").style.background = navtop1data[currentvalue].name5

    })
    left.addEventListener("click", (e) => {
        currentvalue--;
        if (currentvalue < 0) {
            currentvalue = navtop1data.length - 1;
        }
        document.querySelector("#navtop1>div:nth-child(1)").innerText = navtop1data[currentvalue].name1
        document.querySelector("#navtop1>div:nth-child(2)").innerText = navtop1data[currentvalue].name2
        document.querySelector("#navtop1>div:nth-child(3)").innerText = navtop1data[currentvalue].name3
        document.querySelector("#navtop1>div:nth-child(4)").innerText = navtop1data[currentvalue].name4
        document.querySelector("#navtop1").style.background = navtop1data[currentvalue].name5

    })


    // border----------------------------------------------------------------------change
    let title = document.querySelector("title").innerText
    if (title == "Anthro Living Home") {
        document.querySelector("#livinghomepage").style.borderTop = "6px solid brown"

    }
    if (title == "Anthropologie") {
        document.querySelector("#homepage").style.borderTop = "7px solid teal"

    }

    // -------------------------------------button change ------------------------->
let anthrohomedata = [
{
    img:"https://images.ctfassets.net/5de70he6op10/3m46TEd7Xqvp71inYGu8Tc/d4f3ecf510f153e432a707377fabec4b/HomeL1_Gateway_LS_01-1.jpg?w=2640&q=80&fm=webp" ,
} ,
{
    img:"https://images.ctfassets.net/5de70he6op10/3kEvjLXXzyR41wK46chVOx/b6c45137c7630165b128cf2a68c59431/HomeL1_Gateway_LS_01-2_2x.jpg?w=2640&q=80&fm=webp",

},
{
    img:"https://images.ctfassets.net/5de70he6op10/6D7AmdNpnTIvaOI3lA8FeR/67f88d7148393f5373380e746c1ec9d8/HomeL1_Gateway_LS_01-3_2x.jpg?w=2640&q=80&fm=webp",

}
]

    let left2 = document.querySelector("#left2")
    let right2 = document.querySelector("#right2")
    let currentvalue2 = 0;

    right2.addEventListener("click", (e) => {
        currentvalue2++;
        if (currentvalue2 == anthrohomedata.length) {
            currentvalue2 = 0;
        }
        let photo = document.querySelector("#homepageimg2>a>img")
        photo.src=anthrohomedata[currentvalue2].img

        
       
    })
    left2.addEventListener("click", (e) => {
        currentvalue2--;
        if (currentvalue2 < 0) {
            currentvalue2 = anthrohomedata.length - 1;
        }
        let photo = document.querySelector("#homepageimg2>a>img")
        photo.src=anthrohomedata[currentvalue2].img
       
       

    })




