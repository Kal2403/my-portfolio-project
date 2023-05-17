const nav = document.querySelector('.nav');
const open = document.querySelector('#open');
const close = document.querySelectorAll('.btn-close');

open.addEventListener('click', () => {
  nav.classList.add('visible');
});

close.forEach((element) => {
  element.addEventListener('click', () => {
    nav.classList.remove('visible');
  });
});
const projectData = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'img/Snapshoot-Portfolio1.svg',
    tecnologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '',
    sourceLink: '',
  },

  {
    name: 'Multi-Post',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'img/Snapshoot-Portfolio2.svg',
    tecnologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '',
    sourceLink: '',
  },

  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'img/Snapshoot-Portfolio3.svg',
    tecnologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '',
    sourceLink: '',
  },

  {
    name: 'Multi-Post',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'img/Snapshoot-Portfolio4.svg',
    tecnologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '',
    sourceLink: '',
  },
];

const projectSection = document.querySelector('#portfolio');
for (let i = 0; i < projectData.length; i += 1) {
  const project = projectData[i];

  const projectElement = document.createElement('div');
  projectElement.classList.add('card');
  if (i % 2 !== 0) {
    projectElement.classList.add('card-multi');
  }

  const imgElement = document.createElement('img');
  imgElement.classList.add('img-project');
  imgElement.src = project.image;
  imgElement.alt = project.name;
  if (i % 2 === 0) {
    imgElement.classList.add('tonic-img');
  } else {
    imgElement.classList.add('multi-img');
  }
  projectElement.appendChild(imgElement);

  const descriptionProject = document.createElement('div');
  descriptionProject.classList.add('description-project');
  descriptionProject.classList.add('tonic');
  projectElement.appendChild(descriptionProject);

  const h3Element = document.createElement('h3');
  h3Element.textContent = project.name;
  descriptionProject.appendChild(h3Element);

  const frame = document.createElement('div');
  frame.classList.add('frame');
  descriptionProject.appendChild(frame);

  const canopy = document.createElement('p');
  canopy.textContent = 'CANOPY';
  frame.appendChild(canopy);

  const imgDot = document.createElement('img');
  imgDot.src = 'img/Counter.svg';
  frame.appendChild(imgDot);

  const backEnd = document.createElement('p');
  backEnd.textContent = 'Back End Dev';
  frame.appendChild(backEnd);

  const imgDot2 = document.createElement('img');
  imgDot2.src = 'img/Counter.svg';
  frame.appendChild(imgDot2);

  const year = document.createElement('p');
  year.textContent = '2015';
  frame.appendChild(year);

  const pElement = document.createElement('p');
  pElement.classList.add('text-description');
  pElement.textContent = project.description;
  descriptionProject.appendChild(pElement);

  const ulElement = document.createElement('ul');
  ulElement.classList.add('list-technologys');

  const liElementHtml = document.createElement('li');
  const aElementHtml = document.createElement('a');
  aElementHtml.href = 'https://developer.mozilla.org/en-US/docs/Web/HTML';
  const [html, css, javascript] = project.tecnologies;
  aElementHtml.textContent = html;
  liElementHtml.appendChild(aElementHtml);

  const liElementCss = document.createElement('li');
  const aElementCss = document.createElement('a');
  aElementCss.href = 'https://developer.mozilla.org/en-US/docs/Web/CSS';
  aElementCss.textContent = css;
  liElementCss.appendChild(aElementCss);

  const liElementJavaScript = document.createElement('li');
  const aElementJavaScript = document.createElement('a');
  aElementJavaScript.href = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';
  aElementJavaScript.textContent = javascript;
  liElementJavaScript.appendChild(aElementJavaScript);

  ulElement.appendChild(liElementHtml);
  ulElement.appendChild(liElementCss);
  ulElement.appendChild(liElementJavaScript);
  descriptionProject.appendChild(ulElement);

  const buttonElement = document.createElement('button');
  buttonElement.classList.add('details');
  buttonElement.type = 'button';
  buttonElement.dataset.project = `project${i + 1}`;
  buttonElement.textContent = 'See Project';
  descriptionProject.appendChild(buttonElement);

  projectSection.appendChild(projectElement);
}

const popup = document.querySelector('.popup');
const popupTitle = document.querySelector('#popup-title');
const popupImage = document.querySelector('#popup-image');
const popupDescription = document.querySelector('#popup-description');
const popupClose = document.querySelector('.close');

document.querySelectorAll('.details').forEach((button) => {
  button.addEventListener('click', () => {
    const projectId = button.dataset.project.substring(7);
    const project = projectData[projectId - 1];
    popupTitle.textContent = project.name;
    popupImage.src = project.image;
    popupDescription.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';
    popup.style.display = 'flex';
  });
});

popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});
