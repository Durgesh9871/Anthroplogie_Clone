



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

    let saledata = [
    
    
       
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
        }, 
        {
            img:"https://images.urbndata.com/is/image/Anthropologie/62985262_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Henderson Bookshelf" ,
            price:"1,499" ,
            producttype: "amber lewis" ,
            color:"black" ,
        },
        {
            img:"https://images.urbndata.com/is/image/Anthropologie/65070898_220_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Rattan Lidded Ceramic Candle" ,
            price:"19" ,
            producttype: "amber lewis" ,
            color:"brown" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/65535429_040_b11?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Sunrar Reed Diffuser" ,
            price:"20" ,
            producttype: "anthropologie" ,
            color:"blue" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/67118760_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Raffia Basket" ,
            price:"189" ,
            producttype: "across africa" ,
            color:"black" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/67957084_046_b10?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Teal Gourad Bird House" ,
            price:"39" ,
            producttype: "across africa" ,
            color:"yellow" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/66295684_010_b10?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Floral Bouqet Diffuser" ,
            price:"19" ,
            producttype: "anthropologie" ,
            color:"white" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/45407841AA_011_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Hill View Duvet Cover" ,
            price:"269" ,
            producttype: "amber lewis" ,
            color:"white" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/62883913_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Hanging Basket" ,
            price:"40" ,
            producttype: "across africa" ,
            color:"yellow" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/62130752_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"" ,
            price:"1,399" ,
            producttype: "amber lewis" ,
            color:"black" ,
        }, 
         {
            img:"https://images.urbndata.com/is/image/Anthropologie/65063927_066_b10?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Taper Duo Candle" ,
            price:"29" ,
            producttype: "anthropologie" ,
            color:"red" ,
        },
       
         {
            img:"https://images.urbndata.com/is/image/Anthropologie/45407381AG_059_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Gwendolen Euro Shem" ,
            price:"29" ,
            producttype: "amber lewis" ,
            color:"brown" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/64741796_049_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Juliette Oil" ,
            price:"9" ,
            producttype: "anthropologie" ,
            color:"white" ,
        }, {
            img:"https://images.urbndata.com/is/image/Anthropologie/62922893_027_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Brass Decorative Object" ,
            price:"29" ,
            producttype: "amber lewis" ,
            color:"brown" ,
        }
        ]

        let total = document.querySelector("#counting")
     
     display(saledata)
 
 //  -----------------------------------FILTER BY PRODUCT TYPE 
     let productType = document.querySelector("#brand")
     productType.addEventListener("change" ,(e)=>{
          let productValue = document.querySelector("#brand").value 
          if(productValue == "brand"){
             display(saledata)
          }
          else{
          let productSort = saledata.filter((e)=>{
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
             display(saledata)
             
         }
 
            else{
                      if(priceValue == "25"){
                 let less = saledata.filter((e)=>{
                      return Number(e.price) < Number(priceValue) && (e.productname !== "")
                 })
                 display(less)
            }
            else if(priceValue == 50){
             let less = saledata.filter((e)=>{
                      return Number(e.price) < Number(priceValue) && (Number(e.price) >= Number(25))
                 })
                 display(less)
             }
             else if(priceValue == 100){
             let less = saledata.filter((e)=>{
                      return Number(e.price) < Number(priceValue) && (Number(e.price) >= Number(50))
                 })
                 display(less)
             }
             else if(priceValue == 200){
             let less = saledata.filter((e)=>{
                      return Number(e.price) < Number(priceValue) && (Number(e.price) >= Number(100))
                 })
                 display(less)
             }
             else if(priceValue == 500){
             let less = saledata.filter((e)=>{
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
             display(saledata)
         }
         else{
         let colorsort = saledata.filter((e)=>{
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
            saledata.sort(function(a,b){
                 if(+a.price > +b.price) return 1 
                 if(+a.price < +b.price) return -1 
             })
             display(saledata)
         }
         if(ascenValue == "descending"){
            saledata.sort(function(a,b){
                 if(+a.price > +b.price) return -1 
                 if(+a.price < +b.price) return 1 
             })
             display(saledata)
         }
     })
     
     function display(saledata){
 
           
 
 
 
 
         document.querySelector("#productItems").innerHTML = ""
         let count = 0 ;
         saledata.forEach(function (elem){
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
 
 







