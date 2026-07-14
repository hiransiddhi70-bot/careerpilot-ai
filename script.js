/* ===========================================
   CareerPilot AI
   script.js
=========================================== */

// ===========================================
// DOM Elements
// ===========================================

const careerForm = document.getElementById("careerForm");

const fullName = document.getElementById("fullName");
const dreamCareer = document.getElementById("dreamCareer");
const education = document.getElementById("education");
const experience = document.getElementById("experience");
const currentSkills = document.getElementById("currentSkills");
const dreamCompany = document.getElementById("dreamCompany");

// Dashboard

const careerScore = document.getElementById("careerScore");
const skillScore = document.getElementById("skillScore");
const readinessScore = document.getElementById("readinessScore");
const growthScore = document.getElementById("growthScore");

// Sections

const skillsContainer = document.getElementById("skillsContainer");
const roadmapContainer = document.getElementById("roadmapContainer");
const resourcesContainer = document.getElementById("resourcesContainer");
const internshipContainer = document.getElementById("internshipContainer");
const badgeContainer = document.getElementById("badgeContainer");
const reportContainer = document.getElementById("reportContainer");

// Chart

let radarChart = null;

// ===========================================
// INITIALIZE
// ===========================================

document.addEventListener("DOMContentLoaded", () => {

loadCareerOptions();

loadEducation();

loadExperience();

initializeStorage();

loadTheme();

});

// ===========================================
// LOAD DROPDOWNS
// ===========================================

function loadCareerOptions(){

CAREERS.forEach(career=>{

const option=document.createElement("option");

option.value=career;

option.textContent=career;

dreamCareer.appendChild(option);

});

}

function loadEducation(){

EDUCATION.forEach(level=>{

const option=document.createElement("option");

option.value=level;

option.textContent=level;

education.appendChild(option);

});

}

function loadExperience(){

EXPERIENCE.forEach(level=>{

const option=document.createElement("option");

option.value=level;

option.textContent=level;

experience.appendChild(option);

});

}

// ===========================================
// HELPERS
// ===========================================

function randomItem(array){

return array[Math.floor(Math.random()*array.length)];

}

function average(...values){

return Math.round(

values.reduce((a,b)=>a+b,0)

/

values.length

);

}

function clamp(value){

return Math.max(

0,

Math.min(100,value)

);

}

// ===========================================
// STORAGE
// ===========================================

function initializeStorage(){

if(

!localStorage.getItem("careerHistory")

){

localStorage.setItem(

"careerHistory",

JSON.stringify([])

);

}

}

// ===========================================
// THEME
// ===========================================

function loadTheme(){

const theme=

localStorage.getItem("theme");

if(theme==="light"){

document.body.classList.add("light");

}

}

function toggleTheme(){

document.body.classList.toggle("light");

localStorage.setItem(

"theme",

document.body.classList.contains("light")

?

"light"

:

"dark"

);

}
/* ===========================================
   CAREER ANALYSIS ENGINE
=========================================== */

