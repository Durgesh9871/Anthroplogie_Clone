


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
     
    //  -----------------------------CLOTH CODE ----------------------------

  let clothdata = [
        
 
         {
            img:"https://images.urbndata.com/is/image/Anthropologie/67068759_072_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Mid Somar Bralette" ,
            price:"22" ,
            producttype: "anthropologie" ,
            color:"yellow" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/4122925890017_072_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Crop Straight Jeans" ,
            price:"19" ,
            producttype: "amo" ,
            color:"yellow" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/68153493_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Lace Bodysuit" ,
            price:"88" ,
            producttype: "anthropologie" ,
            color:"black" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/64201411_016_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"V neck Bralette" ,
            price:"13" ,
            producttype: "anthropologie" ,
            color:"" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/66026899_062_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Tie Braker Skort" ,
            price:"78" ,
            producttype: "beyond yoga" ,
            color:"pink" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/69923266_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"High Rise Middi Leggings" ,
            price:"98" ,
            producttype: "beyond yoga" ,
            color:"black" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/4112449700005_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Layered Cutout Tank" ,
            price:"88" ,
            producttype: "anthropologie" ,
            color:"black" ,
        },
        {
            img:"https://images.urbndata.com/is/image/Anthropologie/64222805_083_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"T Back Bralette" ,
            price:"24" ,
            producttype: "anthropologie" ,
            color:"red" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/76013069_090_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Bikni Top" ,
            price:"108" ,
            producttype: "beach riot" ,
            color:"Black" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/64200108_012_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Seamless Bandeau Bralette" ,
            price:"56" ,
            producttype: "anthropologie" ,
            color:"white" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/64218787_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Longline Bralette" ,
            price:"24" ,
            producttype: "anthropologie" ,
            color:"black" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/4130916210036_059_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Silk Halter Midi Dress" ,
            price:"248" ,
            producttype: "anthropologie" ,
            color:"yellow" ,
        },
          {
            img:"https://images.urbndata.com/is/image/Anthropologie/4112920000003_011_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Mock Neck Top" ,
            price:"48" ,
            producttype: "anthropologie" ,
            color:"white" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/67805515_035_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Markie Thong" ,
            price:"22" ,
            producttype: "anthropologie" ,
            color:"yellow" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/67068668_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Lace Hipster Breif" ,
            price:"16" ,
            producttype: "anthropologie" ,
            color:"black" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/64820277_009_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Mesh Traingle Bralette" ,
            price:"15" ,
            producttype: "anthropologie" ,
            color:"black" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/66568825_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Asymetrical Body Suit" ,
            price:"148" ,
            producttype: "agoldy" ,
            color:"pink" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/4122225550573_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Chris Cross Straight Jeans" ,
            price:"208" ,
            producttype: "agoldy" ,
            color:"black" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/4122225550575_091_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Pinch Waist Jeans" ,
            price:"198" ,
            producttype: "agoldy" ,
            color:"blue" ,
        },
        {
            img:"https://images.urbndata.com/is/image/Anthropologie/64219207_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Seamless Hipster Brief" ,
            price:"12" ,
            producttype: "anthropologie" ,
            color:"black" ,
        },
          {
            img:"https://images.urbndata.com/is/image/Anthropologie/4125225550081_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Stella Shorts" ,
            price:"148" ,
            producttype: "agoldy" ,
            color:"black" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/4120225550027_045_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Denim Mini Skirt" ,
            price:"168" ,
            producttype: "agoldy" ,
            color:"blue" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/4122225550526_092_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Botcut Jeans" ,
            price:"198" ,
            producttype: "agoldy" ,
            color:"blue" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/4125225550099_107_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Parker Denim Shorts" ,
            price:"138" ,
            producttype: "agoldy" ,
            color:"blue" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/4125225550080_106_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Agolde Stella Shorts" ,
            price:"145" ,
            producttype: "agoldy" ,
            color:"white" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/4122225550521_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Cropped Jeans" ,
            price:"white" ,
            producttype: "agoldy" ,
            color:"138" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/4125225550082_107_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Stella Vintage Denim Shorts" ,
            price:"168" ,
            producttype: "agoldy" ,
            color:"blue" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/4122225550556_093_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Waist Straight Jeans" ,
            price:"188" ,
            producttype: "agoldy" ,
            color:"blue" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/4125225550102_107_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Long Denim Shorts" ,
            price:"138" ,
            producttype: "agoldy" ,
            color:"blue" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/4112225550052_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Isla Cutout Tank" ,
            price:"118" ,
            producttype: "agoldy" ,
            color:"Black" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/54461314_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Ribbed Bodysuit" ,
            price:"78" ,
            producttype: "agoldy" ,
            color:"black" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/4122225550527_092_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Distrassed Jeans" ,
            price:"228" ,
            producttype: "agoldy" ,
            color:"blue" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/4115225550030_092_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Denim Jacket" ,
            price:"198" ,
            producttype: "agoldy" ,
            color:"blue" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/4122225550519_092_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Straight Jeans" ,
            price:"198" ,
            producttype: "agoldy" ,
            color:"blue" ,
        },  {
            img:"https://images.urbndata.com/is/image/Anthropologie/4122225550524_093_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" ,
            productname:"Bootcut Jeans" ,
            price:"198" ,
            producttype: "agoldy" ,
            color:"blue" ,
        },
  ]

  let total = document.querySelector("#counting")
     
     display(clothdata)
 
 //  -----------------------------------FILTER BY PRODUCT TYPE 
     let productType = document.querySelector("#product-type")
     productType.addEventListener("change" ,(e)=>{
          let productValue = document.querySelector("#product-type").value 
          if(productValue == "product"){
             display(clothdata)
          }
          else{
          let productSort = clothdata.filter((e)=>{
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
             display(clothdata)
             
         }
 
            else{
                      if(priceValue == "25"){
                 let less = clothdata.filter((e)=>{
                      return Number(e.price) < Number(priceValue) && (e.productname !== "")
                 })
                 display(less)
            }
            else if(priceValue == 50){
             let less = clothdata.filter((e)=>{
                      return Number(e.price) < Number(priceValue) && (Number(e.price) >= Number(25))
                 })
                 display(less)
             }
             else if(priceValue == 100){
             let less = clothdata.filter((e)=>{
                      return Number(e.price) < Number(priceValue) && (Number(e.price) >= Number(50))
                 })
                 display(less)
             }
             else if(priceValue == 200){
             let less = clothdata.filter((e)=>{
                      return Number(e.price) < Number(priceValue) && (Number(e.price) >= Number(100))
                 })
                 display(less)
             }
             else if(priceValue == 500){
             let less = clothdata.filter((e)=>{
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
             display(clothdata)
         }
         else{
         let colorsort = clothdata.filter((e)=>{
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
            clothdata.sort(function(a,b){
                 if(+a.price > +b.price) return 1 
                 if(+a.price < +b.price) return -1 
             })
             display(clothdata)
         }
         if(ascenValue == "descending"){
            clothdata.sort(function(a,b){
                 if(+a.price > +b.price) return -1 
                 if(+a.price < +b.price) return 1 
             })
             display(clothdata)
         }
     })
     
     function display(clothdata){
 
           
 
 
 
 
         document.querySelector("#productItems").innerHTML = ""
         let count = 0 ;
         clothdata.forEach(function (elem){
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
 
 
