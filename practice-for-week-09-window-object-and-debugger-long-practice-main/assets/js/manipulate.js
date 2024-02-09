export function changeTitle() {
  // Change the title of the page to "(Your name)'s Portfolio"
  document.title = "Amalya Megerman";
}

export function changeHeader() {
  // Change the name in the h1 of the page to your name
  document.body.children[0].children[0].innerText = "I am Amalya M";
}

export function changeAboutMe() {
  /* Update the first paragraph in the About Me section with a small
     passage about yourself */
  document.body.children[1].children[1].innerText = "Hi hello it's me";
}
