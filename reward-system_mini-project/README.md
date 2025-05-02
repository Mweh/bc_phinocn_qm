
---

### 📦 `README.md` — Backend Setup for Reward System (Phindojo Project)

```md
# 🏗️ Phindojo Backend — Reward System Feature

This backend project is part of the HR Management App "Phindojo", built using Node.js, Express, Sequelize, TypeScript, and Dockerized MySQL.

## 📁 Project Structure

```

src/
├── app.ts
├── server.ts
├── features/
│   └── rewardSystem/
│       ├── reward.controller.ts
│       ├── reward.model.ts
│       ├── reward.route.ts
│       ├── reward.service.ts
│       └── reward.types.ts
├── database/
│   ├── config/
│   │   └── config.js
│   ├── models/
│   ├── migrations/
│   └── seeders/
├── middlewares/
├── utils/
.env
Dockerfile
docker-compose.yml
tsconfig.json

````

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <your-project-folder>
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root:

```env
PORT=3000
DB_NAME=pindojo_db
DB_USER=root
DB_PASS=root
DB_HOST=localhost
```

---

### 4. Set Up Docker (MySQL)

Run MySQL using Docker:

```bash
docker-compose up -d
```

> This will spin up MySQL on port `3306` with database `pindojo_db`.

---

### 5. Initialize Sequelize (Optional)

If needed, re-init Sequelize setup:

```bash
npx sequelize-cli init
```

To generate models or migrations:

```bash
npx sequelize-cli model:generate --name Reward --attributes score:integer,type:string
```

To run migrations:

```bash
npx sequelize-cli db:migrate
```

---

### 6. Start the Server

Development mode (auto-restart):

```bash
npx ts-node-dev src/server.ts
```

---

## 🧱 Tech Stack

* Node.js
* Express.js
* TypeScript
* Sequelize ORM
* MySQL (via Docker)
* dotenv
* ts-node-dev

---

## 📌 Notes

* All business logic for the Reward System is inside `src/features/rewardSystem`.
* Sequelize config is located in `src/database/config/config.js`.

---

## 🧑‍💻 Author

* Maintained by Fahmi for PR Phincon (Pindojo HR App)

```

---

```
