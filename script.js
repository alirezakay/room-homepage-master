const root = document.getElementById("root")
const sliderItems = root.getElementsByClassName('slider-item')
const sliderLength = sliderItems.length;
let activeSliderNumber = 0;

const init = () => {
  for (let i = 0; i < sliderLength; i++) {
    activeSliderNumber = sliderItems[i].getAttribute('active') == "" ? sliderItems[i].getAttribute('item') : activeSliderNumber;
    sliderItems[i].className = sliderItems[i].className.trim() + " deactivated";
    const sliderImage = sliderItems[i].getElementsByClassName('slider-image');
    sliderImage[0].style.backgroundImage = `url('${sliderImage[0].getAttribute('img')}')`;
  }
  activeSliderNumber = parseInt(activeSliderNumber, 10);
  sliderItems[activeSliderNumber].className = sliderItems[activeSliderNumber].className.replace("deactivated", "").trim();

  document.getElementById("slider-nav-left").addEventListener('click', () => handleSlider("left"));
  document.getElementById("slider-nav-right").addEventListener('click', () => handleSlider("right"));

  document.getElementById("nav-hamburger").addEventListener('click', () => handleNav('open'))
  document.getElementById("nav-close").addEventListener('click', () => handleNav('close'))
}

const handleSlider = (dir) => {
  switch (dir) {
    case 'left':
      activeSliderNumber--;
      activeSliderNumber = activeSliderNumber < 0 ? sliderLength - 1 : activeSliderNumber;
      break;
    case 'right':
      activeSliderNumber++;
      activeSliderNumber = activeSliderNumber >= sliderLength ? 0 : activeSliderNumber;
      break;
    default:
      break;
  }
  for (let i = 0; i < sliderLength; i++) {
    sliderItems[i].className = sliderItems[i].className.replace("deactivated", "").trim();
    sliderItems[i].className = sliderItems[i].className.trim() + " deactivated";
    const sliderImage = sliderItems[i].getElementsByClassName('slider-image');
    sliderImage[0].style.backgroundImage = `url('${sliderImage[0].getAttribute('img')}')`;
  }
  sliderItems[activeSliderNumber].className = sliderItems[activeSliderNumber].className.replace("deactivated", "").trim();
}

const handleNav = (type) => {
  switch (type) {
    case 'open':
      document.getElementById("nav-hamburger").style.display = 'none';
      document.getElementById("nav-close").style.display = 'block';
      document.getElementsByClassName("nav-small")[0].getElementsByClassName("logo")[0].style.display = 'none';
      document.getElementsByClassName("nav-small")[0].getElementsByClassName("items")[0].style.display = 'block';
      document.getElementsByClassName("nav-small")[0].style.backgroundColor = "#fefeff";
      break;
    case 'close':
      document.getElementById("nav-close").style.display = 'none';
      document.getElementById("nav-hamburger").style.display = 'block';
      document.getElementsByClassName("nav-small")[0].getElementsByClassName("items")[0].style.display = 'none';
      document.getElementsByClassName("nav-small")[0].getElementsByClassName("logo")[0].style.display = 'block';
      document.getElementsByClassName("nav-small")[0].style.backgroundColor = "transparent";
      break;

    default:
      break;
  }
}

init();