function analyzeCareer(){

const name=fullName.value.trim();
const career=dreamCareer.value;
const edu=education.value;
const exp=experience.value;
const skills=currentSkills.value
.toLowerCase()
.split(",")
.map(skill=>skill.trim())
.filter(skill=>skill!=="");

const company=dreamCompany.value.trim();

if(
!name||
!career||
!edu||
!exp||
skills.length===0
){

alert("Please fill all required fields.");

return;

}

/* ===========================================
   REQUIRED SKILLS
=========================================== */

const requiredSkills=SKILLS[career]||[];

let matched=0;

requiredSkills.forEach(skill=>{

if(
skills.includes(
skill.toLowerCase()
)
){

matched++;

}

});

const skillPercent=Math.round(

(matched/requiredSkills.length)*100

);

/* ===========================================
   BASE SCORES
=========================================== */

let careerScoreValue=40;
let readinessValue=35;
let growthValue=45;

/* ===========================================
   Education
=========================================== */

switch(edu){

case "School Student":

growthValue+=25;
break;

case "12th Pass":

growthValue+=20;
careerScoreValue+=5;
break;

case "B.Tech 1st Year":

growthValue+=18;
careerScoreValue+=10;
break;

case "B.Tech 2nd Year":

growthValue+=15;
careerScoreValue+=15;
break;

case "B.Tech 3rd Year":

careerScoreValue+=18;
readinessValue+=8;
break;

case "B.Tech Final Year":

careerScoreValue+=20;
readinessValue+=15;
break;

case "Graduate":

careerScoreValue+=22;
readinessValue+=20;
break;

case "Working Professional":

careerScoreValue+=25;
readinessValue+=25;
break;

}

/* ===========================================
   Experience
=========================================== */

switch(exp){

case "0-6 Months":

careerScoreValue+=5;
break;

case "6-12 Months":

careerScoreValue+=10;
readinessValue+=5;
break;

case "1-2 Years":

careerScoreValue+=15;
readinessValue+=15;
break;

case "2+ Years":

careerScoreValue+=20;
readinessValue+=25;
break;

}

/* ===========================================
   Skill Contribution
=========================================== */

careerScoreValue+=Math.round(skillPercent*0.20);

readinessValue+=Math.round(skillPercent*0.35);

growthValue+=Math.round(skillPercent*0.15);

/* ===========================================
   Clamp Values
=========================================== */

careerScoreValue=clamp(careerScoreValue);

readinessValue=clamp(readinessValue);

growthValue=clamp(growthValue);

const finalScore=average(

careerScoreValue,

skillPercent,

readinessValue,

growthValue

);

/* ===========================================
   Dashboard
=========================================== */

careerScore.textContent=finalScore+"%";

skillScore.textContent=skillPercent+"%";

readinessScore.textContent=readinessValue+"%";

growthScore.textContent=growthValue+"%";

/* ===========================================
   Generate Reports
=========================================== */

generateSkills(career);

generateResources(career);

generateRoadmap();

generateInternships();

generateResumeTips();

generateInterviewTips();

generateBadge(finalScore);

drawChart(

finalScore,

skillPercent,

readinessValue,

growthValue

);

saveHistory({

name,

career,

company,

education:edu,

experience:exp,

score:finalScore

});

}
/* ===========================================
   REQUIRED SKILLS
=========================================== */

function generateSkills(career){

skillsContainer.innerHTML="";

const skills=SKILLS[career]||[];

skills.forEach(skill=>{

const card=document.createElement("div");

card.className="skill-card";

card.innerHTML=`
<h3>✅ ${skill}</h3>
<p>Recommended skill for becoming a ${career}.</p>
`;

skillsContainer.appendChild(card);

});

}

/* ===========================================
   LEARNING RESOURCES
=========================================== */

function generateResources(career){

resourcesContainer.innerHTML="";

const resources=RESOURCES[career]||[];

resources.forEach(item=>{

const card=document.createElement("div");

card.className="resource-card";

card.innerHTML=`
<h3>📚 ${item}</h3>
<p>Recommended learning resource.</p>
`;

resourcesContainer.appendChild(card);

});

}

/* ===========================================
   CAREER ROADMAP
=========================================== */

function generateRoadmap(){

roadmapContainer.innerHTML="";

Object.keys(ROADMAPS).forEach(phase=>{

const card=document.createElement("div");

card.className="roadmap-card";

card.innerHTML=`
<h2>${phase}</h2>
<ul>
${ROADMAPS[phase]
.map(step=>`<li>${step}</li>`)
.join("")}
</ul>
`;

roadmapContainer.appendChild(card);

});

}

/* ===========================================
   INTERNSHIP PLAN
=========================================== */

function generateInternships(){

internshipContainer.innerHTML="";

INTERNSHIPS.forEach(task=>{

const item=document.createElement("div");

item.className="internship-card";

item.innerHTML=`
<h3>💼 ${task}</h3>
`;

internshipContainer.appendChild(item);

});

}

/* ===========================================
   RESUME TIPS
=========================================== */

function generateResumeTips(){

let html="<h2>📄 Resume Tips</h2><ul>";

RESUME_TIPS.forEach(tip=>{

html+=`<li>${tip}</li>`;

});

html+="</ul>";

reportContainer.innerHTML=html;

}

/* ===========================================
   INTERVIEW TIPS
=========================================== */

