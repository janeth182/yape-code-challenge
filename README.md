# yape-code-challenge
Diagrama 

[![Screenshot-2022-12-29-at-02-19-11.png](https://i.postimg.cc/3Nzk9PRD/Screenshot-2022-12-29-at-02-19-11.png)](https://postimg.cc/4Hb4x2pJ)

Instalar dependencias

- cd api-transaction && npm install
- cd consumer-anti-fraud && npm install
- cd consumer-transaction && npm install

Prisma migrate en api-transaction

- npx prisma migrate dev --name init

Prisma migrate en consumer-transactionn 

- npx prisma migrate dev --name init

Puede iniciar la demostración de la siguiente manera:

- Instalar contenedores: docker-compose up -d
- Iniciar api-transaction: cd api-transaction && npm run start:dev
- Iniciar consumer-anti-fraud: cd api-transaction && npm run start:dev
- Iniciar consumer-transaction: cd api-transaction && npm run start:dev

¡Finalmente solo envíe una solicitud!

- POST http://localhost:3000/send-transaction
- Body : {
              "accountExternalIdDebit": "781002e2-a0ec-40f9-992e-a4a6107fe6cd",
              "accountExternalIdCredit": "781002e2-a0ec-40f9-992e-a4a6107fe6cd",
              "tranferTypeId": 1,
              "value": 850
          }

Debugging

Kafdrop está incluido en el archivo docker-compose, puede acceder a él yendo a: http://localhost:19000


