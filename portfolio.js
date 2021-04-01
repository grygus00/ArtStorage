let newone0;
let newone1;
new fullpage('#fullpage', {
    verticalCentered: false,
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
    onLeave: function(origin, destination, direction){
		let leavingSection = this;
        
        

		//LINE swoosh
            let line = document.getElementById('top_line');
            let text = document.getElementById('change_text');
            let l_box = document.getElementById('box_name');
            let l_box2 = document.getElementById('box_name2');
            let text_block = document.getElementById('blockH_id');
            //DOWN
            setTimeout(() => {
                  l_box.classList.remove("box_name", "l_box_1", "l_box_2", "l_box_3","l_box_4", "l_box_5");
                  text.classList.remove("box_0", "box_1", "box_2", "box_3", "box_4", "box_5");
                  l_box2.classList.remove("l_box_1_1", "l_box_2_1", "l_box_3_1", "l_box_4_1", "l_box_5_1");
                }, 370)
		if(destination.index == 0 && direction == 'up'){
                  //PORTFOLIO TEXT
                  
                  
                  setTimeout(() => {
                        l_box.classList.add("box_name");
                        text.classList.add("box_0");
                      }, 370)
                  }
            //UP
		else if(destination.index == 1 && direction == 'up'){
                  //PORTFOLIO TEXT
                  setTimeout(() => {
                        l_box.classList.add("l_box_1");
                        l_box2.classList.add("l_box_1_1");
                        text.classList.add("box_1");
                      }, 400)
		}
            else if(destination.index == 1 && direction == 'down'){
                  //PORTFOLIO TEXT
                  setTimeout(() => {
                        l_box.classList.add("l_box_1");
                        l_box2.classList.add("l_box_1_1");
                        text.classList.add("box_1");
                      }, 400)
                      setTimeout(() => {
                        document.getElementById('change').classList.add('invisable');
                    }, 3300);
		}
            else if(destination.index == 2 && direction == 'up'){
                  //PORTFOLIO TEXT
                  setTimeout(() => {
                        l_box.classList.add("l_box_2");
                        l_box2.classList.add("l_box_2_1");
                        text.classList.add("box_2");
                      }, 400)
		}
            else if(destination.index == 2 && direction == 'down'){
                  //PORTFOLIO TEXT
                  setTimeout(() => {
                        l_box.classList.add("l_box_2");
                        l_box2.classList.add("l_box_2_1");
                        text.classList.add("box_2");
                      }, 400)
		}
            else if(destination.index == 3 && direction == 'up'){
                  //PORTFOLIO TEXT
                  setTimeout(() => {
                        l_box.classList.add("l_box_3");
                        l_box2.classList.add("l_box_3_1");
                        text.classList.add("box_3");
                      }, 400)
		}
            else if(destination.index == 3 && direction == 'down'){
                  //PORTFOLIO TEXT
                  setTimeout(() => {
                        l_box.classList.add("l_box_3");
                        l_box2.classList.add("l_box_3_1");
                        text.classList.add("box_3");
                      }, 400)
		}
            else if(destination.index == 4 && direction == 'up'){
                  //PORTFOLIO TEXT
                  setTimeout(() => {
                        l_box.classList.add("l_box_4");
                        l_box2.classList.add("l_box_4_1");
                        text.classList.add("box_4");
                      }, 400)
		}
            else if(destination.index == 4 && direction == 'down'){
                  //PORTFOLIO TEXT
                  setTimeout(() => {
                        l_box.classList.add("l_box_4");
                        l_box2.classList.add("l_box_4_1");
                        text.classList.add("box_4");
                      }, 400)
		}
            else if(destination.index == 5 && direction == 'down'){
                  //PORTFOLIO TEXT
                  setTimeout(() => {
                        l_box.classList.add("l_box_5");
                        l_box2.classList.add("l_box_5_1");
                        text.classList.add("box_5");
                      }, 400)
		}
            //GLITCH TEXT

                  text.classList.add("glitch_text");
                  l_box.classList.add("glitch_box_anim");
                  l_box2.classList.add("glitch_box_anim");
                  setTimeout(() => {
                        text.classList.remove("glitch_text");
                        l_box.classList.remove("glitch_box_anim");
                        l_box2.classList.remove("glitch_box_anim");
                      }, 1000);

            
            //BLOCK COVERING TEXT
            text_block.classList.add("blockH_class1");
            newone0 = text_block.cloneNode(true);
            text_block.parentNode.replaceChild(newone0, text_block);
            //LINE TOP
            line.classList.add("line_out");
            newone1 = line.cloneNode(true);
            line.parentNode.replaceChild(newone1, line);
	}
});

let line = document.getElementById('top_line');
line.className += " " + "line_in";

const contact = document.getElementById('contact_site');
const about = document.getElementById('about_site');
const contact_click = document.getElementById('contact_link');
const about_click = document.getElementById('about_link');

contact.classList.add("blind");

contact_click.onclick = () => {
      contact.classList.remove("blind");
      about.classList.add("blind");
};
about_click.onclick = () => {
      about.classList.remove("blind");
      contact.classList.add("blind");
};




// let bg= document.getElementById('maskid');
// let count = 20;
// const crash = () => {
// for (let i=0; i<count; i++) {
//     let glitchBox = document.createElement('div');
//     glitchBox.className = 'barber_img';
//     bg.appendChild(glitchBox);
// }
// setInterval(function(){
//     let glitch = document.getElementsByClassName('barber_img');
// for(i=0; i<glitch.length; i++){
//     glitch[i].style.left = Math.floor(Math.random()*10) + 'vw';
//     glitch[i].style.top = Math.floor(Math.random()*10) + 'vh';
//     glitch[i].style.width = Math.floor(Math.random()*600) + 'px';
//     glitch[i].style.height = Math.floor(Math.random()*800) + 'px';
    
// }
// }, 200);

// }
// crash();





// let bg= document.getElementById('name');
// let count = 20;
// const crash = () => {
// for (let i=0; i<count; i++) {
//     let glitchBox = document.createElement('div');
//     glitchBox.className = 'box_name';
//     bg.appendChild(glitchBox);
// }
// setInterval(function(){
//     let glitch = document.getElementsByClassName('box_name');
// for(i=0; i<glitch.length; i++){
//     glitch[i].style.left = Math.floor(Math.random()*50) + 'vw';
//     glitch[i].style.top = Math.floor(Math.random()*20) + 'vh';
//     glitch[i].style.width = Math.floor(Math.random()*400) + 'px';
//     glitch[i].style.height = Math.floor(Math.random()*400) + 'px';
//     glitch[i].style.backgroundPosition = Math.floor(Math.random()*50) + 'px';
// }
// }, 200);

// }
// crash();
