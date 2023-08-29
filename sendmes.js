// nav image hover

let nav_img = document.querySelector('#circle-img-2')

function navimg_hover(){
    nav_img.addEventListener('mouseover',function(){
        nav_img.style.rotate = '0deg'
      })
      nav_img.addEventListener('mouseleave',function(){
        nav_img.style.rotate = '10deg'
      })
}
navimg_hover()



// card select option
let imgbg = document.querySelector('#img-container')

let clr_theme = document.querySelectorAll('.msg-card')
console.log(clr_theme);
clr_theme.forEach( (item)=> {
    item.addEventListener('click',function(e){
        // console.log(e.target.id);
        // e.target.id.style.backgroundColor = 'red'
        document.querySelector('#wrapper-card').style.backgroundColor = e.target.id
        imgbg.style.backgroundImage = `url(https://uploads-ssl.webflow.com/63977865f8050772f52d67d4/646a411664746fee1fa86a44_switzerland-bg.webp)`
    })
  
})


