const servicesData = [
    {
        id: 1,
        title: "B2B Commerce",
        brief_info: "Online store for B2B transactions. Specializes in creating e-commerce stores.",
        description: "B2B Commerce is another feather in the cap of Salesforce, which specializes in providing businesses to create an online e-commerce store. Usual B2C interactions are not heavy when it comes to transactions. Whereas, when businesses are interacting with each other, they talk in bulk. Be it bulk quantities or prices, which can amount to millions in a single transaction. Thus, they require an e-commerce website where they can see the entire catalog and do simple add-to-cart transactions.",
        imageSrc: "https://kuldeep57saini.github.io/metadologie/images/B2B_Commerce.jpg",
    },
    {
        id: 2,
        title: "Einstein Bots",
        brief_info: "Digital assistants for customer interactions. Quick answers for busy agents.",
        description: "Bots, a term derived from robots, is a digital way of transforming human interaction. Usually, your agents are busy resolving critical issues and maybe at that moment, a customer is looking for some straightforward answer.",
        imageSrc: "https://kuldeep57saini.github.io/metadologie/images/Einstein bots.png",
    },
    {
        id: 3,
        title: "Service Cloud",
        brief_info: "Customer service management. Streamline support for sold products/services.",
        description: "Service Cloud is another vertical of Salesforce which deals in customer service management. Once a product or service is sold, it becomes evident to provide industry-leading customer service. However, at times with the number of incoming calls, or emails or texts, it can be a tedious task to manage everything on time.",
        imageSrc: "https://kuldeep57saini.github.io/metadologie/images/Service Cloud.png",
    },
    {
        id: 4,
        title: "Experience Cloud",
        brief_info: "Common platform for seamless communication. Enhance customer interaction.",
        description: "Salesforce Experience Cloud facilitates your customers, partners, or employees with a common platform required for seamless communication. It incorporates services and features of Service Cloud, plus, provides additional benefits of creating a knowledge base, customer self-service portals, a portal for agent-customer interaction, and much more.",
        imageSrc: "https://kuldeep57saini.github.io/metadologie/images/Experience Cloud.png",
    },
    {
        id: 5,
        title: "Salesforce CPQ",
        brief_info: "Configure, price, and quote tool. Improve proposal accuracy.",
        description: "CPQ refers to configure, price and quote. With this, you would have a slight idea that it deals with the proposals shared with your customers. Traditional sales methods involve the manual creation of proposals, which has its drawbacks including but not limited to, incorrect pricing, inaccurate discounts, or some other human error. With Salesforce CPQ, you are eliminating manual errors along with speeding up the process from quote to finalizing the deal.",
        imageSrc: "https://kuldeep57saini.github.io/metadologie/images/Salesforce CPQ.png",
    },
    {
        id: 6,
        title: "Sales Cloud",
        brief_info: "Automated sales management. Centralize scattered data.",
        description: "Sales Cloud is an automated sales management tool, which assembles all the scattered data over different devices in one place. Whether you are a salesperson or a sales manager, you have all the information handy on your laptop or even mobile. With the help of Sales Cloud, you get a streamlined sales process, which can be customized and automated at your convenience.",
        imageSrc: "https://kuldeep57saini.github.io/metadologie/images/Sales cloud.png",
    },
    {
        id: 7,
        title: "Pardot",
        brief_info: "B2B marketing automation tool. Generate leads effectively.",
        description: "Pardot is an automated marketing tool, which is commonly used for the B2B segment of the business industry. Whether you are trying to sell a product or a service to another business, it becomes crucial to generate leads to gain the maximum out of your marketing campaign.",
        imageSrc: "https://kuldeep57saini.github.io/metadologie/images/Salesforce Pardot.png",
    },
    {
        id: 8,
        title: "Marketing Cloud",
        brief_info: "CRM for marketing segments. Targeted marketing for more business.",
        description: "Salesforce Marketing Cloud is a part of the Salesforce CRM suite, which deals with the marketing segment of a company’s business. With targeted marketing, keeping the customer journey in focus and generating interactions with customers can help your marketing team in generating more business.",
        imageSrc: "https://kuldeep57saini.github.io/metadologie/images/Marketing Cloud.png",
    },
    {
        id: 9,
        title: "Integrations",
        brief_info: "Data distribution across systems. Streamline existing operations.",
        description: "Data communication is evident with the growing technologies, as not everything can be assembled in one place. You might have existing systems that are being used for daily operations, and we know that changes are not that adaptable. This is where Salesforce integration works.",
        imageSrc: "https://kuldeep57saini.github.io/metadologie/images/Salesforce CPQ.png",
    },
    {
        id: 10,
        title: "Field Service Lightning",
        brief_info: "Powerful tool for field services. Retain customers with on-time service.",
        description: "Field Service Lightning allows you to excel in the area of field services provided to your customers. Facilitating your customers with on-time, accurate and hassle-free service is what helps you in retaining the customers. This is the key to dominating any vertical of the market.",
        imageSrc: "https://kuldeep57saini.github.io/metadologie/images/Salesforce CPQ.png",
    }
];



