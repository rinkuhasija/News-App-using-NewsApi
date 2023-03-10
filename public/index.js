// require('dotenv').config();
// console.log(process.env.APIKEY);
// let apikey = APIKEY;
// import api from './server2.js'
let articlesPerPage, totalPages;
// console.log(process.env.APIKEY);

let query = window.location.search.split('?')[1].split('&')[0].split('=')[1]
let page = window.location.search.split('?')[1].split('&')[1].split('=')[1]
// let APIKEY = '2b55951b5a11498ca75009d8a6248af9'
console.log(query);
console.log(page);

const fetchNews = async (query, pageNo) => {
    let news = await fetch(`/api?q=${query}&apiKey=2b55951b5a11498ca75009d8a6248af9&pageSize=12&page=${pageNo}`)
    let r = await news.json()
    // console.log(r);
    totalPages = Math.ceil(r.totalResults / articlesPerPage)
    queryText.innerHTML = query
    queryResult.innerHTML = r.totalResults
    prev.href = `/?q=${query}&page=${page - 1}`
    next.href = `/?q=${query}&page=${Number(page) + Number(1)}`
    one.href = `/?q=${query}&page=1`
    two.href = `/?q=${query}&page=2`
    three.href = `/?q=${query}&page=3`
    weather.href = `/?q=weather&page=1`
    sports.href = `/?q=sports&page=1`
    cryptoCurr.href = `/?q=cryptocurrency&page=1`;
    india.href = `/?q=india&page=1`;

    let str = ''
    // console.log("r.articles ==>" + r.articles);
    for (let item of r.articles) {
        console.log(item)
        str = str +
            `<div class="card m-3" style="width: 18rem;">
            <p class="mt-2 ml-4"> Date : ${(item.publishedAt).slice(0,10)}</p>
                <img src=${item.urlToImage} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.description}</p>
                <a target="blank" href=${item.url} class="btn btn-primary">Read More...</a>
                
            </div>
            </div>`
    }
    content.innerHTML = str;

}

fetchNews(query, page)