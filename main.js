/*Todas las variables de estado. Las elegi global para ser facil de manipular */
const menuMod = document.getElementById("menuFlotante");
const closeMenuMod = document.getElementById("closeMenu")
const rootDiv = document.getElementById("rootEditor");
const userNameMod = document.getElementById("userName");
const userDescriptionMod = document.getElementById("userDescription")
const userLocaltionMod = document.getElementById("userLocation")
const userContactMod = document.getElementById("userContact")
const userImageMod = document.getElementById("userImage")
let userStudiesMod;
let userStudiesYearMod;
let userStudiesCourseMod;
const menu = document.getElementById('menuFlotante');

/*callMenu llama a los distintos menues respectivos segun se le pasa el id de cada seccion */
function callMenu(id, studieID, periodID, courseID) {
    menu.classList.add('visible');

    switch (id){
        case "userName":
            styleMenuModifier(false);
            NameModifierMenu();
            break;
        case "userDescription":
            styleMenuModifier(false);
            DescriptionModifierMenu();
            break;
        case "userLocation":
            styleMenuModifier(false);
            LocationModifierMenu();
            break;
        case "userContact":
            styleMenuModifier(false);
            ContactModifierMenu();
            break;
        case "userImage":
            styleMenuModifier(false);
            imageModifierMenu();
            break;
        case "Studies":
            styleMenuModifier(true);
            studiesModifierMenu(studieID, periodID, courseID);
            break;
        case "closeMenu":
            menu.classList.remove('visible');
            break;

    }
}
/*************************************************************************************************************************************************** */

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

/*Estas funciones son las que generan elementos html, y le pasan el valor ingresado por el usuario a las <variable>Modify() 
Todas las demas siguen la misma logica*/

