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
const promise1= new Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=>
setTimeout(resolve,2000,'GoodBye'));

Promise.all([promise1,promise2,pro]).then(values=>console.log(values))

