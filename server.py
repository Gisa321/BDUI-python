from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from motor.motor_asyncio import AsyncIOMotorClient


app = FastAPI()


app.mount('/ref', StaticFiles(directory='ref'))


client = AsyncIOMotorClient('mongodb://127.0.0.1:27017')
db = client['motorDB']


@app.get('/')
async def home_page_html():
    return FileResponse('./templates/index.html')


@app.get('/cardPage')
async def get_card_page_html():
    return FileResponse('./templates/cardPage.html')


@app.get('/adPage')
async def get_ad_page_html():
    return FileResponse('./templates/adPage.html')


#Данные функции возвращают из бд соответсвующие json разметки
@app.get('/mainPageJSON')
async def get_main_page_json():
    jsonPage = await db.pagesJSON.find_one({"name": "mainPage"})
    
    return jsonPage["page"]


@app.get('/cardPageJSON')
async def get_card_page_json():
    jsonPage = await db.pagesJSON.find_one({"name": "productPage"})
    
    return jsonPage['page']


@app.get('/adPageJSON')
async def get_ad_page_json():
    jsonPage = await db.pagesJSON.find_one({"name": "adPage"})
    return jsonPage['page']



@app.get('/{page_name}/constructor')
async def constructor_for_pages(page_name):
    print(page_name)
    if page_name in ('cardPage', 'mainPage', 'adPage'):
        return FileResponse('./templates/constructor.html')
    return 'Not found'


