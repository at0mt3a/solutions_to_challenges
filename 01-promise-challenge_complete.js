function callBackend(userId) {

  let users = [
    { id: 1, name: 'John', salary: 93000 },
    { id: 2, name: 'Sarah', salary: 122000 },
  ]

  let user = users.filter(function (u) { return (u.id === userId)})

  return new Promise (function(resolve, reject) {
    setTimeout(() => {
      if (user.length > 0) {
        resolve(user[0])
      } else {
        reject({msg: 'phail'})
      }
    }, Math.floor(Math.random()*3 +9))
})
}

function main () {
  let userIds = [1, 2]
  let userPromises = []

  for(let i = 0; i < userIds.length; i++){
    userPromises.push(callBackend(userIds[i]))

  }

  userPromises[0].then (function (data) {
    users = data
    console.log("User 1", users)
  })
    .catch (function(data){
      console.log(data, 'error')
    })
  
  userPromises[1].then (function (data) {
    users = data
    console.log("User 2", users)
  })
    .catch (function(data){
      console.log(data, 'error')
    })
 
  
  }


main()
