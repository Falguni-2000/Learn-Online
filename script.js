function filterCourses() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const courses = document.querySelectorAll(".card");

    courses.forEach(course => {
        const title = course.querySelector(".card-title").innerText.toLowerCase();
        if (title.includes(searchInput)) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }
    });
}

function showCourseDetails(title, description, price) {
    document.getElementById('courseModalLabel').innerText = title;
    document.getElementById('modalCourseDescription').innerText = description;
    document.getElementById('modalCoursePrice').innerText = price;
    $('#courseModal').modal('show');
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
});
