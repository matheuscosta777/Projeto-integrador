function tocar(){
      let audio = document.querySelectorAll('.audio')
      let i = 0
      audio[i].play()
      i++
      setInterval(() => {
            if(i < audio.length){
                  audio[i].play()
                  i++
            }
            else{
                  clearInterval()
            }
      }, 8000)
}
