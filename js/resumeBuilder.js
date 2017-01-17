

var bio {
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
		"bioPic" : "images.fry/jpg"
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);


var education  {
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
}

var work {
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
}

var projects {
	"projects" : [
	{
		"title" : "Really cool thing I did",
		"description" : "It was really cool and I learned all sorts of things...about stuff",
		"images" : ["images/udacity-logo.jpg"]

	}
  ]
}



bio.display = function(){

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace(/%data%/g, bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
    $("#topContacts").append(formattedGithub);
}

 if(bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
}