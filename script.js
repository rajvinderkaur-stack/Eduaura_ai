
const languages = {
en:["Learn Beyond Language.","Learn in your language. Learn anywhere.","Explore Learning","Your personal learning space"],
hi:["भाषा से आगे सीखें।","अपनी भाषा में कहीं भी सीखें।","शिक्षा खोजें","आपका व्यक्तिगत शिक्षा मंच"],
pa:["ਭਾਸ਼ਾ ਤੋਂ ਅੱਗੇ ਸਿੱਖੋ।","ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ ਕਿਤੇ ਵੀ ਸਿੱਖੋ।","ਸਿੱਖਿਆ ਦੀ ਖੋਜ ਕਰੋ","ਤੁਹਾਡਾ ਸਿੱਖਣ ਦਾ ਮੰਚ"],
bn:["ভাষার সীমা পেরিয়ে শিখুন।","নিজের ভাষায় যেকোনো জায়গায় শিখুন।","শিক্ষা অন্বেষণ করুন","আপনার শিক্ষার স্থান"],
ta:["மொழி எல்லைகளைத் தாண்டிக் கற்போம்।","உங்கள் மொழியில் எங்கும் கற்கலாம்।","பாடங்களை ஆராயுங்கள்","உங்கள் கற்றல் தளம்"],
te:["భాషా పరిమితులను దాటి నేర్చుకోండి।","మీ భాషలో ఎక్కడైనా నేర్చుకోండి।","విషయాలను అన్వేషించండి","మీ అభ్యాస వేదిక"],
mr:["भाषेच्या पलीकडे शिका।","आपल्या भाषेत कुठेही शिका।","विषय शोधा","तुमचे शिक्षण व्यासपीठ"],
gu:["ભાષાની મર્યાદાઓથી આગળ શીખો.","તમારી ભાષામાં ગમે ત્યાં શીખો.","વિષયો શોધો","તમારું શિક્ષણ મંચ"],
kn:["ಭಾಷೆಯ ಮಿತಿಗಳನ್ನು ಮೀರಿ ಕಲಿಯಿರಿ.","ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಎಲ್ಲಿಯಾದರೂ ಕಲಿಯಿರಿ.","ವಿಷಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ","ನಿಮ್ಮ ಕಲಿಕಾ ವೇದಿಕೆ"],
ml:["ഭാഷയുടെ അതിരുകൾ കടന്ന് പഠിക്കൂ.","നിങ്ങളുടെ ഭാഷയിൽ എവിടെയും പഠിക്കൂ.","വിഷയങ്ങൾ പര്യവേക്ഷണം ചെയ്യുക","നിങ്ങളുടെ പഠന വേദി"],
or:["ଭାଷାର ସୀମା ଅତିକ୍ରମ କରି ଶିଖନ୍ତୁ।","ନିଜ ଭାଷାରେ ଯେକୌଣସି ସ୍ଥାନରେ ଶିଖନ୍ତୁ।","ବିଷୟ ଅନ୍ୱେଷଣ କରନ୍ତୁ","ଆପଣଙ୍କ ଶିକ୍ଷା ମଞ୍ଚ"],
as:["ভাষাৰ সীমা অতিক্ৰম কৰি শিকক।","নিজৰ ভাষাত যিকোনো ঠাইতে শিকক।","বিষয়সমূহ অন্বেষণ কৰক","আপোনাৰ শিক্ষাৰ মঞ্চ"]
};

const languageNames = {
en:"English",hi:"Hindi",pa:"Punjabi",bn:"Bengali",
ta:"Tamil",te:"Telugu",mr:"Marathi",gu:"Gujarati",
kn:"Kannada",ml:"Malayalam",or:"Odia",as:"Assamese"
};

const courses = {
science:{
title:"Our Solar System",
text:"The Solar System consists of the Sun and eight planets. Earth is our home. The Sun provides light and heat.",
q:"How many planets are in our Solar System?",
options:["6","7","8","9"],answer:2
},
math:{
title:"Basic Mathematics",
text:"Addition combines numbers. Subtraction finds differences. Multiplication is repeated addition. Division shares quantities equally.",
q:"What is 12 + 8?",
options:["18","19","20","21"],answer:2
},
english:{
title:"English Grammar",
text:"A noun is the name of a person, place, animal or thing. A verb describes an action. An adjective describes a noun.",
q:"Which word is a noun?",
options:["Run","Beautiful","School","Quickly"],answer:2
},
social:{
title:"Our Planet Earth",
text:"Earth is the third planet from the Sun. It has land, water and an atmosphere that supports life.",
q:"Which planet do we live on?",
options:["Mars","Earth","Venus","Jupiter"],answer:1
}
};

let currentLang="en";
let currentCourse="";
let questionAnswered=false;

let stats=JSON.parse(localStorage.getItem("eduauraStats")||
'{"completed":0,"score":0}');

function changeLanguage(){
currentLang=document.getElementById("language").value;
let t=languages[currentLang];
document.getElementById("welcome").textContent=t[0];
document.getElementById("subtitle").textContent=t[1];
document.querySelector("#courses h2").textContent="📚 "+t[2];
if(currentCourse) openLesson(currentCourse);
}

function changeName(){
let name=prompt("Enter your student name:");
if(name){
localStorage.setItem("studentName",name);
document.getElementById("studentName").textContent=name;
}
}

