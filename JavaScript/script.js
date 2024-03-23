AOS.init();

$(document).ready(function(){
  $('.mycarousel2').owlCarousel({
    items: 6,
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        480:{
          items:1
        },
        768:{
            items:2     
          },
        992:{
            items:3
        }
    }
  });
});

$(document).ready(function(){
  $('.mycarousel1').owlCarousel({
    items: 6,
    loop:true,
    margin:10,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        480:{
          items:1
        },
        768:{
            items:2     
          },
        992:{
            items:3
        }
    }
  });
});

// COUNTER UP

const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const el = document.querySelectorAll( '.counter' );

for(let count=0; count<el.length; count++) {
  IO.observe( el[count] )
}

// WELCOME DIV HOVER

function handleOnMouseOver(){
  let back = document.getElementById('welcomeDiv1');
  back.style.background = "#0A686E";

  let clr = document.getElementById('paraWelcome1');
  clr.style.color = 'white';
}

function handleOnMouseOut(){
  let back = document.getElementById('welcomeDiv1');
  back.style.background = "white";

  let clr = document.getElementById('paraWelcome1');
  clr.style.color = 'black';
}

function handleMouseOver(){
  let back = document.getElementById('welcomeDiv2');
  back.style.background = "#0A686E";

  let clr = document.getElementById('paraWelcome2');
  clr.style.color = 'white';
}

function handleMouseOut(){
  let back = document.getElementById('welcomeDiv2');
  back.style.background = "white";

  let clr = document.getElementById('paraWelcome2');
  clr.style.color = 'black';
}

function OnMouseOver(){
  let back = document.getElementById('welcomeDiv3');
  back.style.background = "#0A686E";

  let clr = document.getElementById('paraWelcome3');
  clr.style.color = 'white';
}

function OnMouseOut(){
  let back = document.getElementById('welcomeDiv3');
  back.style.background = "white";

  let clr = document.getElementById('paraWelcome3');
  clr.style.color = 'black';
}

function volDivEnter1(){
  document.getElementById('volDiv1').style.background = "#0A686E";
  document.getElementById('volH3').style.color = "white";
  document.getElementById('volSpan').style.color = "white";
  document.querySelectorAll('#volIcon').style.color = "#54969A";
  document.getElementById('paraVol').style.color = "#CEE1E2";
}

function volDivLeave1(){
  document.getElementById('volDiv1').style.background = "white";
  document.getElementById('volH3').style.color = "black";
  document.getElementById('volSpan').style.color = "#D49A3A";
  document.getElementById('VolIcon').style.color = "#D49A3A";
  document.getElementById('paraVol').style.color = "#666666";
}
