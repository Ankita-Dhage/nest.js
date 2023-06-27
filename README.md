<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

 ## Migration

```bash
# Create a migration
$ yarn typeorm migration:create src/migrations/customer

# Run migrations and checks for schema changes
$ yarn typeorm -d ./ormconfig.ts migration:run

# Revert migrations
$ yarn typeorm -d ./ormconfig.ts migration:revert
```

 ## Authentication
 ```bash
 # For authentication add passport dependency
 $ yarn add @nestjs/passport
 $ yarn add @types/passport-local

 # After that add jwt dependency
 $ yarn add @nestjs/jwt
 $ yarn add @types/passport-jwt

 # If password module not found than add this dependency
 $ yarn add passport
 $ yarn add passport-jwt
 $ yarn add passport-local

 ```
## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Typeorm-polymorphic
```bash
# change the version of typeorm 
-  "typeorm": "^0.3.10"

# change the version of typeorm-polymorphic
- "typeorm-polymorphic": "^0.0.10"
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

------------------------------------------------------------------------------------------------------------------------------------------------------


How to create a project in nestjs with Mysql_typeorm.

Step 1: Creating a new project with the Nest CLI is recommended for first-time users.
$ yarn add @nestjs/cli

Step 2: By using this command we create new project.
$ nest new project-name
Example:
$ nest new inventory_managemanet_system.

Sep 3:Add this dependancy
$ yarn add @nestjs/typeorm typeorm mysql2

Step 4: Database configration.
App.module in which we can create database confgiration.
Example:
import :[TypeOrmModule.forRoot({
type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    // password:'',
    database:'inventory_management_db',
    entities:[Customer],
    synchronize:true,  })
    ],
        
Step 5:Create database 
Example: 
step 1: mysql -u root
stpe 2: show databases;
step 3: create database inventory_managemant_db;
stpe 4: use inventory_managemant_db;
    
Step 6: After that create new module and in which create customer.entity.
Note: For validations install this dependancy.
$ yarn add class-validator
$ yarn add class-transformer
 
Example:
@Entity({ name: 'customer' })
export class Customer {    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column() 
    name: string;
    
    @Column()
    email: string;
    
    @Column()
    mobile: number;
    
    @Column()
    gender: string; 
 }

Step 7:Run the project by this command
$ nest start

Step 8:Create api in controller(Get,post,delete,update)
Note:Add pagination dependancy.
$ yarn add nestjs-paginate

Step 9:Add logic in service.
Step 9:Write logic in service.

_______________________________________________________________________________________________________________

*************************  Migration  ***************************

Step 1: Add this dependency in your project if not added
$ yarn add @nestjs/typeorm typeorm mysql2
$ yarn add better-sqlite3

Step 2: Add one line into package.json -
$ "typeorm": "ts-node ./node_modules/typeorm/cli.js"

Step 3: create new migration file -
$ yarn typeorm migration:create src/migrations/create-card-issuer-table

Step 4:Add query in up() function -

public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query("CREATE TABLE `card_issuers` (`id` INTEGER NOT NULL AUTO_INCREMENT, `name` VARCHAR(191) NOT NULL, `code` VARCHAR(191) NULL, UNIQUE INDEX               `CardIssuer_code_key`(`code`), PRIMARY KEY(`id`)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
		}
		
step 5:Run migrations by -
$ yarn typeorm -d ./ormconfig.ts migration:run

step 6:Run migrations by -
$ yarn typeorm -d ./ormconfig.ts migration:revert
