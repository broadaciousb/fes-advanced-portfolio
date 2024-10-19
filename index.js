//Template ID: template_2tit16r

//Service ID: service_e3qqtcf

//User ID: 6G_F_yg7CUVy-kc9W

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_e3qqtcf",
      "template_2tit16r",
      event.target,
      "6G_F_yg7CUVy-kc9W"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on broadybmx@gmail.com."
      );
    });
}

let isModalOpen = false;

function toggleModal() {
  // toggle modal
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}