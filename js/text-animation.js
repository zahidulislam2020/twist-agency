
setInterval(function(){
    if(document.getElementsByClassName("mySlide")[0].classList.contains("animate-bottom")){
        document.getElementsByClassName("mySlide")[1].classList.add("animate-bottom");
        document.getElementsByClassName("mySlide")[0].classList.remove("animate-bottom");
}

    else if(document.getElementsByClassName("mySlide")[1].classList.contains("animate-bottom")){
        document.getElementsByClassName("mySlide")[2].classList.add("animate-bottom");
        document.getElementsByClassName("mySlide")[1].classList.remove("animate-bottom");
}

    else if(document.getElementsByClassName("mySlide")[2].classList.contains("animate-bottom")){
        document.getElementsByClassName("mySlide")[3].classList.add("animate-bottom");
        document.getElementsByClassName("mySlide")[2].classList.remove("animate-bottom");
}

    else if(document.getElementsByClassName("mySlide")[3].classList.contains("animate-bottom")){
        document.getElementsByClassName("mySlide")[0].classList.add("animate-bottom");
        document.getElementsByClassName("mySlide")[3].classList.remove("animate-bottom");
}

},12000);

