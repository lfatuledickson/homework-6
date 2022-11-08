let main = document.querySelector("main");
let listOfJokes = document.querySelector("h1");
let joke1 = document.querySelector('#first');
let joke2 = document.querySelector('#second');
let joke3 = document.querySelector("#third");

listOfJokes.textContent = "My VERY BAD Jokes";
joke1.textContent = "Why did the sorcerer cross the road?: To ask the devs to give them their bug back.";
joke2.textContent = "Why is Xypher crying?: Because the devs gave people free fiery halos after he spent 2m gold to get his.";
joke3.textContent = "What did Kanroji shout to Yesicaca after she was screwing up when fightin Antaroth?: USE YOUR ****** HADOUKEN AGAIN!";


let thatsAllP = document.createElement("p");
thatsAllP.textContent = "That's all for today. I have much more worse ones, but I don't want to scare you too much. Have a good day!";
main.appendChild(thatsAllP);

