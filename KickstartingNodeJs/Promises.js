const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve()
    },1000)
})


promise.then(()=>{
    console.log('a')
})
.then(()=>{
    console.log('b')
})
.then(()=>{
    console.log('c')
})
.then(()=>{
    console.log('d')
})
.then(()=>{
    console.log('e')
})


//fetch

const githubapi = "https://api.github.com/users"

const user = fetch(githubapi);  //it is promise


user.then((data)=>{
    console.log(data)
})



