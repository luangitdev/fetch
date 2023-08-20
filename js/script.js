function loadPosts(){
    document.getElementById("posts").innerHTML = 'Carregando....'

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado){
            return resultado.json();
        })
        .then(function(json){
            montarBlog();
        })
        .catch(function(erro){
            document.getElementById("posts").innerHTML = 'Erro na coleta do JSON'
        });
}

function montarBlog(lista){
    let html = '';

    for(let i in lista){
        html += '<h3>'+lista[i].title+'</h3>'
        html += lista[i].body+'<br/>'
        html += '<hr/>'
    }

    document.getElementById("posts").textContent = html;
}