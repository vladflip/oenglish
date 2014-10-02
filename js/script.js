function rand(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

HTMLElement.prototype.setClass = function(ins, out){
	var cl = this.className;
	var clarr = cl.split(' ');

	if(out&&clarr.length>1) clarr = clarr.slice(0, clarr.length-1);
	else if(clarr.length===1) clarr = clarr.slice(0, 1);

	this.className = clarr.join(' ') + ' ' + ins;
}

// PANE CLASS

	function pane(el){

		//DOM el
		this.el = el;

		this.coords = ['left','right','top','bottom'];

	}


function callback(self,ap,apn,coords){
	var apdiv = ap.getElementsByClassName('content')[0];
	var apndiv = apn.getElementsByClassName('content')[0];
	var colors = [];

	for(var i = 0; i<self.colors.length;i++)
		self.colors[i] !== ap.style.backgroundColor ? colors.push(self.colors[i])
														: null;
		

	apndiv.innerHTML = '';

	setTimeout(function(){

		apn.setClass(coords[rand(0,coords.length-1)],true);
		apn.style.backgroundColor = colors[rand(0, colors.length-1)];
		setTimeout(function(){
			apn.style.zIndex = +ap.style.zIndex + 1;
		},1000);
	},1000);

	var i = 0;
	var word = self.words[rand(0, self.words.length-1)];
	var arr = word.split('');
	console.log(arr);

	setTimeout(function(){
		var id = setInterval(function(){

		if(i<arr.length){

			apdiv.innerHTML += arr[i];
		}
		if(i>arr.length+2){
			clearInterval(id);
			self.animate();
			return;
		}
			i++;
		},200);
	},800);
}

// BLOCKS CLASS
	function block(colors,words,element){
		var self = this;

		

		// DOM element
		this.el = element;

		//panes
		this.pane = [new pane(this.el.getElementsByClassName('pane')[0]),
						new pane(this.el.getElementsByClassName('pane')[1])];

		var p1 = this.pane[0];
			var p2 = this.pane[1];

		// colors array
		this.colors = colors;

		// word array
		this.words = words;

		//content div
		this.contentDiv = [this.pane[0].el.getElementsByClassName('content')[0],
							this.pane[1].el.getElementsByClassName('content')[0]];

		this.activePane = p1.el;

		this.pane[0].el.style.backgroundColor = this.colors[rand(0, this.colors.length-1)];
			this.pane[1].el.style.backgroundColor = this.colors[rand(0, this.colors.length-1)];

		this.animate = function(func){

			var ap, anp; // active pane, active next pane
			var coords = this.pane[0].coords

			if(this.activePane === this.pane[0].el){
				this.activePane = this.pane[1].el;
				anp = this.pane[0].el;
			} else {
				this.activePane = this.pane[0].el;
				anp = this.pane[1].el;
			}
			ap = this.activePane;

			ap.setClass('center',true);

			
			// var coords =  p1.coords;


			callback(self,ap,anp,coords);



			// this.contentDiv[0].innerHTML = this.words[rand(0, this.words.length-1)];
			// this.contentDiv[1].innerHTML = this.words[rand(0, this.words.length-1)];

			// this.el.style.backgroundColor = this.colors[rand(0, this.colors.length-1)];
			// this.el.style.backgroundColor = getRandomColor();
			

			// setTimeout(function(){
			// 	self.pane[1].el.setClass('bottom',true);
			// },1000);

			// setTimeout(function(){
			// 	p1.el.setClass(coords[rand(0,coords.length-1)],true);
			// 	p2.el.setClass(coords[rand(0,coords.length-1)],true);
			// },rand(4,7)*1000);

			
		}
	};



// MAIN CLASS

(function(){
	function main(){
		var self = this;

		//colors array
		this.colors = ['rgb(222, 212, 185)','rgb(70, 67, 58)','rgb(206, 83, 77)','rgb(100, 182, 177)'];
		//blocks array
		this.blocks = [];

		//elements array
		this.els = document.getElementsByClassName('col');

		// words array
		this.words = ['Hello!','How old are you?','Whats up?','Hope for the best!',
						'Keep on!','Don\'t give up!','OENGLISH','Keep calm',
						'Learn english','Do your best','Pick up','Go on',
						'Get up','Turn around','Hold on!','Let\'s start!',
						'OENGLISH','Come in'
						];

		// init func
		this.init = function(){
			
			for(var i=0;i<25;i++){

				this.blocks.push(new block( this.colors, this.words, this.els[i]));

				this.blocks[i].animate();
			}



		}

		this.init();
	}

	var main = new main();

	console.log(main.blocks);
})();
