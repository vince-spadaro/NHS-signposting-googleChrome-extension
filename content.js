(function() {
  'use strict';


  if (matchPage('https://www.nhs.uk/')) {
    changeHomePageHeader();
  };
  
  if (matchPage('https://www.nhs.uk/nhs-services/prescriptions/how-to-order-a-repeat-prescription/')) {
    changeRepeatPrescriptionHeader();
  };

  if (matchPage('https://www.nhs.uk/nhs-app/account/')) {
    changeNHSAccountPageHeader();
  };

  if (matchPage('https://www.nhs.uk/nhs-app/')) {
    changeNHSAppPageHeader();
  };

  if (matchPage('https://www.nhs.uk/nhs-services/gps/gp-appointments-and-bookings/')) {
    changeNHSGpAppointments();
  };

  if (matchPage('https://www.nhs.uk/nhs-services/online-services/nhs-login/')) {
    changeNHSLogin();
  };

  if (matchPage('https://www.nhs.uk/conditions/baby/support-and-services/services-and-support-for-parents/')) {
    changeNHSServicesAndSupportForParents();
  };

  if (matchPage('https://www.nhs.uk/conditions/social-care-and-support-guide/caring-for-children-and-young-people/moving-from-childrens-social-care-to-adults-social-care/')) {
    changeNHSCaringForChildren();
  };

  if (matchPage('https://www.nhs.uk/conditions/social-care-and-support-guide/caring-for-children-and-young-people/how-to-care-for-children-with-complex-needs/')) {
    changeNHSCaringForChildrenWithComplexNeeds();
  };

  if (matchPage('https://www.nhs.uk/conditions/social-care-and-support-guide/care-services-equipment-and-care-homes/')) {
    changeNHSCareServices();
  };

  // if (matchPage('https://www.nhs.uk/nhs-services/gps/')) {
  //   changeNHSServicesGp();
  // };

  if (matchPage('https://www.nhs.uk/nhs-services/gps/gp-services-for-someone-else-proxy-access/')) {
    changeNHSProxyAccess();
  };


  if (matchPage('https://www.nhs.uk/nhs-services/gps/gp-services-for-someone-else-proxy-access/how-to-get-proxy-access/')) {
    replaceNHSProxyAccessHowToGetAccess();
  };
  





  // Function to check if the current page URL matches a specific pattern
  function matchPage(urlPattern) {
    console.log('Checking URL pattern:', urlPattern); // Debugging: Log the URL pattern being checked
    return window.location.href.includes(urlPattern);
  };



  // URL FOR SIGNPOSTING 
  function changeButtonLinks() {
    // List of classes to target
    const targetClasses = ['nhsuk-button', 'nhsuk-button nhsuk-button--beta-login'];
    
    // Specific href to target
    const targetHref = 'https://www.nhsapp.service.nhs.uk/login';
    
    // Get the current URL
    const currentUrl = window.location.href;
    
    // Determine the param1 value based on the current URL
    let param1 = '';
    if (currentUrl.includes('prescription')) {
      param1 = 'prescription';
    } else if (currentUrl.includes('appointments')) {
      param1 = 'appointments';
    } else if (currentUrl.includes('coronavirus')) {
      param1 = 'coronavirus';
    } else if (currentUrl.includes('test')) {
      param1 = 'record'; // if user access records or tests results it will access the my records screen!
    } else if (currentUrl.includes('record')) {
    param1 = 'record'; 
    } else param1 = 'home';
    
    // Base URL for prototype login
    const baseUrl = 'https://proxy-nhs-app-7c9c0511777e.herokuapp.com/Sprint20/login/2-login';
    
    // Construct the new URL with the param1 value
    const newUrl = param1 ? `${baseUrl}?param1=${param1}` : baseUrl;
    
    // Change href for links with specified classes
    targetClasses.forEach(targetClass => {
      // Select all <a> elements with the current class
      const buttons = document.querySelectorAll(`a.${targetClass.split(' ').join('.')}`);
      
      // Iterate through all selected <a> elements
      buttons.forEach(button => {
        // Change the href attribute to the new URL
        button.href = newUrl;
      });
    });

    
    // Change href for links with the specified href
    const hrefLinks = document.querySelectorAll(`a[href="${targetHref}"]`);
    
    // Iterate through all selected <a> elements with the specific href
    hrefLinks.forEach(link => {
      // Change the href attribute to the new URL
      link.href = newUrl;
    });
  }
  
  // Call the function to change the button links
  changeButtonLinks();




  // // Remove proxy link from NHS services gp
  // function changeNHSServicesGp() {
  //   // Get all <a> elements
  //   const links = document.querySelectorAll('a');
  
  //   // Iterate through all <a> elements
  //   links.forEach(link => {
  //     // Check if the link's text content includes the specified text
  //     if (link.textContent.includes("Accessing GP services for someone else, with proxy access")) {
  //       // Remove the link if the text matches
  //       link.remove();
  //     }
  //   });
  // };

  function changeNHSProxyAccess() {

    // Define the new div HTML content  [add a div after an element with class]
    const newDivContent = `
      <div class="nhsuk-inset-text">
        <span class="nhsuk-u-visually-hidden">Information: </span>
        <h4 class="nhsuk-heading-m">Manage services online for yourself or someone you care for using your NHS App or account</h4>
        <ul class="nhsuk-list nhsuk-u-clear">
            <li class="nhsuk-u-float-left">
              <a href="#" role="button" draggable="false" class="nhsuk-button nhsuk-button--beta-login">Log in or open NHS App</a>
            </li>
            <li class="nhsuk-u-float-left">
              <a href="#" role="button" draggable="false" class="nhsuk-button nhsuk-button--secondary nhsuk-u-margin-bottom-0">Create an account</a>
            </li>
        </ul>
      </div>
    `;

    // Find the target element
    const targetElement = document.querySelector('section.nhsuk-u-reading-width');
    
    if (targetElement) {
      // Create a new div element
      const newDiv = document.createElement('div');
      newDiv.innerHTML = newDivContent;
      
      // Insert the new div after the target element
      targetElement.insertAdjacentElement('afterend', newDiv);
    }
  };


  function replaceNHSProxyAccessHowToGetAccess() {
    // Define the new div HTML content
    const newDivContent = `
      <div class="nhsuk-inset-text">
        <span class="nhsuk-u-visually-hidden">Information: </span>
        <h4 class="nhsuk-heading-m">Manage services online for yourself or someone you care for using your NHS App or account</h4>
        <ul class="nhsuk-list nhsuk-u-clear">
            <li class="nhsuk-u-float-left">
              <a href="#" role="button" draggable="false" class="nhsuk-button nhsuk-button--beta-login">Log in or open NHS App</a>
            </li>
            <li class="nhsuk-u-float-left">
              <a href="#" role="button" draggable="false" class="nhsuk-button nhsuk-button--secondary nhsuk-u-margin-bottom-0">Create an account</a>
            </li>
        </ul>
      </div>
    `;
  
    // Find the target element
    const targetElement = document.querySelector('div.nhsuk-action-link');
    
    if (targetElement) {
      // Create a new div element
      const newDiv = document.createElement('div');
      newDiv.innerHTML = newDivContent;
  
      // Replace the target element with the new div
      targetElement.replaceWith(newDiv);
    }
  }


  //Care services equipment and care homes (insert a new link as first item)
  function changeNHSCareServices() {
    console.log('changeNHSCareServices called');

    // Function to create the new link
    // Function to create the new link item
    function createNewListItem() {
      const listItem = document.createElement('li');
      listItem.className = 'nhsuk-hub-key-links__list-item beta-hub-key-links__list-item';

      const link = document.createElement('a');
      link.href = 'https://www.nhs.uk/nhs-app/account/'; // Replace with the desired URL
      link.textContent = 'Link your NHS account to someone you care for to help manage their online GP services'; // Replace with the desired link text

      listItem.appendChild(link);
      return listItem;
    }

    // Function to insert the new list item as the first item
    function insertNewListItem() {
      const ulElement = document.querySelector('ul.nhsuk-hub-key-links.beta-hub-key-links');
      if (ulElement) {
        const newListItem = createNewListItem();
        ulElement.insertBefore(newListItem, ulElement.firstChild);
        console.log('New list item inserted as the first item');
      } else {
        console.log('Target ul element not found');
      }
    }

    insertNewListItem();

  };


  
  //Caring for children with complex needs (add paragraph function)
  function changeNHSCaringForChildrenWithComplexNeeds() {
    console.log('changeNHSCaringForChildrenWithComplexNeeds called');

    function createNewParagraph(){
      const newParagraph = document.createElement('p');
      newParagraph.textContent = "You can link your child's NHS account to yours, to help manage their care needs through their online GP services. Having access means you will be able to order repeat prescriptions, book and manage their appointments."

      return newParagraph;
    };

    function insertNewParagraph(){
      const targetParagraph = document.querySelector('h2[data-block-key="w7s83"]');
      if (targetParagraph) {
        const newParagraph = createNewParagraph();
        targetParagraph.parentNode.insertBefore(newParagraph, targetParagraph.nextSibling);
        console.log('New paragraph inserted');
      } else {
        console.log('Target paragraph not found');
      }
    };

    insertNewParagraph();
  };


  //Caring for children and young people page (add paragraph function)
  function changeNHSCaringForChildren() {
    console.log('changeNHSCaringForChildren called');

    function createNewParagraph(){
      const newParagraph = document.createElement('p');
      newParagraph.textContent = "A parent or carer can link their child's NHS account to theirs to help manage their continued care needs. This is useful if the child needs continued support into adulthood with their online GP services."
      return newParagraph;
    };

    function insertNewParagraph(){
      const targetParagraph = document.querySelector('p[data-block-key="e1zms"]');
      if (targetParagraph) {
        const newParagraph = createNewParagraph();
        targetParagraph.parentNode.insertBefore(newParagraph, targetParagraph.nextSibling);
        console.log('New paragraph inserted');
      } else {
        console.log('Target paragraph not found');
      }
    };

    insertNewParagraph();
  };


  //Services and support for parents 
  function changeNHSServicesAndSupportForParents() {
    console.log('changeNHSServicesAndSupportForParents called');

    function createNewParagraph(){
      const newParagraph = document.createElement('p');
      newParagraph.textContent = "You can also add your baby to your NHS Account after you've registered the birth of your baby. This will make it easier to access services that will help you care for them"
      return newParagraph;
    };

    function insertNewParagraph(){
      const targetParagraph = document.querySelector('p[data-block-key="kotv9"]');
      if (targetParagraph) {
        const newParagraph = createNewParagraph();
        targetParagraph.parentNode.insertBefore(newParagraph, targetParagraph.nextSibling);
        console.log('New paragraph inserted');
      } else {
        console.log('Target paragraph not found');
      }
    };

    insertNewParagraph();
  };


  // NHS services - login
  function changeNHSLogin() {
      console.log('changeNHSLogin called'); // Debugging: Log when changeNHSLogin is called
      var targetLi = Array.from(document.querySelectorAll('li')).find(
          li => li.textContent.trim() === 'patient access services'
      );
      if (targetLi) {
          console.log('Target li found:', targetLi); // Debugging: Log the target li element
          targetLi.textContent = 'patient access services for yourself or someone you care for';
      } else {
          console.log('Target li not found'); // Debugging: Log if the target li element is not found
      }
  }

  // GP appointments and bookings page 
  function changeNHSGpAppointments() {
    console.log('changeNHSGpAppointments called'); // Debugging: Log when changeNHSGpAppointments is called
    var targetH4 = document.querySelector('h4');
    if (targetH4 && targetH4.textContent.trim() === 'Manage GP appointments using your NHS App or account') {
        console.log('Target h4 found:', targetH4); // Debugging: Log the target h4 element
        targetH4.textContent = 'Manage GP appointments for yourself or someone you care for using your NHS App or account';
    } else {
        console.log('Target h4 not found'); // Debugging: Log if the target h4 element is not found
    };


    // add paragraph
    function createNewParagraph(){
      const newParagraph = document.createElement('p');
      newParagraph.textContent = "You can also book appointments for someone else by linking someone you care for to your NHS account."
      return newParagraph;
    };

    function insertNewParagraph(){
      const targetParagraph = document.querySelector('p[data-block-key="cksjr"]');
      if (targetParagraph) {
        const newParagraph = createNewParagraph();
        targetParagraph.parentNode.insertBefore(newParagraph, targetParagraph.nextSibling);
        console.log('New paragraph inserted');
      } else {
        console.log('Target paragraph not found');
      }
    };

    insertNewParagraph();
  }

  // Home page
  function changeHomePageHeader() {
      console.log('changeHomePageHeader called'); // Debugging: Log when changeHomePageHeader is called
      var targetH2s = document.querySelectorAll('h2');
      targetH2s.forEach(function(h2) {
          if (h2.textContent.trim() === 'NHS App') {
              console.log('Target h2 found:', h2); // Debugging: Log each target h2 element
              h2.textContent = 'Access NHS services online for yourself or someone you care for';
          }
      });

      var targetPs = document.querySelectorAll('p');
      targetPs.forEach(function(p) {
          if (p.textContent.trim() === 'Use the NHS App to book GP appointments, order repeat prescriptions and access a range of other healthcare services.') {
              console.log('Target p found:', p); // Debugging: Log each target p element
              p.textContent = 'Book GP appointments, order repeat prescriptions and access a range of other healthcare services by logging in to your NHS account.';
          }
      });
  }

  // Function to change the text of the <h1> element on the NHS app page
  function changeNHSAppPageHeader() {
      console.log('changeNHSAppPageHeader called'); // Debugging: Log when changeNHSAppPageHeader is called
      var targetH1 = document.querySelector('h1');
      if (targetH1 && targetH1.textContent.trim() === 'NHS App') {
          console.log('Target h1 found:', targetH1); // Debugging: Log the target h1 element
          targetH1.textContent = 'Access NHS services online for yourself or someone you care for.';
      } else {
          console.log('Target h1 not found'); // Debugging: Log if the target h1 element is not found
      }
  }


  // Repeat prescriptions page
  function changeRepeatPrescriptionHeader() {
    console.log('changeRepeatPrescriptionHeader called'); // Debugging: Log when changeRepeatPrescriptionHeader is called
    var targetDiv = document.querySelector('.nhsuk-inset-text');
    if (targetDiv) {
        var targetH3 = targetDiv.querySelector('h3');
        if (targetH3) {
            console.log('Target h3 found:', targetH3); // Debugging: Log the target h3 element
            targetH3.textContent = 'Log in or open the NHS app to access services for yourself or someone you care for.';
        } else {
            console.log('Target h3 not found'); // Debugging: Log if the target h3 element is not found
        }
    } else {
        console.log('Target div not found'); // Debugging: Log if the target div element is not found
    };
  
    // add paragraph
    
    function createNewParagraph(){
      const newParagraph = document.createElement('p');
      newParagraph.textContent = "You can also link your NHS account to someone you care for to help manage their prescriptions."

      return newParagraph;
    };

    function insertNewParagraph(){
      const targetParagraph = document.querySelector('p[data-block-key="5n4p2"]');
      if (targetParagraph) {
        const newParagraph = createNewParagraph();
        targetParagraph.parentNode.insertBefore(newParagraph, targetParagraph.nextSibling);
        console.log('New paragraph inserted');
      } else {
        console.log('Target paragraph not found');
      }
    };

    insertNewParagraph();

  };



  // Log-in page
  function changeNHSAccountPageHeader() {
      console.log('changeNHSAccountPageHeader called'); // Debugging: Log when changeNHSAccountPageHeader is called

      // Change <h1> text
      var targetH1 = document.querySelector('h1');
      if (targetH1 && targetH1.textContent.trim() === 'Access your NHS account') {
          console.log('Target h1 found:', targetH1); // Debugging: Log the target h1 element
          targetH1.textContent = 'Access NHS services online for yourself or someone you care for.';
      } else {
          console.log('Target h1 not found'); // Debugging: Log if the target h1 element is not found
      }

      // Change <li> text
      var targetLis = document.querySelectorAll('li');
      targetLis.forEach(function(li) {
          if (li.textContent.trim() === 'access other NHS services') {
              console.log('Target li found:', li); // Debugging: Log each target li element
              li.textContent = 'Access NHS services for someone else';
          }
      });

      // Redirect log-in button 
      var buttons = document.querySelectorAll('a.nhsuk-button');
      console.log('Found buttons:', buttons); // Debugging: Log found buttons
      buttons.forEach(function(button) {
          console.log('Changing href of button:', button); // Debugging: Log each button before changing
          button.href = 'https://www.google.com';
      });
  };



  // Function that runs in every page opened 

  // EDUCATIONAL, LOOP ALL THE H2 ELEMENTS OTHERWISE ONLY CONSIDER THE FIRST ONE! 
  // Function to change the text of a specific element in any NHS page visited by looping all the h2
  function changeHealthRecordH2() {
    // Get all h2 elements on the page
    var h2Elements = document.querySelectorAll('h2');
    
    // Loop through all h2 elements
    h2Elements.forEach(function(h2) {
      // Check if the h2 element has the target text content
      if (h2.textContent.trim() === 'View your GP health record using your NHS App or account') {
        h2.textContent = "View your GP health record or someone else's using your NHS App or account.";
      }
    });
  }
  // Run the function to change the h2 text
  changeHealthRecordH2();
  

  // Function to replace login header 
  function changeNHSH3Login(){

    var targetH3 = document.querySelector('h3');
    if (targetH3 && targetH3.textContent.trim() === 'Access NHS services online') {
        targetH3.textContent = 'Access NHS services online for yourself or someone you care for';
    } else {
        console.log('Target h3 not found'); // Debugging: Log if the target h4 element is not found
    };
  };
  changeNHSH3Login();


  function createTestEnvironmentBanner() {
    // Check if the banner already exists
    if (document.getElementById('test-environment-banner')) {
      return; // Banner already exists, do nothing
    }
  
    // Create a div element for the banner
    const banner = document.createElement('div');
  
    // Set the banner's id for future reference
    banner.id = 'test-environment-banner';
  
    // Style the banner
    banner.style.position = 'fixed';
    banner.style.top = '0';
    banner.style.left = '0';
    banner.style.width = '100%';
    banner.style.backgroundColor = '#ffeb3b';
    banner.style.color = 'black';
    banner.style.textAlign = 'center';
    banner.style.padding = '10px';
    banner.style.zIndex = '1000';
    banner.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    banner.style.display = 'flex';
    banner.style.justifyContent = 'space-between';
    banner.style.alignItems = 'center';
  
    // Create a div for the text to center it
    const textDiv = document.createElement('div');
    textDiv.textContent = 'TEST ENVIRONMENT';
    textDiv.style.flexGrow = '1';
    textDiv.style.textAlign = 'center';
  
    // Create a button to open the popup
    const button = document.createElement('button');
    button.textContent = 'Details';
    button.style.marginLeft = 'auto';
    button.style.padding = '5px 10px';
    button.style.backgroundColor = '#000';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.cursor = 'pointer';
    button.onclick = openDetailsPopup;
  
    // Append the text div and button to the banner
    banner.appendChild(textDiv);
    banner.appendChild(button);
  
    // Append the banner to the body
    document.body.appendChild(banner);
  
    // Adjust the body's top margin to prevent content overlap
    document.body.style.marginTop = banner.offsetHeight + 'px';
  }
  
  // Create the popup element
  function createPopup() {
    const popup = document.createElement('div');
    popup.id = 'test-environment-popup';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.width = '80%';
    popup.style.maxWidth = '2000px';
    popup.style.backgroundColor = 'white';
    popup.style.padding = '20px';
    popup.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    popup.style.zIndex = '1001';
    popup.style.display = 'none'; // Initially hidden
  
    const popupContent = `
    <h1>Prototype Iterations</h1>
    <h2>Sprint 17</h2>
    <ul>
      <li>
        Added signposting opportunities. Find details here: 
        <a href="https://nhsd-confluence.digital.nhs.uk/display/NPA/Index+of+signposting+opportunities+to+access+services+for+someone+else">https://nhsd-confluence.digital.nhs.uk/display/NPA/Index+of+signposting+opportunities+to+access+services+for+someone+else</a>
      </li>
      <li>'Accessing services online for yourself or someone you care for' added to all login components of the NHS App and Login.</li>
      <li>
        Removed 'Accessing GP services for someone else, with proxy access' link from 
        <a href="https://www.nhs.uk/nhs-services/gps/">https://www.nhs.uk/nhs-services/gps/</a>
      </li>
      <li>All login accesses redirect the user to the NHS App prototype home screen.</li>
      <!-- Add more details as needed -->
    </ul>

    <h2>Sprint 20</h2>
    <ul>
      <li>Banner added to indicate Test Environment and details page.</li>
      <li>
        Added 'Accessing GP services for someone else, with proxy access' link from 
        <a href="https://www.nhs.uk/nhs-services/gps/">https://www.nhs.uk/nhs-services/gps/</a> and added login components to the NHS App.
      </li>
      <li>When a user interact with the NHS APP login components, they are redirected to the correct hubs in the NHS App prototype.</li>
      <!-- Add more details as needed -->
    </ul>

    <button id="close-popup-button">Close</button>
    `;
    popup.innerHTML = popupContent;
  
    document.body.appendChild(popup);
  
    // Add event listener to close button
    document.getElementById('close-popup-button').onclick = closeDetailsPopup;
  }
  
  // Open the popup
  function openDetailsPopup() {
    const popup = document.getElementById('test-environment-popup');
    popup.style.display = 'block';
  }
  
  // Close the popup
  function closeDetailsPopup() {
    const popup = document.getElementById('test-environment-popup');
    popup.style.display = 'none';
  }

  createTestEnvironmentBanner();
  createPopup();


})();