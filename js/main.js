

//================================================= start setting box ==================================================

    //check if thers if localstorge  color option 
    let maincolor = localStorage.getItem("color-option");
    //baعmel el condtion dh ashan local storage matgebsh null
    if(maincolor !== null){
        document.documentElement.style.setProperty("--main-color",maincolor);
        //remove active class all cololrs list item
        document.querySelectorAll(".colors-list li").forEach(function(element){
            element.classList.remove("active");
                       //add active class local storage
                       if(element.dataset.color === maincolor){
                        //add class active 
                        element.classList.add("active");
                       }
        });
    };
    //randome background option 
    let backgroundOption = true;

    //variable to contole the Intrval
    let backgroundInterval;

    //check if local storage randome background Items
    let bacgroundlocalItem = localStorage.getItem('bacgroung-option');
    //local storage not empty 
    if(bacgroundlocalItem !== null){

        if(bacgroundlocalItem === 'true'){
            backgroundOption = true;
        }else{
            backgroundOption = false;
        }
        // remove active class from all span 
        document.querySelectorAll(".randome-background span").forEach(function(element){
                element.classList.remove("active");
        });
        if(bacgroundlocalItem === "true"){
            document.querySelector(".yes").classList.add("active");
        }else{
            document.querySelector(".No").classList.add("active");
        }
    };
//function to randomaize Images
    let icons = document.querySelector(".setting-box i");
    icons.onclick = function(){
        icons.classList.toggle("fa-spin");
        // document.querySelector(".setting-box").classList.toggle("open");
       
    }
    let openSettingbox = document.querySelector(".setting-box");
    icons.addEventListener("click",function(){
        openSettingbox.classList.toggle("open");
    });

    // === switch colors ====
    const colorsli = document.querySelectorAll(".colors-list li");
    colorsli.forEach(function(li){
        li.addEventListener("click",function(e){
            //set color on root
            document.documentElement.style.setProperty("--main-color",e.target.dataset.color);
            //set color in local storge
            localStorage.setItem("color-option",e.target.dataset.color);
            handelActive(e);
    });
});

   //switch randome background option  
   const randomebacElement = document.querySelectorAll(".randome-background span");
        randomebacElement.forEach(function(span){
         span.addEventListener("click",function(e){
         handelActive(e);
           if(e.target.dataset.bacground === 'yes'){
            backgroundOption = true;
            randomaizeImages();
            localStorage.setItem("bacgroung-option",true);
           }else{
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("bacgroung-option",false);

           }
   });
});
    
// end setting-box 
// ============================================== start nav-bullets =================================================
    // //select All bullets 
    const allBullets = document.querySelectorAll(`.nav-bullets .bullets`);
    // select All links 
    let alllinks = document.querySelectorAll(".links a");
    function linksbllutesScroll(elements){
        elements.forEach(function(ele){
            ele.addEventListener('click',function(e){
                e.preventDefault(); // bylغy el # beta el links or href tmam 
                document.querySelector(e.target.dataset.section).scrollIntoView({
                    behavior: 'smooth'
                });
                
            });
        });
    } 
linksbllutesScroll(allBullets);
linksbllutesScroll(alllinks);

        // show billets hide bullets 
        let bulletSpan = document.querySelectorAll('.bullets-option span');
        let bulletsContaner = document.querySelector('.nav-bullets');
        let bulletsLocalstorage = localStorage.getItem("bullets-option");
        if(bulletsLocalstorage !== null){
            bulletSpan.forEach(function(span){
                span.classList.remove('active');
            });
            if(bulletsLocalstorage === 'block'){
                bulletsContaner.style.display = 'block';
                document.querySelector('.bullets-option .yes').classList.add('active');

            }else{
                bulletsContaner.style.display = 'none';
                document.querySelector('.bullets-option .No').classList.add('active');

            }
        }
        bulletSpan.forEach(function(span){
            span.addEventListener('click',function(e){
                if(span.dataset.display === 'show'){
                    bulletsContaner.style.display = 'block';
                    localStorage.setItem('bullets-option','block');
                }else{
                    bulletsContaner.style.display = 'none';
                    localStorage.setItem('bullets-option','none');

                }
                handelActive(e);
            })
        })
