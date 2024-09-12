document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    console.log("Contact Data Recived Successfully");
    console.log(name, email, subject, phone, message);
  
    var url = 'https://docs.google.com/forms/d/e/1FAIpQLScgpkTyU9AvhILQCcf6o3eicwL2fbxZArTiQMYIrNNMPcMjLA/formResponse';
  
    var formData = new FormData();
    formData.append('entry.1678590117', name);
    formData.append('entry.1996300062', email);
    formData.append('entry.72975923', subject);
    formData.append('entry.1825055730', phone);
    formData.append('entry.300178542', message);

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
      Company: 'Shruti',
      Last_Name: 'Postman Demo',
      First_Name: 'Service',
      Email: 'postman@gmail.com',
      State: 'Madhya Pradesh'
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

