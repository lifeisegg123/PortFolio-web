const modal = document.querySelector(".contents__modal");
const modalBtn = document.querySelectorAll("#jsModalBtn");
const modalOverlay = document.querySelector(".contents__modal--overlay");
const modalSection = document.querySelector(".contents__modal--content");

const deltaRB = {
  name: "deltaRB",
  imgs: [
    "/PortFolio-web/assets/img/delta1.jpg",
    "/PortFolio-web/assets/img/delta2.jpg",
  ],
  texts: "얼굴을 인식하여 엣지를 추출한 후 영상을 탐색하여 그림을 그리는 로봇",
  link: "https://github.com/lifeisegg123/delta_robot",
};
const autonomousShip = {
  name: "autonomousShip",
  imgs: ["/PortFolio-web/assets/img/autonomous_ship1.jpg"],
  vids: ["/PortFolio-web/assets/video/autonomous_ship.mp4"],
  texts: "2020 Kaboat 대회 참가",
  link: "https://github.com/lifeisegg123/autonomous_ship",
};

const modalList = [deltaRB, autonomousShip];

function handleModalClick() {
  modal.classList.remove("hidden");

  const modalDiv = document.createElement("div");
  const name = event.target.alt;
  const title = document.createElement("h2");
  const mediaDiv = document.createElement("div");
  const imgDiv = document.createElement("div");
  const vidDiv = document.createElement("div");
  const texts = document.createElement("p");
  const aTag = document.createElement("a");

  let targetModal;
  console.log(name);
  for (let i = 0; i < modalList.length; i++) {
    if (name == modalList[i].name) {
      targetModal = modalList[i];
      break;
    }
  }

  if (targetModal) {
    title.innerText = targetModal.name;
    title.className = "modal__title";
    modalDiv.appendChild(title);
    texts.innerText = targetModal.texts;
    texts.className = "modal__texts";
    modalDiv.appendChild(texts);
    aTag.innerText = "Source Link";
    aTag.href = targetModal.link;
    aTag.className = "modal__link";
    modalDiv.appendChild(aTag);

    if (targetModal.imgs) {
      targetModal.imgs.forEach((value) => {
        const img = document.createElement("img");
        img.src = `${value}`;
        img.className = "modal__img";
        imgDiv.appendChild(img);
      });
      imgDiv.className = "modal__imgdiv";
      mediaDiv.appendChild(imgDiv);
    }
    if (targetModal.vids) {
      targetModal.vids.forEach((value) => {
        const vid = document.createElement("video");
        vid.src = `${value}`;
        vid.className = "modal__vid";
        vid.autoplay = true;
        vidDiv.appendChild(vid);
      });
      vidDiv.className = "modal__viddiv";
      mediaDiv.appendChild(vidDiv);
    }
    mediaDiv.className = "modal__media";
    modalDiv.appendChild(mediaDiv);
    modalDiv.className = "modal";
    modalSection.appendChild(modalDiv);
  }
}

function handleModalOverlayClick() {
  modalSection.removeChild(modalSection.childNodes[0]);
  modal.classList.add("hidden");
  modal.classList.remove("tempModal");
}

function init() {
  for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener("click", handleModalClick);
  }
  modalOverlay.addEventListener("click", handleModalOverlayClick);
}
init();
