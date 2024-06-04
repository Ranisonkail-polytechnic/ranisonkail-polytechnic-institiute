document.addEventListener('DOMContentLoaded', function() {
    setGreeting();

    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });
});

function setGreeting() {
    const today = new Date();
    const hour = today.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    document.getElementById('greeting').textContent = greeting;
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    let message = '';

    if (!name || !email) {
        message = 'Please fill out all fields.';
    } else if (!/\S+@\S+\.\S+/.test(email)) { // Simple email validation
        message = 'Please enter a valid email address.';
    } else {
        message = 'Your information has been submitted successfully.';
    }

    document.getElementById('message').textContent = message;
}
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 6000); // Change image every 3 seconds
}
document.addEventListener("DOMContentLoaded", function() {
    const notices = [
        "Annual company meeting on June 15th at 10 AM.",
        "Office will be closed on July 4th due to Independence Day."
    ];

    const documents = [
        { name: "Meeting Agenda", url: "docs/MeetingAgenda.pdf" },
        { name: "Holiday Schedule", url: "docs/HolidaySchedule.pdf" }
    ];

    const noticeList = document.getElementById("noticeList");

    // Add notices
    notices.forEach(notice => {
        let div = document.createElement("div");
        div.className = 'notice';
        div.textContent = notice;
        noticeList.appendChild(div);
    });

    // Add documents
    documents.forEach(doc => {
        let div = document.createElement("div");
        div.className = 'document';
        let a = document.createElement("a");
        a.href = doc.url;
        a.textContent = doc.name;
        a.target = "_blank";  // opens in a new tab
        div.appendChild(a);
        noticeList.appendChild(div);
    });
});
// JavaScript for search bar autocomplete
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const matches = // Perform search based on query
    renderSearchResults(matches);
});

function renderSearchResults(matches) {
    // Clear previous results
    searchResults.innerHTML = '';

    // Render new search results
    matches.forEach(match => {
        const li = document.createElement('li');
        li.textContent = match;
        searchResults.appendChild(li);
    });
}


