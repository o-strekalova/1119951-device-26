  var buttonContactUs = document.querySelector(".contact-us-button");

  var popupContactUs = document.querySelector(".modal-contact-us");
  var closeContactUs = popupContactUs.querySelector(".close-button");

  var formContactUs = popupContactUs.querySelector(".contact-form");
  var name = popupContactUs.querySelector("[name=name]");
  var email = popupContactUs.querySelector("[name=email]");
  var text = popupContactUs.querySelector("[name=text]");

  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }

  buttonContactUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupContactUs.classList.add("modal-show");

    if (storage) {
      name.value = storage;
      email.focus();
      try {
        storage = localStorage.getItem("email");
      } catch (err) {
        isStorageSupport = false;
      }
      if (storage) {
        email.value = storage;
        text.focus();
      } else {
        email.focus();
      }
    } else {
      name.focus();
    }
  });

  closeContactUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupContactUs.classList.remove("modal-show");
    popupContactUs.classList.remove("modal-error");
  });

  formContactUs.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !text.value) {
      evt.preventDefault();
      popupContactUs.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", name.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupContactUs.classList.contains("modal-show")) {
        popupContactUs.classList.remove("modal-show");
        popupContactUs.classList.remove("modal-error");
      }
    }
  });

  var mapLink = document.querySelector(".open-map");

  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".close-button");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
      }
    }
  });
