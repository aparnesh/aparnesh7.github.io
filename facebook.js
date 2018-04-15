var feed = /** @class */ (function () {
    function feed(name, id, gender, hometown, email, mobilenumber, religion, political_views, relationship, languages, workplace, birthday, about) {
        var _this = this;
        this.education = new Array();
        this.getName = function () {
            return _this.name;
        };
        this.getEducation = function () {
            var edu = JSON.stringify(_this.education, null, 5);
            return edu;
        };
        this.getHomeTown = function () {
            return _this.hometown;
        };
        this.getMobileNumber = function () {
            return _this.mobilenumber;
        };
        this.getFacebookId = function () {
            return _this.id;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getLanguage = function () {
            return _this.languages;
        };
        this.getReligiousViews = function () {
            return _this.religion;
        };
        this.getPoliticalViews = function () {
            return _this.political_views;
        };
        this.getRelationship = function () {
            return _this.relationship;
        };
        this.getAbout = function () {
            return _this.about;
        };
        this.name = name;
        this.id = id;
        this.gender = gender;
        this.hometown = hometown;
        this.email = email;
        this.mobilenumber = mobilenumber;
        this.religion = religion;
        this.relationship = relationship;
        this.workplace = workplace;
        this.political_views = political_views;
        this.languages = languages;
        this.about = about;
        this.birthday = birthday;
    }
    return feed;
}());
var educ = /** @class */ (function () {
    function educ(opt) {
        this.type = opt.type;
        this.place = opt.place;
    }
    return educ;
}());
var education1 = new educ({ type: "Highschool", place: "KV1" });
var education2 = new educ({ type: "College", place: "Greendale community college" });
var info = new feed("Jeff Winger", "www.fb.com/random", "male", "Bhopal", "pd@hotmail.com", 984888434, "Agnostic", "republican", "single", ["English", "German", "Hindi", "Telugu"], ["INFOSYS", "Disarmonia mundi"], "26th may 1997", "Random poignant stuff by a dead philosopher");
info.education[0] = education1;
info.education[1] = education2;
console.log(" profile information");
console.log("Name: " + info.getName());
console.log("About: " + info.getAbout());
console.log("Education: " + info.getEducation());
console.log("HomeTown: " + info.getHomeTown());
console.log("Mobile Number.: " + info.getMobileNumber());
console.log("Facebook id: " + info.getFacebookId());
console.log("Email: " + info.getEmail());
console.log("Birthday: " + info.getBirthday());
console.log("Gender: " + info.getGender());
console.log("Language: " + info.getLanguage());
console.log("Relationship status: " + info.getRelationship());
console.log("Religious views: " + info.getReligiousViews());
console.log("Political views:" + info.getPoliticalViews());
