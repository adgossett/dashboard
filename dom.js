document.addEventListener('DOMContentLoaded', function () {
    var headContentElement = document.getElementById('head-content');
    var url = 'https://example.com/your-website-url'; // Replace with your website's URL

    // Fetch the HTML content of the specified URL
    fetch(url)
        .then(function (response) {
            return response.text();
        })
        .then(function (html) {
            // Create a temporary container element to parse the HTML
            var container = document.createElement('div');
            container.innerHTML = html;

            // Extract the <head> content from the parsed HTML
            var headContent = container.querySelector('head').innerHTML;

            // Set the extracted <head> content to the element on the page
            headContentElement.innerHTML = headContent;
        })
        .catch(function (error) {
            console.log('Error fetching website head:', error);
        });
});


// button interaction 

// Get the dropdown button and dropdown content
var dropdownBtn = document.querySelector(".dropdown .avatar");
var dropdownContent = document.querySelector(".dropdown-content");

// Toggle the dropdown when the button is clicked
dropdownBtn.addEventListener("click", function () {
    dropdownContent.classList.toggle("show");
});

// Hide the dropdown when clicking outside of it
window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropdown .avatar")) {
        if (dropdownContent.classList.contains("show")) {
            dropdownContent.classList.remove("show");
        }
    }
});

// Get the upload image button and upload modal
var uploadImageBtn = document.querySelector(".upload-image-btn");
var uploadModal = document.querySelector(".upload-modal");

// Show the upload modal when the upload image button is clicked
uploadImageBtn.addEventListener("click", function () {
    uploadModal.style.display = "block";
});

// Hide the upload modal when the close button is clicked
var closeModalBtn = document.querySelector(".close-modal");
closeModalBtn.addEventListener("click", function () {
    uploadModal.style.display = "none";
});

// Hide the upload modal when clicking outside of it
window.addEventListener("click", function (event) {
    if (event.target == uploadModal) {
        uploadModal.style.display = "none";
    }
});