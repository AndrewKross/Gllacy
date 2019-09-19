let radioOne = document.querySelector('#radio-one');
let radioTwo = document.querySelector('#radio-two');
let radioThree = document.querySelector('#radio-three');
let body = document.querySelector('body');
let sliderTextOne = document.querySelector('.slider-text-one');
let sliderTextTwo = document.querySelector('.slider-text-two');
let sliderTextThree = document.querySelector('.slider-text-three');

let feedbackModalOverlay = document.querySelector('.feedback-modal-overlay');
let feedbackModal = document.querySelector('.feedback-modal');
let feedbackButton = document.querySelector('.feedback-button');
let feedbackClose = document.querySelector('.feedback-modal-close');
let feedbackForm = feedbackModal.querySelector('form');
let feedbackName = feedbackModal.querySelector('.feedback-form-name');
let feedbackEmail = feedbackModal.querySelector('.feedback-form-email');
let feedbackMessage = feedbackModal.querySelector('.feedback-form-message');


radioOne.addEventListener ("click", function(evt) {
  body.classList.remove("body-second", "body-third");
  body.classList.add("body-first");
  sliderTextOne.classList.add("slider-text-active");
  sliderTextOne.classList.remove("visually-hidden");
  sliderTextTwo.classList.add("visually-hidden");
  sliderTextThree.classList.add("visually-hidden");
});

radioTwo.addEventListener ("click", function(evt) {
  body.classList.remove("body-first", "body-third");
  body.classList.add("body-second");
  sliderTextTwo.classList.add("slider-text-active");
  sliderTextTwo.classList.remove("visually-hidden");
  sliderTextOne.classList.add("visually-hidden");
  sliderTextThree.classList.add("visually-hidden");
});

radioThree.addEventListener ("click", function(evt) {
  body.classList.remove("body-first", "body-second");
  body.classList.add("body-third");
  sliderTextThree.classList.add("slider-text-active");
  sliderTextThree.classList.remove("visually-hidden");
  sliderTextTwo.classList.add("visually-hidden");
  sliderTextOne.classList.add("visually-hidden");
});


feedbackButton.addEventListener ("click", function(evt) {
    evt.preventDefault();
    feedbackModal.classList.add("feedback-modal-active");
    feedbackModalOverlay.classList.add("feedback-modal-active");
    feedbackName.focus();
});

feedbackClose.addEventListener ("click", function(evt) {
    evt.preventDefault();
    feedbackModal.classList.remove("feedback-modal-active");
    feedbackModalOverlay.classList.remove("feedback-modal-active");
    feedbackForm.classList.remove("feedback-modal-shake");
});

feedbackModalOverlay.addEventListener ("click", function(evt) {
    evt.preventDefault();
    feedbackModal.classList.remove("feedback-modal-active");
    feedbackModalOverlay.classList.remove("feedback-modal-active");
});
