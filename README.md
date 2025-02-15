### Обзор приложения
<video width="320" height="240" controls>
  <source src="./Review.mp4" type="video/mp4">
  Видео в файле Review.mp4
</video>


### Документация по запуску Vue.js приложения

#### Локальный запуск

1. **Убедитесь, что Node.js и npm установлены**

   Скачайте и установите их с [официального сайта Node.js](https://nodejs.org/).

2. **Клонируйте репозиторий проекта**

   Откройте терминал и выполните команды:

   ```bash
   git clone https://github.com/vovisim/rick_and_morti_wiki/
   cd <название папки проекта>
   ```

3. **Установите зависимости**

   В корневой папке проекта выполните:

   ```bash
   npm install
   ```

4. **Запустите приложение**

   Выполните команду:

   ```bash
   npm run serve
   ```

   Приложение будет доступно по адресу [http://localhost:8080](http://localhost:8080).

#### Запуск приложения в Docker

1. **Убедитесь, что Docker установлен**

   Скачайте и установите Docker с [официального сайта Docker](https://www.docker.com/).

2. **Запустите Docker контейнер**

   Предполагается, что контейнерное изображение вашего приложения уже создано и доступно локально или в Docker Hub. Используйте следующую команду для запуска контейнера:

   ```bash
   docker run -d -p 8080:80 my-app
   ```

   Здесь `-d` означает запуск контейнера в фоновом режиме (detached mode), `-p 8080:80` связывает порт 8080 на хосте с портом 80 в контейнере, а `my-app` это имя или идентификатор вашего контейнера.

3. **Проверьте, что приложение работает**

   Откройте браузер и перейдите по адресу [http://localhost:8080](http://localhost:8080), чтобы убедиться, что приложение запущено и работает.

4. **Остановите контейнер (при необходимости)**

   Если вам нужно остановить контейнер, выполните следующую команду, заменив `<container_id>` на идентификатор вашего контейнера:

   ```bash
   docker stop <container_id>
   ```

  <video width="320" height="240" controls>
    <source src="./Review.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>


