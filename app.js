document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

const cards = document.querySelector("#card-dinamica");
const templateCard = document.querySelector("#template-card").content;

const fetchData = async () => {
    try {
        loadingData(true);

        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();

        pintarDatos(data);
        pintarPaginacion(data);
    } catch (error) {
        console.log(error);
    } finally {
        loadingData(false);
    }
};

const loadingData = (estado) => {
    const loading = document.querySelector("#loading");
    if (estado) {
        loading.classList.remove("d-none");
    } else {
        loading.classList.add("d-none");
    }
};

const pintarDatos = (data) => {
    const fragment = document.createDocumentFragment();

    cards.textContent = "";

    data.results.forEach((item) => {
        const clone = templateCard.cloneNode(true);
        clone.querySelector("h5").textContent = item.name;
        clone.querySelector("p").textContent = item.species;
        clone.querySelector("img").setAttribute("src", item.image);

        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
    
};

const pintarPaginacion = data => {
    // console.log(data);
    const paginacion = document.getElementById("paginacion");
    paginacion.textContent = '';
    const templatePaginacion = document.getElementById("template-paginacion").content
    const clone = templatePaginacion.cloneNode(true);

    paginacion.appendChild(clone);
      if (data.prev){
            clone.querySelector('.btn-outline-secondary').disabled = false;
        }else{
            clone.querySelector('.btn-outline-secondary').disabled = true;
        }
    
        if (data.next){
            clone.querySelector('.btn-outline-primary').disabled = false;
        }else{
            clone.querySelector('.btn-outline-primary').disabled = true;
        }
    
     paginacion.addEventListener('click', e => {
        //  paginacon.textContent = "";
         if (e.target.matches(".btn-outline-primary")) {
             if (data.info.page = 1 && data.info.next){
                const prev = querySelector('.btn-outline-secondary').disabled = false;
                 console.log(data.info.next);
                 console.log(data.results.item);
             
             
                }

                    // data.results.forEach (item => {
                //     data.results = item
                    // fetchData(data.results.next) = item
                    // console.log(data.info.next);
                
            }
                if (e.target.matches(".btn-outline-secondary")) {
                    // console.log(data.info.prev);
                    // if {
                    //     fetchData(data.results.prev)
                    // }
                }
            
            
         })
}
    
    



 