// document.addEventListener('DOMContentLoaded', () => {
//   const menuIcon = document.getElementById('menu-icon')
//   const menu = document.getElementById('menu')

//   menuIcon.addEventListener('click', () => {
//     menu.classList.toggle('hidden')
//   })
// })
document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon')
  const menu = document.getElementById('menu')
  const closeMenu = document.getElementById('close-menu')
  const navbar = menuIcon.closest('nav')
  const logo = document.getElementById('nav-logo')
  const phone = document.getElementById('nav-phone')

  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
    navbar.classList.toggle('shadow-md')
    logo.classList.add('hidden')
    phone.classList.add('hidden')
  })

  closeMenu.addEventListener('click', () => {
    menu.classList.add('hidden')
    menu.classList.remove('flex')
    navbar.classList.add('shadow-md')
    logo.classList.remove('hidden')
    phone.classList.remove('hidden')
  })
})





// faq

document.addEventListener('DOMContentLoaded', function () {
  // Function to add the event listener
  function toggleFAQ(id, toggleId) {
    var container = document.getElementById(id)
    var toggle = document.getElementById(toggleId)
    var content = container.nextElementSibling

    container.addEventListener('click', function () {
      content.classList.toggle('faq-display')
      
      toggle.classList.toggle('rotate-180')
       toggle.classList.toggle('transition-transform')
       toggle.classList.toggle('duration-300')
    })
  }

  // List of FAQ IDs and their corresponding toggle IDs
  var faqs = [
    { id: 'qfaq1', toggleId: 'faq1-toggle' },
    { id: 'qfaq2', toggleId: 'faq2-toggle' },
    { id: 'qfaq3', toggleId: 'faq3-toggle' },
    { id: 'qfaq4', toggleId: 'faq4-toggle' },
    { id: 'qfaq5', toggleId: 'faq5-toggle' },
    { id: 'qfaq6', toggleId: 'faq6-toggle' },
    { id: 'qfaq7', toggleId: 'faq7-toggle' },
    { id: 'qfaq8', toggleId: 'faq8-toggle' },
  ]

  // Add event listeners to all FAQ containers
  faqs.forEach(function (faq) {
    toggleFAQ(faq.id, faq.toggleId)
  })
})



  


//   doctor

  document.addEventListener("DOMContentLoaded", function() {
    // Select all the divs inside the section
    const sections = document.querySelectorAll('.doctor-container > div')

    // Add the animation class to each div
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('animate-slide-down');
      }, index * 100); // Stagger the animation by 100ms for each div
    });
  });

//   modal
// Get all the buttons
const buttons = document.querySelectorAll('button[id^="doctor"]');

// Loop through all buttons and add click event listeners
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const doctorId = button.id;
        const modalId = `modal${doctorId.replace('doctor', '')}`;
        const modal = document.getElementById(modalId);

        // Show the modal
        modal.classList.remove('hidden');

        // Get the close button inside the modal
        const closeButton = modal.querySelector('.fa-xmark');

        // Add event listener to the close button
        closeButton.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    });
});

// back to top
document.addEventListener('DOMContentLoaded', function () {
  const backToTopBtn = document.getElementById('backToTopBtn')

  // Show the button when scrolling down 20px from the top
  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
      backToTopBtn.classList.remove('sm:hidden')
      backToTopBtn.classList.add('scale-100')
    } else {
      backToTopBtn.classList.add('sm:hidden')
      backToTopBtn.classList.remove('scale-100')
    }
  })

  // Scroll to top when the button is clicked
  backToTopBtn.addEventListener('click', function (event) {
    event.preventDefault() // Prevent the default anchor behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })
})

// referers
document.getElementById('upload-link')
  .addEventListener('click', function (event) {
    event.preventDefault()
    document.getElementById('supporting-documents').click()
  })

  


