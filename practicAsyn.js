// const findPostByid = async (id) => {
    
//          try {
            
//             const res = await fetch(url + id);
//             const post = await res.json();

//             console.log(post);

//          } catch (error) {
//             console.log(error)
//          }

// }
// findPostByid(40);

//------------------------------------------------------------------------------------//

// fetch ("https://pokeapi.co/api/v2/pokemon/ditto")
//      .then((res) => res.json())
//      .then((data) => console.log(data))
//     //  .catch((e) => console.log(e))
//      .finally(() => console.log("finalizo"));

//------------------------------------------------------------------------------------//

fetch ("https://pokeapi.co/api/v2/pokemon/ditto")
// .then((res) => console.log(res))
.then((res) => res.json())
.then(data => console.log(data.forms[0].name));
