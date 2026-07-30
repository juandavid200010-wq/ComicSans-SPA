
import { navigateTo, router } from "./router/router.js";

document.addEventListener("click", (event)=>{
    const link = event.target.closest('a[data-link]')
    if(link){
        event.preventDefault()
        const url = link.getAttribute("href")
        navigateTo(url)
        document.querySelector('nav').classList.remove('activo') 
    }
})

window.addEventListener("popstate", ()=>{
    router()
})

document.addEventListener("DOMContentLoaded", ()=>{
    router()
})


window.navigateTo = navigateTo;