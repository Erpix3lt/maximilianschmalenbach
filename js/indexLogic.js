function showContent(idOne, idTwo) {
    var contentOne = document.getElementById(idOne);
    var contentSecond = document.getElementById(idTwo)
    if (contentOne.style.display === "none") {
        contentSecond.style.display = "none";
        contentOne.style.display = "block";
    } else {
      contentOne.style.display = "none";
    }
  }