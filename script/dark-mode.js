document.addEventListener("DOMContentLoaded", function(){

    let setActiveStyleSheet = function(title){
        let css = `link[rel="alternate stylesheet"]`;
        let stylesheets = document.querySelectorAll(css);
        stylesheets.forEach(sheet => sheet.disabled = true);
        let selector = `link[title="${title}"]`;
        let activeSheet = document.querySelector(selector);
        activeSheet.disabled = false;
        localStorage.setItem("theme", title);
    }

    let savedSheet = localStorage.getItem("theme");
    if(savedSheet){
        setActiveStyleSheet(savedSheet);
    }else{
        
    }

    //setActiveStyleSheet("light")

    let lightBtnElement = document.querySelector('[data-mode="light"]');
    let darkBtnElement = document.querySelector('[data-mode="dark"]');
    let contrastBtnElement = document.querySelector('[data-mode="hight-contrast"]');
    
    lightBtnElement.addEventListener("click", function(){
        setActiveStyleSheet("light");
    });
    darkBtnElement.addEventListener("click", function(){
        setActiveStyleSheet("dark");
    });
    contrastBtnElement.addEventListener("click", function(){
        setActiveStyleSheet("hight-contrast");
    });
})