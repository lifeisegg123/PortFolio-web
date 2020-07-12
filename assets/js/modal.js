const modal = document.querySelector(".contents__modal");
const modalBtn = document.querySelector("#jsModalBtn");
const modalOverlay = document.querySelector(".contents__modal--overlay");
const modalSection = document.querySelector(".contents__modal--content");

const deltaRB = {
  name: "deltaRB",
  imgs: ["/assets/img/delta1.jpg", "/assets/img/delta2.jpg"],
  texts: "얼굴을 인식하여 엣지를 추출한 후 영상을 탐색하여 그림을 그리는 로봇",
  link: "https://github.com/lifeisegg123/delta_robot",
};

const modalList = [deltaRB];

function handleModalClick() {
  modal.classList.remove("hidden");

  const modalDiv = document.createElement("div");
  const name = event.target.alt;
  const title = document.createElement("h2");
  const imgDiv = document.createElement("div");
  const texts = document.createElement("p");
  const aTag = document.createElement("a");

  let targetModal;

  for (let i = 0; i < modalList.length; i++) {
    if (name == modalList[i].name) {
      targetModal = modalList[i];
      break;
    }
  }

  if (targetModal) {
    title.innerText = targetModal.name;
    title.className = "modal__title";
    texts.innerText = targetModal.texts;
    texts.className = "modal__texts";
    targetModal.imgs.forEach((value) => {
      const img = document.createElement("img");
      img.src = `${value}`;
      img.className = "modal__img";
      imgDiv.appendChild(img);
    });
    imgDiv.className = "modal__imgdiv";
    aTag.innerText = "Source Link";
    aTag.href = targetModal.link;
    aTag.className = "modal__link";
    modalDiv.appendChild(title);
    modalDiv.appendChild(texts);
    modalDiv.appendChild(aTag);
    modalDiv.appendChild(imgDiv);
    modalDiv.className = "modal";
    modalSection.appendChild(modalDiv);
  }
}

function handleModalOverlayClick() {
  modal.classList.add("hidden");
  modal.classList.remove("tempModal");
}

function init() {
  modalBtn.addEventListener("click", handleModalClick);
  modalOverlay.addEventListener("click", handleModalOverlayClick);
}
init();
