# dolphin-free https://t.me/bots_forge
Скрипт для бесконечного количества профилей в антидетект браузере Dolphin

## **Установка Windows:**
1. Перед установкой вы должны скачать долфин с официального сайта, установить и залогинится в него оставив хотябы один свободный профиль для создания
2. Скопировать файл app.asar из папки files по одному из следуюущих путей
 - C:\Users\ *your username* \AppData\Local\Programs\Dolphin Anty\resources
 - C:\Program Files\Dolphin Anty\resources
3. Установить python версии 3.9-3.11 (**3.12 работать не будет!!**), убедитесь что при установки поставили галочку "Add Python to PATH"
4. Открыть консоль вписав cmd вместо пути и выполнить команду pip install -r requirements.txt
   ![image](https://github.com/IsNaRm/dolphin-free-botsforge/assets/11133034/15e32e4f-f79a-426d-a7bd-3d0c07ad70a7)

5. Закрыть долфин если он у вас открыт
6. Открыть файл start.bat
7. Запустить Dolphin

## **Установка Linux:**
Перед установкой вы должны скачать долфин с официального сайта, установить и залогинится в него оставив хотябы один свободный профиль для создания
В терминале выполняем команды:
1. sudo chmod 755 'путь к dolphin.appimage'
2. 'путь к dolphin.appimage' --appimage-extract
3. Появляется папка squashfs-root
4. в squashfs-root/Resources заменяем app.asar
5. запускаем python скрипт main.py, затем сам долфин через squashfs-root/AppRun

## **Установка MacOS:**
1. идем в папку программы.

![image](https://github.com/IsNaRm/dolphin-free-botsforge/assets/11133034/5755ee5a-a291-41cf-b45b-369970183888)

2. показать содержимое пакета

![image](https://github.com/IsNaRm/dolphin-free-botsforge/assets/11133034/30ddb698-74bb-47b3-bdc2-e4dbbdef98a5)

3. идем в папку Contents/Resources

![image](https://github.com/IsNaRm/dolphin-free-botsforge/assets/11133034/95ddd6f5-a9f4-44d9-9438-92c7856c60a0)

4. меняем файл app.asar на нужный
5. запускаем python скрипт main.py, затем сам долфин
   
## **Settings:**
В файле **settings.py** вы можете настроить параметр **backup** на **True** или **False**. Если **True** при каждом закрытии браузера будет создаваться бэкап этого профиля в папке browsers_backup

## **Browsers:**
Для доступа к старым профилям вы можете скопировать их в папку **browsers**

## **Donate:**
0x31d0366B884C3eE87b0ce9bF53eC7b63503dfa93

##Основные проблемы:
1. **Серые кнопки старта**
   Нужно переместить папку 168 из папки files по пути

2. **не создается больше 50/100 профилей**
   Нужно перелистнуть страницу
