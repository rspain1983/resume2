var bio = {
	"name" : "Randy",
	"role" : "Aspiring Web developer",
	"contacts" : {
		"mobile": "559-709-6047",
		"email" : "rspain2442@gmail.com",
		"github" : "www.github.com",
		"location" : "Fresno, CA"
	},
		"welcomeMessage" : "welcome and things",
		"skills" : ["Overwatch", "Poker", "Super Charming"],
		"bioPic" : "images./fry.jpg"
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);


var education = {
	"schools": [
	{
		"name" : "Excelsio College", 
		"city" : "Albany, NY",
		"degree" : "BA", 
		"major" : "Liberal Studies"
    },
    {
		"name" : "National University", 
		"city" : "Fresno, CA",
		"degree" : "Certificate", 
		"major" : "Multiple Subject Teaching Credential"
    }
  ]
};

var work = {
	"jobs" : [
	{
		"company" : "500 Club Casino",
		"city" : "Clovis, Ca",
		"title" : "Proposition Player",
		"date" : "2012-Present",
		"duties" : ["Start poker games", "Provide a fun a friendly environment", "answer questions about casino rules, promotions, etc"]
	},
	{
		"company" : "Club One Casino",
		"city" : "Fresno, Ca",
		"title" : "Proposition Player",
		"date" : "2010-2012",
		"duties" : ["Start poker games", "Provide a fun a friendly environment", "answer questions about casino rules, promotions, etc"]
	},
	{
		"company" : "Cutler Orosi Unified",
		"city" : "Orosi, CA",
		"title" : "Elementary Teacher",
		"date" : "2009-2010",
		"duties" : ["create lessons", "instruct students in all subjects", "adminster exams and examine testing data"]
	}
  ]
};

var projects = {
	"projects" : [
	{
		"title" : "Really cool thing I did",
		"description" : "It was really cool and I learned all sorts of things...about stuff",
		"images" : ["images/udacity-logo.jpg"]

	}
  ]
};



