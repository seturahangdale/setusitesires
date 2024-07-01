const mamaearthskincare = [
    {
        name: "Vitamin C Daily Glow Face Cream With Vitamin C & Turmeric for Skin Illumination - 80 g",
        price: "₹219",
        ratings: 4.9,
        reviews: 133,
        imageUrl: "vit-c 1.png",
        bgcolor:"##CBE59E",
        circlecolor:"#f7bb42"
    },
    {
        name: "Rice Oil-Free Face Moisturizer With Rice Water & Niacinamide for Glass Skin - 80 g",
        price: "₹280",
        ratings: 3.7,
        reviews: 238,
        imageUrl: "rice-oil-free 2.png",
        bgcolor:"#c4a591",
        circlecolor:"#8e6b54"
    },
    {
       name:"Multani Mitti Moisturizing Lotion Soap (Value Pack of 4) - 125 g X 4",
       price:"₹328",
       ratings:"4.7",
       reviews:"254",
       imageUrl:"front-with-ingredients-3.png",
    },
    {
      name:"Beetroot Hydraful Moisturizer With Beetroot & Hyaluronic Acid - 50 ml",
      price:"₹300",
      ratings:"4.6",
      reviews:"376",
      imageUrl:"1-with-ingredients_4-removebg-preview.png",
   },
   {
    name:"Rice Facial Kit With Rice Water & Niacinamide for Glass Skin - 60 g",
    price:"₹347",
    ratings:"4.8",
    reviews:"297",
    imageUrl:"rice facitl kit-5.png",
    },
    {
     name:"Bye Bye Blemishes Face Cream for Reducing Pigmentation and Blemishes with Mulberry Extract and Vitamin C -30ml",
     price:"₹414",
     ratings:"5.0",
     reviews:"178",
     imageUrl:"face cream -6.png",
   },
   {
     name:"Vitmin C daily glow face serum 10ml",
     price:"₹198",
     ratings:"4.9",
     reviews:"139",
     imageUrl:"vit-c-serum-7.png",
   },
   {
     name:"vitmin C foming face wash with vitmin C and turmeric for skin illumination 150ml",
     price:"₹343",
     ratings:"5.0",
     reviews:"154",
     imageUrl:"face-wash-8.png",
   },
   {
     name:"Aloe vera gel for skin and hair 300ml",
     price:"₹280",
     ratings:"4.4",
     reviews:"123",
     imageUrl:"aloe_vera_gel-9.png",
   },
   {
     name:"Beetroot hydraful essesnce serum-15ml",
     price:"₹299",
     ratings:"3.7",
     reviews:"478",
     imageUrl:"beetroot-essence-10.png",
   },
   {
     name:"Beetroot hydraful essence serum-50ml",
     price:"₹389",
     ratings:"4.0",
     reviews:"275",
     imageUrl:"beetroot-essence-11.png",
   },
    
];


var container8=document.querySelector(".page2 .container8")
var card8=document.querySelector(".card8")
var imgbx=document.querySelector(".imgbx")
var img=document.querySelector("img")
var contentbx=document.querySelector(".contentBx")
var rating=document.querySelector(".rating")
var review=document.querySelector(".review")
var btn=document.querySelector("button")

var card8=""

mamaearthskincare.forEach(function(value){
  card8+=`
   <div class="card8">
            <div class="imgBx">
              <img src="${value.imageUrl}">
            </div>
            <div class="contentBx">
              <h2>${value.name}</h2>
              <div class="rating">
                <h3>Rating :</h3>
                <span>${value.ratings}</span>
                <i class="ri-star-s-fill color-white"></i>
              </div>
              <div class="review">
                <h3>Review :${value.reviews}</h3>
              </div>
                 <div class="flex justify-center">
                 <button
            class="relative flex  gap-6 mt-2 py-[4px] px-4  font-medium text-base nded-full overflow-hidden bg-[#e6f7eb] rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-[#67564f] hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#beeaca] before:to-[#beeaca] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
          >
            ADD TO CART  <h1>Price:${value.price}</h1> 
          </button>
            </div>
          </div>
        </div> `
})

