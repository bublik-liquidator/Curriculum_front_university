# Приложение для управления жизненным циклом и версиями учебных программ

Для упрощения использования печатных учебных программ было разработано данное
приложение. Более подробное описание представлено ниже.

# Запуск локально

Изменить содержимое файла Curriculum\front*university\src\app\environment.ts
строку serverUrl: 'ВАШ*АДРЕС_СЕРВЕРА/api', например 'http://localhost:3000/api',

Далее установите все npm пакеты, в командной строке: npm i

После установки пакетов, в командной строке: ng serve

Перейти по адресу http://localhost:4200/

# Запуск с использованием Docker

ng build

docker-compose up --build

> **Примечание:** контейнер долго собирался и долго разворачивался на сервере,
> поэтому я изменил Dockerfile. Теперь он проверяет папку dist.

# Сборка приложения для хостинга на GitHub Pages

**Проверьте правильность адреса сервера! См. папку services, файл environment,
поле serverUrl.**

ng build --output-path docs --base-href /Curriculum_front_university/

ng build --output-path docs --base-href /**имя репозитория**/

После сборки перейдите в настройки репозитория -> найдите пункт Pages слева ->
найдите Branch и выберите в выпадающем окне ветку, на которой находится сборка,
затем измените папку (по умолчанию указано /root) на /docs -> нажмите Save и
подождите. Через некоторое время выше появится ссылка на сайт.

# Техническое задание для системы управления учебными программами

## Роли пользователей

### Администраторы

Администраторы отвечают за управление преподавателями и учебными программами, а
также статусами учебных программ. Их обязанности включают:

- Добавление и удаление преподавателей.
- Изменение информации о преподавателях.
- Добавление и удаление учебных программ.
- Назначение учебных программ конкретным преподавателям.
- Изменение существующих статусов учебных программ.
- Добавление и удаление новых статусов.
- Изменение существующих специальностей.
- Добавление и удаление новых специальностей.
- Изменение существующих форм обучения.
- Добавление и удаление новых форм обучения.

### Преподаватели

Преподаватели отвечают за просмотр, изменение, удаление и загрузку доступных им
учебных программ. Они также отвечают за создание новых учебных программ.

## Учебные программы

Учебная программа - это объект, который может быть связан с одним или
несколькими преподавателями. Каждая учебная программа имеет следующие атрибуты:

- Заглавие.
- Год, с которого программа будет использоваться. Она используется в течение 5
  лет, после чего должна быть переделана (но может быть продлена).
- Специальность (учебная программа может быть составлена для нескольких
  специальностей - СПИСОК!) (Например, операционные системы (это заглавие) для
  специальностей (список спец:Web, Pocks, Primat ....))
- Дата истечения срока действия.
- Статус (одно из четырех состояний: "В разработке", "Прошло внутренний
  нормо-контроль", "Прошло внешний контроль в УМО", "Одобрено для печати").
- Дата последнего изменения.
- Форма обучения (Дневная, Заочная).
- Разработчик программы.

## УТОЧНЕНИЕ:

- Статусы - это список, выбирается один статус для одной программы.
- Специальности - это список, выбирается одна или несколько специальностей для
  одной программы.

## Хранение данных

Учебные программы хранятся в виде документов Word, с использованием
BLOB-объектов для хранения файлов. Информация об учебных программах хранится в
базе данных.

## Пользовательский интерфейс

На странице преподавателя отображаются все доступные ему учебные программы, а
также информация о программе (заглавие, год использования, специальность,
статус, возможность скачать файл, последняя модификация, имя ведущего, форма
обучения, дата истечения программы). Когда срок действия учебной программы
приближается к концу, отображается предупреждение.

На странице администратора отображаются все преподаватели, учебные программы,
статусы, специальности, формы обучения.

- Преподаватели представлены следующими данными: ID, имя, контактная информация,
  роль.
