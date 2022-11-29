

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

    let homeslidedata = [
        {
            img1: "https://images.urbndata.com/is/image/Anthropologie/4130464030102_009_b2?$an-category$&qlt=80&fit=constrain",
            img2: "https://images.urbndata.com/is/image/Anthropologie/4130880890038_009_b?$an-category$&qlt=80&fit=constrain",
            img3: "https://images.urbndata.com/is/image/Anthropologie/4123650590185_030_b2?$an-category$&qlt=80&fit=constrain",
            img4: "https://images.urbndata.com/is/image/Anthropologie/4110916210129_010_b14?$an-category$&qlt=80&fit=constrain",
            img5: "https://images.urbndata.com/is/image/Anthropologie/66072398_041_b2?$an-category$&qlt=80&fit=constrain",

        },
        {
            img1: "https://images.urbndata.com/is/image/Anthropologie/4130675950009_079_b?$an-category$&qlt=80&fit=constrain",
            img2: "https://images.urbndata.com/is/image/Anthropologie/4130916210064_010_b2?$an-category$&qlt=80&fit=constrain",
            img3: "https://images.urbndata.com/is/image/Anthropologie/4130089450010_040_b2?$an-category$&qlt=80&fit=constrain",
            img4: "https://images.urbndata.com/is/image/Anthropologie/4130464030170_018_b2?$an-category$&qlt=80&fit=constrain",
            img5: "https://images.urbndata.com/is/image/Anthropologie/4123652010014_052_b2?$an-category$&qlt=80&fit=constrain",
        },
        {
            img1: "https://images.urbndata.com/is/image/Anthropologie/4130652010053_266_b2?$an-category$&qlt=80&fit=constrain",
            img2: "https://images.urbndata.com/is/image/Anthropologie/4123650590131_001_b14?$an-category$&qlt=80&fit=constrain",
            img3: "https://images.urbndata.com/is/image/Anthropologie/4120638570049_032_b2?$an-category$&qlt=80&fit=constrain",
            img4: "https://images.urbndata.com/is/image/Anthropologie/69046183_266_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
            img5: "https://images.urbndata.com/is/image/Anthropologie/4130370060072_083_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        }
    ]

    let imagecount = 0;

    let left1 = document.getElementById("left1")
    let right1 = document.getElementById("right1")


    right1.addEventListener("click", (e) => {
        imagecount++
        if (imagecount == homeslidedata.length) {
            imagecount = 0;
        }
        document.querySelector("#slidehomepage2>div:nth-child(1)>img").src = homeslidedata[imagecount].img1
        document.querySelector("#slidehomepage2>div:nth-child(2)>img").src = homeslidedata[imagecount].img2
        document.querySelector("#slidehomepage2>div:nth-child(3)>img").src = homeslidedata[imagecount].img3
        document.querySelector("#slidehomepage2>div:nth-child(4)>img").src = homeslidedata[imagecount].img4
        document.querySelector("#slidehomepage2>div:nth-child(5)>img").src = homeslidedata[imagecount].img5


    })
    left1.addEventListener("click", (e) => {
        imagecount--
        if (imagecount < 0) {
            imagecount = homeslidedata.length - 1
        }
        document.querySelector("#slidehomepage2>div:nth-child(1)>img").src = homeslidedata[imagecount].img1
        document.querySelector("#slidehomepage2>div:nth-child(2)>img").src = homeslidedata[imagecount].img2
        document.querySelector("#slidehomepage2>div:nth-child(3)>img").src = homeslidedata[imagecount].img3
        document.querySelector("#slidehomepage2>div:nth-child(4)>img").src = homeslidedata[imagecount].img4
        document.querySelector("#slidehomepage2>div:nth-child(5)>img").src = homeslidedata[imagecount].img5


    })
  

    // border-----------------------------------------------------------------change
    let title=  document.querySelector("title").innerText
        if(title == "Anthro Living Home"){
            document.querySelector("#livinghomepage").style.borderTop="6px solid brown"
            
        }
        else if(title == "Anthropologie"){
            document.querySelector("#homepage").style.borderTop="7px solid teal"
            
        }