console.log(card8)
container8.innerHTML=card8











const mamaearthbabycare = [
    {
        name: "Milky soft shampoo with oats,milk and calendula",
        details:"balance scalp ph",
        price: "₹404",
        ratings: 4.9,
        reviews: 633,
        imageUrl: "baby care-1.png",
        bgcolor:"##CBE59E",
        circlecolor:"#f7bb42"
    },
    {
        name: "milky soft body lotion for babies with oats,milk and calendula for babies",
        details:"Deeply nourishes skin",
        price: "₹404",
        ratings: 4.7,
        reviews: 638,
        imageUrl: "baby care-2.png",
        bgcolor:"#c4a591",
        circlecolor:"#8e6b54"
    },
    {
       name:"moisturizing bathing Bar soap for babies (pack of 4*75g)",
       details:"Retains moisture",
       price:"₹449",
       ratings:"4.7",
       reviews:"254",
       imageUrl:"baby care-3.png",
    },
    {
      name:"mamaearth baby rich moisturizing ultra light sunscreen",
      details:"water resistant",
      price:"₹359",
      ratings:"4.6",
      reviews:"376",
      imageUrl:"baby care-4.png",
   },
   {
    name:"milky soft face cream with murumuru butter for babies-60ml",
    price:"₹179",
    ratings:"4.8",
    reviews:"297",
    imageUrl:"baby care-5.png",
    },
    {
      name: "Milky soft shampoo with oats,milk and calendula",
      details:"balance scalp ph",
      price: "₹404",
      ratings: 4.9,
      reviews: 633,
      imageUrl: "baby care-1.png",
      bgcolor:"##CBE59E",
      circlecolor:"#f7bb42"
  },
  {
      name: "milky soft body lotion for babies with oats,milk and calendula for babies",
      details:"Deeply nourishes skin",
      price: "₹404",
      ratings: 4.7,
      reviews: 638,
      imageUrl: "baby care-2.png",
      bgcolor:"#c4a591",
      circlecolor:"#8e6b54"
  },
  {
     name:"moisturizing bathing Bar soap for babies (pack of 4*75g)",
     details:"Retains moisture",
     price:"₹449",
     ratings:"4.7",
     reviews:"254",
     imageUrl:"baby care-3.png",
  },
  {
    name:"mamaearth baby rich moisturizing ultra light sunscreen",
    details:"water resistant",
    price:"₹359",
    ratings:"4.6",
    reviews:"376",
    imageUrl:"baby care-4.png",
  },
  {
  name:"milky soft face cream with murumuru butter for babies-60ml",
  price:"₹179",
  ratings:"4.8",
  reviews:"297",
  imageUrl:"baby care-5.png",
  },
  
  ];
  
  
  var container9=document.querySelector(".page2 .container9")
  var card9=document.querySelector(".card9")
  var imgbx=document.querySelector(".imgbx")
  var img=document.querySelector("img")
  var contentbx=document.querySelector(".contentBx")
  var rating=document.querySelector(".rating")
  var review=document.querySelector(".review")
  var btn=document.querySelector("button")
  
  var card9=""
  
  mamaearthbabycare.forEach(function(value){
  card9+=`
   <div class="card9">
            <div class="imgBx">
              <img src="${value.imageUrl}">
            </div>
            <div class="contentBx">
              <h2>${value.name}</h2>
              <div class="rating">
                <h3>Rating :</h3>
                <span>${value.ratings}</span>
                <i class="ri-star-s-fill color-white"></i>
              </div>
              <div class="review">
                <h3>Review :${value.reviews}</h3>
              </div>
              <div class="flex justify-center">
                 <button
            class="relative flex  gap-6 mt-2 py-[4px] px-4  font-medium text-base nded-full overflow-hidden bg-[#e6f7eb] rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-[#67564f] hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#beeaca] before:to-[#beeaca] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
          >
            ADD TO CART  <h1>Price:${value.price}</h1> 
          </button>
             </div>
            </div>
          </div>
        </div> `
  })
  
  console.log(card9)
  container9.innerHTML=card9











  const mamaearthubtanrange = [
    {
        name: "ubtan Range scrub with turmeric and walnut for tan removel-100g",
        price: "₹307",
        ratings: 4.9,
        reviews: 133,
        imageUrl: "ubtan1.png",
        bgcolor:"##CBE59E",
        circlecolor:"#f7bb42"
    },
    {
        name: "ubtan facial kit with turmeric & saffron for glowing skin-60g",
        price: "₹343",
        ratings: 3.7,
        reviews: 238,
        imageUrl: "ubtan-2.png",
        bgcolor:"#c4a591",
        circlecolor:"#8e6b54"
    },
    {
       name:"ubtan detan sunscreen with turmeric & saffron for sun tan",
       price:"₹351",
       ratings:"4.7",
       reviews:"254",
       imageUrl:"ubtan-3.png",
    },
    {
      name:"Ubtan body wash with turmeric and saffron for glowing skin-300ml",
      price:"₹296",
      ratings:"4.6",
      reviews:"376",
      imageUrl:"ubtan-4.png",
   },
   {
    name:"Ubtan oil-free face moisturizer for skin brightening-80ml",
    price:"₹274",
    ratings:"4.8",
    reviews:"297",
    imageUrl:"ubtan-5.png",
    },
    {
     name:"Ubtan face scrub with turmeric and walnut for tan removal-100g",
     price:"₹307",
     ratings:"5.0",
     reviews:"178",
     imageUrl:"ubtan-6.png",
   },
   {
     name:"Ubtan body lotion with turmeric and kokum butter for skin glow-300ml",
     price:"₹380",
     ratings:"4.9",
     reviews:"139",
     imageUrl:"ubtan-7.png",
   },
   {
     name:"ubtan moisturizing lotion soap(value pack of 4)-125g*9",
     price:"₹328",
     ratings:"5.0",
     reviews:"154",
     imageUrl:"ubtan-8.png",
   },
   {
     name:"ubtan tan free glow trio",
     price:"₹819",
     ratings:"4.4",
     reviews:"123",
     imageUrl:"ubtan-9.png",
   },
   {
     name:"Ubtan face wash for tan removal(packof 2)-100ml*2 ",
     price:"₹378",
     ratings:"3.7",
     reviews:"478",
     imageUrl:"ubtan-10.png",
   },
   {
     name:"ubtan day cream with turmeric & saffron for skin brightening-50g",
     price:"₹527",
     ratings:"4.0",
     reviews:"275",
     imageUrl:"ubtan-11.png",
   },
   {
     name:"Ubtan night cream with turmeric & saffron for skin brightening-50g",
     price:"515",
     ratings:"5.0",
     reviews:"234",
     imageUrl:"ubtan-12.png",
   },
   
];


