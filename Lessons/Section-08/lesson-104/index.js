const random = (min, max) => {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

const waitPlease = (msg, time) => {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject("It's not a string")
    // if(typeof msg !== 'string') reject(new Error('Error'))
    setTimeout(() => {
      resolve(msg)
    }, time)
  })
}

waitPlease('Session 1', random(1,1))
  .then(result => {
    console.log(result)
    return waitPlease('Session 2', random(1,1))
  })
  .then(result => {
    console.log(result)
    return waitPlease('Session 3', random(1,1))
  })
  .then(result => {
    console.log(result)
    return waitPlease(1234, random(1,1))
  })
  .then(result => {
    console.log(result)
  })
  .catch(err => {
    console.log('ERROR:', err)
  })

console.log('Sessions list:')
