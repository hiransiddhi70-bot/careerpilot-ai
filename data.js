/* ===========================================
   CareerPilot AI
   data.js
=========================================== */

/* ========= Career List ========= */

const CAREERS = [

"Software Engineer",
"Frontend Developer",
"Backend Developer",
"Full Stack Developer",
"AI Engineer",
"Machine Learning Engineer",
"Data Scientist",
"Data Analyst",
"Cyber Security Engineer",
"Cloud Engineer",
"DevOps Engineer",
"Android Developer",
"iOS Developer",
"UI/UX Designer",
"Graphic Designer",
"Game Developer",
"Product Manager",
"Digital Marketer",
"Entrepreneur",
"Doctor",
"Lawyer",
"Chartered Accountant",
"IAS Officer"

];

/* ========= Education Levels ========= */

const EDUCATION = [

"School Student",
"12th Pass",
"Diploma Student",
"B.Tech 1st Year",
"B.Tech 2nd Year",
"B.Tech 3rd Year",
"B.Tech Final Year",
"Graduate",
"Working Professional"

];

/* ========= Experience ========= */

const EXPERIENCE = [

"Beginner",

"0-6 Months",

"6-12 Months",

"1-2 Years",

"2+ Years"

];

/* ========= Skills Database ========= */

const SKILLS = {

"Software Engineer":[
"DSA",
"C++",
"Java",
"Git",
"GitHub",
"Problem Solving",
"OOP",
"Operating Systems",
"DBMS",
"System Design"
],

"Frontend Developer":[
"HTML",
"CSS",
"JavaScript",
"React",
"Tailwind CSS",
"Git",
"GitHub",
"Responsive Design",
"Animations",
"Performance"
],

"Backend Developer":[
"Node.js",
"Express",
"MongoDB",
"MySQL",
"REST API",
"Authentication",
"Docker",
"Git",
"Deployment",
"Security"
],

"Full Stack Developer":[
"HTML",
"CSS",
"JavaScript",
"React",
"Node.js",
"Express",
"MongoDB",
"Git",
"GitHub",
"Deployment"
],

"AI Engineer":[
"Python",
"Machine Learning",
"Deep Learning",
"TensorFlow",
"PyTorch",
"NLP",
"Computer Vision",
"Git",
"Data Processing",
"Mathematics"
],

"Data Scientist":[
"Python",
"Pandas",
"Numpy",
"Machine Learning",
"Statistics",
"SQL",
"Visualization",
"Power BI",
"Excel",
"Data Cleaning"
],

"Cyber Security Engineer":[
"Networking",
"Linux",
"Ethical Hacking",
"Cryptography",
"OWASP",
"Wireshark",
"Python",
"Security Testing",
"Firewalls",
"Cloud Security"
]

};

/* ========= Soft Skills ========= */

const SOFT_SKILLS = [

"Communication",

"Leadership",

"Critical Thinking",

"Teamwork",

"Problem Solving",

"Adaptability",

"Time Management",

"Creativity",

"Presentation Skills",

"Decision Making"

];
/* ===========================================
   CAREER ROADMAPS
=========================================== */

const ROADMAPS = {

"30 Days":[
"Understand the career path",
"Set learning goals",
"Install required software",
"Complete one beginner course",
"Create your GitHub profile"
],

"60 Days":[
"Build 2 beginner projects",
"Learn Git & GitHub",
"Practice daily",
"Join developer communities",
"Start documenting your learning"
],

"90 Days":[
"Build 5 portfolio projects",
"Deploy projects online",
"Improve problem-solving",
"Create LinkedIn profile",
"Start applying for internships"
],

"365 Days":[
"Master advanced concepts",
"Complete internships",
"Contribute to open source",
"Prepare for interviews",
"Apply to top companies"

]

};

/* ===========================================
   LEARNING RESOURCES
=========================================== */

const RESOURCES={

"Frontend Developer":[

"MDN Web Docs",

"freeCodeCamp",

"JavaScript.info",

"Frontend Mentor",

"CSS Tricks"

],

"Backend Developer":[

"Node.js Docs",

"Express Docs",

"MongoDB University",

"SQLBolt",

"Docker Docs"

],

"Full Stack Developer":[

"The Odin Project",

"Full Stack Open",

"Roadmap.sh",

"GitHub",

"freeCodeCamp"

],

"Software Engineer":[

"LeetCode",

"GeeksforGeeks",

"Codeforces",

"NeetCode",

"Roadmap.sh"

],

"AI Engineer":[

"Kaggle",

"Google AI",

"DeepLearning.AI",

"Hugging Face",

"TensorFlow Docs"

],

"Data Scientist":[

"Kaggle",

"Pandas Docs",

"NumPy Docs",

"Scikit-learn",

"Power BI Learning"

]

};

/* ===========================================
   INTERNSHIP PLANS
=========================================== */

const INTERNSHIPS=[

"Complete 3 portfolio projects",

"Optimize your LinkedIn profile",

"Build an ATS-friendly resume",

"Contribute to GitHub",

"Participate in hackathons",

"Practice aptitude questions",

"Practice technical interviews",

"Apply to 10 internships every week",

"Network with professionals",

"Keep improving projects"

];

