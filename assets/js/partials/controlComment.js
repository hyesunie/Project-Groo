const commentContainer = document.querySelector(".comment__container");
const userComment = document.querySelector(".user__comment");
const editButton = commentContainer.querySelector("button");

const COMMENT = "comment";

function saveComment(value) {
  localStorage.setItem(COMMENT, value);
}

function loadComment() {
  const storageComment = localStorage.getItem(COMMENT);

  if (storageComment) {
    userComment.value = storageComment;
    saveComment(storageComment);
  }
}

function handleClickEdit() {
  userComment.toggleAttribute("disabled");

  if (userComment.getAttribute("disabled") !== null) {
    saveComment(userComment.value);
  }
}

function init() {
  loadComment();
  editButton.addEventListener("click", handleClickEdit);
}

if (commentContainer) {
  init();
}
