/*Todas las variables de estado. Las elegi global para ser facil de manipular */
const menuMod = document.getElementById("menuFlotante"); //div del contenedor del menu
const closeMenuMod = document.getElementById("closeMenu") //boton para cerrar el menu
const rootDiv = document.getElementById("rootEditor"); //div del contenedor del editor
const menuDiv = document.getElementById("rootMenu"); //div del contenedor del menu
const userNameMod = document.getElementById("userName"); //nombre del usuario
const userDescriptionMod = document.getElementById("userDescription") //descripcion del usuario
const userLocaltionMod = document.getElementById("userLocation") //ubicacion del usuario
const userContactMod = document.getElementById("userContact") //contacto del usuario
const userImageMod = document.getElementById("userImage") //imagen del usuario
const menu = document.getElementById('menuFlotante'); //menu flotante horizontal
const menu2 = document.getElementById('menuFlotanteVertical'); //menu flotante vertical
let userSectionTitleMod; //userStudiesMod;
let userLabelMod; //userStudiesYearMod;
let userContentMod; //userStudiesCourseMod;

/*callMenu llama a los distintos menues respectivos segun se le pasa el id de cada seccion */
function callMenu(id, titleID, labelID, contentID) { //(studieID, periodID, courseID)

    switch (id){
        case "userName":
            menu2.classList.contains('visible') ? menu2.classList.remove('visible') : "";
            menu.classList.add('visible');
            styleMenuModifier(false);
            NameModifierMenu();
            break;
        case "userDescription":
            menu2.classList.contains('visible') ? menu2.classList.remove('visible') : "";
            menu.classList.add('visible');
            styleMenuModifier(false);
            DescriptionModifierMenu();
            break;
        case "userLocation":
            menu2.classList.contains('visible') ? menu2.classList.remove('visible') : "";
            menu.classList.add('visible');
            styleMenuModifier(false);
            LocationModifierMenu();
            break;
        case "userContact":
            menu2.classList.contains('visible') ? menu2.classList.remove('visible') : "";
            menu.classList.add('visible');
            styleMenuModifier(false);
            ContactModifierMenu();
            break;
        case "userImage":
            menu2.classList.contains('visible') ? menu2.classList.remove('visible') : "";
            menu.classList.add('visible');
            styleMenuModifier(false);
            imageModifierMenu();
            break;
        case "title":
            menu2.classList.contains('visible') ? menu2.classList.remove('visible') : "";
            menu.classList.add('visible');
            styleMenuModifier(true);
            titlesModifierMenu(titleID, labelID, contentID);
            break;
        case "closeMenu":
            menu.classList.remove('visible');
            break;
        case "closeMenu2":
            if (menu2.classList.contains('visible')){
                menu2.classList.remove('visible'); 
            } else {
                menu2.classList.add('visible');
            }
            exportMenu()
            break;
        default:
            menu.classList.contains('visible') ? menu.classList.remove('visible') : "";
            menu2.classList.contains('visible') ? menu2.classList.remove('visible') : "";
            break;
    }
}
/*************************************************************************************************************************************************** */

/*permite crear el menu flotante vertical y el horizontal, segun se lo indique el booleano doIt */
function styleMenuModifier(doIt){
    if (doIt == true){
        menuMod.classList.remove("menu-flotante")
        menuMod.classList.add("menu-flotante-vertical")
        menuMod.classList.add("visible")
    } else {
        menuMod.classList.remove("menu-flotante-vertical")
        menuMod.classList.add("menu-flotante")
    }
}



