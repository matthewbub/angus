1. Node app with Rollup
2. PostgreSQL on MacOS for Dummies


```shell
npm i prisma --save-dev
```

```shell
npx prisma init 

✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.
```

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

```shell
npx prisma db pull
```

```shell
npx prisma generate
```

Then in the app:
```js
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
```

