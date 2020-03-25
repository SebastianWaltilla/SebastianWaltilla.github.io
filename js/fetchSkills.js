function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}
//const url = 'data/data.json';
function getAllElementsFromJson(jsonPath, htmlId){

    var url = jsonPath;
    const fill = document.getElementById(htmlId);

    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {

            let todos = data.products;

            return todos.map(function(todo) {
                let article = createNode('article')
                let a = createNode("a");
                let h2 = createNode("h2");
                let p = createNode("p");

                a.href = todo.hyperLink;

                a.innerHTML = "<img src=" + todo.src + " " + "class=" + "\"" + todo.class +"\">";

                h2.innerHTML = todo.title;
                p.innerHTML = todo.infoText;

                append(article, a);
                append(article, h2);
                append(article, p);
                append(fill, article);
            })
        })
        .catch(function(error) {
            console.log(error);
        });
}