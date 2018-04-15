class videos
{
    private video_title:string
    private video_link:string
    private channel:string
    private video_description:string
    private upload_date:string
    private views:number
    private likes:number
    private dislikes:number
    private total_comments:number
    private autoplay:boolean
    private comme:object
    comments: comm[] = new Array();
 
    
    
   
    


   

    constructor(video_title:string,video_link:string,channel:string,video_description:string,upload_date:string,views:number,likes:number,dislikes:number,total_comments:number,autoplay:boolean)
    {
    this.video_title=video_title
    this.channel=channel
    this.video_description=video_description
    this.upload_date=upload_date
    this.views=views
    this.likes=likes
    this.total_comments=total_comments
    this.dislikes=dislikes
    this.autoplay=autoplay
    this.video_link=video_link
  
    }
    getTitle= () => {
        return this.video_title;
    }

    getChannelName= () => {
        return this.channel;
    }

    getViews= () => {
        return this.views;
    }
    
    getLikes= () => {
        return this.likes;
    }

    getDislikes= () => {
        return this.dislikes;
    }

    getComment= () => {
        let com = JSON.stringify(this.comments,null,5);
        return com;
    }
    getvideodescription=()=>{
        return this.video_description;
    }
    
   gettotalcomments= ()=>{
       return this.total_comments;
   }
    

    getLink= () => {
        return this.video_link;
    }

    getRelatedVideos= () => {
        return "Next video";
    }

    getAutoPlay= () => {
        return this.autoplay;
    }
      setTotalViews= () => {
        this.views++;
    }

    setVideoLikes= () => {
        this.likes++;
    }

    setVideoDislikes= () => {
        this.dislikes++;
    }

    setAutoplay= () => {
        if(this.autoplay == true) {
            return this.autoplay=false;
        }
        else {
            return this.autoplay=true;
        }
    }
    setTotalcomments=()=>{
        this.total_comments++;
    }

    
}
class comm
{
    public uploader:string
    public comment_description:string
    public comment_time:string
    public comment_likes
    public comment_dislikes
    constructor(opt?:{uploader:string,comment_description:string,comment_time:string,comment_likes:number,comment_dislikes:number})
    {
        if(opt)
        {
            this.uploader=opt.uploader
            this.comment_description=opt.comment_description
            this.comment_time=opt.comment_time
            this.comment_likes=opt.comment_likes
            this.comment_dislikes=opt.comment_dislikes
        }
    }
    
}
let comment1 =new comm({uploader:"nipple dippers",comment_description:"six seasons and a movie",comment_time:"6 hours ago",comment_likes:7,comment_dislikes:0})
let comment2 =new comm({uploader:"Greendale seven",comment_description:"e pluribus anus",comment_time:"9 hours ago",comment_likes:8,comment_dislikes:0})
let video1=new videos("the cooperative calligraphy","www.youtube.com/8788/5","abednadirfilms","when annie's pen was taken by troy's monkey","26th may 2013",99999,99993,6,8787,true)
video1.comments[0]=comment1
video1.comments[1]=comment2



console.log(`Total likes on the video -${video1.getLikes()}`)
console.log(`comments on the video -${video1.getComment()}`)
console.log(`Is autoplay set -${video1.getAutoPlay()}`)
console.log(`Name of the channel -${video1.getChannelName()}`)
console.log(`Total dislikes on the video -${video1.getDislikes()}`)
console.log(`Total views on the video -${video1.getViews()}`)
console.log(`Link of the video -${video1.getLink()}`)
console.log(`Title of the video -${video1.getTitle()}`)
console.log(`Video descriptiom -${video1.getvideodescription()}`)
console.log(`total comments on the video -${video1.gettotalcomments()}`)


video1.setAutoplay()
video1.setVideoDislikes()
video1.setVideoLikes()
video1.setVideoLikes()
video1.setTotalcomments()
video1.setTotalViews()

console.log(`Total likes on the video after alteration -${video1.getLikes()}`)
console.log(`comments on the video -${video1.getComment()}`)
console.log(`Is autoplay set after alteration -${video1.getAutoPlay()}`)
console.log(`Name of the channel -${video1.getChannelName()}`)
console.log(`Total dislikes on the video after alteration -${video1.getDislikes()}`)
console.log(`Total views on the video after alteration -${video1.getViews()}`)
console.log(`Link of the video -${video1.getLink()}`)
console.log(`Title of the video -${video1.getTitle()}`)
console.log(`Video descriptiom -${video1.getvideodescription()}`)
console.log(`total comments on the video after alteration -${video1.gettotalcomments()}`)