const TypeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

//type method
TypeWriter.prototype.type = function () {
  //current index of word
  const current = this.wordIndex % this.words.length;

  // get full text of current word
  const fullTxt = this.words[current];

  //check if deleting

  if (this.isDeleting) {
    //remove character
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    //add character
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  //insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  // type speed
  let typeSpeed = 175;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  //if word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    //make pause at end
    typeSpeed = this.wait;
    //set deleting to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    //move to next word
    this.wordIndex++;
    //pause before start typing
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
};

//INIT on DOM load

document.addEventListener(
  "DOMContentLoaded",
  setTimeout(() => init(), 4000)
);

//init app
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  //init typewriter

  new TypeWriter(txtElement, words, wait);
}
