(function(){
    var images = [];

    var flippedCards = []; 
    for(var i = 0; i < 8; i++){
        var img = {
            src: "img/" + i + ".jpg",
            id: i % 4 
        };
        images.push(img);
    }
   
    startGame();
    function startGame(){
        flippedCards=[];
        images = randomSort(images);
	
	
            var frontfaces = document.getElementsByClassName("front");
        for(var i = 0; i< 8; i++){
            var card = document.querySelector("#card" + i);
            card.style.left = i % 4 === 0 ? 5 + "px": i % 4 * 165 + 5 + "px";
            card.style.top = i < 4 ? 5 + "px" : 250 + "px";

            card.addEventListener("click",flipCard,false);
			
			frontfaces[i].style.background = "url('"+images[i].src+"')";
			frontfaces[i].setAttribute("id",images[i].id);
        }
    }
   
	function randomSort(oldArray){
		
		var newArray = [];
		
		
		while(newArray.length !== oldArray.length){
			
			var i = Math.floor(Math.random()*8);
			
			if(newArray.indexOf(oldArray[i]) < 0){

				newArray.push(oldArray[i]);
			}
		}
		
		return newArray;
		
	}
    function flipCard(){

        
        if(flippedCards.length < 2) {
        var faces = this.getElementsByClassName("face");
			
			if(faces[0].classList.length > 2){
				return;
			}
        faces[0].classList.toggle("flipped");
        faces[1].classList.toggle("flipped");

            flippedCards.push(this);

        }else {
            flippedCards[0].childNodes[1].classList.toggle("flipped");
            flippedCards[0].childNodes[3].classList.toggle("flipped");
            flippedCards[1].childNodes[1].classList.toggle("flipped");
            flippedCards[1].childNodes[3].classList.toggle("flipped");

            flippedCards = [];
        }
        
    }

}());