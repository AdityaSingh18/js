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

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            post.push({...post,createPost:new Date().getDate()});
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject('Error: Something went Wrong')
            }
        },2000)
    })
}


const user={
    username:'shivam',
    lastActivityTime: '2nd of september'
}

function updateLastActivityTime(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        user.lastActivityTime = new Date().getTime();
        resolve(user.lastActivityTime)
    },1000)
})
}
function deletePost(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                const lastelement=posts.pop()
                resolve(lastelement);
            }
            else{
                reject('Array is empty now');
            }
        })
    })
}

createPost({title:'Post Three',body: 'this is post three'}).then(()=>{
    getPost();
    deletePost().then(()=>{
        getPost();
        deletePost().then(()=>{
            getPost();
            deletePost().then(()=>{
                getPost()
                deletePost().then(()=>{}).catch((err)=>{
                    console.log('inside a catch block',err)
                })
            })
        })
    })
})

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