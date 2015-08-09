var bio = {
    "name": "Brian Konzman, SJ",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "570.867.5309",
        "email": "b.g.konzman@gmail.com",
        "github": "bgkonzman",
        "twitter": "@BrianKonzman",
        "location": "Washington, DC"
    },
    "welcomeMessage": "Welcome to my resume!",
    "skills": [
        "Ignatian spirituality", "front-end development", "python development",
        "secondary education"
    ],
    "bioPic": "images/konzman.jpg",
    "formatContacts": function() {
        this.formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        this.formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        this.formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        this.formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    },
    "displayHeader": function() {
        var header = $("#header");
        var topContacts = $("#top-contacts");
        var nav = $("#nav");
        var formattedContacts = new bio.formatContacts();
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedCityLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $(formattedRole).insertAfter(nav);
        $(formattedName).insertAfter(nav);
        topContacts.append(formattedContacts.formattedMobile);
        topContacts.append(formattedContacts.formattedEmail);
        topContacts.append(formattedContacts.formattedTwitter);
        topContacts.append(formattedContacts.formattedGithub);
        topContacts.append(formattedCityLocation);
        header.append(formattedBioPic);
        header.append(formattedWelcomeMessage);
        header.append(HTMLskillsStart);

        for (var skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    },
    "displayFooter": function() {
        var footerContacts = $("#footer-contacts");
        var formattedContacts = new bio.formatContacts();

        footerContacts.append(formattedContacts.formattedMobile);
        footerContacts.append(formattedContacts.formattedEmail);
        footerContacts.append(formattedContacts.formattedTwitter);
        footerContacts.append(formattedContacts.formattedGithub);
    }
};

var work = {
    "jobs": [{
        "title": "CS Teacher",
        "employer": "Gonzaga College High School",
        "dates": "2013-2015",
        "location": "Washington, DC",
        "description": "Taught computer science skills, including Python, Dart, and basic web development. Coached cross-country."
    }, {
        "title": "Adjunct Professor of Chemistry",
        "employer": "Fordham University",
        "dates": "2012-2013",
        "location": "New York",
        "description": "Adjuncted for chemistry laboratory classes."
    }],
    "display": function() {
        for (var job in work.jobs) {
            $("#work-experience").append(HTMLworkStart);

            var entry = $(".work-entry:last");
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedCity = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            entry.append(formattedEmployerTitle);
            entry.append(formattedDates);
            entry.append(formattedCity);
            entry.append(formattedDescription);
        }
    }
};

var projects = {
    "projects": [{
        "title": "The Jesuit Post",
        "dates": "2012-present",
        "description": "Content contributor, managing editor, and tech lead",
        "images": [
            "images/tjp_600x400.jpg"
        ]
    }],
    "display": function() {
        for (var proj in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var entry = $(".project-entry:last");
            var title = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
            var dates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
            var desc = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
            if (projects.projects[proj].images.length > 0) {
                for (var image in projects.projects[proj].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[0]);
                    entry.append(formattedImage);
                }
            }

            entry.append(title);
            entry.append(dates);
            entry.append(desc);
        }
    }
};

var education = {
    "schools": [{
        "name": "Jesuit School of Theology",
        "location": "Berkeley, CA",
        "degree": "MDiv, STL",
        "major": "",
        "dates": "2015-2018",
        "url": "http://www.scu.edu/jst/"
    }, {
        "name": "Fordham University",
        "location": "New York",
        "degree": "MA",
        "major": "Philosophy",
        "dates": "2010-2013",
        "url": "http://www.fordham.edu"
    }, {
        "name": "University of Scranton",
        "location": "Scranton, PA",
        "degree": "BS",
        "major": "Chemistry, Philosophy",
        "dates": "2004-2008",
        "url": "http://www.scranton.edu"
    }],
    "display": function() {
        $("#education").append(HTMLschoolStart);

        for (var school in education.schools) {
            var entry = $(".education-entry:last");
            var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

            entry.append(formattedName);
            entry.append(formattedDegree);
            entry.append(formattedDates);
            entry.append(formattedLocation);
            entry.append(formattedMajor);
        }
    }
};

bio.displayHeader();
work.display();
projects.display();
education.display();
bio.displayFooter();

$("#map-div").append(googleMap);
