import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { fetchData } from './services/jobServices';
import { createCard } from './services/card';

async function initializeApp() {
  const app = document.querySelector('#app');
  const jobData = await fetchData();

  if (!jobData || jobData.length === 0) {
    app.innerHTML = `<p>No jobs available at the moment.</p>`;
    return;
  }

  const fragment = document.createDocumentFragment();
  jobData.forEach((job) => {
    const cardHtml = createCard(job);
    const div = document.createElement('div');
    div.innerHTML = cardHtml;
    fragment.appendChild(div);
  });

  app.appendChild(fragment);
}

initializeApp();