

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
      
 
    let beddingdata = [
        {
            img:"https://images.ctfassets.net/5de70he6op10/3F3IbUamsm7bOHdLAnxcv6/c14d4dc676354ad3f424c8805cc62a4c/July22_25OffBeddingPillowsBath_OutCatTile_04.jpg?w=546&q=80&fm=webp" ,
            productname:"" ,
            price:"" ,
            producttype: "" ,
            color:"" ,
        },
        {
            img:"https://images.urbndata.com/is/image/Anthropologie/45407863AA_011_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Bronte Duvet Cover" ,
            price:"98" ,
            producttype: "sheets" ,
            color:"white" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/45457843AA_031_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Woven Bronte Pillow" ,
            price:"66" ,
            producttype: "throwpillows" ,
            color:"pink" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/65336273_004_b3?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Moroccan Wool Blanket" ,
            price:"228" ,
            producttype: "throws" ,
            color:"grey" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/45407866AD_045_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Print Fresh Sheet" ,
            price:"208" ,
            producttype: "sheets" ,
            color:"blue" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/45409388AA_067_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Joaquin Quilt" ,
            price:"228" ,
            producttype: "pillowshamps" ,
            color:"pink" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/45457823AA_011_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Pillow Cover" ,
            price:"128" ,
            producttype: "throwpillows" ,
            color:"white" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/66667742_095_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Parasol Beach Blanket" ,
            price:"73" ,
            producttype: "towel" ,
            color:"blue" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/45407437AD_066_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Organic Sateen Sheet" ,
            price:"43" ,
            producttype: "sheets" ,
            color:"pink" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/45457831AA_066_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Suillivan Pillow" ,
            price:"98" ,
            producttype: "pillowshamps" ,
            color:"red" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/56258999_012_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Rifle Paper Pillow" ,
            price:"90" ,
            producttype: "throwpillows" ,
            color:"white" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/45407835AD_040_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Percale Sheet Set" ,
            price:"58" ,
            producttype: "sheets" ,
            color:"black" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/45407869AG_080_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Organic Euro Shamp" ,
            price:"66" ,
            producttype: "pillowshamps" ,
            color:"green" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/45457853AA_066_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Woven Silk Pillow" ,
            price:"66" ,
            producttype: "throwpillows" ,
            color:"red" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/66937251_095_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Birdie Shamps" ,
            price:"66" ,
            producttype: "pillowshamps" ,
            color:"red" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/69511277_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Alternative Pillow" ,
            price:"80" ,
            producttype: "sheets" ,
            color:"white" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/4545Z073AA_099_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Andersen Wool Pillow" ,
            price:"78" ,
            producttype: "throwpillows" ,
            color:"blue" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/68892447_018_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Novella Throw Blanket" ,
            price:"128" ,
            producttype: "throws" ,
            color:"black" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/64878507_074_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Velvet Minarva Pillow" ,
            price:"88" ,
            producttype: "throwpillows" ,
            color:"yellow" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/45407416AC_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Blend Bed Skirt" ,
            price:"108" ,
            producttype: "throws" ,
            color:"grey" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/45457426AA_035_b10?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Blend Pillow" ,
            price:"51" ,
            producttype: "pillowshamps" ,
            color:"yellow" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/68241033_095_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Lake Side Pillow" ,
            price:"78" ,
            producttype: "throwpillows" ,
            color:"pink" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/4540Z020AB_011_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Embroidered Livia Shamps" ,
            price:"88" ,
            producttype: "pillowshamps" ,
            color:"white" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/69175172_040_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Jacquard Chenille Roseto" ,
            price:"88" ,
            producttype: "throws" ,
            color:"blue" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/45407803AD_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Sateen Sheet set" ,
            price:"150" ,
            producttype: "sheets" ,
            color:"white" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/45407872AA_054_b10?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Blend Duvet Cover" ,
            price:"125" ,
            producttype: "throws" ,
            color:"pink" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/4540Z087AB_099_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Organic Sateen Shamps" ,
            price:"98" ,
            producttype: "pillowshamps" ,
            color:"blue" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/65858854_066_b3?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Floral Printed Blanket" ,
            price:"96" ,
            producttype: "throws" ,
            color:"grey" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/4545Z025AA_099_b3?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Velvet Pillow" ,
            price:"98" ,
            producttype: "pillowshamps" ,
            color:"green" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/45407355AB_044_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Lustered Velvet Shamps" ,
            price:"88" ,
            producttype: "pillowshamps" ,
            color:"grey" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/4545Z009AA_052_b13?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Velvet Trola Pillow" ,
            price:"78" ,
            producttype: "throwpillows" ,
            color:"pink" ,
        },
        {
            img:"https://images.urbndata.com/is/image/Anthropologie/68892447_018_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Novella Throw Blanket" ,
            price:"128" ,
            producttype: "throws" ,
            color:"black" ,
        }
    ]
    let total = document.querySelector("#counting")
     
    display(beddingdata)

