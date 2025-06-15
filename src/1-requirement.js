const NAME_ID = 'nameInput'
// const handleMouseOver = (event) => {
//   // ..
// }

// const handleMouseLeave = (event) => {
//   // ..
// }

const handleInput = (event) => {
  // ..
  nameDisplay.textContent = event.target.value
}

const handleClick = () => {
  // ..
  const name = nameDisplay.textContent.trim();
  if (name) alert(`Hello, ${name}!`)
      else alert(`Please insert a name`)
}

const handleMouseEvent = event => event.target.classList.toggle('hovered');

const addEventListeners = () => {
  // Add event listeners here
  button.addEventListener('mouseover', handleMouseEvent)
  button.addEventListener('mouseout', handleMouseEvent)
  button.addEventListener('click', handleClick)
  const nameEl = document.querySelector(`#${NAME_ID}`)

  nameEl.addEventListener('input', handleInput)
}

export const main = () => {
  addEventListeners()
}
