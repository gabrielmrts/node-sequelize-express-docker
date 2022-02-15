**A simple CRUD with node, express, sequelize, docker and applying TDD with jest.**

***In this project, the purpose is make a strong and scalable CRUD application, using 
and implementing third party libs to show my skills***

**Commands**
>Run: docker-compose up -d (to up docker containers)

>Run: docker-compose down (to down containers)

>Run: docker-compose up -d --force-recreate (to recreate the database)

***Dependencies: docker, docker-compose***

**Useful commands**
***Generate migration:***
>Run: npx sequelize-cli db:migrate --url 'postgresql://dev:dev@0.0.0.0:55432/dev'

***Seed tables***
>Run: npx sequelize-cli db:seed:all --url 'postgresql://dev:dev@0.0.0.0:55432/dev'

*TODO:*
- [ ] Add support to JWT
- [ ] Add user roles
- [ ] Add middlewares to create and auth users
