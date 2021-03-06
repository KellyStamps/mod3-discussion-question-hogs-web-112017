/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/

function delayedFadeOut(div, range) {
  // Your solution here
  setTimeout(function(){fadeOut(div)}, range)

}

function delayedFadeIn(div, range) {
  // Your solution here
  setTimeout(function(){fadeIn(div)}, range)
}

function fadeAllOut(el, group) {
  // Your solution here
  group.forEach(div => {
    let range = Math.random()*1000
    if (div === el) {
      delayedFadeOut(div, LONGRANGE)
    } else {
      delayedFadeOut(div, range)
    }
  })
}

function fadeAllIn(group) {
  // Your solution here
  group.forEach(div => {
    let range = Math.random()*1000
    delayedFadeIn(div,range)
  })
}
