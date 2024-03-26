'use strict';

// Modal
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

const closeModal = function () {
  modal.classList.add('closed');
}

modalCloseOverlay.addEventListener('click', closeModal);
modalCloseBtn.addEventListener('click', closeModal);

// Notification Toast
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});

// Mobile Menu
const mobileMenus = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtns = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const closeMobileMenu = function (mobileMenu) {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
}

document.querySelectorAll('[data-mobile-menu-open-btn]').forEach((btn, index) => {
  btn.addEventListener('click', function () {
    mobileMenus[index].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtns[index].addEventListener('click', function () {
    closeMobileMenu(mobileMenus[index]);
  });
});

overlay.addEventListener('click', function () {
  mobileMenus.forEach(menu => closeMobileMenu(menu));
});

// Accordion
document.querySelectorAll('[data-accordion-btn]').forEach(btn => {
  btn.addEventListener('click', function () {
    const content = this.nextElementSibling;
    const isActive = content.classList.contains('active');

    document.querySelectorAll('[data-accordion-content]').forEach(acc => {
      acc.classList.remove('active');
    });

    document.querySelectorAll('[data-accordion-btn]').forEach(accBtn => {
      accBtn.classList.remove('active');
    });

    if (!isActive) {
      content.classList.add('active');
      this.classList.add('active');
    }
  });
});
