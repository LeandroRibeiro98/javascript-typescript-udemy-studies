const rand = (min=0, max=3) => {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

const waitPlease = (msg, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof msg !== 'string') {
        reject('FALLS IN ERROR')
        return
      }

      resolve(msg.toUpperCase() +' - I passed the promise')
      return
    }, time)
  })
}

// waitPlease('Stage 1', rand())
//   .then(valor => {
//     console.log(valor)
//     return waitPlease('Stage 2', rand() )
//   })
//   .then(stage => {
//     console.log(stage)
//     return waitPlease('Stage 3', rand())
//   })
//   .then(stage => {
//     console.log(stage)
//     return waitPlease('Stage 4', rand())
//   })
//   .then(stage => {
//     console.log('End => ', stage)
//   })
//   .catch(err => console.log(err))

const play = async () => {
  try{
    const stage1 = await waitPlease('stage 1', rand())
    console.log(stage1)

    const stage2 = await waitPlease('stage 2', rand())
    console.log(stage2)

    const stage3 = await waitPlease('stage 3', rand())
    console.log(stage3)

    // Error
    const stage4 = await waitPlease(0, rand())
    console.log(stage4)

    const stage5 = await waitPlease('stage 5', rand())
    console.log(stage5)

    console.log('End:', stage5)
  } catch(err) {
    console.log(err)
  }
}

play()