/*Funciones de menu exportacion*/
function exportMenu(){
    let bodyFont = document.getElementById("userMain");
    let newButtonStyle = "p-1 mt-2 w-[100%] bg-gray-500 hover:bg-gray-700 text-white rounded-sm cursor-pointer"

    menu.classList.contains('visible') ? menu.classList.remove('visible') : "";

    if (!document.getElementById("exportButton")){
        let fontButton = document.createElement("button");
        let exportButton = document.createElement("button");
        let importButton = document.createElement("button");
        let printButton = document.createElement("button");

        fontButton.innerText = `Fuente: Sans`
        fontButton.id = "fontButton";
        fontButton.classList = newButtonStyle;
        fontButton.onclick = function(){
            let fontsAvailable = ["Arial", "Helvetica", "Calibri", "Verdana", "Times New Roman", "Georgia"];
            let copy = fontsAvailable.slice(0); // Copia de las fuentes disponibles
        
            return function() {
                // Si ya no quedan más fuentes, reinicia la lista
                if (copy.length < 1) {
                    copy = fontsAvailable.slice(0);
                }
        
                // Elige un índice aleatorio de la lista de fuentes disponibles
                var index = Math.floor(Math.random() * copy.length);
                var item = copy[index]; // Fuente seleccionada
                bodyFont.style.fontFamily = item; // Cambia la fuente en el elemento
        
                // Actualiza el texto del botón
                fontButton.innerText = `Fuente: ${item}`;
        
                // Elimina la fuente seleccionada de la copia para no repetir
                copy.splice(index, 1);
            }
        }();
        
        
        importButton.innerText = "Importar CV";
        importButton.id = "importButton";
        importButton.classList = newButtonStyle;
        importButton.onclick = () => documentOptions("import");
        importButton.disabled = true;
        importButton.style.cursor = "not-allowed"
        importButton.title = "No disponible mientras resolvemos un error"

        exportButton.innerText = "Exportar CV";
        exportButton.id = "exportButton";
        exportButton.classList = newButtonStyle;
        exportButton.onclick = () => documentOptions("export");
        
        printButton.innerText = "Imprimir";
        printButton.id = "printButton";
        printButton.classList = newButtonStyle;
        printButton.onclick = () => window.print();
        
        menuDiv.appendChild(fontButton);
        menuDiv.appendChild(importButton);
        menuDiv.appendChild(exportButton);
        menuDiv.appendChild(printButton);
    }
}

function documentOptions(type){
    let newHtml = document.documentElement.outerHTML;

    if (type == "export"){
        let newFile = new Blob([newHtml], {type: "text/html"});
        let url = window.URL.createObjectURL(newFile);
        let enlaceDescarga = document.createElement('a');
        enlaceDescarga.href = url;
        enlaceDescarga.download = `${document.title}.CVG`;
        enlaceDescarga.click();
        window.URL.revokeObjectURL(url);
    }

    if (type == "import"){
        let inputArchivo = document.createElement('input');
        inputArchivo.type = 'file';
        inputArchivo.accept = '.CVG';
        inputArchivo.onchange = function(evento) {
            let archivo = evento.target.files[0];
            let lector = new FileReader();
            lector.onload = function(e) {
                let userAgreed = confirm("Desea aplicar los cambios?");
                if (userAgreed == true){
                        setTimeout(() => {
                            document.body.innerHTML = e.target.result;
                        }, 2500);
                    };
            };
            lector.readAsText(archivo);
        };
        inputArchivo.click();
    }
    

}

/*Estas funciones son las que generan elementos html, y le pasan el valor ingresado por el usuario a las <variable>Modify() 
Todas las demas siguen la misma logica*/

