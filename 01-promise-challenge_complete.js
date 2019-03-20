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
  let results = callBackend(userIds)
  
  results
    .then (function (data) {
        console.log ("users", data)
    })
    .catch (function (error) {
        console.log('ohnoes', error.msg)
    })
}

main()