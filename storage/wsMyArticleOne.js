let wsMyArticleOne = {
    showArticle(p1){
        let layout = "";
        p1.forEach((val,id) => {
            layout += `
            <h2 class="blog-post-title">${val.title}</h2>
            <p class="blog-post-meta">${val.date} by <a href="${val.autor.href}" target="_blank">${val.autor.name}</a></p>
            <p>${val.paragraph}</p>
            <hr>
            <p>${val.content}</p>
            <img src="${val.img1}" style ="max-width: 100%;"><br>
            <h2>${val.blockquote}</h2>
            <p>${val.reference}</p>
            <blockquote class="blockquote">
              <p>${val.quote}</p>
            </blockquote>
            <p>${val.additiona}</p>
            <img src="${val.img2}" style ="max-width: 100%;"><br><br>
            <h3>${val.title2}</h3>
            <p>${val.paragraph2}</p>
          <ul>
            <li>${val.list1}</li>
            <li>${val.list2}</li>
            <li>${val.list3} </li>
          </ul>
          <p>${val.reference2}</p>
          <ol>
            <li>${val.list6}</li>
            <li>${val.list7}</li>
            <li>${val.list8}</li>
          </ol>
          <dl>
            <dt>${val.list6}</dt>
            <dd>2006</dd>
            <dt>${val.list7}</dt>
            <dd>2007</dd>
            <dt>${val.list8}</dt>
            <dd>2007/2008</dd>
          </dl>
          <img src="${val.img3}" style ="max-width: 100%;"><br>
          <h2>${val.title3}</h2>
          <p>${val.paragraph3}</p>
          <ul>
            <li>${val.album1}</li>
            <li>${val.album2}</li>
            <li>${val.album3}</li>
            <li>${val.album4}</li>
            <li>${val.album5}</li>
            <li>${val.album6}</li>
          </ul>
          <h2>${val.title4}</h2>
          <p>${val.paragraph4}</p>
          <img src="${val.img4}" style ="max-width: 100%;">
          <h3>${val.title5}</h3>
          <p>${val.paragraph5}</p>
        </article>`
        });
        return layout;
    },
}

self.addEventListener("message",(e)=>{
    postMessage(wsMyArticleOne[`${e.data.module}`](e.data.data));
})