function NameModifierMenu() {

    rootDiv.innerHTML = "";
    let newTitleStyle = "text-xl text-left"
    let newInputStyle = "text-black md:w-[50vw] h-[40px] px-2 rounded-sm"
    let newButtonStyle = "p-1 mt-2 bg-gray-500 hover:bg-gray-700 text-white rounded-sm cursor-pointer"
    let newDivStyle = "flex flex-col"
    // Verificar si los elementos ya existen
    if (!document.getElementById("inputName")) {
        let newTitle = document.createElement("p");
        let newInput = document.createElement("input");
        let newButton = document.createElement("button");
        let newDiv = document.createElement("div");
        
        newTitle.innerText = "Editar Nombre";
        newTitle.classList = newTitleStyle;

        newInput.type = "text";
        newInput.id = "inputName"; //genero una id especifica para este elemento, luego verifico si ya esta creado o no, para evitar que se sobre escriba
        newInput.value = userNameMod.innerText //permite tener una visualizacion del campo aun cuando ya no se escribe en el, simil placeholder
        newInput.placeholder = "Escribe tu nombre aquí";
        newInput.maxLength = 40;
        newInput.onclick = () => newInput.select() //permite seleccionar todo el texto del area texto
        newInput.classList = newInputStyle

        newButton.innerText = "Aplicar";
        newButton.onclick = () => {
            userNameMod.innerText = document.getElementById("inputName").value;
            document.title = `${document.getElementById("inputName").value} Online CV`;
        };
        newButton.classList = newButtonStyle

        newDiv.classList = newDivStyle

        // Añadir elementos al div solo si no existen
        newDiv.appendChild(newTitle);
        newDiv.appendChild(newInput);
        newDiv.appendChild(newButton);
        rootDiv.appendChild(newDiv);
    }
}

function DescriptionModifierMenu(){
    rootDiv.innerHTML = "";
    let newTitleStyle = "text-xl text-left"
    let newInputStyle = "text-black md:w-[50vw] h-[120px] px-2 resize-none rounded-sm"
    let newButtonStyle = "p-1 mt-2 bg-gray-500 hover:bg-gray-700 text-white rounded-sm cursor-pointer"
    let newDivStyle = "flex flex-col"


    // Verificar si los elementos ya existen
    if (!document.getElementById("inputDescription")) {
        let newTitle = document.createElement("p");
        let newInput = document.createElement("textarea");
        let newButton = document.createElement("button");
        let newDiv = document.createElement("div");
        
        newTitle.innerText = "Editar Descripción";
        newTitle.classList = newTitleStyle

        newInput.id = "inputDescription";
        newInput.value = userDescriptionMod.innerText; //ver en html
        newInput.placeholder = "Escribe aqui";
        newInput.maxLength = 400;
        newInput.onclick = () => newInput.select()
        newInput.classList = newInputStyle

        newButton.innerText = "Aplicar";
        newButton.onclick = () => {
            userDescriptionMod.innerText = document.getElementById("inputDescription").value
        };
        newButton.classList = newButtonStyle
        
        newDiv.classList = newDivStyle
        // Añadir elementos al div solo si no existen
        newDiv.appendChild(newTitle);
        newDiv.appendChild(newInput);
        newDiv.appendChild(newButton);
        rootDiv.appendChild(newDiv);
    }
}

function LocationModifierMenu() {
    
    rootDiv.innerHTML = "";
    let newTitleStyle = "text-xl text-left"
    let newInputStyle = "text-black md:w-[50vw] h-[40px] px-2 rounded-sm"
    let newButtonStyle = "p-1 mt-2 bg-gray-500 hover:bg-gray-700 text-white rounded-sm cursor-pointer"
    let newDivStyle = "flex flex-col"
    // Verificar si los elementos ya existen
    if (!document.getElementById("inputLocation")) {
        let newTitle = document.createElement("p");
        let newInput = document.createElement("input");
        let newButton = document.createElement("button");
        let newDiv = document.createElement("div");
        
        newTitle.innerText = "Editar Ubicación";
        newTitle.classList = newTitleStyle
        newInput.type = "text";
        newInput.id = "inputLocation";
        newInput.value = userLocaltionMod.innerText
        newInput.placeholder = "Escribe tu ubicación aquí";
        newInput.maxLength = 40;
        newInput.onclick = () => newInput.select()
        newInput.classList = newInputStyle

        newButton.innerText = "Aplicar";
        newButton.onclick = () => {
            userLocaltionMod.innerText = document.getElementById("inputLocation").value
        }
        newButton.classList = newButtonStyle
        
        newDiv.classList = newDivStyle
        // Añadir elementos al div solo si no existen
        newDiv.appendChild(newTitle);
        newDiv.appendChild(newInput);
        newDiv.appendChild(newButton);
        rootDiv.appendChild(newDiv);
    }
}

