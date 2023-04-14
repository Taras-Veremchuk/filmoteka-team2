import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import '../../sass/components/_team-modal.scss';

const teamMembers = [
  {
    name: ' Taras Veremchuk',
    github: 'https://github.com/',
    photo_path: 'img/team-img/taras.png',
    linkedin: 'https://www.linkedin.com/',
    facebook: 'https://www.facebook.com/',
    insta: 'https://www.instagram.com/',
    role: 'Team Lead',
  },

  {
    name: 'Anna Kucherenko',
    github: 'https://github.com/FireAnna',
    photo_path: 'img/team-img/anna.png',
    linkedin: 'https://www.linkedin.com/in/anna-k-92798226b/ ',
    facebook: 'https://www.facebook.com/profile.php?id=100009926686415',
    insta: 'https://www.instagram.com/a.ku4erenk0/',
    role: 'GoIT student',
  },
  {
    name: 'Nataliia Dubinska',
    github: 'https://github.com/SambykaLight?tab=repositories',
    photo_path: 'img/team-img/sambyka.png',
    linkedin:
      'https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin',
    facebook: 'https://www.facebook.com/nataliia.dubinska',
    insta: 'https://www.instagram.com',
    role: 'GoIT student',
  },
  {
    name: 'Denys Astafiev',
    github: 'https://github.com/denius97',
    photo_path: 'img/team-img/den.png',
    linkedin: 'https://www.linkedin.com/',
    facebook: 'https://www.facebook.com/',
    insta: 'https://www.instagram.com/',
    role: 'GoIT student',
  },
  {
    name: 'Iryna Pytska',
    github: 'https://github.com/irina77676e',
    photo_path: 'img/team-img/ira.png',
    linkedin: 'https://www.linkedin.com/in/iryna-pytska-5485a9235/',
    facebook: 'https://www.facebook.com/',
    insta: 'https://www.instagram.com/i_pytskaya/',
    role: 'GoIT student',
  },
  {
    name: 'Ksysha Vashchenko',
    github: 'https://github.com/',
    photo_path: 'img/team-img/ksenia.png',
    linkedin: 'https://www.linkedin.com/',
    facebook: 'https://www.facebook.com/',
    insta: 'https://www.instagram.com/',
    role: 'GoIT Student',
  },
  {
    name: 'Yevhenii Doroshenko',
    github: 'https://github.com/YevheniiDoroshenko88',
    photo_path: 'img/team-img/eugen.png',
    linkedin: 'https://www.linkedin.com/in/yevhenii-doroshenko-baba26270',
    facebook: 'https://www.facebook.com/',
    insta: 'https://instagram.com/doroshenko.zhenya?igshid=YmMyMTA2M2Y=',
    role: 'GoIT Student',
  },
  {
    name: 'Roman Lastovetskyi',
    github: 'https://github.com/R0m5',
    photo_path: 'img/team-img/roma.png',
    linkedin: 'https://www.linkedin.com/',
    facebook: 'https://www.facebook.com/',
    insta: 'https://www.instagram.com/',
    role: 'Scrum Master',
  },
  {
    name: 'Vladyslav Pavlenko',
    github: 'https://github.com/VladyslavDmytrovychPavlenko',
    photo_path: 'img/team-img/vlad.png',
    linkedin: 'linkedin.com/in/vladyslav-pavlenko-180b4b270',
    facebook: 'https://www.facebook.com/',
    insta: 'https://www.instagram.com/',
    role: 'GoIT student',
  },
  {
    name: 'Julia Dymarets',
    github: 'https://github.com/',
    photo_path: 'img/team-img/yulia.png',
    linkedin: 'https://www.linkedin.com/',
    facebook: 'https://www.facebook.com/',
    insta: 'https://www.instagram.com/',
    role: 'GoIT student',
  },
  {
    name: ' Albina Kokoieva',
    github: 'https://github.com/AlbinaFox',
    photo_path: 'img/team-img/albina.png',
    linkedin: ' https://www.linkedin.com/in/albina-kokoieva-4b7a25270/',
    facebook: 'https://www.facebook.com/',
    insta: ' https://instagram.com/albina.kokoieva_?igshid=YmMyMTA2M2Y=',
    role: 'GoIT student',
  },
  {
    name: 'Nazariy Kulyk',
    github: 'https://github.com/Nazar-kulyk',
    photo_path: 'img/team-img/nazariy.png',
    linkedin: 'www.linkedin.com/in/nazariy-kulyk-28b84225b',
    facebook: 'https://www.facebook.com/',
    insta: 'https://instagram.com/nazar_kulyk?igshid=YmMyMTA2M2Y=',
    role: 'GoIT student',
  },

  {
    name: 'Roman Lebedynskyi',
    github: 'https://github.com/',
    photo_path: 'img/team-img/romanlebed.png',
    linkedin: 'https://www.linkedin.com/',
    facebook: 'https://www.facebook.com/',
    insta: 'https://www.instagram.com/',
    role: 'GoIT student',
  },
  {
    name: 'Repeta Dalai Lama',
    github: ' https://github.com/luxplanjay',
    photo_path: 'img/team-img/repeta.png',
    linkedin: 'https://www.linkedin.com/in/alex-repeta/',
    facebook: 'https://www.facebook.com/profile.php?id=100013719586629',
    insta: 'https://www.instagram.com/alexander.repeta/',
    role: 'Team Lead',
  },
];

const generateTeamMarkup = members => {
  let markup = `
    <div class="main-team">
    <span class="close">&times;</span>`;

  members.forEach(member => {
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
                  <svg class="social-icon" width="30" height="30">
                    <use href="svg/sprite-team.svg#icon-facebook"></use>
                  </svg>
                </a>
            <a
                  class="sosial-link"
                  href="${member.insta}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg class="social-icon" width="30" height="30">
                    <use href="svg/sprite-team.svg#icon-instagram"></use>
                  </svg>
                </a>
            <a
                  class="sosial-links"
                  href="${member.github}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg class="social-icon" width="30" height="30">
                    <use href="svg/sprite-team.svg#icon-github"></use>
                  </svg>
                </a>
            <a
                  class="sosial-link"
                  href="${member.linkedin}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg class="social-icon" width="30" height="30">
                    <use href="svg/sprite-team.svg#icon-linkedin"></use>
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
linkFooter.addEventListener('click', openModalTeam);
const modalTeam = basicLightbox.create(markupTeam);
function openModalTeam(e) {
  e.preventDefault();
  modalTeam.show();

document.addEventListener('keydown', closeModalTeam);
document.addEventListener('click', closeModalTeam);


  function closeModalTeam(e) {
    console.log(e.target.nodeName);
    if (e.code === 'Escape' || e.target.classList.contains('close') ) {
      modalTeam.close();
      document.removeEventListener('keydown', closeModalTeam);
      document.removeEventListener('click', closeModalTeam);

    }
  }
}
