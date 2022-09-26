const posts = [
    { title:'Post One',body:'This is Post One'},
    {title:'Post Two',body:'This is Post two'}
]
function getPost(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post,index)=>{
            output+= `<li>${post.title}</li>`;

        });
        document.body.innerHTML=output;

    },1000);

}
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;

            if(!error){
                resolve()
            }
            else{
                reject('Error: Something went Wrong');
            }
        },2000)
    })
}
function deletePost(){
  return new Promise((resolve,reject)=>{
setTimeout(()=>{
    if(posts.length>0){
        const lastelement = posts.pop()
    resolve(lastelement)
    }
    else{
        reject('Error:something went wrong')
    }
},3000)
})
}

createPost({title:'Post Three',body:'This is Post Three'})
.then(()=>{
    getPost()
    deletePost().then(()=>{
        getPost();
        deletePost().then(()=>{
            getPost();
            deletePost().then(()=>{
                getPost();
                deletePost().then(()=>{})
                .catch((err)=>{
                    console.log('inside catch block',err);
                })
            })
        })
    })
})

