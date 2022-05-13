const btn = document.querySelector('.modedark');
const nav = document.querySelector('nav');
const body = document.querySelector('#main')
const aboutme = document.querySelector('.about-me')
const contfooter = document.querySelector('.cont-footer')
const social = document.querySelector('.social')
const footer = document.querySelector('.footer')
const modedark = document.querySelector('.modedark')
const contteam = document.querySelector('.cont-team')
const cont = document.querySelector('.cont')
const factscont = document.querySelector('.facts-cont')
const contcrtv = document.querySelector('.cont-crtv')
const conttwo = document.querySelector('.cont-two')
const carousel = document.querySelector('.carousel')

const modeone = ()=>{
    if(nav.attributes[0].value ==="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm p-3 mb-5 bg-body rounded head"){
        nav.attributes[0].value = "navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm p-3 mb-5 bg-body rounded head-dark";
        body.attributes[0].value = "body-dark";
        aboutme.attributes[0].value = "about-me-dark";
        contfooter.attributes[0].value = "container-fluid cont-footer py-3 cont-footer-dark";
        social.attributes[0].value = "social-dark";
        footer.attributes[0].value = "row py-5 footer-dark";
        modedark.attributes[0].value = "modedark-dark";
        contteam.attributes[0].value = "container cont-team-dark mt-5 pt-5";
        cont.attributes[0].value = "container cont-dark d-flex mt-5 py-5";
        factscont.attributes[0].value = "container facts-cont-dark my-5 py-5";
        contcrtv.attributes[0].value = "container cont-crtv-dark my-5 pt-5";
        conttwo.attributes[0].value = "container cont-two-dark mt-5 pt-5";
        carousel.attributes[1].value = "carousel-dark slide";
    }
    else{
        nav.attributes[0].value = "navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm p-3 mb-5 bg-body rounded head";
        body.attributes[0].value = "body"
        aboutme.attributes[0].value = "about-me";
        contfooter.attributes[0].value = "container-fluid cont-footer py-3 cont-footer";
        social.attributes[0].value = "social";
        footer.attributes[0].value = "row py-5 footer";
        modedark.attributes[0].value = "modedark";
        contteam.attributes[0].value = "container cont-team mt-5 pt-5";
        cont.attributes[0].value = "container cont d-flex mt-5 py-5";
        factscont.attributes[0].value = "container facts-cont my-5 py-5";
        contcrtv.attributes[0].value = "container cont-crtv my-5 pt-5";
        conttwo.attributes[0].value = "container cont-two mt-5 pt-5";
        carousel.attributes[1].value = "carousel slide";





    }
}

btn.addEventListener('click',modeone);