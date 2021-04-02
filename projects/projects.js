const counter = 1;
document.getElementById('radio' + counter).checked = true;

setInterval( () =>{
    counter++;
    if(counter > 4){
        counter = 1;
    }
    document.getElementById('radio' + counter).checked = true;
}, 5000);



// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <html lang="en"></html>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Marcin Grygo Portfolio</title>
//     <link rel="stylesheet" href="project.css">
//     <link rel="preconnect" href="https://fonts.gstatic.com">
// <link href="https://fonts.googleapis.com/css2?family=Scada&display=swap" rel="stylesheet">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.8/fullpage.min.css"
//     integrity="sha256-+dIh4jG2jQTHZwW81yUo8h6tzXWcNumyNL5XPZbwp1E=" crossorigin="anonymous" />
// </head>
// <body>
    
//     <div class="container">
//         <div class="nav">
//             <div class="nav_button"><a href="../index.html"><p>HOME</p></a></div>
//             <div class="nav_button"><a href="../index.html#section5"><p>PROJECTS</p></a></div>
//             <div class="nav_button"><a href="../index.html#section6"><p>ABOUT</p></a></div>
//         </div>
//         <div class="lines">
//             <span class="line line-t"></span>
//             <span class="line-b"></span>
//             <span class="line line-l"></span>
//             <span class="line line-r"></span>
//             <div class="yt_video_background">
//                 <img src="../images/l_box/yt_video_box_big.png"" alt="">
//             </div>
//         </div>
        
//         <div class="video_back">
//             <div class="pic_div video_yt">
//                 <div class="pic_background">
//                     <div class="pics">
//                         <input type="radio" class="black_radio" name="radio-btn" id="radio1">
//                         <input type="radio" class="black_radio" name="radio-btn" id="radio2">
//                         <input type="radio" class="black_radio" name="radio-btn" id="radio3">
//                         <input type="radio" class="black_radio" name="radio-btn" id="radio4">
//                         <div class="pic_slide pic_slide1 first_pic">
//                             <img class="nature" src="../images/photos/nature/nature_1.jpg" alt="Sticker made for my friend who became DJ">
//                         </div>
//                         <div class="pic_slide pic_slide1">
//                             <img class="nature" src="../images/photos/nature/nature_2.jpg" alt="Sticker made for my friend who became DJ">
//                         </div>
//                         <div class="pic_slide pic_slide1">
//                             <img class="nature" src="../images/photos/nature/nature_3.jpg" alt="Sticker made for my friend who became DJ">
//                         </div>
//                         <div class="pic_slide pic_slide1">
//                             <img class="nature" src="../images/photos/nature/nature_4.jpg" alt="Sticker made for my friend who became DJ">
//                         </div>
//                         <!-- ///////////////////////////// -->
//                         <div class="pic_slide pic_slide2 first_pic">
//                             <img class="nature" src="../images/photos/product/product_1.jpg" alt="Sticker made for my friend who became DJ">
//                         </div>
//                         <div class="pic_slide pic_slide2">
//                             <img class="nature" src="../images/photos/product/product_2.jpg" alt="Sticker made for my friend who became DJ">
//                         </div>
//                         <div class="pic_slide pic_slide2">
//                             <img class="nature" src="../images/photos/product/product_3.jpg" alt="Sticker made for my friend who became DJ">
//                         </div>
//                         <div class="pic_slide pic_slide2">
//                             <img class="nature" src="../images/photos/product/product_4.jpg" alt="Sticker made for my friend who became DJ">
//                         </div>
//                         <!-- ///////////////////////////// -->
//                         <div class="pic_slide pic_slide3 first_pic">
//                             <img class="nature" src="../images/photos/sky/sky_1.jpg" alt="Sticker made for my friend who became DJ">
//                         </div>
//                         <div class="pic_slide pic_slide3">
//                             <img class="nature" src="../images/photos/sky/sky_2.jpg" alt="Sticker made for my friend who became DJ">
//                         </div>
//                         <div class="pic_slide pic_slide3">
//                             <img class="nature" src="../images/photos/sky/sky_3.jpg" alt="Sticker made for my friend who became DJ">
//                         </div>
//                         <div class="pic_slide pic_slide3">
//                             <img class="nature" src="../images/photos/sky/sky_4.jpg" alt="Sticker made for my friend who became DJ">
//                         </div>
//                         <div class="nav-auto">
//                             <div class="auto-btn1"></div>
//                             <div class="auto-btn2"></div>
//                             <div class="auto-btn3"></div>
//                             <div class="auto-btn4"></div>
//                         </div>
//                     </div>
//                     <div class="nav-manual">
//                         <label for="radio1" class="manual-btn"></label>
//                         <label for="radio2" class="manual-btn"></label>
//                         <label for="radio3" class="manual-btn"></label>
//                         <label for="radio4" class="manual-btn"></label>
//                     </div>
//                 </div>
//             </div>
//         </div>
        
        
//         <!-- ////////////////////////////////HOME////////////////////////////////////////// -->
//         <div id="fullpage">
//             <div class="section">

//                 <div class="container_inside slide">
//                     <div class="page_title"><p>NATURE</p></div>
                    
//                     <div class="video_text">
//                         <p class="pic_text">I admire shooting unique nature photos, because of magnificent of weather that all the time.</p>
//                     </div>

//                 </div>
//                 <div class="container_inside slide">
//                     <div class="page_title"><p>SKY</p></div>
    
//                     <div class="video_text">
//                         <p class="pic_text">Winter Is a magnificent time for shooting beautiful and unique photos.</p>
//                     </div>

//                 </div>
//                 <div class="container_inside slide">
//                     <div class="page_title"><p>PRODUCTS</p></div>
                    
//                     <div class="video_text">
//                         <p class="pic_text">Photos of a products made from cannabis. Projects created to increase popularity of my friend company selling pro health stuff.</p>
//                     </div>

//                 </div>
//             </div>
//         </div>
    
// </div>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.8/fullpage.min.js"
// integrity="sha256-caNcSA0LvOCX90PTuEbwl+V09xPMca13CJUasl+VCtk=" crossorigin="anonymous">
// </script>
// <script src="../portfolio.js"></script>
// <script src="projects.js"></script>
// </body>
// </html>


// <!-- <div class="container_inside slide">
//     <div class="page_title"><p>PRODUCTS</p></div>
//     <div class="video_back">
//         <div class="video_yt">
//             <div class="yt_video_background">
//                 <img id="product" src="../images/photos/product/product_1.jpg" alt="Smoking paper box design">
//             </div>
            
//         </div>
//     </div>
//     <div class="video_text">
//         <p class="pic_text">Photos of a products made from cannabis. Projects created to increase popularity of my friend company selling pro health stuff.</p>
//     </div>

// </div> --></div>