# nest.js

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
