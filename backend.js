document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    console.log("Contact Data Recived Successfully");
    console.log(name, email, subject, phone, message);

    var button = document.getElementById('form-submit');

    button.innerHTML = 'Response Received';

    setTimeout(function() {
        button.innerHTML = 'Send Message';
    }, 1000);

const newUrl = 'https://www.zohoapis.in/crm/v2/Leads';
const headers = {
  'Authorization': 'Zoho-oauthtoken 1000.2a3c4d65b15c631a340182eaaee7b27e.a435535f38fd7b084ab5787166a87883',
};

const newUrl = 'https://www.zohoapis.in/crm/v2/Leads';
const headers = {
  'Authorization': 'Zoho-oauthtoken 1000.2a3c4d65b15c631a340182eaaee7b27e.a435535f38fd7b084ab5787166a87883',
  'Content-Type': 'application/json'
};

const rawData = {
  data: [
    {
      "Company": 'Shruti',
      "Last_Name": 'Postman Demo',
      "First_Name": 'Service',
      "Email": 'postman@gmail.com',
      "State": 'Madhya Pradesh'
    }
  ],
  trigger: [
    'approval',
    'workflow',
    'blueprint'
  ]
};

fetch(newUrl, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(rawData) // Convert the data object to a JSON string
})
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