//  -----------------------------------FILTER BY PRODUCT TYPE 
    let productType = document.querySelector("#product-type")
    productType.addEventListener("change" ,(e)=>{
         let productValue = document.querySelector("#product-type").value 
         if(productValue == "product"){
            display(beddingdata)
         }
         else{
         let productSort = beddingdata.filter((e)=>{
             return e.producttype==productValue
         })
         display(productSort)
         }
    })

    // FILTER BY PRICE ----------------------------------------------------------->
      
    let price = document.querySelector("#Price")
    price.addEventListener("change" ,(e)=>{
        let priceValue = document.querySelector("#Price").value
           if(priceValue == "p"){
            display(beddingdata)
            
        }

           else{
                     if(priceValue == "25"){
                let less = beddingdata.filter((e)=>{
                     return Number(e.price) < Number(priceValue) && (e.productname !== "")
                })
                display(less)
           }
           else if(priceValue == 50){
            let less = beddingdata.filter((e)=>{
                     return Number(e.price) < Number(priceValue) && (Number(e.price) >= Number(25))
                })
                display(less)
            }
            else if(priceValue == 100){
            let less = beddingdata.filter((e)=>{
                     return Number(e.price) < Number(priceValue) && (Number(e.price) >= Number(50))
                })
                display(less)
            }
            else if(priceValue == 200){
            let less = beddingdata.filter((e)=>{
                     return Number(e.price) < Number(priceValue) && (Number(e.price) >= Number(100))
                })
                display(less)
            }
            else if(priceValue == 500){
            let less = beddingdata.filter((e)=>{
                     return Number(e.price) < Number(priceValue) && (Number(e.price) >= Number(200))
                })
                display(less)
            }
            
        }

    })

    // filter by color ----------------------------------------->
      
    let color = document.querySelector("#color")
    color.addEventListener("change",(e)=>{
        let colorValue = document.querySelector("#color").value 
           
        if(colorValue == "no"){
            display(beddingdata)
        }
        else{
        let colorsort = beddingdata.filter((e)=>{
              return e.color == colorValue
        })
        display(colorsort)
    }
    })
    
    // ---------------------------------------------------------------ascending sort ---

    let ascen = document.querySelector("#sorting")
    ascen.addEventListener("change" ,(e)=>{
          let ascenValue = document.querySelector("#sorting").value 
           
          if(ascenValue == "ascending"){
            beddingdata.sort(function(a,b){
                if(+a.price > +b.price) return 1 
                if(+a.price < +b.price) return -1 
            })
            display(beddingdata)
        }
        if(ascenValue == "descending"){
            beddingdata.sort(function(a,b){
                if(+a.price > +b.price) return -1 
                if(+a.price < +b.price) return 1 
            })
            display(beddingdata)
        }
    })
    
    function display(beddingdata){

          




        document.querySelector("#productItems").innerHTML = ""
        let count = 0 ;
    beddingdata.forEach(function (elem){
        count++
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src=elem.img
        let name = document.createElement("p")
        name.innerText=elem.productname
        name.style.fontSize="14px"
        let price = document.createElement("p")
        if(elem.price !== ""){
        price.innerText ="$"+elem.price
        price.style.color="grey"
        price.style.fontSize="14px"
        }


        div.append(img,name,price)
        document.querySelector("#productItems").append(div)
    })

    if(count == 0){
        total.innerText="Sorry Item Is Out Of Stock"
    }
    else{

        total.innerText = count
    }
    

}




 
  
