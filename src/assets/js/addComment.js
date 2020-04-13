import axios from "axios";
import routes from "../../routes";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const decreaseNum = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const deleteComment = (id, target) => {
  const span = target.parentElement;
  const li = span.parentElement;
  commentList.removeChild(li);
  decreaseNum();
};

const handleClick = async (event) => {
  const target = event.target;
  const commentId = target.id;
  const response = await axios({
    url: `${routes.api}/${commentId}/comment/delete`,
    method: "POST",
    data: {
      commentId,
    },
  });
  if (response.status === 200) {
    deleteComment(commentId, target);
  }
};

const addComment = (comment, commentId) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  span.innerHTML = comment;
  delBtn.id = String(commentId);
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", handleClick);
  span.appendChild(delBtn);
  li.appendChild(span);
  commentList.prepend(li);
  increaseNumber();
};

const sendComment = async (comment) => {
  // axios.post is okay too
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `${routes.api}/${videoId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  if (response.status === 200) {
    console.log(response);
    addComment(comment, response.data._id);
  }
};

const handleSubmit = (event) => {
  event.preventDefault(); // we do not want to refresh
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
  init();
}
