class feed
{

    public name:string
    public id:string
    public gender:string
    private hometown:string
    private email:string
    private about:string
    education: educ[] = new Array();
    private mobilenumber:number
    private religion:string
    private political_views:string
    private relationship:string
    private languages:string[]
    private workplace:string[]
    private birthday:string

    constructor(name:string,id:string,gender:string,hometown:string,email:string,mobilenumber:number,religion:string,political_views:string,relationship:string,languages:string[],workplace:string[],birthday:string,about?:string)
{
this.name=name
this.id=id
this.gender=gender
this.hometown=hometown
this.email=email
this.mobilenumber=mobilenumber
this.religion=religion
this.relationship=relationship
this.workplace=workplace
this.political_views=political_views
this.languages=languages
this.about=about
this.birthday=birthday

}
getName=()=>{
    return this.name
}


getEducation= () => {
    let edu = JSON.stringify(this.education,null,5);
    return edu;
}

getHomeTown= () =>{
    return this.hometown;
}



getMobileNumber= () =>{
    return this.mobilenumber;
}

getFacebookId= () =>{
    return this.id;
}

getEmail= () =>{
    return this.email;
}

getBirthday= () =>{
    return this.birthday;
}

getGender= () =>{
    return this.gender;
}

getLanguage= () =>{
    return this.languages;
}

getReligiousViews= () =>{
    return this.religion;
}
getPoliticalViews= () =>{
    return this.political_views;
}

getRelationship= () =>{
    return this.relationship;
}

getAbout= () =>{
    return this.about;
}
}
class educ{
type:string
place:string
constructor(opt?:{type:string,place:string})
{
    this.type=opt.type
    this.place=opt.place
}

}
let education1=new educ({type:"Highschool",place:"KV1"})
let education2=new educ({type:"College",place:"Greendale community college"})
let info=new feed("Jeff Winger","www.fb.com/random","male","Bhopal","pd@hotmail.com",984888434,"Agnostic","republican","single",["English","German","Hindi","Telugu"],["INFOSYS","Disarmonia mundi"],"26th may 1997","Random poignant stuff by a dead philosopher")
 
info.education[0]=education1
info.education[1]=education2
console.log(` profile information`);
console.log(`Name: ${info.getName()}`);
console.log(`About: ${info.getAbout()}`)
console.log(`Education: ${info.getEducation()}`);
console.log(`HomeTown: ${info.getHomeTown()}`);
console.log(`Mobile Number.: ${info.getMobileNumber()}`);
console.log(`Facebook id: ${info.getFacebookId()}`);
console.log(`Email: ${info.getEmail()}`);
console.log(`Birthday: ${info.getBirthday()}`);
console.log(`Gender: ${info.getGender()}`);
console.log(`Language: ${info.getLanguage()}`);
console.log(`Relationship status: ${info.getRelationship()}`);
console.log(`Religious views: ${info.getReligiousViews()}`);
console.log(`Political views:${info.getPoliticalViews()}`)