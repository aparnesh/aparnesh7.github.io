var videos = /** @class */ (function () {
    function videos(video_title, video_link, channel, video_description, upload_date, views, likes, dislikes, total_comments, autoplay) {
        var _this = this;
        this.comments = new Array();
        this.getTitle = function () {
            return _this.video_title;
        };
        this.getChannelName = function () {
            return _this.channel;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getDislikes = function () {
            return _this.dislikes;
        };
        this.getComment = function () {
            var com = JSON.stringify(_this.comments, null, 5);
            return com;
        };
        this.getvideodescription = function () {
            return _this.video_description;
        };
        this.gettotalcomments = function () {
            return _this.total_comments;
        };
        this.getLink = function () {
            return _this.video_link;
        };
        this.getRecVideos = function () {
            return "Next video";
        };
        this.getAutoPlay = function () {
            return _this.autoplay;
        };
        this.setTotalViews = function () {
            _this.views++;
        };
        this.setVideoLikes = function () {
            _this.likes++;
        };
        this.setVideoDislikes = function () {
            _this.dislikes++;
        };
        this.setAutoplay = function () {
            if (_this.autoplay == true) {
                return _this.autoplay = false;
            }
            else {
                return _this.autoplay = true;
            }
        };
        this.setTotalcomments = function () {
            _this.total_comments++;
        };
        this.video_title = video_title;
        this.channel = channel;
        this.video_description = video_description;
        this.upload_date = upload_date;
        this.views = views;
        this.likes = likes;
        this.total_comments = total_comments;
        this.dislikes = dislikes;
        this.autoplay = autoplay;
        this.video_link = video_link;
    }
    return videos;
}());
var comm = /** @class */ (function () {
    function comm(opt) {
        if (opt) {
            this.uploader = opt.uploader;
            this.comment_description = opt.comment_description;
            this.comment_time = opt.comment_time;
            this.comment_likes = opt.comment_likes;
            this.comment_dislikes = opt.comment_dislikes;
        }
    }
    return comm;
}());
var comment1 = new comm({ uploader: "nipple dippers", comment_description: "six seasons and a movie", comment_time: "6 hours ago", comment_likes: 7, comment_dislikes: 0 });
var comment2 = new comm({ uploader: "Greendale seven", comment_description: "e pluribus anus", comment_time: "9 hours ago", comment_likes: 8, comment_dislikes: 0 });
var video1 = new videos("the cooperative calligraphy", "www.youtube.com/8788/5", "abednadirfilms", "when annie's pen was taken by troy's monkey", "26th may 2013", 99999, 99993, 6, 8787, true);
video1.comments[0] = comment1;
video1.comments[1] = comment2;
console.log("Total likes on the video -" + video1.getLikes());
console.log("comments on the video -" + video1.getComment());
console.log("Is autoplay set -" + video1.getAutoPlay());
console.log("Name of the channel -" + video1.getChannelName());
console.log("Total dislikes on the video -" + video1.getDislikes());
console.log("Total views on the video -" + video1.getViews());
console.log("Link of the video -" + video1.getLink());
console.log("Title of the video -" + video1.getTitle());
console.log("Video descriptiom -" + video1.getvideodescription());
console.log("total comments on the video -" + video1.gettotalcomments());
video1.setAutoplay();
video1.setVideoDislikes();
video1.setVideoLikes();
video1.setVideoLikes();
video1.setTotalcomments();
video1.setTotalViews();
console.log("Total likes on the video after alteration -" + video1.getLikes());
console.log("comments on the video -" + video1.getComment());
console.log("Is autoplay set after alteration -" + video1.getAutoPlay());
console.log("Name of the channel -" + video1.getChannelName());
console.log("Total dislikes on the video after alteration -" + video1.getDislikes());
console.log("Total views on the video after alteration -" + video1.getViews());
console.log("Link of the video -" + video1.getLink());
console.log("Title of the video -" + video1.getTitle());
console.log("Video descriptiom -" + video1.getvideodescription());
console.log("total comments on the video after alteration -" + video1.gettotalcomments());