/* ===========================================
   CAREER BADGES
=========================================== */

const BADGES=[

{

min:0,

max:30,

title:"🌱 Beginner"

},

{

min:31,

max:50,

title:"📘 Learner"

},

{

min:51,

max:70,

title:"🚀 Rising Talent"

},

{

min:71,

max:90,

title:"⭐ Career Ready"

},

{

min:91,

max:100,

title:"🏆 Industry Ready"

}

];

/* ===========================================
   DAILY GOALS
=========================================== */

const DAILY_GOALS=[

"Code for 1 hour",

"Solve 2 coding problems",

"Read technical documentation",

"Watch one educational video",

"Improve one project",

"Write project notes",

"Commit code to GitHub",

"Read one tech article",

"Practice communication",

"Review previous concepts"

];
/* ===========================================
   DREAM COMPANIES
=========================================== */

const DREAM_COMPANIES = {

"Software Engineer":[
"Google",
"Microsoft",
"Amazon",
"Apple",
"Meta",
"Adobe",
"Netflix",
"Atlassian",
"Oracle",
"Salesforce"
],

"Frontend Developer":[
"Google",
"Microsoft",
"Vercel",
"Airbnb",
"Spotify",
"Adobe",
"Swiggy",
"Zomato",
"Razorpay",
"PhonePe"
],

"Backend Developer":[
"Amazon",
"Microsoft",
"Google",
"Uber",
"Netflix",
"Flipkart",
"Paytm",
"Salesforce",
"Oracle",
"Zoho"
],

"Full Stack Developer":[
"Google",
"Amazon",
"Microsoft",
"Meta",
"Adobe",
"Netflix",
"Atlassian",
"Shopify",
"Swiggy",
"PhonePe"
],

"AI Engineer":[
"OpenAI",
"Google DeepMind",
"NVIDIA",
"Microsoft AI",
"Meta AI",
"Anthropic",
"Tesla",
"IBM",
"Intel",
"Amazon"
],

"Data Scientist":[
"Google",
"Microsoft",
"Amazon",
"Netflix",
"Uber",
"Spotify",
"Adobe",
"PayPal",
"Oracle",
"IBM"
]

};

/* ===========================================
   ESTIMATED SALARY RANGES
=========================================== */

const SALARY = {

"Software Engineer":"₹6 LPA - ₹45+ LPA",

"Frontend Developer":"₹5 LPA - ₹35+ LPA",

"Backend Developer":"₹6 LPA - ₹40+ LPA",

"Full Stack Developer":"₹7 LPA - ₹45+ LPA",

"AI Engineer":"₹10 LPA - ₹70+ LPA",

"Machine Learning Engineer":"₹10 LPA - ₹65+ LPA",

"Data Scientist":"₹8 LPA - ₹50+ LPA",

"Cyber Security Engineer":"₹7 LPA - ₹40+ LPA",

"Cloud Engineer":"₹8 LPA - ₹45+ LPA",

"DevOps Engineer":"₹8 LPA - ₹45+ LPA"

};

/* ===========================================
   RESUME TIPS
=========================================== */

const RESUME_TIPS = [

"Keep your resume to one page if possible.",

"Highlight projects with measurable impact.",

"Include GitHub and LinkedIn profiles.",

"Use action verbs such as Built, Developed, Designed.",

"Tailor your resume for each job.",

"Show technical and soft skills separately.",

"Keep formatting clean and readable.",

"Avoid unnecessary personal information.",

"Proofread carefully for grammar mistakes.",

"Quantify achievements wherever possible."

];

/* ===========================================
   INTERVIEW TIPS
=========================================== */

const INTERVIEW_TIPS = [

"Practice common HR questions.",

"Revise core technical concepts.",

"Prepare to explain your projects.",

"Research the company beforehand.",

"Ask thoughtful questions at the end.",

"Maintain good communication.",

"Practice coding regularly.",

"Be honest about what you know.",

"Demonstrate problem-solving ability.",

"Stay calm and confident."

];

/* ===========================================
   CAREER RECOMMENDATIONS
=========================================== */

const CAREER_RECOMMENDATIONS = [

"Build projects consistently.",

"Push code to GitHub every week.",

"Keep your LinkedIn profile updated.",

"Join hackathons regularly.",

"Learn one new technology every month.",

"Practice interview questions weekly.",

"Improve communication skills.",

"Read technical blogs and documentation.",

"Contribute to open-source projects.",

"Build a strong personal portfolio."

];

/* ===========================================
   PROGRESS LEVELS
=========================================== */

const PROGRESS_LEVELS = [

{ score:20, title:"🌱 Beginner" },

{ score:40, title:"📘 Learning" },

{ score:60, title:"🚀 Improving" },

{ score:80, title:"⭐ Advanced" },

{ score:100, title:"🏆 Career Ready" }

];

/* ===========================================
   END OF DATA FILE
=========================================== */
