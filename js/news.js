//get the news container
const newsContainer = document.getElementById('news-container');

//fetch the json data
fetch('cryptoNews.json')
  .then(res => res.json())
  .then(data => {
    let newsHTML = '';
    //loop through the data and create the HTML for each item
    data.forEach(item => {
      newsHTML += `
        <div class="news-item">
          <a href="${item.url}" target="_blank">
            <h2>${item.title}</h2>
            <img src="${item.image}" alt="Article Image">
            <p>${item.description}</p>
            <p>Published on ${item.date}</p>
          </a>
        </div>
      `;
    });
    //set the innerHTML of the container to the generated HTML
    newsContainer.innerHTML = newsHTML;
  })
  .catch(error => console.log(error));
