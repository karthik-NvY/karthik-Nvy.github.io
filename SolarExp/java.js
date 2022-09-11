document.addEventListener('DOMContentLoaded',function(){

    let planets = document.querySelectorAll('a > img');
    var widthTemp;
    var heightTemp;
    var ht_int;
    var wth_int;

    let canvas = document.querySelector('canvas.cns')
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let can = canvas.getContext('2d');

    for (let i = 1; i < planets.length; i++)
    {
        planets[i].addEventListener('mouseover', function(){
            planets[i].style.transition = 'width 0.5s, height 0.5s';
            planets[0].style.transition = 'width 0.5s, height 0.5s';

            widthTemp = planets[i].style.width;
            heightTemp = planets[i].style.height;

            let wth_int = parseInt(planets[i].style.width, 10);
            let ht_int  = parseInt(planets[i].style.height, 10);

            wth_int += 1;
            ht_int += 1;

            planets[i].style.width = wth_int + 'rem';
            planets[i].style.height = ht_int + 'rem';

            planets[0].style.width = '9rem';
            planets[0].style.height = '18rem';
        })

        planets[i].addEventListener('mouseout', function(){
            planets[i].style.width = widthTemp;
            planets[i].style.height = heightTemp;
            planets[0].style.width = '8rem';
            planets[0].style.height = '16rem';
        })
    }
})





    /*
    let earth = document.querySelector('div.earth img');
    let sun = document.querySelector('div.sun img');
    let body = document.querySelector('body');
    let back = document.querySelector('img.back');
    let canvas = document.querySelector('canvas.cns')
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let can = canvas.getContext('2d');


    earth.addEventListener('mouseover', function(){
        earth.style.transition = 'width 0.5s, height 0.5s';
        sun.style.transition = 'width 0.5s, height 0.5s';
        earth.style.width = '10rem';
        earth.style.height = '10rem';
        sun.style.width = '7rem';
        sun.style.height = '13.4rem';


    })
    earth.addEventListener('mouseout', function(){
        earth.style.width = '9rem';
        earth.style.height = '9rem';
        sun.style.width = '6rem';
        sun.style.height = '12rem';

    })
})
    */