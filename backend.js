document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    console.log("Contact Data Received Successfully");
    console.log(name, email, subject, phone, message);

    var button = document.getElementById('form-submit');
    button.innerHTML = 'Response Received';

    setTimeout(function() {
        button.innerHTML = 'Send Message';
    }, 1000);

    const newUrl = 'https://www.zohoapis.in/crm/v2/Leads';
    const headers = {
        'Authorization': 'Zoho-oauthtoken 1000.42976b78331970db9d5fbcef00f43150.b773f2aefd15f26d4d586460b00d75af',
        'Content-Type': 'application/json'
    };

    const rawData = {
        data: [
            {
                "Company": name,
                "Last_Name": subject,
                "First_Name": message,
                "Email": email,
                "Phone": phone,
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
        body: JSON.stringify(rawData), // Convert the data object to a JSON string
        mode: 'cors' // Ensure CORS is handled properly
    })
    .then(response => response.json()) // Ensure response is parsed as JSON
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
