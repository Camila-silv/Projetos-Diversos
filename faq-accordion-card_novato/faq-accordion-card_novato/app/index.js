const faqListItem = document.querySelectorAll(".faq-list__faq-list-item");
const buttons = document.querySelectorAll(".faq-item__button");
const questions = document.querySelectorAll(".faq-list-item__faq-item");
const accordion = document.querySelectorAll(".faq-list-item__accordion");

faqListItem.forEach((faqItem) => {
  const paragraphy = faqItem.children[2];

  
  faqItem.addEventListener("click", () => {
    questions.forEach(item => {
      item.classList.remove("faq-list-item__faq-item--stronge");
    })
    accordion.forEach((item) => {
      item.classList.add("faq-list-item__accordion--hidden");
      
    });
    faqItem.children[0].classList.add("faq-list-item__faq-item--stronge");
    paragraphy.classList.remove("faq-list-item__accordion--hidden");
   
  });
});

buttons.forEach((faqItem) => {
  const paragraphy = faqItem.parentNode.children[2];

  faqItem.addEventListener("click", () => {
    questions.forEach(item => {
      item.classList.remove("faq-list-item__faq-item--stronge");
    })
    accordion.forEach((item) => {
      item.classList.add("faq-list-item__accordion--hidden");
    });
    faqItem.parentNode.children[0].classList.add("faq-list-item__faq-item--stronge");
    paragraphy.classList.remove("faq-list-item__accordion--hidden");
  });
});
