// functionality for showing/hiding the comments section
// Reasearch and application came from:
// https://www.w3schools.com/js/js_htmldom_eventlistener.asp
const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

showHideBtn.setAttribute('tabindex', '0');
commentWrapper.style.display = 'none';

showHideBtn.onclick = function() {
  toggleComments();
}

showHideBtn.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' || e.key === 'Tab') {
    e.preventDefault();
    toggleComments();
  }
});

function toggleComments() {
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
}


// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}
