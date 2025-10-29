document.addEventListener('DOMContentLoaded', () => {
  // FAQ accordion (unchanged)
  const faqContainer = document.querySelector('.faq-content');
  if (faqContainer) {
    faqContainer.addEventListener('click', (e) => {
      const groupHeader = e.target.closest('.faq-group-header');
      if (!groupHeader) return;

      const group = groupHeader.parentElement;
      const groupBody = group.querySelector('.faq-group-body');
      const icon = groupHeader.querySelector('i');

      // Toggle Icon
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');

      // Toggle visibility of Body
      groupBody.classList.toggle('open');
    });
  }

  // Mobile menu behavior
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!hamburgerButton || !mobileMenu) return;

  const openMenu = () => {
    mobileMenu.classList.add('active');
    document.body.classList.add('no-scroll'); // optional: lock scroll
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  };

  const toggleMenu = () => {
    mobileMenu.classList.contains('active') ? closeMenu() : openMenu();
  };

  // Toggle via hamburger
  hamburgerButton.addEventListener('click', (e) => {
    e.stopPropagation(); // don't let this click bubble to the document
    toggleMenu();
  });

  // Close when clicking outside the menu
  document.addEventListener('click', (e) => {
    if (!mobileMenu.classList.contains('active')) return;

    const clickedInsideMenu = mobileMenu.contains(e.target);
    const clickedHamburger = hamburgerButton.contains(e.target);

    if (!clickedInsideMenu && !clickedHamburger) {
      closeMenu();
    }
  });

  // Close when a menu link is clicked
  mobileMenu.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link) {
      closeMenu();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      closeMenu();
    }
  });
});