var container10=document.querySelector(".page2 .container10")
var card=document.querySelector(".card")
var imgbx=document.querySelector(".imgbx")
var img=document.querySelector("img")
var contentbx=document.querySelector(".contentBx")
var rating=document.querySelector(".rating")
var review=document.querySelector(".review")
var btn=document.querySelector("button")

var card10=""

mamaearthubtanrange.forEach(function(value){
  card10+=`
   <div class="card10">
            <div class="imgBx">
              <img src="${value.imageUrl}">
            </div>
            <div class="contentBx">
              <h2>${value.name}</h2>
              <div class="rating">
                <h3>Rating :</h3>
                <span>${value.ratings}</span>
                <i class="ri-star-s-fill color-white"></i>
              </div>
              <div class="review">
                <h3>Review :${value.reviews}</h3>
              </div>
              <button
            class="relative mt-2 py-[4px] px-4  font-medium text-base nded-full overflow-hidden bg-[#e6f7eb] rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-[#67564f] hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#beeaca] before:to-[#beeaca] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
          >
            ADD TO CART
          </button>
            </div>
          </div>
        </div> `
})

console.log(card10)
container10.innerHTML=card10







  
  
const mamaearthligtheningsale = [
  {
      name: "Onion shampoo",
      price: "₹507",
      ratings: 5.0,
      reviews: 233,
      imageUrl: "s 1.png",
      bgcolor:"##CBE59E",
      circlecolor:"#f7bb42"
  },
  {
      name: "Rosemary Hair care kit-650 ml",
      price: "₹782",
      ratings: 5.0,
      reviews: 108,
      imageUrl: "s2.png",
      bgcolor:"#c4a591",
      circlecolor:"#8e6b54"
  },
  {
     name:"Anti-Hair fall spa",
     price:"₹782",
     ratings:"4.8",
     reviews:"563",
     imageUrl:"s 3.png",
    
  },
  {
    name:"Ubtan face wash-150ml(pack of 2)",
    price:"₹563",
    ratings:"4.8",
    reviews:"878",
    imageUrl:"s4.png",
 },
 {
  name:"Vit C Daily glow sunscreen with vitamin C & Turmeric for Sun protection & Glow-50g (pack of 2)",

  price:"₹525",
  ratings:"4.9",
  reviews:"299",
  imageUrl:"s 5.png",
  },
  {
   name:"Ultra light indian sunscreen with carrot Seed,Turmeric and SPF 50 PA+++ -80ml (pack of 2)",
   price:"₹748",
   ratings:"4.8",
   reviews:"192",
   imageUrl:"s 6.png",
 },
 {
   name:"Aloe gentle face wash with Aloe & Glycerin for normal to Sensitive skin-150ml (pack of 2)",

   price:"₹575",
   ratings:"4.9",
   reviews:"376",
   imageUrl:"s 7.png",
 },
 {
   name:"Hibiscus Hair Revival kit",
   price:"₹756",
   imageUrl:"s 9.png",
 },
 {
   name:"Hibiscus damage Repair Hair kit",
   price:"₹783",
   imageUrl:"s 8.png",

 },
 {
   name:"Rosemarry Anti-Hair fall shampoo with Rosemarry & Methi Dana for Reducing Hair loss & breakage-60ml",
   price:"₹503",
   imageUrl:"s 10.png",
 },
 {
   name:"Aloe vera gel with pure alowvera &vitamin E for skin and Hair-300ml",
   price:"₹479",
   ratings:"5.0",
   reviews:"75",
   imageUrl:"s 11.png",
 },
 {
   name:"Feather light liquid matte lipstick pack of 4 minis",
   price:"₹577",
   ratings:"5.0",
   reviews:"267",
   imageUrl:"s 12.png",
 },
 {
   name:"HydraGel Indian Sunscreen with Aloe Vera and Raspberry for Sun Protection - 50 g",
   price:"₹381",
   ratings:"4.8",
   reviews:"198",
   imageUrl:"./products image/best sellers/hydragel_indian_sunscreen_1-removebg-preview.png",
 },
 
];


var container11=document.querySelector(".page2 .container11")
var card=document.querySelector(".card")
var imgbx=document.querySelector(".imgbx")
var img=document.querySelector("img")
var contentbx=document.querySelector(".contentBx")
var rating=document.querySelector(".rating")
var review=document.querySelector(".review")
var btn=document.querySelector("button")

var card11 =""

mamaearthligtheningsale.forEach(function(value){
card11 +=`
 <div class="card11 ">
          <div class="imgBx">
            <img src="${value.imageUrl}">
          </div>
          <div class="contentBx">
            <h2>${value.name}</h2>
            <div class="rating">
              <h3>Rating :</h3>
              <span>${value.ratings}</span>
              <i class="ri-star-s-fill color-white"></i>
            </div>
            <div class="review">
              <h3>Review :${value.reviews}</h3>
            </div>
            <button
          class="relative mt-2 py-[4px] px-4  font-medium text-base nded-full overflow-hidden bg-[#e6f7eb] rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-[#67564f] hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#beeaca] before:to-[#beeaca] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
        >
          ADD TO CART
        </button>
          </div>
        </div>
      </div> `
})

console.log(card11 )
container11.innerHTML=card11 
