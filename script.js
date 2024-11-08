// // get references to the form and display area
// var forms = document.getElementById('resume-form');
// var ResumeDisplayElement = document.getElementById('resume-display');
// // handle form submission
// forms.addEventListener('submit', function (event) {
//     event.preventDefault(); //prevent page reload
//     //collect input values
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var phone = document.getElementById('phone').value;
//     var education = document.getElementById('education').value;
//     var experience = document.getElementById('experience').value;
//     var skills = document.getElementById('skills').value;
//     //generate the resume content dynamically
//     var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p> \n    <p><b>Name:</b>").concat(phone, "</p>\n    <p><b>Name:</b>").concat(email, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>");
//     // display the generated resume
//     if (ResumeDisplayElement) {
//         ResumeDisplayElement.innerHTML = resumeHTML;
//     }
//     else {
//         console.error('the resume display element is missing.');
//     }
// });
// get references to the form and display area
// var form = document.getElementById('resume-form');
// var resumeDisplayElement = document.getElementById('resume-display');

// // handle form submission
// form.addEventListener('submit', function (event) {
//     event.preventDefault(); // prevent page reload
    
//     // collect input values
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var phone = document.getElementById('phone').value;
//     var education = document.getElementById('education').value;
//     var experience = document.getElementById('experience').value;
//     var skills = document.getElementById('skills').value;
    
//     // generate the resume content dynamically
//     var resumeHTML = `
//         <h2><b>Resume</b></h2>
//         <h3>Personal Information</h3>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Phone:</b> ${phone}</p>
//         <p><b>Email:</b> ${email}</p>
        
//         <h3>Education</h3>
//         <p>${education}</p>
        
//         <h3>Experience</h3>
//         <p>${experience}</p>
        
//         <h3>Skills</h3>
//         <p>${skills}</p>
//     `;
    
//     // display the generated resume
//     if (resumeDisplayElement) {
//         resumeDisplayElement.innerHTML = resumeHTML;
        
//         // clear the form fields after submission
//         form.reset();
//     } else {
//         console.error('The resume display element is missing.');
//     }
// });

// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');

// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    
    // Generate the resume content dynamically
    var resumeHTML = `
        <h2><b>Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        
        <h3>Education</h3>
        <p>${education}</p>
        
        <h3>Experience</h3>
        <p>${experience}</p>
        
        <h3>Skills</h3>
        <p>${skills}</p>
    `;
    
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
        
        // Clear the form fields after submission
        form.reset();
    } else {
        console.error('The resume display element is missing.');
    }
});