function ContactModifierMenu() {
    rootDiv.innerHTML = "";
    let newTitleStyle = "text-xl text-left"
    let newInputStyle = "text-black md:w-[50vw] h-[40px] px-2 rounded-sm"
    let newButtonStyle = "p-1 mt-2 bg-gray-500 hover:bg-gray-700 text-white rounded-sm cursor-pointer"
    let newDivStyle = "flex flex-col"

    // Verificar si los elementos ya existen
    if (!document.getElementById("inputContact")) {
        let newTitle = document.createElement("h2");
        let newInput = document.createElement("input");
        let newButton = document.createElement("button");
        let newDiv = document.createElement("div");

        newTitle.innerText = "Editar Contacto";
        newTitle.classList = newTitleStyle

        newInput.type = "text";
        newInput.id = "inputContact";
        newInput.value = userContactMod.innerText
        newInput.placeholder = "Escribe como contactarte";
        newInput.maxLength = 80;
        newInput.onclick = () => newInput.select();
        newInput.classList = newInputStyle

        newButton.innerText = "Aplicar";
        newButton.onclick = () => {
            userContactMod.innerText = document.getElementById("inputContact").value
        }
        newButton.classList = newButtonStyle

        newDiv.classList = newDivStyle
        // Añadir elementos al div solo si no existen
        newDiv.appendChild(newTitle);
        newDiv.appendChild(newInput);
        newDiv.appendChild(newButton);
        rootDiv.appendChild(newDiv);
    }
}

/*ChatGPT Spaguetti code... NO TOCAR! permite cambiar la imagen de perfil
Explicación:
inputFile.files[0]: Obtiene el archivo seleccionado por el usuario desde el campo input de tipo file.
FileReader: El FileReader permite leer el contenido del archivo como una URL de datos (Data URL).
reader.onload: Cuando el archivo se ha leído completamente, la función de callback se ejecuta, y el contenido del archivo se asigna al atributo src de la imagen.
*/
function userImageModify(noImageSelected) {
    const userImageMod = document.getElementById("userImage");
    const inputFile = document.getElementById("inputImage").files[0]; // Obtiene el archivo seleccionado
    const noImage = document.getElementById("noImage");
    const userImagePosition = document.getElementById("userTitleHeader");

    if (noImageSelected == false) { //si selecciona una imagen y quiere mostrarla
        const reader = new FileReader();
        reader.onload = function(e) {
            userImageMod.src = e.target.result; // Asigna la imagen seleccionada al src
        };
        reader.readAsDataURL(inputFile); // Lee el archivo seleccionado como una URL de datos
        userImageMod.classList.remove("ocultar-al-imprimir")
        noImage.style.backgroundColor = "red"
        userImageMod.alt = "Imagen de perfil"
        userImageMod.title = "Imagen de perfil"
    }  else if (noImageSelected == true) {
        userImageMod.classList.add("ocultar-al-imprimir")
        userImageMod.src = ""
        noImage.style.backgroundColor = "green"
        userImageMod.alt = "Sin imagen"
        userImageMod.title = "Sin imagen"
        userImagePosition.classList.remove("flex-row-reverse")
        userImagePosition.classList.add("flex-row")
    } 
}

