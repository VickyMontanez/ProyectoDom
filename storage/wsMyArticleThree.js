let wsMyArticleThree ={
    showArticle3(p1){
        let layout = "";
        p1.forEach((val,id) => {
            layout += `<h2 class="blog-post-title">${val.title}</h2>
            <p class="blog-post-meta">${val.date} by <a href="#${val.autor.href}">${val.autor.name}</a></p>
            <p>${val.paragraph}</p><br>
            <img src="${val.img}" style ="max-width: 100%;">`
        });
        return layout;
    }
}

self.addEventListener("message",(e)=>{
    postMessage(wsMyArticleThree[`${e.data.module}`](e.data.data))
})