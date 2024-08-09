let unhappyDiv = document.getElementById('unhappy');
let neutralDiv = document.getElementById('neutral');
let satisfiesDiv = document.getElementById('satisfied');
let button = document.getElementById('button');
let cont = document.getElementById('container');
let body = document.body;


let selectedFeedback = "";

unhappyDiv.addEventListener('click',function(){
    selectedFeedback = "Unhappy";
    unhappyDiv.style.cssText=`
        background-color: #8fbc8f;
        color: white;
        border-radius: 10px;
        box-shadow: 0px 0px 5px gray;
        transition: 0.8s;
    `;
    neutralDiv.style.cssText=`
    `;
    satisfiesDiv.style.cssText=`
    `;
    body.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/thumbnails/021/634/373/original/scared-face-emoji-background-free-video.jpg')";
    document.body.style.backgroundSize = "cover"; 
    document.body.style.backgroundPosition = "center";
    body.style.transition = '1s';
})
neutralDiv.addEventListener('click',function(){
    selectedFeedback = "Neutral";
    neutralDiv.style.cssText=`
        background-color: #8fbc8f;
        color: white;
        border-radius: 10px;
        box-shadow: 0px 0px 5px gray;
        transition: 0.8s;
    `;
    unhappyDiv.style.cssText=`
    `;
    satisfiesDiv.style.cssText=`
    `;

    body.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/thumbnails/021/699/838/original/happy-face-emoji-background-free-video.jpg')";
    document.body.style.backgroundSize = "cover"; 
    document.body.style.backgroundPosition = "center";
    body.style.transition = '1s';
})

satisfiesDiv.addEventListener('click',function(){
    selectedFeedback = "Satisfied";
    satisfiesDiv.style.cssText=`
        background-color: #8fbc8f;
        color: white;
        border-radius: 10px;
        box-shadow: 0px 0px 5px gray;
        transition: 0.8s;
    `;
    unhappyDiv.style.cssText=`
    `;
    neutralDiv.style.cssText=`
    `;

    body.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/thumbnails/021/699/830/original/face-with-sunglasses-emoji-background-free-video.jpg')";
    document.body.style.backgroundSize = "cover"; 
    document.body.style.backgroundPosition = "center";
    body.style.transition = '1s';
})

button.addEventListener('click',function(){
    outDiv = document.createElement('div');
    outDiv.classList.add('outDiv');
    outDiv.style.cssText=`
        display: flex;
        flex-direction: column;
        gap: 45px;
        justify-content: center;
        align-items: center;
        height: 300px;
        width: 420px;
        border-radius: 20px;
        box-shadow: 0px 0px 10px 1px rgb(187, 239, 208);
        background-color: aliceblue;
        padding:30px;
    `;
    let h1Div = document.createElement('h1');
    h1Div.innerText = "Thank you!";
    
    let ans = document.createElement('h2');
    ans.innerText = `Feedback: ${selectedFeedback}`;
    
    let pLast = document.createElement('p');
    pLast.innerText = "We'll use your feedback to improve our customer support.";
    outDiv.appendChild(h1Div);
    outDiv.appendChild(ans);
    outDiv.appendChild(pLast);
    
    cont.style.display = 'none';
    document.body.appendChild(outDiv);    
})