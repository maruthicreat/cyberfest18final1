

/*AOS.init({
    duration: 1200,
})*/

/*function scrollfun() {
    window.scroll(0, 400).animate({ scrollTop: 0 }, 'slow');
}*/

var scrollableElement = document.getElementById('scrollableelement');
var cont = document.getElementsByClassName('content');
scrollableElement.addEventListener('wheel', findScrollDirectionOtherBrowsers);
var count=0;
var i;
var num = 0;

function findScrollDirectionOtherBrowsers(event) {
    var delta;
    if (event.wheelDelta) {
        delta = event.wheelDelta;
    } else {
        delta = -1 * event.deltaY;
    }
    if (delta < 0) {
        if(count < cont.length-1) {
            count++;
            for (i = 0; i < cont.length; i++) {
                if (i !== count) {
                    console.log("in");
                    cont[i].style.display = "none";
                }
            }
            cont[count].id = "mod"+count;
            cont[count].style.display = "inline-block";
            console.log("down" + count);
        }
    } else if (delta > 0) {
        if (count > 0) {
            count--;
            for (i = 0; i < cont.length; i++) {
                if (i !== count) {
                    console.log("in");
                    cont[i].style.display = "none";
                }
            }
            cont[count].id = "rev"+count;
            cont[count].style.display = "inline-block";
            console.log("up" + count);
        }
    }
}


function swipedetect(el, callback){

    var touchsurface = el,
        swipedir,
        startX,
        startY,
        distX,
        distY,
        threshold = 150, //required min distance traveled to be considered swipe
        restraint = 100, // maximum distance allowed at the same time in perpendicular direction
        allowedTime = 300, // maximum time allowed to travel that distance
        elapsedTime,
        startTime,
        handleswipe = callback || function(swipedir){}

    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir)
        e.preventDefault()
    }, false)
}

//USAGE:

var el = document.getElementById('scrollableelement');
swipedetect(el, function(swipedir){
    // swipedir contains either "none", "left", "right", "top", or "down"
    console.log(swipedir);
    if('up'===swipedir)
    {
        console.log("success up");
        if(count < cont.length-1) {
            count++;
            for (i = 0; i < cont.length; i++) {
                if (i !== count) {
                    console.log("in");
                    cont[i].style.display = "none";
                }
            }
            cont[count].id = "mod"+count;
            cont[count].style.display = "inline-block";
            console.log("down" + count);
        }
    }
    else if('down'===swipedir)
    {
        console.log("success down");
        if (count > 0) {
            count--;
            for (i = 0; i < cont.length; i++) {
                if (i !== count) {
                    console.log("in");
                    cont[i].style.display = "none";
                }
            }
            cont[count].id = "rev"+count;
            cont[count].style.display = "inline-block";
            console.log("up" + count);
        }
    }
});
