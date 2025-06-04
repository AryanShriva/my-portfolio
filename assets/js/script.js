'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle('active');
};

// Sidebar variables
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

// Sidebar toggle for mobile
if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener('click', () => elementToggleFunc(sidebar));
}

// Custom select variables (Portfolio filtering)
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');

// Toggle select dropdown
if (select) {
  select.addEventListener('click', () => elementToggleFunc(select));
}

// Handle select item clicks
selectItems.forEach(item => {
  item.addEventListener('click', () => {
    let selectedValue = item.innerText.trim().toLowerCase();
    selectValue.innerText = item.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

// Filter function for Portfolio
const filterItems = document.querySelectorAll('[data-filter-item]');
const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    const category = item.dataset.category.toLowerCase();
    if (selectedValue === 'all' || selectedValue === category) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
};

// Handle filter button clicks (large screens)
let lastClickedBtn = filterBtn[0];
filterBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    let selectedValue = btn.innerText.trim().toLowerCase();
    selectValue.innerText = btn.innerText;
    filterFunc(selectedValue);
    if (lastClickedBtn) lastClickedBtn.classList.remove('active');
    btn.classList.add('active');
    lastClickedBtn = btn;
  });
});

// Contact form variables
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

// Enable form button when valid
formInputs.forEach(input => {
  input.addEventListener('input', () => {
    if (form && form.checkValidity()) {
      formBtn.removeAttribute('disabled');
    } else if (formBtn) {
      formBtn.setAttribute('disabled', '');
    }
  });
});

// Page navigation
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navigationLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    const targetPage = link.innerHTML.toLowerCase();
    pages.forEach(page => {
      if (page.dataset.page === targetPage) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });
    navigationLinks.forEach(nav => nav.classList.remove('active'));
    link.classList.add('active');
    window.scrollTo(0, 0);
  });
});