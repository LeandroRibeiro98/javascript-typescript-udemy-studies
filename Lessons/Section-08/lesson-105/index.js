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

// waitPlease('Fase 1', rand())
//   .then(fase => {
//     console.log(fase)
//     return waitPlease('Fase 2', rand())
//   })
//   .then(fase => {
//     console.log(fase)
//     return waitPlease('Fase 3', rand())
//   })
//   .then(fase => {
//     console.log(fase)
//     return fase
//   })
//   .then(fase => {
//     console.log('End:', fase)
//   })
//   .catch(err => console.log(err))

const play = async () => {
  try{
    const fase1 = await waitPlease('Fase 1', rand())
    console.log(fase1)

    const fase2 = await waitPlease('Fase 2', rand())
    console.log(fase2)

    const fase3 = await waitPlease('Fase 3', rand())
    console.log(fase3)

    // Error
    const fase4 = await waitPlease(0, rand())
    console.log(fase4)

    const fase5 = await waitPlease('Fase 5', rand())
    console.log(fase5)

    console.log('End:', fase5)
  } catch(err) {
    console.log(err)
  }
}

play()
