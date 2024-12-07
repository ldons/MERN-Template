# create-mern-app

A powerful CLI tool for rapidly generating full-stack MERN (MongoDB, Express, React, Node.js) projects with modern web development best practices.

## 🚀 Features

- 🔧 Instant MERN stack project scaffolding
- 💻 Full TypeScript support
- ⚡ Vite.js frontend configuration
- 🎨 Tailwind CSS integration
- 🧩 shadcn/ui component system ready
- 📦 Preconfigured project structure
- 🛡️ Environment variable management
- 🗃️ MongoDB connection setup

## 🛠 Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

## 📦 Installation

You can use the CLI tool in two primary ways:

### Option 1: Direct Usage (Recommended)

```bash
npx @ldons/mern-template-app
```

### Option 2: Global Installation

```bash
npm install -g @ldons/mern-template-app
create-mern-app
```

## 🖥️ Usage

Simply run the command and follow the interactive prompts:

```bash
npx @ldons/mern-template-app
```

1. Enter your project name
2. Wait for project generation
3. Follow the post-generation instructions

## 📂 Generated Project Structure

```
your-project-name/
├── client/          # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.tsx
│   ├── vite.config.ts
│   └── package.json
├── server/          # Node.js Backend
│   ├── src/
│   │   ├── routes/
│   │   ├── models/
│   │   └── index.ts
│   └── package.json
└── README.md
```

## 🔧 What's Included

- TypeScript configuration
- React with Vite.js
- Express.js backend
- Tailwind CSS
- shadcn/ui components
- MongoDB connection setup
- Environment variable management

## 🚀 Getting Started After Generation

1. Navigate to your project
```bash
cd your-project-name
```

2. Install client dependencies
```bash
cd client
npm install
```

3. Install server dependencies
```bash
cd ../server
npm install
```

4. Configure environment variables
- Create `.env` in server directory
- Add `MONGODB_URI=your_connection_string`

## 💡 Why Use create-mern-app?

- 🕒 Save hours of initial setup time
- 🧩 Consistent, production-ready structure
- 📈 Best practices built-in
- 🔄 Easy to extend and customize

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 TODO

- [ ] Add more configuration options
- [ ] Support additional frontend frameworks
- [ ] Enhanced database connection strategies

## 📄 License

MIT License

## 🧑‍💻 Author

[@ldons](https://github.com/ldons)

## 🌟 Star the Repo!

If you find this tool helpful, please consider giving it a star on GitHub! ⭐

---

**Happy Coding!** 🚀👨‍💻👩‍💻
