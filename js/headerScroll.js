(function(){
    var doc = document.documentElement;
    var w = window;

    var curScroll = prevScroll = w.scrollY || doc.scrollTop;
    var curDirection = prevDirection = 0;

    //Function
    var header = document.getElementById("header");

    var treshold = 165;
    var toggled

    var checkScroll = function() {
        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll){
            //Scrolled down
            curDirection = 2;
        }else{
            curDirection = 1;
        }
        if (curDirection !== prevDirection){
            toggled = toggleHeader();
        }
        if(toggled) {
            prevDirection = curDirection;
        }
        
        prevScroll = curScroll;
    };

    var toggleHeader = function() {
        toggled = true;
        if (curDirection === 2 && curScroll > treshold){
            header.classList.add("hide");
        }
        else if (curDirection ===1){
            header.classList.remove("hide");
        }
        else{
            toggled = false;
        }
        return toggled;
    };
    window.addEventListener("scroll", checkScroll);
})();