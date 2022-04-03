"use strict";

const container = document.querySelector(".cards");

async function getNewsJson(category = "science") {
    const response = await fetch(`https://inshortsapi.vercel.app/news?category=${category}`);
    const res = await response.json();
    return res.data;
}

(async function loadNewsArticles() {
    const jsonData = await getNewsJson();
    console.log(jsonData);
    
    for(let ind=0;ind < jsonData.length; ind++){
        const author = jsonData[ind].author;
        const description = jsonData[ind].content;
        const imageUrl = jsonData[ind].imageUrl;
        const date = jsonData[ind].date;
        const readMoreUrl = jsonData[ind].readMoreUrl;
        const title = jsonData[ind].title;
        const time = jsonData[ind].time;

        const card =`
                <div class="col-md-6 col-lg-4">
                    <div class="article">
                    <a class="remove" href="${readMoreUrl}">
                        <div class="news-image">
                            <img class="cover" src="${imageUrl}" alt="${title}">
                        </div>
                        <div class="news-contents">
                            <div class="news-date-time">
                                <span>${date} ${time}</span>
                            </div>
                            <div class="news-title">${title}</div>
                            <div class="news-author">${author}</div>
                            <div class="news-content">${description}</div>
                        </div>
                    </a>
                    </div>
                </div>
                    `

        container.innerHTML += card;
    }
})();

console.log("News Plaza");