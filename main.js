import './style.css'

document.querySelector('#app').innerHTML = `
<header class="header">
<nav class="nav-bar">
  <div class="logo">
    <h3>Jonas Mokawane</h3>
  </div>
  <ul>
    <li id="skills">Skills</li>
    <li id="projects">Projects</li>
    <li id="contacts">Contacts</li>
  </ul>
</nav>
</header>
<div class="intro">
<div class="info">
<h1><span class="intro-header">Frontend Developer.</span></h1>
<p>
  <span class="intro-text"
    >Hello there, My name is Jonas Mokawane. I am a frontend Junior Developer with specialties in, UI, UX and web development/Applications</span
  >
</p>
</div>
<div class="jm-img">
  <img class="profile-img" src="/dev-jonas-01.jpg" alt="jm's picture">
</div>
</div>

<div id="modal-skills" class="modal">
  <div class="modal-content">
    <span class="close" data-modal="modal-skills">&times;</span>
    <p>My Skills</p>
    <div>
    <img  class="images" src="/Git.png">
    <img  class="images" src="/html.png">
    <img  class="images" src="/CSS3.png">
    <img class="images" src="/tailwind.png">
    <img class="images" src="javascript.png">
  </div>
  </div>
</div>

<div id="modal-projects" class="modal">
  <div class="modal-content">
    <span class="close" data-modal="modal-projects">&times;</span>
    <p>My Projects</p>
    <div class="projects-grid">
    <div class="project-item"><a href="https://mokawane.github.io/SEEMOK507_BCL2401_GroupB_Jonas-Mokawane_JSL11/"><img class="proj-itms" src="/agile-board.png"></a></div>
    <div class="project-item"><a href="https://mokawane.github.io/SEEMOK507_BCL2401_GroupB_Jonas-Mokawane_DJS03/"><img class="proj-itms" src="/book-connect.png"></a></div>
    <div class="project-item"><a href="https://mokawane.github.io/BlackJack-game/"><img class="proj-itms" src="blackjack.png"></a></div>
    <div class="project-item"><a href="https://mokawane.github.io/SEEMOK507_BCL2401_GroupB_Jonas-Mokawane_DJS07/"><img class="proj-itms" src="/meme-generator.png"></a></div>
  </div>
  </div>
</div>

<div id="modal-contacts" class="modal">
  <div class="modal-content">
    <span class="close" data-modal="modal-contacts">&times;</span>
    <p>Contact Me</p>
    <div class="contacts-grid">
    <div class="contact-item"><a href="https://github.com/Mokawane" target="_blank"><img class="conts-itms" src="/github.png"></a></div>
    <div class="contact-item"><a href="https://linkedin.com/in/jonas-mokawane-692939205?trk=contact-info" target="_blank"><img class="conts-itms" src="/linkedin.png"></a></div>
    <div class="contact-item"><a href="https://instagram.com/_jay_za?igsh=ajV2M2dza3M5NzNo" target="_blank"><img class="conts-itms" src="/instagram.jpeg"></a></div>
    <div class="contact-item"><a href="mailto:jonas.mokawane98@gmail.com"><img class="conts-itms" src="/gmail.png"></a></div>
  </div>
  </div>
</div>
`
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Add event listeners to the list items to open the corresponding modal
document.getElementById('skills').addEventListener('click', function() {
  openModal('modal-skills');
});
document.getElementById('projects').addEventListener('click', function() {
  openModal('modal-projects');
});
document.getElementById('contacts').addEventListener('click', function() {
  openModal('modal-contacts');
});

// Add event listeners to close buttons in each modal
document.querySelectorAll('.close').forEach(function(span) {
  span.addEventListener('click', function() {
    const modalId = this.getAttribute('data-modal');
    closeModal(modalId);
  });
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    closeModal(event.target.id);
  }
}