const onFocusOut = e => {
  e.target.setAttribute('aria-expanded', 'false');
  e.target.querySelector('h3').style.visibility = 'hidden';
}

const onFocusIn = e => {
  e.target.setAttribute('aria-expanded', true);
  e.target.querySelector('h3').style.visibility = 'visible';
}

const onActivated = e => {
  document.querySelector('.action-indicator').innerText = `You have selected ${e.target.querySelector('h3').innerText}`;
}

const onKeyUp = e => {
  // space or Enter.
  // this is how much effort it takes to make a component fully a11yable. Using '
  // the right semantics, you simply get all this from free.
  if (e.which == 32 || e.which == 13) {
    onActivated(e);
  }
}

const init = () => {
  const accordion = document.querySelector('.image-accordion');
  accordion.querySelectorAll('.accordion-item').forEach(accordionItem => {
    accordionItem.addEventListener('mouseenter', onFocusIn);
    accordionItem.addEventListener('mouseleave', onFocusOut);
    accordionItem.addEventListener('focus', onFocusIn);
    accordionItem.addEventListener('blur', onFocusOut);
    accordionItem.addEventListener('click', onActivated);
    accordionItem.addEventListener('keyup', onKeyUp);
  });
}

document.addEventListener('DOMContentLoaded', init);