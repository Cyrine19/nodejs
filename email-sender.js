const nodemailer = require('nodemailer');

// Create a transporter object with your email service credentials
const transporter = nodemailer.createTransport({
  service: 'gmail', // Replace 'gmail' with your email service (e.g., 'yahoo', 'outlook', etc.)
  auth: {
    user: 'your-email@gmail.com', // Replace with your email address
    pass: 'your-email-password', // Replace with your email password
  },
});

// Define the email options
const mailOptions = {
  from: 'your-email@gmail.com', // Sender email address
  to: 'recipient-email@example.com', // Recipient email address (can be your own address for testing)
  subject: 'Test Email from Node.js', // Email subject
  text: 'This is a test email sent from Node.js.', // Email body (plain text)
  //html: '<p>This is a test email sent from <b>Node.js</b>.</p>', // You can use 'html' instead of 'text' for HTML content
};

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
