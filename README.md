Сервис с backend driven подходом к построению интерфейсов пользователя

Приложение позволяет динамически менять верстку используя json определенной структуры.

Общая структура JSON:

[
    {
        "tagName": "Название_тега_html",
        "название_атрибута_тега": "значение",
        "styles": {
                      "название_стиля_1": "значение",
                      "название_стиля_2": "значение",
                      ...
                      "название_стиля_n": "значение",
                  },
        "childrens": [
                        {"tagName": "Название_тега_html",
                         "название_атрибута_тега": "значение",
                         "styles": {
                                     "название_стиля_1": "значение",
                                     "название_стиля_2": "значение",
                                      ...
                                     "название_стиля_n": "значение",
                                    },
                         "childrens": ["tagName": "Название_тега_html", ..., "styles": {}, childrens: [...]]
                        },
                        {"tagName": "Название_тега_html",
                         "название_атрибута_тега": "значение",
                         "styles": {
                                     "название_стиля_1": "значение",
                                     "название_стиля_2": "значение",
                                      ...
                                     "название_стиля_n": "значение",
                                    }
                        },
                        ...,
        ]
    }
]

"tagName" - значением служат названия html тегов ("tagName":"div", "tagName": "p", "tagName":"button", и тд)
"styles" - значениями служат стили CSS перечисляемые через запятую в camelcase нотации ("styles": { 
                                                                                                    "backgroundColor": "название_цвета_или_16ричное_представление", 
                                                                                                    "margin": "",
                                                                                                    "padding": "",
                                                                                                    "fontSize": "",
                                                                                                    "fontColor": "".
                                                                                                    .....,
                                                                                                   }
                                                                                        )
"childrens" - список тегов представленные в json


Пример:

[
    {
        "tagName": "div",
        "className": "conteiner",
        "id": "1",
        "styles": { "borderRadius": "1px solid black", "backgroundColor": "gray"},
        "childrens": [ { "tagName": "p", "className": "text-element", "textContent": "Hello World" } ]
        
    }
]


Представление в html

<!DOCTYPE htmml>
<html lang="en">
<head>
    <script type="text/javascript" src="/___vscode_livepreview_injected_script"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script></script> рендерит json 
    <div class="conteiner" id="1" style="background-color: gray;">
        <p class="text-element">Hello World</p>
    </div>
</body>
</html>


Стек технологий:

Frontend:
HTML5
CSS3
JavaScript

Backend:
python 3.12.9
fastapi 0.117.1
motor 3.7.1

База данных:
mongoDB

В mongoDB хранится JSON разметка тестового сайта (главная страница, страница товара, страница объявления), которая отправляется на клиент сервером

Команды для запуска:
1) env\Scripts\activate - для запуска виртуального окружения
2) uvicorn server:app - для запуска веб сервера

fastapi использует swagger ui (автоматически генерирует документацию), поэтому для просмотра документации API нужно:
1) Запустить сервер 
2) В адресной строке ввести /docs

