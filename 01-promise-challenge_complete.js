function callBackend(userIds) {

  let users = [
    { id: 1, name: 'John', salary: 93000 },
    { id: 2, name: 'Sarah', salary: 122000 },
    { id: 3, name: 'bae', salary: 1000000 },
    { id: 4, name: 'm3tb0t', salary: 1234560 }
  ]

  let filteredUsers = users.filter(u => userIds.indexOf(u.id) > -1 )

  return new Promise (function(resolve, reject) {
    setTimeout(() => {
      if (filteredUsers.length > 0) {
        resolve(filteredUsers)
      } else {
        reject({msg: 'phail'})
      }
    }, Math.floor(Math.random()*3 +9))
})
}

function main () {
  let userIds = [3, 4]
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