
// FORMA DE FAZER SEM ASYNC/AWAIT
// function loadPosts(){
//     document.getElementById("posts").innerHTML = 'Carregando....'

//     
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(function(resultado){
//             return resultado.json();
//         })
//         .then(function(json){
//             montarBlog(json);
//         })
//         .catch(function(erro){
//             document.getElementById("posts").innerHTML = 'Erro na coleta do JSON'
//         });

    
// }

// FORMA DE FAZER COM O ASYNC/AWAIT
async function loadPosts(){
    document.getElementById("posts").innerHTML = 'Carregando....'

    // FORMA DE FAZER COM ASYNC/AWAIT
    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json();
    try {
        montarBlog(json);
    } catch (error) {
        document.getElementById("posts").innerHTML = 'Ocorreu um erro na requisição do JSON'
    }
}

function montarBlog(lista){
    let html = '';

    for(let i in lista){
        html += '<h3>'+lista[i].title+'</h3>';
        html += lista[i].body+'<br/>';
        html += '<hr/>';
    }

    document.getElementById("posts").innerHTML = html;
}