function imageModifierMenu() {
    let imagePosition = document.getElementById("userTitleHeader");

    rootDiv.innerHTML = `
    <div class="flex flex-col w-full md:w-[50vw]">
        <p class="text-xl text-left">Editar imagen de perfil</p>
        <span class="flex flex-col md:flex-row justify-between w-[100%]">
            <input id="inputImage" type="file" accept="image/png, image/jpeg" class="mt-2 md:mt-0 ocultar-al-imprimir ">
            <button id="imagePosition" class="px-1 mt-1 mx-0 md:mx-2 md:mt-0 bg-gray-500 hover:bg-gray-700 text-white rounded-sm cursor-pointer w-[100%] md:w-32" onclick="userImagePositionModify()">Mover</button>
            <button id="noImage" class="px-1 mt-1 md:mt-0 bg-red-700 hover:bg-red-500 text-white rounded-sm cursor-pointer w-[100%] md:w-32" onclick="userImageModify(true)">Sin imagen</button>
        </span>
        <div class="flex flex-col md:flex-row justify-between mt-1 w-[100%]">
            <div class="flex flex-row justify-evenly items-center w-full text-sm md:text-base md:w-[80%]">
                <label class="flex flex-row cursor-pointer justify-around mr-1">
                    <input type="radio" id="squareBorder" name="borderStyle" class="mr-1">
                    <p>Borde cuadrado</p>
                </label>
                <label class="flex md:flex-row cursor-pointer justify-evenl mr-1">
                    <input type="radio" checked id="roundedBorder" name="borderStyle" class="mr-1">
                    <p>Borde redondeado</p>
                </label>
                <label class="flex md:flex-row cursor-pointer justify-evenly mr-1">
                    <input type="radio" id="circularBorder" name="borderStyle" class="mr-1">
                    <p>Borde circular</p>
                </label>
            </div>
            <div class="flex flex-row items-center">
                <input type="range" id="imageSize" name="imageSize" min="75" max="150" value="120" onchange="resizeImage(this.value)">
            </div>
        </div>
        <button class="p-1 mt-2 bg-gray-500 hover:bg-gray-700 text-white rounded-sm cursor-pointer" onclick="userImageModify(false)">Aplicar</button>
    </div>
    `;
    
    let imageSize = document.getElementById("imageSize");

    imageSize.onchange = () => {
        userImageMod.style.width = `${imageSize.value}px`;
        userImageMod.style.height = `${imageSize.value}px`;
    }

    let squareBorder = document.getElementById("squareBorder");
    let roundedBorder = document.getElementById("roundedBorder");
    let circularBorder = document.getElementById("circularBorder");

    squareBorder.onclick = () => {
        userImageMod.style.borderRadius = "0";
    }
    roundedBorder.onclick = () => {
        userImageMod.style.borderRadius = "12px"; //to match the tailwindcss style
    }
    circularBorder.onclick = () => {
        userImageMod.style.borderRadius = "50%";
    }
}

function userImagePositionModify(){
    let imagePosition = document.getElementById("userTitleHeader");
    let imageHasPermitionToBe = document.getElementById("userImage");
    
    if (imagePosition.classList.contains("flex-row") == true && !imageHasPermitionToBe.classList.contains("ocultar-al-imprimir")){
        imagePosition.classList.remove("flex-row")
        imagePosition.classList.add("flex-row-reverse")
    } else {
        imagePosition.classList.remove("flex-row-reverse")
        imagePosition.classList.add("flex-row")
    }
}


/*Funciones de seccion, son mas complejas, trabajar con cuidado, cada una renderiza su propio cuerpo y permite aniadir mismas secciones */

