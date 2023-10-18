const faqListItem = document.querySelectorAll(".faq-list__faq-list-item");
const buttons = document.querySelectorAll(".faq-item__button");

const accordion = document.querySelectorAll(".faq-list-item__accordion");

faqListItem.forEach((faqItem) => {
  const paragraphy = faqItem.children[2];

  faqItem.addEventListener("click", () => {
    accordion.forEach((item) => {
      item.classList.add("faq-list-item__accordion--hidden");
    });
    paragraphy.classList.remove("faq-list-item__accordion--hidden");
  });

});

buttons.forEach((faqItem) => {
  const paragraphy = faqItem.parentNode.children[2];

  faqItem.addEventListener("click", () => {
    accordion.forEach((item) => {
      item.classList.add("faq-list-item__accordion--hidden");
    });
    paragraphy.classList.remove("faq-list-item__accordion--hidden");
  });
});

