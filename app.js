const form = document.getElementById("searchForm")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const userInput = form.elements.query.value
  addImg(userInput)
})

const addImg = async (e) => {
  const getImg = async (e) => {
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${e}`)
    return res.data[0].show.image.medium
  }
  const imgURL = await getImg(e)
  const newIMG = document.createElement("img")
  newIMG.src = `${imgURL}`
  document.body.appendChild(newIMG)
}

function random(e) {
  return Math.floor(Math.random() * e)
}
