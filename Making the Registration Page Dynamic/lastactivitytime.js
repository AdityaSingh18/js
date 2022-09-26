createPost(){
    return new Promise()

}

const user={
    username: 'Shivam',
    lastactivityTime: '13th of Jan'
}

updateLastActivityTime={
    return new Promise((resolve,reject)={
        setTimeout(()=>{
            user.lastactivityTime=new Date().getTime();
            resolve(user.lastActivityTime)
        },1000)
    })
}

userupdatesapost(){
    Promise.all([createPost,updateLastActivityTime]).then([creaPostresolves,updateLastActivityTimeresolves])=>{
        console.log(updateLastActivityTimeresolves)
    }).catch(err =>console.log(err))
}