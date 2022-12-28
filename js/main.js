// fetch json file of words information
fetch("js/words.json")
.then(res=>res.json())
.then((res)=>{
    let user = "user";
    
    let englishLetters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    let parentLetters = document.querySelector(".letters");
    englishLetters.forEach(englishLetter=>{
        let divEnglish = document.createElement("div");
        let textEnglish = document.createTextNode(englishLetter);
        divEnglish.appendChild(textEnglish);
        divEnglish.className = "letter";
        parentLetters.appendChild(divEnglish);
    })

    // get a random element of json file words
    let index = Math.floor(Math.random() * 21);

    // the span of user name
    let name = document.querySelector(".name");

    // the span of type the word
    let type = document.querySelector(".type");
    type.innerHTML=`Type: ${res[index].type}`;

    // number of word's letters
    let spansNum =res[index].word.length;

    // the word div
    let wordDiv = document.querySelector(".word");
    for(let i =0;i<spansNum;i++){

        // create lines of word's letters number
        let span = document.createElement("span");
        wordDiv.appendChild(span);
    }


    // add 2 players
    // let player = [{"gameNum":0,"id":0,"name":""},{"gameNum":0,"id":0,"name":""}];
    // console.log(player[0].id);
    let multiPlyBtn = document.querySelector(".multiPly");
    let player1 ="Player 1";
    let player2 ="Player 2";
    multiPlyBtn.addEventListener("click",function(){
        player1 = prompt("Player 1 :");
    if(player1 == null){
        player1 ="Player 1";
    }
    player2 = prompt("Player 2 :");
    if(player2 == null){
        player2 ="Player 2";
    }
    document.querySelector(".ply1").innerHTML=player1;
    document.querySelector(".ply2").innerHTML=player2;
    document.querySelector(".choosePly").style.display="none";


    


    let spansLetters = document.querySelectorAll(".word span");
    name.innerHTML=`HangMan`;

    // the counter of false letter
    let counterFalse =0;
    let counterFalse2 =0;

    let counterPlayer =0;

    let hang= document.querySelector(".hang");
    let hang2= document.querySelector(".hang2");

    window.addEventListener("click",function(e){
        let word = res[index].word.toUpperCase();

        // click on letter
        if(e.target.className == "letter"){

            counterPlayer++;
            console.log(counterPlayer);
            // console.log(counterPlayer);
            // if the letter is true
            if(word.includes(e.target.innerHTML)){
                e.target.style.backgroundColor="#fff133";

                // counter of true letters
                let classTrue =0;
                for(let i=0;i< spansNum;i++){
                    if(res[index].word[i] == e.target.innerHTML.toLowerCase()){
                        spansLetters[i].setAttribute("data-before",res[index].word[i]);
                        spansLetters[i].classList.add("true");
                    }
                    // add to the counter of true letters
                    if(spansLetters[i].classList.contains("true")){
                        classTrue++;

                        // the win div
                        if(classTrue == spansNum){
                            let winPly=player1;
                            if(counterPlayer%2 == 0){
                                winPly=player2;
                            }
                            document.querySelector(".end").innerHTML=`${winPly} Won`;
                            document.querySelector(".end").style.cssText="background-image: linear-gradient(45deg , #000 20%, 40%,black 100%);color: #fff133;text-shadow: 0px 0px 20px #fff133;display:flex";                
                            document.querySelector(".end").classList.add("win");
                            document.body.style.pointerEvents="none";
                            
                            // win party
                            setInterval(function(){
                            let winnerSpan = document.createElement("span");
                            winnerSpan.classList.add("winner");
                            winnerSpan.style.backgroundColor=`rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
                            winnerSpan.style.left=`${Math.random() * 100}vw`;
                            document.body.appendChild(winnerSpan);
                            },100)
                        }
                    }
                }           
            // if the letter is false
            }else{


                



                // change background color of false letter
                e.target.style.filter="grayscale(1)";
                e.target.classList.add("done");





                if(counterPlayer%2 == 0){
                counterFalse2++;
                    console.log(counterFalse2);

                if(counterFalse2 < 7){

                    // create the first five parts
                    let part = document.createElement("div");
                    part.className="part";
                    console.log(hang2);
                    hang2.appendChild(part);
                }
                if(counterFalse2 == 7){

                    // create hand part
                    let part = document.createElement("div");
                    part.className="handPart";
                    let body = document.querySelector(".part:nth-of-type(6)");
                    body.appendChild(part);
                }
                if(counterFalse2 == 8){

                    // create feet part
                    let part = document.createElement("div");
                    part.className="lastPart";
                    let body = document.querySelector(".part:nth-of-type(6)");
                    body.appendChild(part);

                    // show loss div
                    let theWinner = player1;
                    document.querySelector(".end").classList.add("loser");
                    document.querySelector(".end").innerHTML=`${theLoser} lost`;

                    document.querySelector(".end").style.display="flex";
                    document.body.style.pointerEvents="none";

                }
                }else{
                    counterFalse++;


                    if(counterFalse < 7){

                        // create the first five parts
                        let part = document.createElement("div");
                        part.className="part";
                        hang.appendChild(part);
                    }
                    if(counterFalse == 7){
    
                        // create hand part
                        let part = document.createElement("div");
                        part.className="handPart";
                        let body = document.querySelector(".part:nth-of-type(6)");
                        body.appendChild(part);
                    }
                    if(counterFalse == 8){
    
                        // create feet part
                        let part = document.createElement("div");
                        part.className="lastPart";
                        let body = document.querySelector(".part:nth-of-type(6)");
                        body.appendChild(part);
    
                        // show loss div
                    let theWinner = player2;

                        document.querySelector(".end").classList.add("loser");
                        document.querySelector(".end").innerHTML=`The Winner Is ${theWinner}`;

                        document.querySelector(".end").style.display="flex";
                        document.body.style.pointerEvents="none";
    
                    }
                }









            }
        }

    })




    }) // end of addeventlistener






let onePly = document.querySelector(".onePly");
    onePly.addEventListener("click",function(){
        player1 = prompt("Player :");
    if(player1 == null){
        player1 ="Player";
    }
    document.querySelector(".ply1").innerHTML=`${player1}`;
    document.querySelector(".ply2").style.display="none";

    // document.querySelector(".ply1").innerHTML=player1;
    // document.querySelector(".ply2").innerHTML=player2;
    document.querySelector(".choosePly").style.display="none";



    let spansLetters = document.querySelectorAll(".word span");
    name.innerHTML=`HangMan`;

    // the counter of false letter
    let counterFalse =0;
    let hang= document.querySelector(".hang");
    window.addEventListener("click",function(e){
        let word = res[index].word.toUpperCase();

        // click on letter
        if(e.target.className == "letter"){

            // if the letter is true
            if(word.includes(e.target.innerHTML)){
                e.target.style.backgroundColor="#fff133";

                // counter of true letters
                let classTrue =0;
                for(let i=0;i< spansNum;i++){
                    if(res[index].word[i] == e.target.innerHTML.toLowerCase()){
                        spansLetters[i].setAttribute("data-before",res[index].word[i]);
                        spansLetters[i].classList.add("true");
                    }
                    // add to the counter of true letters
                    if(spansLetters[i].classList.contains("true")){
                        classTrue++;

                        // the win div
                        if(classTrue == spansNum){
                            document.querySelector(".end").innerHTML="You Won";
                            document.querySelector(".end").style.cssText="background-image: linear-gradient(45deg , #000 20%, 40%,black 100%);color: #fff133;text-shadow: 0px 0px 20px #fff133;display:flex";                
                            document.querySelector(".end").classList.add("win");
                            document.body.style.pointerEvents="none";
                            
                            // win party
                            setInterval(function(){
                            let winnerSpan = document.createElement("span");
                            winnerSpan.classList.add("winner");
                            winnerSpan.style.backgroundColor=`rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
                            winnerSpan.style.left=`${Math.random() * 100}vw`;
                            document.body.appendChild(winnerSpan);
                            },100)
                        }
                    }
                }           
            // if the letter is false
            }else{

                // change background color of false letter
                e.target.style.filter="grayscale(1)";
                e.target.classList.add("done");
                counterFalse++;
                if(counterFalse < 7){

                    // create the first five parts
                    let part = document.createElement("div");
                    part.className="part";
                    hang.appendChild(part);
                }
                if(counterFalse == 7){

                    // create hand part
                    let part = document.createElement("div");
                    part.className="handPart";
                    let body = document.querySelector(".part:nth-of-type(6)");
                    body.appendChild(part);
                }
                if(counterFalse == 8){

                    // create feet part
                    let part = document.createElement("div");
                    part.className="lastPart";
                    let body = document.querySelector(".part:nth-of-type(6)");
                    body.appendChild(part);

                    // show loss div
                    document.querySelector(".end").classList.add("loser");
                    document.querySelector(".end").style.display="flex";
                    document.body.style.pointerEvents="none";

                }
            }
        }

    })
    })
})

// choose the main color of page
let colors = document.querySelectorAll(".color");
colors.forEach((e)=>{
    e.onclick= function(){
        if(e.classList[1] == "green"){
            document.body.style.cssText="--hangColor:#3e894a;--personColor:#09721a;";
        }
        if(e.classList[1] == "blue"){
            document.body.style.cssText="--hangColor:#55acc4;--personColor:#095b72;";
        }
        if(e.classList[1] == "red"){
            document.body.style.cssText="--hangColor:red;--personColor:#720909;";
        }
        if(e.classList[1] == "purple"){
            document.body.style.cssText="--hangColor:#962eb2;--personColor:#5c0972;";
        }
        if(e.classList[1] == "yellow"){
            document.body.style.cssText="--hangColor:#a49903;--personColor:#726b09;";
        }
    }
})