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
    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
    aperiam dolorum ipsum natus quisquam debitis incidunt consequuntur
    quibusdam magni ex dolore saepe qui? Natus magnam placeat dolor ad
    recusandae laboriosam?</span
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
    <p>Skills Content Goes Here</p>
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
    <p>Projects Content Goes Here</p>
    <div class="projects-grid">
    <div class="project-item"><img class="proj-itms" src="/agile-board.png"></div>
    <div class="project-item"><img class="proj-itms" src="/book-connect.png"></div>
    <div class="project-item"><img class="proj-itms" src="blackjack.png"></div>
    <div class="project-item"><img class="proj-itms" src=""></div>
  </div>
  </div>
</div>

<div id="modal-contacts" class="modal">
  <div class="modal-content">
    <span class="close" data-modal="modal-contacts">&times;</span>
    <p>Contacts Content Goes Here</p>
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