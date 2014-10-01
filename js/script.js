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

	console.log(clarr);
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

// BLOCKS CLASS
	function block(colors,words,element){
		var self = this;

		// DOM element
		this.el = element;

		//panes
		this.pane = [new pane(this.el.getElementsByClassName('pane')[0]),
						new pane(this.el.getElementsByClassName('pane')[1])];

		// colors array
		this.colors = colors;

		// word array
		this.words = words;

		//content div
		this.contentDiv = [this.pane[0].el.getElementsByClassName('content')[0],
							this.pane[1].el.getElementsByClassName('content')[0]];

		this.animate = function(){
			this.contentDiv[0].innerHTML = this.words[rand(0, this.words.length-1)];
			this.contentDiv[1].innerHTML = this.words[rand(0, this.words.length-1)];

			// this.el.style.backgroundColor = this.colors[rand(0, this.colors.length-1)];
			this.el.style.backgroundColor = getRandomColor();
			// this.pane[0].el.style.backgroundColor = getRandomColor();
			// this.pane[1].el.style.backgroundColor = getRandomColor();

			// setTimeout(function(){
			// 	self.pane[1].el.setClass('bottom',true);
			// },1000);

			// setTimeout(function(){
			// 	self.pane[0].el.setClass('center',true);
			// 	self.pane[1].el.setClass('center',true);
			// },rand(4,7)*1000);

			setTimeout(function(){
				self.animate();
			},200);
		}
	};



// MAIN CLASS

(function(){
	function main(){
		var self = this;

		//colors array
		this.colors = ['#111ddd','#222aaa','#444ccc'];
		//blocks array
		this.blocks = [];

		//elements array
		this.els = document.getElementsByClassName('col');

		// words array
		this.words = ['SLDKFJLSKDFJ','SLKDFJSLAKDFJ','LSKDJFLKSDJF','fuck virginity',
						'fuck virginity','fuck virginity','fuck virginity','fuck virginity',
						'SLDKFJLSKDFJ','SLKDFJSLAKDFJ','LSKDJFLKSDJF','fuck virginity',
						'fuck virginity','fuck virginity','fuck virginity','fuck virginity',
						'fuck virginity','fuck virginity','fuck virginity','fuck virginity',
						'SLDKFJLSKDFJ','SLKDFJSLAKDFJ','LSKDJFLKSDJF','fuck virginity',
						'fuck virginity','fuck virginity','fuck virginity','fuck virginity',
						'fuck virginity','fuck virginity','fuck virginity','fuck virginity',
						'SLDKFJLSKDFJ','SLKDFJSLAKDFJ','LSKDJFLKSDJF','fuck virginity',
						'fuck virginity','fuck virginity','fuck virginity','fuck virginity',
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
