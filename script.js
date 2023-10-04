console.log("hello")
document.addEventListener("DOMContentLoaded", function() {
    const span = document.querySelector(".animated-text");
    const texts = ["Developer", "Coder"];
    let index = 0;

    function changeText() {
      span.innerHTML = texts[index];
      index = (index + 1) % texts.length;
    }

    setInterval(changeText, 3000); // Change text every 2 seconds (2000 milliseconds)
  });

  // Function to highlight "Skills" in the navbar when the skills section is in view
function highlightSkillsInNavbar(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // The skills section is in view
      const skillsLink = document.getElementById('skills-link');
      skillsLink.classList.add('active'); // Add a class to highlight it
    } else {
      // The skills section is not in view
      const skillsLink = document.getElementById('skills-link');
      skillsLink.classList.remove('active'); // Remove the class
    }
  });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(highlightSkillsInNavbar, {
  root: null, // The viewport
  threshold: 0.5, // 50% of the target is in view
});

// Observe the skills section
const skillsSection = document.getElementById('skills');
observer.observe(skillsSection);