function searchLessons(){
let value=document.getElementById("search").value.toLowerCase();
document.querySelectorAll(".course").forEach(card=>{
card.hidden=!card.dataset.search.includes(value);
});
}

function openLesson(id){
currentCourse=id;
let c=courses[id];
document.getElementById("lesson").hidden=false;
document.getElementById("courses").hidden=true;
document.getElementById("lessonTitle").textContent=c.title;
document.getElementById("lessonText").textContent=c.text;
showQuestion();
document.getElementById("lesson").scrollIntoView({behavior:"smooth"});
}

function closeLesson(){
currentCourse="";
document.getElementById("lesson").hidden=true;
document.getElementById("courses").hidden=false;
}

function showQuestion(){
let c=courses[currentCourse];
questionAnswered=false;
document.getElementById("question").textContent=c.q;
document.getElementById("quizResult").textContent="";
let area=document.getElementById("answers");
area.innerHTML="";
c.options.forEach((option,i)=>{
let b=document.createElement("button");
b.textContent=option;
b.onclick=()=>checkAnswer(i);
area.appendChild(b);
});
}

function checkAnswer(index){
if(questionAnswered)return;
questionAnswered=true;
let c=courses[currentCourse];
document.querySelectorAll("#answers button").forEach((b,i)=>{
b.disabled=true;
if(i===c.answer)b.style.background="#16834b";
else if(i===index)b.style.background="#c94c4c";
});
if(index===c.answer){
stats.score++;
document.getElementById("quizResult").textContent="🎉 Correct! Well done.";
}else{
document.getElementById("quizResult").textContent=
"Correct answer: "+c.options[c.answer];
}
localStorage.setItem("eduauraStats",JSON.stringify(stats));
}

function nextQuestion(){
if(!questionAnswered){
alert("Please answer the question first!");
return;
}
stats.completed++;
localStorage.setItem("eduauraStats",JSON.stringify(stats));
updateDashboard();
showQuestion();
}

function updateDashboard(){
document.getElementById("completed").textContent=stats.completed;
document.getElementById("score").textContent=stats.score;
document.getElementById("progressBar").style.width=
Math.min(stats.completed*10,100)+"%";
}

function speakLesson(){
if(!("speechSynthesis" in window)){
alert("Audio is not supported in this browser.");
return;
}
let text=courses[currentCourse].title+". "+courses[currentCourse].text;
let speech=new SpeechSynthesisUtterance(text);
speech.lang=currentLang==="en"?"en-IN":currentLang+"-IN";
speech.rate=.85;
speechSynthesis.cancel();
speechSynthesis.speak(speech);
}

function saveLesson(){
let list=JSON.parse(localStorage.getItem("eduauraSaved")||"[]");
let c=courses[currentCourse];
if(!list.some(x=>x.title===c.title)){
list.push({title:c.title,text:c.text});
localStorage.setItem("eduauraSaved",JSON.stringify(list));
}
updateSavedCount();
alert("Lesson saved on this device!");
}

function showSaved(){
let list=JSON.parse(localStorage.getItem("eduauraSaved")||"[]");
let area=document.getElementById("savedLessons");
area.innerHTML="";
if(!list.length){
area.textContent="No lessons saved yet.";
return;
}
list.forEach(item=>{
let div=document.createElement("div");
div.className="card";
let h=document.createElement("h3");
h.textContent=item.title;
let p=document.createElement("p");
p.textContent=item.text;
div.append(h,p);
area.appendChild(div);
});
}

function updateSavedCount(){
let list=JSON.parse(localStorage.getItem("eduauraSaved")||"[]");
document.getElementById("savedCount").textContent=list.length;
}

function tutorReply(question){
let q=question.toLowerCase();
if(q.includes("solar")||q.includes("planet")||q.includes("space"))
return "The Solar System has eight planets orbiting the Sun. Earth is our home planet.";
if(q.includes("addition")||q.includes("math")||q.includes("12 + 8"))
return "Addition combines numbers. For example, 12 + 8 = 20. Try practising with small numbers!";
if(q.includes("noun")||q.includes("grammar")||q.includes("english"))
return "A noun names a person, place, animal or thing. Examples: student, school and book.";
if(q.includes("earth")||q.includes("geography"))
return "Earth is the third planet from the Sun. It has land, oceans and an atmosphere.";
return "Great question! Try exploring our Science, Mathematics, English and Social Science lessons. This is a demo tutor, so my answers are limited to prepared topics.";
}

function askTutor(){
let input=document.getElementById("chatInput");
let question=input.value.trim();
if(!question)return;
let chat=document.getElementById("chat");
let user=document.createElement("p");
user.className="user";
user.textContent=question;
chat.appendChild(user);
let bot=document.createElement("p");
bot.className="bot";
bot.textContent="🤖 "+tutorReply(question);
chat.appendChild(bot);
input.value="";
chat.scrollTop=chat.scrollHeight;
}

function updateConnection(){
document.getElementById("connection").textContent=
navigator.onLine?"🟢 Connected to internet":"🔴 Offline mode";
}

window.addEventListener("online",updateConnection);
window.addEventListener("offline",updateConnection);

document.getElementById("studentName").textContent=
localStorage.getItem("studentName")||"Student";

updateDashboard();
updateSavedCount();
updateConnection();