function generateInterviewTips(){

let html="<h2>🎤 Interview Tips</h2><ul>";

INTERVIEW_TIPS.forEach(tip=>{

html+=`<li>${tip}</li>`;

});

html+="</ul>";

reportContainer.innerHTML+=html;

}

/* ===========================================
   CAREER BADGE
=========================================== */

function generateBadge(score){

const badge=

BADGES.find(

item=>score>=item.min && score<=item.max

);

badgeContainer.innerHTML=`
<div class="badge-card">
<h2>🏆 Career Badge</h2>
<h1>${badge.title}</h1>
<p>Keep learning and improving your skills to unlock the next level.</p>
</div>
`;

}
/* ===========================================
   CHART.JS
=========================================== */

function drawChart(career,skills,readiness,growth){

const ctx=document.getElementById("careerChart").getContext("2d");

if(radarChart){

radarChart.destroy();

}

radarChart=new Chart(ctx,{

type:"radar",

data:{

labels:[
"Career",
"Skills",
"Readiness",
"Growth",
"Projects",
"Communication"
],

datasets:[{

label:"Career Analysis",

data:[
career,
skills,
readiness,
growth,
average(career,skills),
average(readiness,growth)
],

fill:true,

backgroundColor:"rgba(99,102,241,.25)",

borderColor:"#6366F1",

pointBackgroundColor:"#00D4FF",

borderWidth:3,

pointRadius:5

}]

},

options:{

responsive:true,

maintainAspectRatio:false,

plugins:{

legend:{

display:true

}

},

scales:{

r:{

min:0,

max:100,

ticks:{

stepSize:20

}

}

}

}

});

}

/* ===========================================
   SAVE HISTORY
=========================================== */

function saveHistory(data){

const history=

JSON.parse(

localStorage.getItem("careerHistory")

)||[];

history.unshift({

...data,

date:new Date().toLocaleString()

});

if(history.length>20){

history.pop();

}

localStorage.setItem(

"careerHistory",

JSON.stringify(history)

);

}

/* ===========================================
   VIEW HISTORY
=========================================== */

function viewHistory(){

const history=

JSON.parse(

localStorage.getItem("careerHistory")

)||[];

if(history.length===0){

alert("No history found.");

return;

}

let text="===== Career History =====\n\n";

history.forEach((item,index)=>{

text+=`${index+1}. ${item.name}

Career : ${item.career}

Education : ${item.education}

Experience : ${item.experience}

Dream Company : ${item.company}

Career Score : ${item.score}%

Date : ${item.date}

----------------------------

`;

});

alert(text);

}

/* ===========================================
   DOWNLOAD REPORT
=========================================== */

function downloadReport(){

if(careerScore.textContent==="0%"){

alert("Analyze your career first.");

return;

}

const report=`

========== CareerPilot AI Report ==========

Name : ${fullName.value}

Dream Career : ${dreamCareer.value}

Education : ${education.value}

Experience : ${experience.value}

Dream Company : ${dreamCompany.value}

Career Score : ${careerScore.textContent}

Skill Score : ${skillScore.textContent}

Readiness Score : ${readinessScore.textContent}

Growth Score : ${growthScore.textContent}

Estimated Salary :

${SALARY[dreamCareer.value] || "Not Available"}

Career Badge :

${badgeContainer.innerText}

Generated using CareerPilot AI.

`;

const blob=new Blob(

[report],

{

type:"text/plain"

}

);

const link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="Career_Report.txt";

link.click();

URL.revokeObjectURL(link.href);

}

/* ===========================================
   RESET
=========================================== */

function resetForm(){

careerForm.reset();

careerScore.textContent="0%";

skillScore.textContent="0%";

readinessScore.textContent="0%";

growthScore.textContent="0%";

skillsContainer.innerHTML="";

resourcesContainer.innerHTML="";

roadmapContainer.innerHTML="";

internshipContainer.innerHTML="";

badgeContainer.innerHTML="";

reportContainer.innerHTML="";

if(radarChart){

radarChart.destroy();

radarChart=null;

}

}

/* ===========================================
   FORM SUBMIT
=========================================== */

careerForm.addEventListener("submit",function(e){

e.preventDefault();

analyzeCareer();

});
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(() => console.log("Service Worker Registered"))
      .catch(err => console.log(err));
  });
}

/* ===========================================
   END OF FILE
=========================================== */