function generateServiceCards() {
    const cardSection = document.querySelector(".our-services-card-section");

    servicesData.forEach((service) => {
        const cardBox = document.createElement("div");
        cardBox.classList.add(
            "our-services-card-box",
            "size-large_1-of-3",
            "size-medium_1-of-2",
            "size-small_1-of-1",
            "size-x-large_1-of-4"
        );

        const cardContent = `
                    <div class="p-5 height-100">
                        <div class="our-services-card p-vertical-5 height-100">
                            <div class="our-services-card-image">
                                <div class="our-services-card-image-body">
                                    <div class="our-services-image-box">
                                        <img src="${service.imageSrc}" alt="${service.title}">
                                    </div>
                                </div>
                            </div>
                            <div class="our-services-card-body">
                                <div>
                                    <div class="our-services-card-upper-section">
                                        <h3 class="our-services-card-title">${service.title}</h3>
                                        <p class="our-services-card-upper-section-content font-size-medium">${service.brief_info}</p>
                                    </div>
                                    <p class="font-size-medium our-services-card-content">${service.description}</p>
                                </div>
                                <div class="quick-enquiry-button-box">
                                    <button onclick="openModal(${service.id})" class="quick-enquiry-button">Quick Enquiry</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

        cardBox.innerHTML = cardContent;
        cardSection.appendChild(cardBox);
    });
}

generateServiceCards();


// this code for integration cards

const integrationData = [
    {
        imageSrc: "https://kuldeep57saini.github.io/metadologie/images/Esker.svg",
        altText: "Esker",
        content: "Esker is a global cloud platform built to unlock strategic value for Finance, Procurement and Customer Service professionals and strengthen collaboration between companies by automating the cash conversion cycle."
    },
    {
        imageSrc: "https://kuldeep57saini.github.io/metadologie/images/Yay Pay.svg",
        altText: "AR",
        content: "Digitize With AR automation provides a business with more accurate data, allowing a company to improve its customer outreach by automatically generating invoices, emailing payment reminders and providing multiple payment options."
    },
    {
        imageSrc: "https://kuldeep57saini.github.io/metadologie/images/Authvia.svg",
        altText: "Autavia",
        content: "Autavia is a comprehensive aviation maintenance and inventory management software designed to help aviation businesses streamline operations and improve efficiency."
    },
    {
        imageSrc: "https://kuldeep57saini.github.io/metadologie/images/Dun_and_Bradstreet.svg",
        altText: "Dun & Bradstreet",
        content: "Dun & Bradstreet offers data-driven solutions to help businesses make informed decisions, manage risk, and build valuable customer relationships."
    },
    {
        imageSrc: "https://kuldeep57saini.github.io/metadologie/images/DocuSign.svg",
        altText: "DocuSign",
        content: "DocuSign is a leading electronic signature and contract management platform, empowering organizations to digitize and automate agreements and approvals."
    },
    {
        imageSrc: "https://kuldeep57saini.github.io/metadologie/images/Zenkraft.svg",
        altText: "Zenkraft",
        content: "Zenkraft provides shipping solutions that integrate with Salesforce, enabling businesses to manage shipping, tracking, and returns seamlessly."
    },
    {
        imageSrc: "https://kuldeep57saini.github.io/metadologie/images/Visual_Complaiance.svg",
        altText: "Visual Compliance",
        content: "Visual Compliance offers export compliance solutions, helping businesses ensure compliance with international trade regulations and sanctions."
    },
    {
        imageSrc: "https://kuldeep57saini.github.io/metadologie/images/AvSight.svg",
        altText: "AvSight",
        content: "AvSight is an aviation MRO software designed to enhance aircraft maintenance and inventory management for aviation companies."
    }
];


function createIntegrationCard(imageSrc, content, altText) {
    const integrationCardBox = document.createElement("div");
    integrationCardBox.classList.add(
        "integration-card-box",
        "size-large_1-of-3",
        "size-medium_1-of-2",
        "size-small_1-of-1",
        "size-x-large_1-of-4",
    );

    const integrationCard = document.createElement("div");
    integrationCard.classList.add("integration-card");

    const integrationCardBody = document.createElement("div");
    integrationCardBody.classList.add("integration-card-body", "height-100");

    const integrationCardImage = document.createElement("div");
    integrationCardImage.classList.add("integration-card-image");

    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = altText;

    integrationCardImage.appendChild(img);

    const p = document.createElement("p");
    p.classList.add("font-size-medium", "integration-card-content");
    p.textContent = content;

    const button = document.createElement("button");
    button.classList.add("get-in-touch-button");
    button.textContent = "Get In Touch";
    button.addEventListener("click", (e) => {
        let targetElement = document.querySelector('.more-info-form-section');
        targetElement.scrollIntoView({ behavior: "smooth" });
    });

    const upperCardBody = document.createElement('div');
    const lowerCardBody = document.createElement('div');
    
    upperCardBody.appendChild(integrationCardImage);
    upperCardBody.appendChild(p);
    lowerCardBody.appendChild(button);
    integrationCardBody.appendChild(upperCardBody);
    integrationCardBody.appendChild(lowerCardBody);

    integrationCard.appendChild(integrationCardBody);

    integrationCardBox.appendChild(integrationCard);

    return integrationCardBox;
}


function appendIntegrationCards(integrationData, containerSelector) {
    const container = document.querySelector(containerSelector);

    integrationData.forEach((item) => {
        const integrationCard = createIntegrationCard(item.imageSrc, item.content, item.altText);
        container.appendChild(integrationCard);
    });
}

appendIntegrationCards(integrationData, ".integration-card-section");


const openModal =(item)=>{
    const index = item-1;
    
    document.getElementById('00N8b00000HQp3d').value = servicesData[index].title;
    console.log(servicesData[index].title);
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
function validateForm() {

    var submitButton = document.querySelector('input[type="submit"]');
    var clickedElement = document.activeElement;

    if (clickedElement === submitButton) {
        return true;
    } else {
        return false;
    }
}
// Email Validation function

const isEmail = (email) => {
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!String(email).toLowerCase().match(emailRegex)) {
        return 'invalidEmail';
    }
    return '';
}

function handleEmailInput(input) {
    let error = isEmail(input.value);
    let submitButton = document.getElementsByClassName("submit-button")[0];
    submitButton.disabled = (error != '');
    let errorBox = input.parentNode.lastElementChild;
    errorBox.innerHTML = error;
}

function requestFormEmailInput(input) {
    let error = isEmail(input.value);
    let errorBox = input.parentNode.lastElementChild;
    errorBox.innerHTML = error;
    let submitButton = document.getElementsByClassName("submit-button")[1];
    submitButton.disabled = (error != '');
}


function mobileValidate(input) {
    let inputValue = input.value;
    input.value = inputValue.replace(/[^0-9\s]/g, '');
}

// Get a reference to the form element
const form = document.querySelector('form');

// Add an event listener to the form for when it's submitted
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Create a FormData object to collect form data
  const formData = new FormData(form);

  // Define the URL where you want to send the form data
  const url = "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8";

  // Define the fetch options for the POST request
  const options = {
    method: 'POST',
    body: formData, // Use the FormData object as the request body
  };

  // Send the POST request
  fetch(url, options)
    .then(response => {
      if (response.ok) {
        // Request was successful, you can handle the response here
        console.log("Form submitted successfully!");
        return response.text(); // or response.json() if the response is JSON
      } else {
        // Request failed, handle the error here
        console.error("Form submission failed.");
        return Promise.reject('Form submission failed');
      }
    })
    .then(data => {
      // Handle the response data (if needed)
      console.log("Response data:", data);
      // You can parse the response if it's JSON or process it as needed
    })
    .catch(error => {
      console.error("Error:", error);
    });
});