function titlesModifierMenu(titleID, labelID, contentID){
   //modal de modificacion de seccion
   rootDiv.innerHTML = "";  

   userSectionTitleMod = document.getElementById(titleID);
   userLabelMod = document.getElementById(labelID);
   userContentMod = document.getElementById(contentID);
   let newDivStyle1 = document.createElement("div");
   let newDivStyle2 = document.createElement("div");

   //StyleSection var
   let newTitleStyle = "text-xl text-left"
   let newInputStyle = "text-black w-[100%] h-[30px] px-2 rounded-sm"
   let newButtonStyle = "w-[100%] pt-1 mt-2 mb-2 bg-gray-500 hover:bg-gray-700 text-white rounded-sm cursor-pointer text-center"
   newDivStyle1.classList = "w-[90%]"
   newDivStyle2.classList = "w-[90%]"

    if (!document.getElementById("inputStudies")) {
        let titleSection = document.createElement("p");
        let titleInput = document.createElement("input");
        let titleButton = document.createElement("button");
        let divStudies = document.createElement("div");

        titleSection.innerText = "Editar Titulo";
        titleSection.classList = newTitleStyle

        titleInput.type = "text";
        titleInput.id = titleID;
        titleInput.placeholder = "Nombre del titulo";
        titleInput.maxLength = 80;
        titleInput.onclick = () => titleInput.select()
        titleInput.value = userSectionTitleMod.innerText;
        titleInput.classList = newInputStyle     
        titleButton.innerText = "Aplicar";
        titleButton.onclick = () => {
            userSectionTitleMod.innerText = titleInput.value;
        }
        titleButton.classList = newButtonStyle

        // Añadir elementos al div solo si no existen
        divStudies.appendChild(titleSection);
        divStudies.appendChild(titleInput);
        divStudies.appendChild(titleButton);
        newDivStyle1.appendChild(divStudies);
        rootDiv.appendChild(newDivStyle1);
    }
    if (!document.getElementById("inputPeriod")) {
        let titlePeriod = document.createElement("h3");
        let titlePeriodInput = document.createElement("input");
        let titlePeriodButton = document.createElement("button");
        let divPeriod = document.createElement("div");

        titlePeriod.innerText = "Editar Etiqueta";
        titlePeriod.classList = newTitleStyle
        
        titlePeriodInput.type = "text";
        titlePeriodInput.id = labelID;
        titlePeriodInput.value = userLabelMod.innerText
        titlePeriodInput.placeholder = "Escribe el nombre de etiqueta";
        titlePeriodInput.maxLength = 80;
        titlePeriodInput.onclick = () => titlePeriodInput.select()
        titlePeriodInput.classList = newInputStyle

        titlePeriodButton.innerText = "Aplicar";
        titlePeriodButton.onclick = () => {
            userLabelMod.innerText = titlePeriodInput.value;
        }
        titlePeriodButton.classList = newButtonStyle

        // Añadir elementos al div solo si no existen
        divPeriod.appendChild(titlePeriod);
        divPeriod.appendChild(titlePeriodInput);
        divPeriod.appendChild(titlePeriodButton);
        newDivStyle1.appendChild(divPeriod);
        rootDiv.appendChild(newDivStyle1);
    }
    if (!document.getElementById("inputCourse")) {
        let titleCourse = document.createElement("p");
        let titleCourseInput = document.createElement("textarea");
        let titleCourseButton = document.createElement("button");
        let divCourse = document.createElement("div");

        titleCourse.innerText = "Editar Contenido";
        titleCourse.classList = newTitleStyle

        //titleCourseInput.type = "text";
        titleCourseInput.id = contentID;
        titleCourseInput.value = userContentMod.innerText
        titleCourseInput.placeholder = "Describe el contenido";
        titleCourseInput.maxLength = 400;
        titleCourseInput.style = "resize: none; height: 200px;"
        titleCourseInput.onclick = () => titleCourseInput.select()
        titleCourseInput.classList = newInputStyle

        titleCourseButton.innerText = "Aplicar";
        titleCourseButton.onclick = () => {
            userContentMod.innerText = titleCourseInput.value;
        }
        titleCourseButton.classList = newButtonStyle

        // Añadir elementos al div solo si no existen
        divCourse.appendChild(titleCourse);
        divCourse.appendChild(titleCourseInput);

        //incorporar un editor de texto con TinyMCE
        /* tinymce.init({
            selector: `#${contentID}`,
            plugins: '',
            toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | link image'
        }); */

        divCourse.appendChild(titleCourseButton);
        newDivStyle2.appendChild(divCourse);
        rootDiv.appendChild(newDivStyle2);
    }
}

/*Crear una seccion nueva de html, debe crear un nuevo titulo por seccion */
// Contador global
let globalIdentifier = 0;

