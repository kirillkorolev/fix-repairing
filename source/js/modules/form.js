const form = document.querySelector(`.info__form`);

const nameItem = form.querySelector(`.info__item--name`);
const mailItem = form.querySelector(`.info__item--mail`);
const phoneItem = form.querySelector(`.info__item--phone`);
const formInputs = form.querySelectorAll(`.info__input`);
const successModal = document.querySelector(`.success`);
const ESC_KEYCODE = 27;
const blackout = document.querySelector(`.blackout`);
const bodyGlobal = document.querySelector(`body`);

const showBlackout = () => {
  if (blackout.classList.contains(`blackout--hidden`)) {
    blackout.classList.remove(`blackout--hidden`);
  }
};

const hideBlackout = () => {
  if (!blackout.classList.contains(`blackout--hidden`)) {
    blackout.classList.add(`blackout--hidden`);
  }
};

const blockBackground = () => {
  bodyGlobal.style.overflow = `hidden`;
  bodyGlobal.style.touchAction = `none`;
};

const unBlockBackground = () => {
  bodyGlobal.style.overflow = ``;
  bodyGlobal.style.touchAction = ``;
};


const resetErrorOnItem = (item, errorClass) => {
  if (item.classList.contains(errorClass)) {
    item.classList.remove(errorClass);
  }
};

const validateText = (item, errorClass) => {
  const input = item.querySelector(`input`);
  const name = input.value;

  if (!name) {
    if (!item.classList.contains(errorClass)) {
      item.classList.add(`info__item--shake`);
      setTimeout(() => resetErrorOnItem(item, `info__item--shake`), 1500);
    }

    item.classList.add(errorClass);

    return false;
  } else {
    resetErrorOnItem(item, errorClass);

    return true;
  }
};

const validateEmail = (item, errorClass) => {
  const input = item.querySelector(`input`);
  const mail = input.value;
  const regEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (regEx.test(mail) === false) {

    if (!item.classList.contains(errorClass)) {
      item.classList.add(`info__item--shake`);
      setTimeout(() => resetErrorOnItem(item, `info__item--shake`), 1500);
    }

    item.classList.add(errorClass);

    return false;
  } else {
    resetErrorOnItem(item, errorClass);

    return true;
  }
};

const validatePhone = (item, errorClass) => {
  const input = item.querySelector(`input`);
  const phone = input.value;
  const regEx = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

  if (regEx.test(phone) === false) {
    if (!item.classList.contains(errorClass)) {
      item.classList.add(`info__item--shake`);
      setTimeout(() => resetErrorOnItem(item, `info__item--shake`), 1500);
    }

    item.classList.add(errorClass);
    return false;
  } else {
    resetErrorOnItem(item, errorClass);
    return true;
  }
};

const resetForm = () => {
  formInputs.forEach((input) => {
    input.value = ``;
  });
};

const showSuccess = () => {
  if (successModal.classList.contains(`success--hidden`)) {
    successModal.classList.remove(`success--hidden`);
  }
  showBlackout();
  blockBackground();
  resetForm();
  blackout.addEventListener(`click`, hideSuccess);
  document.addEventListener(`keydown`, closeSuccessWithEsc);
};

const hideSuccess = () => {
  if (!successModal.classList.contains(`success--hidden`)) {
    successModal.classList.add(`success--hidden`);
  }

  hideBlackout();
  unBlockBackground();

  blackout.removeEventListener(`click`, hideSuccess);
  document.removeEventListener(`keydown`, closeSuccessWithEsc);
};

const closeSuccessWithEsc = (evt) => {
  if (evt.keyCode === ESC_KEYCODE) {
    hideSuccess();
  }
};

const validateForm = () => {
  form.addEventListener(`submit`, (evt) => {
    evt.preventDefault();

    if (validateText(nameItem, `info__item--error`) && validateEmail(mailItem, `info__item--error`) && validatePhone(phoneItem, `info__item--error`)) {
      showSuccess();
    }

  });
};

export {validateForm};
