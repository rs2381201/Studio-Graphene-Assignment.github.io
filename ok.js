// Function to handle responsive navigation
function handleResponsiveNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');
  
    if (window.innerWidth <= 768) {
      // Change navigation layout for smaller screens
      navbar.style.flexDirection = 'column';
      navLinks.forEach(link => {
        link.style.padding = '10px';
        link.style.textAlign = 'center';
      });
    } else {
      // Reset navigation layout for larger screens
      navbar.style.flexDirection = 'row';
      navLinks.forEach(link => {
        link.style.padding = '0px 16px';
        link.style.textAlign = 'left';
      });
    }
  }
  
  // Function to handle responsive header
  function handleResponsiveHeader() {
    const header = document.querySelector('.header');
    const logo = document.querySelector('.shopkart');
    const wishlist = document.querySelector('.wishlist');
  
    if (window.innerWidth <= 768) {
      // Adjust header layout for smaller screens
      header.style.flexDirection = 'column';
      header.style.alignItems = 'center';
      logo.style.textAlign = 'center';
      wishlist.style.marginTop = '5px';
      wishlist.style.justifyContent = 'center';
    } else {
      // Reset header layout for larger screens
      header.style.flexDirection = 'row';
      header.style.alignItems = 'flex-start';
      logo.style.textAlign = 'left';
      wishlist.style.marginTop = '2.5%';
      wishlist.style.justifyContent = 'flex-end';
    }
  }
  
  // Event listener for window resize
  window.addEventListener('resize', () => {
    handleResponsiveNavigation();
    handleResponsiveHeader();
  });
  
  // Initial calls to handle responsiveness on page load
  handleResponsiveNavigation();
  handleResponsiveHeader();
  