function createNewSection() {
    let newSection = document.getElementById("userSection");
    let uniqueId = Date.now();
    
    // Identificadores únicos para la sección y sus elementos
    let titleID = uniqueId;
    let labelID = uniqueId + 1;
    let contentID = uniqueId + 2;

    // Incrementar el identificador global y pasarlo a la función newSectionTitle
    globalIdentifier = newSectionTitle(globalIdentifier);
    
    // Crear la estructura HTML
    let sectionContainer = `
        <div class="flex flex-col items-center">
        <div class="w-[80%]" id="${titleID}-S">
        <br>
            <span class="flex flex-col md:flex-row justify-left md:justify-between">
                <p class="text-xl md:text-2xl mb-0 font-bold cursor-pointer hover:bg-slate-200 rounded-md" id="${titleID}" onclick="callMenu('title', ${titleID}, ${labelID}, ${contentID})">Nueva Sección (${globalIdentifier})</p>
                <span class="flex flex-row md:justify-evenly">
                    <p class="p-1 mt-2 hover:text-green-500 text-gray-200 rounded-sm cursor-pointer ocultar-al-imprimir" onclick="addNewPeriod(${titleID})">Añadir Etiqueta</p>
                    <p class="p-1 mt-2 hover:text-red-500 text-gray-200 rounded-sm cursor-pointer ocultar-al-imprimir" onclick="removeSection('${titleID}-S')">Eliminar Sección</p>
                </span>
            </span>
            <hr>
            <div class="flex flex-col" id="userStudiesContainer">
                <p class="text-sm md:text-base font-semibold cursor-pointer hover:bg-slate-200 rounded-md" id="${labelID}" onclick="callMenu('title', ${titleID}, ${labelID}, ${contentID})">Etiqueta (${globalIdentifier})</p>
                <p class="text-sm md:text-base cursor-pointer hover:bg-slate-200 rounded-md" id="${contentID}" onclick="callMenu('title', ${titleID}, ${labelID}, ${contentID})">
                    Detalla claramente el contenido de la sección, incluye información relevante y usa palabras claves para comunicar tu mensaje. "Etiqueta" puede ser un titulo, un periodo, un año, etc.
                </p>                
            </div>
        </div>
    `;

    // Insertar la nueva sección en el DOM
    newSection.insertAdjacentHTML('beforeend', sectionContainer);
    //studiesModifierMenu(titleID, labelID, contentID);
    //styleMenuModifier(true);
    menu2.classList.contains('visible') ? menu2.classList.remove('visible') : "";
}

function newSectionTitle(currentIdentifier){
    // Incrementar el identificador y retornarlo
    currentIdentifier += 1;
    return currentIdentifier;
}

//nueva subSeccion dentro de una Seccion mayor
function addNewPeriod(titleID) {
    // Generar un nuevo ID para el nuevo periodo y curso
    let newLabelID = Date.now();
    let newContentID = newLabelID + 1;

    // Incrementar el identificador global para el nuevo periodo
    globalIdentifier = newSectionTitle(globalIdentifier);
    
    // Crear el nuevo periodo y curso
    let newLabelHTML = `
        <p class="text-sm md:text-base font-semibold cursor-pointer hover:bg-slate-200 rounded-md" id="${newLabelID}" onclick="callMenu('title', ${titleID}, ${newLabelID}, ${newContentID})">Nueva Etiqueta (${globalIdentifier})</p>
        <p class="text-sm md:text-base cursor-pointer hover:bg-slate-200 rounded-md" id="${newContentID}" onclick="callMenu('title', ${titleID}, ${newLabelID}, ${newContentID})">
            Aquí puedes describir la nueva etiqueta en detalle, añadiendo toda la información relevante.
        </p>
    `;
    
    // Insertar el nuevo periodo en el contenedor correspondiente
    document.getElementById(titleID + "-S").querySelector("#userStudiesContainer").insertAdjacentHTML('beforeend', newLabelHTML);
}

function removeSection(sectionCalled){
    let newSection = document.getElementById(sectionCalled);
    let userAgreed = confirm("Seguro que desea eliminar esta sección?\nEsta acción no se puede deshacer");
    if (userAgreed == true){
        newSection.remove();
    }
}