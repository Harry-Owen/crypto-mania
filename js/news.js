const apiKey = '033f9b581c434ddeae8b2bbba090edae';
const endpoint = `https://newsapi.org/v2/everything?q=cryptocurrency&sortBy=publishedAt&apiKey=${apiKey}`;

const newsContainer = document.getElementById('news-container');

fetch(endpoint)
  .then(res => res.json())
  .then(data => {
    const articles = data.articles;
    let newsHTML = '';

    articles.forEach(article => {
      newsHTML += `
        <div class="news-item">
          <a href="${article.url}" target="_blank">
            <h2>${article.title}</h2>
            <img src="${article.urlToImage}" alt="Article Image">
            <p>${article.description}</p>
            <p>Published on ${article.publishedAt}</p>
          </a>
        </div>
      `;
    });

    newsContainer.innerHTML = news.html;
  })
  .catch(error => console.log(error));
