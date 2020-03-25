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

                let a = createNode("a");
                a.href = todo.hyperLink;
                a.innerHTML = "<img src=" + todo.src + " " + "class=" + "\"" + todo.class +"\">";

                append(fill, a);
            })
        })
        .catch(function(error) {
            console.log(error);
        });
}