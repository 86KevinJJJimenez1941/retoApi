const apiUrl = "https://rps101.pythonanywhere.com/api/v1/objects/all";
const apiCompare = "https://rps101.pythonanywhere.com/api/v1/match?";

const selectElement = document.getElementById("optionUno");
let optionElement = selectElement.value;
const selectElementD = document.getElementById("optionDos");
let valorSeleccionadoUno = "";
let valorSeleccionadoDos = ""

export async function llamadoD() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        data.forEach(option => {
            const optionElement = document.createElement("option");
            optionElement.innerHTML = option;
            optionElement.value = option;
            selectElement.appendChild(optionElement);

            const optionElementD = document.createElement("option");
            optionElementD.innerHTML = option;
            optionElementD.value = option;
            selectElementD.appendChild(optionElementD);
        });
    } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
        throw error;
    }
}
selectElement,selectElementD.addEventListener('change', () => {
    let valorSeleccionadoUno = selectElement.value;
    let valorSeleccionadoDos = selectElementD.value;
    console.log("1", valorSeleccionadoUno, "2", valorSeleccionadoDos)
    return valorSeleccionadoUno;
});
console.log("1", valorSeleccionadoUno, "2", valorSeleccionadoDos)

selectElementD.addEventListener('click', () => {
    return valorSeleccionadoDos;
});











