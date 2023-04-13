import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import '../../sass/components/Team-modal.scss';






const photoDir = '../../images/team-img/';

const teamMembers = [
    {
    name:' Taras Veremchuk',
        github: 'https://github.com/',
        photo_path: ``,
        linkedin: 'https://www.linkedin.com/',
        facebook: 'https://www.facebook.com/',
        insta: 'https://www.instagram.com/',
        role: 'Team Lead'
  },
      
    {
        name: 'Anna Kucherenko',
        github: 'https://github.com/FireAnna',
        photo_path: 'images/team-photo/denchik.png', 
        linkedin: 'https://www.linkedin.com/in/anna-k-92798226b/ ',
        facebook: 'https://www.facebook.com/profile.php?id=100009926686415',
        insta: 'https://www.instagram.com/a.ku4erenk0/',
        role: 'GoIT student'
  },
  {name: 'Nataliia Dubinska',
        github: 'https://github.com/SambykaLight?tab=repositories',
        photo_path: './ ',
        linkedin: 'https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin',
        facebook: 'https://www.facebook.com/nataliia.dubinska',
        insta: 'https://www.instagram.com',
    role: 'GoIT student'
  },
{
  name: 'Denys Astafiev',
        github: 'https://github.com/denius97',
        photo_path: './',
        linkedin: 'https://www.linkedin.com/',
        facebook: 'https://www.facebook.com/',
        insta: 'https://www.instagram.com/',
        role: 'GoIT student'
},
   {
     name:'Iryna Pytska',
        github: 'https://github.com/irina77676e',
        photo_path: './ ',
        linkedin: 'https://www.linkedin.com/in/iryna-pytska-5485a9235/',
        facebook: 'https://www.facebook.com/',
        insta: 'https://www.instagram.com/i_pytskaya/',
        role: 'GoIT student',
  },
  {
     name: 'Ksysha Vashchenko',
        github: 'https://github.com/',
        photo_path: './ ',
        linkedin: 'https://www.linkedin.com/',
        facebook: 'https://www.facebook.com/',
        insta: 'https://www.instagram.com/',
        role: 'GoIT Student'
  },
  {
    name: 'Yevhenii Doroshenko',
        github: 'https://github.com/',
        photo_path: './ ',
        linkedin: 'https://www.linkedin.com/',
        facebook: 'https://www.facebook.com/',
        insta: 'https://www.instagram.com/',
        role: 'GoIT Student'
  },
  {
    name: 'Roman Lastovetskyi',
        github: 'https://github.com/R0m5',
        photo_path: './ ',
        linkedin: 'https://www.linkedin.com/',
        facebook: 'https://www.facebook.com/',
        insta: 'https://www.instagram.com/',
        role: 'Scrum Master'
  },
  {
    name: 'Vladyslav Pavlenko',
        github: 'https://github.com/VladyslavDmytrovychPavlenko',
        photo_path: './ ',
        linkedin: 'linkedin.com/in/vladyslav-pavlenko-180b4b270',
        facebook: 'https://www.facebook.com/',
        insta: 'https://www.instagram.com/',
        role: 'GoIT student'
  },
  {
    name: 'Julia Dymarets',
        github: 'https://github.com/',
        photo_path: './ ',
        linkedin: 'https://www.linkedin.com/',
        facebook: 'https://www.facebook.com/',
        insta: 'https://www.instagram.com/',
        role: 'GoIT student'
  },
  {
    name:' Albina Kokoieva',
        github: 'https://github.com/AlbinaFox',
        photo_path: './ ',
        linkedin:' https://www.linkedin.com/in/albina-kokoieva-4b7a25270/',
        facebook: 'https://www.facebook.com/',
        insta:' https://instagram.com/albina.kokoieva_?igshid=YmMyMTA2M2Y=',
        role: 'GoIT student',
  },
  {
     name: 'Nazariy Kulyk',
        github: 'https://github.com/Nazar-kulyk',
        photo_path: './ ',
        linkedin: 'www.linkedin.com/in/nazariy-kulyk-28b84225b',
        facebook: 'https://www.facebook.com/',
        insta: 'https://instagram.com/nazar_kulyk?igshid=YmMyMTA2M2Y=',
        role: 'GoIT student'
  },
  
  {
name: 'Roman Lebedynskyi',
        github: 'https://github.com/',
        photo_path: './ ',
        linkedin: 'https://www.linkedin.com/',
        facebook: 'https://www.facebook.com/',
        insta: 'https://www.instagram.com/',
        role: 'GoIT student'
  },
  {
    name: 'Repeta Dalai Lama',
        github:' https://github.com/luxplanjay',
        photo_path: './ ',
        linkedin: 'https://www.linkedin.com/in/alex-repeta/',
        facebook: 'https://www.facebook.com/profile.php?id=100013719586629',
        insta: 'https://www.instagram.com/alexander.repeta/',
        role: 'Team Lead'
  }
   
   
];

const generateTeamMarkup = (members) => {
    let markup = `
    <div class="main">
    <span class="close">&times;</span>


    
  `;

  members.forEach((member) => {
    if (member.name) {
        markup += `<div class="team-modal">
        <div class="profile-card">
        <div class="img">
          <img
            src="${member.photo_path}"
            width="60"
          />
        </div>
        <div class="caption">
          <h3>${member.name}</h3>
          <p>${member.role}</p>
          <div class="social">
            <a
                  class="sosial-links"
                  href="${member.facebook}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg class="social-icon" width="20" height="20">
                    <use href="./images/footer-icons.svg#icon-facebook"></use>
                  </svg>
                </a>
            <a
                  class="sosial-link"
                  href="${member.insta}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg class="social-icon" width="20" height="20">
                    <use href="/images/footer-icons.svg#icon-instagram"></use>
                  </svg>
                </a>
            <a
                  class="sosial-links"
                  href="${member.github}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg class="social-icon" width="20" height="20">
                    <use href="./images/footer-icons.svg#icon-github"></use>
                  </svg>
                </a>
            <a
                  class="sosial-link"
                  href="${member.linkedin}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg class="social-icon" width="20" height="20">
                    <use href="/images/footer-icons.svg#linkedin"></use>
                  </svg>
                </a>
          </div>
        </div>
      </div>
      </div>
      `;
    }
  });

    // remove the last empty container
    markup = markup.slice(0, -'<div class="team-card">'.length);

    return markup;
};

const markupTeam = generateTeamMarkup(teamMembers);
const linkFooter = document.querySelector('.js-team-modal');
const closeTeam = document.querySelector('.close');
linkFooter.addEventListener('click', openModalTeam);
const modalTeam = basicLightbox.create(markupTeam);
function openModalTeam(e) {
    e.preventDefault();
modalTeam.show();

window.addEventListener('keydown', closeModalTeam);

    function closeModalTeam(e) {
    if (e.code === 'Escape') {
        modalTeam.close();
        window.removeEventListener('keydown', closeModalTeam);
    }
}
}

closeTeam.addEventListener('click', function () {
  closeModal();
});