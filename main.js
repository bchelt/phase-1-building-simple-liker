// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const glyphs = document.querySelectorAll('.like-glyph')
glyphs.forEach(glyph => glyph.addEventListener('click', (e) => {
  mimicServerCall()
  .then(() => {
    if (e.target.textContent === EMPTY_HEART) {
      e.target.textContent = FULL_HEART;
      e.target.setAttribute('class', 'activated-heart');
    }
    else {
      e.target.textContent = EMPTY_HEART;
      e.target.removeAttribute('class', 'activated-heart');
    }
  })
  .catch((error) => {
    const errorModal = document.getElementById('modal');
    errorModal.children[1].textContent = error;
    errorModal.removeAttribute('class');
    setTimeout(() => errorModal.setAttribute('class', 'hidden'), 3000);
  })
}))


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