// end nav-bullets 
// ================================================ change bkground Images =======================================
//select  landing page element
let landingpage = document.querySelector(".landing-page");
//get arry of Images 
let imagArray = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg'];
function randomaizeImages(){
if(backgroundOption === true){
    // change background fo every 7 secnds
 backgroundInterval = setInterval(function(){
    //get randome number 
    let randomeNumber = Math.floor(Math.random() * imagArray.length);
   // change background image url 
    landingpage.style.backgroundImage ='url("imgs/'+ imagArray[randomeNumber]+'")'; 

},7000);
}
};
randomaizeImages();



// ======================= resest option in website in seeting-box  ===================================
const resetoption = document.querySelector('.reset-options');
resetoption.onclick = function(){
    // localStorage.clear();// الطريقه الاولي وهى بتحدف كله تمام 
    // localStorage.removeItem('bullets-option');الطريقه لبثانيه وهي بتحدف ايتم واحده اي عنصر واحد تمام
    localStorage.clear();
    window.location.reload();// hayemal reload ll mawkeع 
}



//========================================= start our skills =============================================

        //selsect skills 
        let ourSkills = document.querySelector(".skills");

    window.onscroll = function(){
        //skills ofset top
        let skillsOffsetTop = ourSkills.offsetTop;
        //skills outer heieght
        let outerSkills = ourSkills.offsetHeight;
        //window height 
        let windowHeight = window.innerHeight;
        //window scroll top 
        let windowScrollTop = this.pageYOffset;
        //if condition 
        if(windowScrollTop > (skillsOffsetTop + outerSkills - windowHeight)){
              let allskills = document.querySelectorAll(".skills-box .skill-progress span");
              allskills.forEach(function(skills){
                skills.style.width = skills.dataset.progress;//     No
              });
    };
};

// ================================================== start  our gallery ============================================

// create popup with Iamge
    let ourgallery = document.querySelectorAll(".gallery img");

    ourgallery.forEach(function(img){
        img.addEventListener("click",function(){
     
            //create overlay element 
            let overlay = document.createElement("div");
            
            //add class to overlay 
            overlay.className = 'popup-overlay'
           
            //append overlay to the body
            document.body.appendChild(overlay);
            // create popup box
            let popupBox = document.createElement("div");
            

            //add class to popup elmenet
            popupBox.className = 'popup-box';

            if(img.alt !== null){
                //create Heading 
                let imgHeading = document.createElement("h3");
                //create textt for heading 
                let imgtexet = document.createTextNode(img.alt);

                //append the texte to the Heading 
                imgHeading.appendChild(imgtexet);
                //append the Heading to the popup-box
                popupBox.appendChild(imgHeading);


            }
            //create popup img 
            let popupImag = document.createElement("img");
            
            //set imge source 
            popupImag.src = img.src ;
            
            //add imge to popup box 
            popupBox.appendChild(popupImag);

            //append the popup box to the body 
            document.body.appendChild(popupBox);

            ////// create the close span  (close Image)=> X
            let closeButton = document.createElement('span');
            //create the close buttone texte
            let closeText =document.createTextNode('X');
            //APPEND THE TEXT CLOSE BUTTON 
            closeButton.appendChild(closeText);

            //add class closebutton
            closeButton.className = 'close-button';

            //append the closebuttone to the popup-box

            popupBox.appendChild(closeButton);
        });
    });
        // X close popup 
        document.addEventListener('click',function(e){
                if(e.target.className === 'close-button'){
                    
                    // remove popup-box 
                    e.target.parentNode.remove();
                    // or 
                    // document.querySelector(".popup-box").remove();

                    //remove overlay
                    
                    document.querySelector('.popup-overlay').remove();
                }
        })


// end our gallery



  //  ========================= function handell active in clasess ==============================
// function handell active state 
function handelActive(even){
    //remove active class from All children 
    even.target.parentElement.querySelectorAll(".active").forEach(function(element){
    element.classList.remove("active");
    });
    // add active class on self 
    even.target.classList.add("active");
}

/// ==============toggel-menu =====
let toggleMenu = document.querySelector(".toggle-menu");
let links = document.querySelector(".links");
toggleMenu.onclick =function(e){
    // stope propagition
    e.stopPropagation()
    toggleMenu.classList.toggle("menu-active");
    links.classList.toggle("open");
}
// click menu-toggle 
document.addEventListener("click",function(e){
    if(e.target !== toggleMenu && e.target !== links){
        //ckeck is menu is open
        if(links.classList.contains("open")){
            toggleMenu.classList.toggle("menu-active");
            links.classList.toggle("open");
        }
    }
})
//stope propagation menu 
links.onclick = function(e){
    e.stopPropagation();
}