function NameModifierMenu() {

    rootDiv.innerHTML = "";
    let newTitleStyle = "text-xl text-left"
    let newInputStyle = "text-black md:w-[50vw] h-[40px] px-2"
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
    let newInputStyle = "text-black md:w-[50vw] h-[120px] md:h-[40px] px-2"
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
    let newInputStyle = "text-black md:w-[50vw] h-[40px] px-2"
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
    let newInputStyle = "text-black md:w-[50vw] h-[40px] px-2"
    let newButtonStyle = "p-1 mt-2 bg-gray-500 hover:bg-gray-700 text-white rounded-sm cursor-pointer"
    let newDivStyle = "flex flex-col"

    // Verificar si los elementos ya existen
    if (!document.getElementById("inputContact")) {
        let newTitle = document.createElement("h2");
        let newInput = document.createElement("input");
        let newButton = document.createElement("button");
        let newDiv = document.createElement("div");

        newTitle.innerText = "Editar contacto";
        newTitle.classList = newTitleStyle

        newInput.type = "text";
        newInput.id = "inputContact";
        newInput.value = userContactMod.innerText
        newInput.placeholder = "Escribe como contactarte";
        newInput.maxLength = 80;
        newInput.onclick = () => newInput.select()
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
    const userImageContainer = document.getElementById("userImageContainer");
    const noImage = document.getElementById("noImage");

    if (inputFile && noImageSelected == false) {
        const reader = new FileReader();
        reader.onload = function(e) {
            userImageMod.src = e.target.result; // Asigna la imagen seleccionada al src
        };
        reader.readAsDataURL(inputFile); // Lee el archivo seleccionado como una URL de datos
        userImageMod.classList.remove("ocultar-al-imprimir")
    }  else if (noImageSelected == true) {
        userImageMod.classList.add("ocultar-al-imprimir")
        userImageMod.src = ""
    } 
}
function imageModifierMenu() {

    rootDiv.innerHTML = `
    <div class="flex flex-col md:w-[50vw]">
        <p class="text-xl text-left">Editar imagen de perfil</p>
        <span class="flex flex-col md:flex-row justify-between">
            <input id="inputImage" type="file" accept="image/png, image/jpeg">
            <button id="noImage" class="p-1 mt-2 bg-red-700 hover:bg-red-500 text-white rounded-sm cursor-pointer" onclick="userImageModify(true)">Sin imagen</button>
        </span>
        <button class="p-1 mt-2 bg-gray-500 hover:bg-gray-700 text-white rounded-sm cursor-pointer" onclick="userImageModify(false)">Aplicar</button>
        <div class="flex flex-row justify-evenly mt-1">
            <label class="flex flex-row cursor-pointer">
                <input type="radio" id="squareBorder" name="borderStyle" class="mr-1">
                <p>Borde cuadrado</p>
            </label>
            <label class="flex flex-row cursor-pointer">
                <input type="radio" checked id="roundedBorder" name="borderStyle" class="mr-1">
                <p>Borde redondeado</p>
            </label>
            <label class="flex flex-row cursor-pointer">
                <input type="radio" id="circularBorder" name="borderStyle" class="mr-1">

                <p>Borde circular</p>
            </label>
        </div>
    </div>
    `;
    let squareBorder = document.getElementById("squareBorder");
    let roundedBorder = document.getElementById("roundedBorder");
    let circularBorder = document.getElementById("circularBorder");

    squareBorder.onclick = () => {
        userImageMod.style.borderRadius = "0";
    }
    roundedBorder.onclick = () => {
        userImageMod.style.borderRadius = "12px";
    }
    circularBorder.onclick = () => {
        userImageMod.style.borderRadius = "50%";
    }
}


/*Funciones de seccion, son mas complejas, trabajar con cuidado, cada una renderiza su propio cuerpo y permite aniadir mismas secciones */

function studiesModifierMenu(studieID, periodID, courseID){
   //modal de modificacion de seccion
   rootDiv.innerHTML = "";  

   userStudiesMod = document.getElementById(studieID);
   userStudiesYearMod = document.getElementById(periodID); //revisar no funciona
   userStudiesCourseMod = document.getElementById(courseID);
   let newDivStyle1 = document.createElement("div");
   let newDivStyle2 = document.createElement("div");

   //StyleSection var
   let newTitleStyle = "text-xl text-left"
   let newInputStyle = "text-black w-[100%] h-[30px] px-2"
   let newButtonStyle = "w-[100%] pt-1 mt-2 mb-2 bg-gray-500 hover:bg-gray-700 text-white rounded-sm cursor-pointer text-center"

    if (!document.getElementById("inputStudies")) {
        let titleSection = document.createElement("p");
        let titleInput = document.createElement("input");
        let titleButton = document.createElement("button");
        let divStudies = document.createElement("div");

        titleSection.innerText = `${userStudiesMod.innerText}`;
        titleSection.classList = newTitleStyle

        titleInput.type = "text";
        titleInput.id = studieID;
        titleInput.placeholder = "Nombre del titulo";
        titleInput.maxLength = 80;
        titleInput.onclick = () => titleInput.select()
        titleInput.value = userStudiesMod.innerText;
        titleInput.classList = newInputStyle     
        titleButton.innerText = "Aplicar";
        titleButton.onclick = () => {
            userStudiesMod.innerText = titleInput.value;
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

        titlePeriod.innerText = "Editar Periodo";
        titlePeriod.classList = newTitleStyle
        
        titlePeriodInput.type = "text";
        titlePeriodInput.id = periodID;
        titlePeriodInput.value = userStudiesYearMod.innerText
        titlePeriodInput.placeholder = "Escribe el periodo";
        titlePeriodInput.maxLength = 80;
        titlePeriodInput.onclick = () => titlePeriodInput.select()
        titlePeriodInput.classList = newInputStyle

        titlePeriodButton.innerText = "Aplicar";
        titlePeriodButton.onclick = () => {
            userStudiesYearMod.innerText = titlePeriodInput.value;
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

        titleCourse.innerText = "Editar Curso";
        titleCourse.classList = newTitleStyle

        //titleCourseInput.type = "text";
        titleCourseInput.id = courseID;
        titleCourseInput.value = userStudiesCourseMod.innerText
        titleCourseInput.placeholder = "Describe el contenido";
        titleCourseInput.maxLength = 400;
        titleCourseInput.style = "resize: none; height: 200px;"
        titleCourseInput.onclick = () => titleCourseInput.select()
        titleCourseInput.classList = newInputStyle

        titleCourseButton.innerText = "Aplicar";
        titleCourseButton.onclick = () => {
            userStudiesCourseMod.innerText = titleCourseInput.value;
        }
        titleCourseButton.classList = newButtonStyle

        // Añadir elementos al div solo si no existen
        divCourse.appendChild(titleCourse);
        divCourse.appendChild(titleCourseInput);
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
    let studieID = uniqueId;
    let periodID = uniqueId + 1;
    let courseID = uniqueId + 2;
    let newSectionID = uniqueId + 3;

    // Incrementar el identificador global y pasarlo a la función newSectionTitle
    globalIdentifier = newSectionTitle(globalIdentifier);
    
    // Crear la estructura HTML
    let sectionContainer = `
     <br>
    <div class="flex flex-col items-center">
        <div class="w-[80%]" id="${studieID}-S">
            <span class="flex flex-col md:flex-row justify-left md:justify-between">
                <p class="text-xl md:text-2xl font-bold cursor-pointer hover:bg-slate-200 rounded-md" id="${studieID}" onclick="callMenu('Studies', ${studieID}, ${periodID}, ${courseID})">Nueva Sección (${globalIdentifier})</p>
                <span class="flex flex-row md:justify-evenly">
                    <p class="p-1 mt-2 hover:text-green-500 text-gray-200 rounded-sm cursor-pointer ocultar-al-imprimir" onclick="addNewPeriod(${studieID})">Añadir Período</p>
                    <p class="p-1 mt-2 hover:text-red-500 text-gray-200 rounded-sm cursor-pointer ocultar-al-imprimir" onclick="removeSection('${studieID}-S')">Eliminar Sección</p>
                </span>
            </span>
            <hr>
            <div class="flex flex-col" id="userStudiesContainer">
                <p class="text-sm md:text-base font-semibold cursor-pointer hover:bg-slate-200 rounded-md" id="${periodID}" onclick="callMenu('Studies', ${studieID}, ${periodID}, ${courseID})">Período (${globalIdentifier})</p>
                <p class="text-sm md:text-base cursor-pointer hover:bg-slate-200 rounded-md" id="${courseID}" onclick="callMenu('Studies', ${studieID}, ${periodID}, ${courseID})">
                    Detalla claramente el contenido de la sección, incluye información relevante y usa palabras claves para comunicar tu mensaje.
                </p>
            </div>
        </div>
    `;

    // Insertar la nueva sección en el DOM
    newSection.insertAdjacentHTML('beforeend', sectionContainer);
    studiesModifierMenu(studieID, periodID, courseID);
    styleMenuModifier(true);            
}

function newSectionTitle(currentIdentifier){
    // Incrementar el identificador y retornarlo
    currentIdentifier += 1;
    return currentIdentifier;
}

//nueva subSeccion dentro de una Seccion mayor
function addNewPeriod(studieID, periodID) {
    // Generar un nuevo ID para el nuevo periodo y curso
    let newPeriodID = Date.now();
    let newCourseID = newPeriodID + 1;
    
    // Incrementar el identificador global para el nuevo periodo
    globalIdentifier = newSectionTitle(globalIdentifier);
    
    // Crear el nuevo periodo y curso
    let newPeriodHTML = `
        <p class="text-sm md:text-base font-semibold cursor-pointer hover:bg-slate-200 rounded-md" id="${newPeriodID}" onclick="callMenu('Studies', ${studieID}, ${newPeriodID}, ${newCourseID})">Nuevo Período (${globalIdentifier})</p>
        <p class="text-sm md:text-base cursor-pointer hover:bg-slate-200 rounded-md" id="${newCourseID}" onclick="callMenu('Studies', ${studieID}, ${newPeriodID}, ${newCourseID})">
            Aquí puedes describir el nuevo período en detalle, añadiendo toda la información relevante.
        </p>
    `;
    
    // Insertar el nuevo periodo en el contenedor correspondiente
    document.getElementById(studieID + "-S").querySelector("#userStudiesContainer").insertAdjacentHTML('beforeend', newPeriodHTML);
}

function removeSection(sectionCalled){
    let newSection = document.getElementById(sectionCalled);
    let userAgreed = confirm("Seguro que desea eliminar esta sección?\nEsta acción no se puede deshacer");
    if (userAgreed == true){
        newSection.remove();
    }
}