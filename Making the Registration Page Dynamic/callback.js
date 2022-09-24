const posts =[
    {title : 'Post One',body:'This is Post one',createdAt: new Date().getTime()},
    {title:'Post Two',body:'This is post two',createdAt: new Date().getTime()}
];
let intervalId=0;
function getPost(){
    clearInterval(intervalId);
    intervalId= setInterval(()=>{
        let output='';
        for(let i=0;i<posts.length;i++){
            output += `<li>${posts[i].title} - last updated ${(new Date().getTime() - posts[i].createdAt) / 1000} Seconds ago</li>`
        }
        document.body.innerHTML =output;

    },1000)
    
}

function createPost(post,callback){
    setTimeout(()=>{
        posts.push({...post, createdAt: new Date().getDate()});
        callback()
    },2000)
}

function create4thPost(post,callback){
    setTimeout(()=>{
        posts.push({...post, createdAt: new Date().getDate()});
        callback()
    },6000)
}

getPost()
createPost({title:'Post Three',body:'this is post three'},getPost);
create4thPost({title:'Post Four',body:'this is post four'},getPost);


var timer;
var count=0;
function lastEditedinSecondsAgo(){
    count =0;
    clearInterval(timer)
    timer= setInterval(()=>{
        count++;
        console.log(count)
    },5000);
}