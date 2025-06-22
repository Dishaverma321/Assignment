
function handleRadioChange(radio) {
  const allOptions = document.querySelectorAll('.option');
  allOptions.forEach(option => option.classList.remove('active'));
  const selectedOption = radio.closest('.option');
  if (selectedOption){
    selectedOption.classList.add('active');
  }
}  