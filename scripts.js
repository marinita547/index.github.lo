document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;

    if (name === '' || email === '') {
        alert('Por favor, rellena todos los campos.');
    } else {
        alert(`Gracias por preferirnos, ${name}!`);
    }
});
    function buscarTexto() {
        // ¡¡CARRERA DE BUSES!!
        let input = document.getElementById("search-input").value.toLowerCase();
    let contenido = document.getElementById("contenido");
    let paragraphs = contenido.getElementsByTagName("p");

   
    for (let paragraph of paragraphs) {
        paragraph.innerHTML = paragraph.innerHTML.replace(/<span class="highlight">|<\/span>/g, "");
            }

    //coco  drilo :v
    for (let paragraph of paragraphs) {
        let texto = paragraph.innerText.toLowerCase();
    if (texto.includes(input)) {
        let regex = new RegExp(input, "gi");
    paragraph.innerHTML = paragraph.innerHTML.replace(regex, `<span class="highlight">${input}</span>`);
                }
            }
        }
     
