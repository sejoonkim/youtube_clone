import Axios from "axios";

const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const deleteBtnArr = commentList.querySelectorAll(".jsDeleteButton");

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const fakeDeleteComment = (li) => {
  li.remove();
  decreaseNumber();
};

const deleteComment = async (comment, li) => {
  const videoId = window.location.href.split("/videos/")[1];
  await Axios({
    url: `/api/${videoId}/deletecomment`,
    method: "POST",
    data: comment,
  });
  fakeDeleteComment(li);
};

const handleDeleteClick = (event) => {
  const li = event.target.closest("li");
  const comment = li.querySelector("#comment").innerHTML;
  deleteComment(comment, li);
};

const init = () => {
  deleteBtnArr.forEach((jsDeleteButton) =>
    jsDeleteButton.addEventListener("click", handleDeleteClick)
  );
};

if (commentList) {
  init();
}
