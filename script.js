let chnageBtn = document.getElementById('chnageBtn');

const change = () => {
  let changeText = document.getElementById('changeText');
  if (changeText.innerText === "Pw Skills") {
    changeText.innerText = "The most affordable learning platform";

  } else {
    changeText.innerText = "pw Skills";
  }
};

chnageBtn.addEventListener('click', change);