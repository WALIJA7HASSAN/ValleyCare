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

  document.addEventListener('DOMContentLoaded', function() {
    // Function to add the event listener
    function toggleFAQ(id) {
      var container = document.getElementById(id);
      var toggle = container.querySelector('.faq-toggle');
      var content = container.nextElementSibling;

      container.addEventListener('click', function() {
        content.classList.toggle('faq-display');
        toggle.classList.toggle('rotate-180');
      });
    }

    // List of FAQ IDs
    var faqIDs = ['qfaq1', 'qfaq2', 'qfaq3', 'qfaq4', 'qfaq5', 'qfaq6', 'qfaq7', 'qfaq8'];

    // Add event listeners to all FAQ containers
    faqIDs.forEach(function(id) {
      toggleFAQ(id);
    });
  });


  // document.addEventListener('DOMContentLoaded', function() {
  //   // Function to add the event listener
  //   function toggleFAQ(id) {
  //     var toggle = document.getElementById(id + '-toggle');
  //     var content = document.getElementById(id);

  //     toggle.addEventListener('click', function() {
  //       content.classList.toggle('faq-display');
  //       toggle.classList.toggle('rotate-180');
  //     });
  //   }

  //   // List of FAQ IDs
  //   var faqIDs = ['faq1', 'faq2', 'faq3', 'faq4', 'faq5', 'faq6', 'faq7', 'faq8'];

  //   // Add event listeners to all FAQ toggles
  //   faqIDs.forEach(function(id) {
  //     toggleFAQ(id);
  //   });
  // });


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





