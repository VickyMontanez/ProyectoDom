let wsMyCards = {
    showCard(p1){
        let layout = "";
        p1.forEach((val, id) => {
            layout += `<div class="col-md-6">
            <div id="chover" class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${val.article}</strong>
                <h3 class="mb-0">${val.title}</h3>
                <div class="mb-1 text-muted">${val.year}</div>
                <p class="card-text mb-auto">${val.paragraph}</p>
                <a href="${val.btn.href}" target="_blank" class="stretched-link">${val.btn.name}</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img src="${val.Image}" class="responsiveImg">
              </div>
            </div>
          </div>`
        });
        return layout;
    },
}

self.addEventListener("message",(e)=>{
    postMessage(wsMyCards[`${e.data.module}`](e.data.data));
})