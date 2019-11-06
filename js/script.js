var write = document.querySelector(".location-button");
var writeForm = document.querySelector(".appointment-form");
var writeClose = writeForm.querySelector(".appointment-button--close");
var writeName = writeForm.querySelector("[name=username]");
var writeEmail = writeForm.querySelector("[name=email]");

var storageName = "";
var isStorageSupport = true;

try {
  storageName = localStorage.getItem("writeName");
} catch (err) {
  isStorageSupport = false;
}

write.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeForm.classList.add("appointment-form--show");
  if (storageName) {
    writeName.value = storageName;
    writeEmail.focus();
  } else {
    writeName.focus();
  }
});

writeClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeForm.classList.remove("appointment-form--show");
  writeForm.classList.remove("appointment-form--error")
  writeName.classList.remove("appointment-form--animation");
  writeEmail.classList.remove("appointment-form--animation");
});

writeName.onfocus = function() {
  if (writeName.classList.contains("appointment-form--animation")) {
    writeName.classList.remove("appointment-form--animation");
  }
};

writeEmail.onfocus = function() {
  if (writeEmail.classList.contains("appointment-form--animation")) {
    writeEmail.classList.remove("appointment-form--animation");
  }
};

writeForm.addEventListener("submit", function(evt) {
  if (!writeName.value || !writeEmail.value) {
    evt.preventDefault();
    writeForm.classList.remove("appointment-form--error")
    writeForm.offsetWidth = writeForm.offsetWidth;
    writeForm.classList.add("appointment-form--error")
    console.log("Нужно ввести логи и пароль");
      if(!writeName.value) {
        writeName.classList.remove("appointment-form--animation");
        writeName.offsetWidth = writeName.offsetWidth;
        writeName.classList.add("appointment-form--animation");
      } if (!writeEmail.value) {
        writeEmail.classList.remove("appointment-form--animation");
        writeEmail.offsetWidth = writeEmail.offsetWidth;
        writeEmail.classList.add("appointment-form--animation");
      }
  } else {
    if (isStorageSupport) {
    localStorage.setItem("writeName", writeName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeForm.classList.contains("appointment-form--show")) {
      evt.preventDefault();
      writeForm.classList.remove("appointment-form--show");
      writeForm.classList.remove("appointment-form--error")
      writeName.classList.remove("appointment-form--animation");
      writeEmail.classList.remove("form-input--animation");
    }
  }
});
