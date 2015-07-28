/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*jslint browser: true*/
/*global $, HTMLheaderName, HTMLheaderRole, HTMLskills,
HTMLskillsStart, HTMLworkEmployer*/


var bio = {
	"name": "Sujal Ghosh",
	"role": "Application Developer",
	"contacts": {
		"mobile": "+919830851589",
		"email": "sujal.ghosh@gmail.com",
		"github": "sujal99",
		"twitter": "@sujal_ghosh",
		"location": "Calcutta, India"
	},
	"welcomeMessage": "I am a application developer with 6 years of experiance. I have significant experiance in developing iOS and web apps.",
	"bioPic": "images/fry.jpg",
	"skills": ["HTML5", "CSS3", "JavaScript", "iOS"]
};

var education = {
	"schools": [
		{
			"name": "Bengal Engineering and Science University",
			"location": "India",
			"degree": "MCA",
			"majors": ["Computer Science"],
			"dates": "2003-2008",
			"url": "http://www.iiests.ac.in/"
		},
		{
			"name": "University of Calcutta",
			"location": "India",
			"degree": "B.Sc.",
			"majors": ["Mathematics"],
			"dates": "1999-2003",
			"url": "http://www.caluniv.ac.in/"
		}
	],
	"onlineCourses": [
		{
			"title": "Principles of Computing",
			"school": "Coursera",
			"dates": "2014",
			"url": "https://www.coursera.org/"
		},
		{
			"title": "Algorithm",
			"school": "EdX",
			"dates": "2014",
			"url": "https://www.edx.org/"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "Adept Software Avenues Pvt. Ltd.",
			"title": "Software Developer",
			"location": "Calcutta, India",
			"dates": "2008-2015",
			"description": "C++ developer"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula placerat luctus. Duis at sapien enim. Duis lobortis urna eu felis vestibulum, ac suscipit augue commodo. Duis sit amet urna luctus, vehicula enim a, egestas tellus. Nullam est risus, laoreet quis nibh et, vehicula feugiat mi. Nam lacus odio, sodales sed luctus id, varius mattis diam. Pellentesque dictum rhoncus eros a rutrum. Nulla a rhoncus orci, vel ultricies lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras eu ipsum elementum, rutrum elit vehicula, scelerisque justo. Nam at tortor elit. Vestibulum vehicula pharetra purus. Pellentesque dapibus orci ut velit condimentum, ac sagittis nisl dignissim.",
			"images": [
				"https://pbs.twimg.com/profile_images/1130950496/agnes_despicable_me.png",
			"http://www11.imagesandwallpapers.com/img/flipped_Cute_Despicable_Me_Agnes_HD_Wallpaper.jpg"
			]
		},
		{
			"title": "Sample Project 2",
			"dates": "2015",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula placerat luctus. Duis at sapien enim. Duis lobortis urna eu felis vestibulum, ac suscipit augue commodo. Duis sit amet urna luctus, vehicula enim a, egestas tellus. Nullam est risus, laoreet quis nibh et, vehicula feugiat mi. Nam lacus odio, sodales sed luctus id, varius mattis diam. Pellentesque dictum rhoncus eros a rutrum. Nulla a rhoncus orci, vel ultricies lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras eu ipsum elementum, rutrum elit vehicula, scelerisque justo. Nam at tortor elit. Vestibulum vehicula pharetra purus. Pellentesque dapibus orci ut velit condimentum, ac sagittis nisl dignissim.",
			"images": [
				"https://pbs.twimg.com/profile_images/1130950496/agnes_despicable_me.png",
			"http://www11.imagesandwallpapers.com/img/flipped_Cute_Despicable_Me_Agnes_HD_Wallpaper.jpg"
			]
		}
	]
};


function displayHeader() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
}

function displayWorks() {
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		bio.skills.forEach(function (currentValue, index, array) {
			var formattedSkill = HTMLskills.replace("%data%", currentValue);
			$("#skills").append(formattedSkill);
		});
	}

	work.jobs.forEach(function (currentValue, index, array) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployerTitle = HTMLworkEmployer.replace("%data%", currentValue.employer)
			+ HTMLworkLocation.replace("%data%", currentValue.location)
			+ HTMLworkTitle.replace("%data%", currentValue.title)
			+ HTMLworkDates.replace("%data%", currentValue.dates)
			+ HTMLworkDescription.replace("%data%", currentValue.description);
		$(".work-entry:last").append(formattedEmployerTitle);
	});
}

function displayContacts(contactList) {
	for (var property in bio.contacts) {
		var listItem = HTMLcontactGeneric.replace("%contact%", property);
		listItem = listItem.replace("%data%", bio.contacts[property]);
		contactList.append(listItem);
	}
}

function displayImageAndWelcome() {
	$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
}

function displayProjects() {
	projects.projects.forEach(function (currentVal, index, array) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", currentVal.title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", currentVal.dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", currentVal.description));
		currentVal.images.forEach(function (curVal, index1, array1) {
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", curVal));
		});
	});
}

function displayEducation() {
	education.schools.forEach(function (currentVal, index, array){
		$("#education").append(HTMLschoolStart);
		var forMattedSchoolName = HTMLschoolName.replace("%data%", currentVal.name)
			+ HTMLschoolDegree.replace("%data%", currentVal.degree);
 		$(".education-entry:last").append(forMattedSchoolName);
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", currentVal.location));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", currentVal.dates));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", currentVal.majors));
	});

	if (education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
		education.onlineCourses.forEach(function (currentVal, index, array) {
            $("#education").append(HTMLschoolStart);
            var formattedCourseName = HTMLonlineTitle.replace("%data%", currentVal.title)
			+ HTMLonlineSchool.replace("%data%", currentVal.school);
            $(".education-entry:last").append(formattedCourseName);
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", currentVal.dates));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", currentVal.url));
        });
	}
}

function locationDisplay() {
	//$("#map-div").append(googleMap);
}


displayHeader();
displayContacts($("#topContacts"));
displayImageAndWelcome();
displayWorks();
displayProjects();
displayEducation();
locationDisplay();
displayContacts($("#footerContacts"));

//$(document).click(function (loc) {
//	logClicks(loc.pageX, loc.pageY);
//});
//
//function inName(name1) {
//	var names = name1.split(/\s+/);
//	return names[0].charAt(0).toUpperCase + names[0].slice(1) + " " + names[1].toUpperCase;
//}
//
//$("#main").append(internationalizeButton);
