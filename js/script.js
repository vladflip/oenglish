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



// BLOCKS CLASS
	function block(colors,words,element){
		var self = this;

		// DOM element
		this.el = element;
		
		// colors array
		this.colors = colors;

		// word array
		this.words = words;

		//content div
		this.contentDiv = this.el.getElementsByClassName('content')[0];

		this.animate = function(){
			this.contentDiv.innerHTML = this.words[rand(0, this.words.length-1)];

			// this.el.style.backgroundColor = this.colors[rand(0, this.colors.length-1)];
			this.el.style.backgroundColor = getRandomColor();

			setTimeout(function(){
				self.animate();
			},600);
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
