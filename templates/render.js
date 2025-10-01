//Алгоритм для рендеринга json 


function stylesRender(tagElement, objectWithStyles) {
        for ( let styleName in objectWithStyles ) {
            tagElement.style[styleName] = objectWithStyles[styleName]
        }
    }


function tagRender(tagObject) {
    let tagElement = null

    for (let key in tagObject) {
        if ( key == 'tagName' ) {
            tagElement = document.createElement(tagObject[key])
        }
        else if ( key == 'styles') {
            stylesRender(tagElement, tagObject[key])
        }
        else if ( key == 'childrens') {
            const childs = getChildElements(tagObject[key])

            for (let child of childs) {
                tagElement.appendChild(child)
            }
        }
        else if (key !== 'tagName') { // Исключаем tagName из этой обработки
        // Устанавливаем только те свойства, которые можно установить
        if (key in tagElement) {
            tagElement[key] = tagObject[key]
        }
    }
    }
    return tagElement
}


function getChildElements(lstChilds) {
    const childElements = []

    for ( let child in lstChilds) {
        childElements.push(tagRender(lstChilds[child]))
    }
    return childElements
}


// Получает на вход список со всеми объектами (тэгами)
function renderHtmlPage(lst) {        
        let tagElement = null
        
        // Перебор всех объектов (тэгов)
        for (let tagObject of lst) {
            if (Object.prototype.toString.call(tagObject).slice(8, -1) == 'Object') {
                tagElement = tagRender(tagObject) // tagRender создает тэг со всеми его стилями, атрибутами и вложенными тэгами и возвращает его
            }
            document.body.appendChild(tagElement) // добавление полученные тэга в тэг body
        }
        
    }