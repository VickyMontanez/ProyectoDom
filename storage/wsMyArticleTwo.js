let wsMyArticleTwo = {
    showArticle2(p1){
        let layout = "";
        p1.forEach((val,id)=> {
            layout += `<h2 class="blog-post-title">${val.title}</h2>
            <p class="blog-post-meta">${val.date} by <a href="${val.autor.href}" target="_blank">${val.autor.name}</a></p>
            <p>${val.paragraph}</p>
            <table class="table">
              <thead>
                <tr>
                  <th>${val.local.name}</th>
                  <th>${val.Prec.name}</th>
                  <th>${val.Serv.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${val.local.l1}</td>
                  <td>${val.Prec.p1}</td>
                  <td>${val.Serv.s1}</td>
                </tr>
                <tr>
                    <td>${val.local.l2}</td>
                    <td>${val.Prec.p2}</td>
                    <td>${val.Serv.s2}</td>
                </tr>
                <tr>
                    <td>${val.local.l3}</td>
                    <td>${val.Prec.p3}</td>
                    <td>${val.Serv.s3}</td>
                </tr>
                <tr>
                    <td>${val.local.l4}</td>
                    <td>${val.Prec.p4}</td>
                    <td>${val.Serv.s4}</td>
                </tr>
                <tr>
                    <td>${val.local.l5}</td>
                    <td>${val.Prec.p5}</td>
                    <td>${val.Serv.s5}</td>
                </tr>
                <tr>
                    <td>${val.local.l6}</td>
                    <td>${val.Prec.p6}</td>
                    <td>${val.Serv.s6}</td>
                </tr>
                <tr>
                    <td>${val.local.l7}</td>
                    <td>${val.Prec.p7}</td>
                    <td>${val.Serv.s7}</td>
                </tr>
              </tbody>
              <tfoot>
              </tfoot>
            </table>
            <br>
            <img src="${val.img}" style ="max-width: 100%;"">`
        });
        return layout;
    }
}

self.addEventListener("message",(e)=>{
    postMessage(wsMyArticleTwo[`${e.data.module}`](e.data.data));
})