const ref = {
  logo: document.querySelector('.logo'),
};

const handleClickLogo = () => {
  console.log('click logo');

  // Название файла, на который будут переходить при нажатии на лого
  window.location = `document.html`;
};

ref.logo.addEventListener('click', handleClickLogo);
