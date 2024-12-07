# MERN Stack Application

A modern full-stack application built with MongoDB, Express.js, React, and Node.js, featuring TypeScript, Vite, Tailwind CSS, and shadcn/ui components.

## Quick Start

You can create a new MERN stack application using our CLI tool:

```bash
# Using npm
npm create @ldons/mern-app@latest my-app

# Using yarn
yarn create @ldons/mern-app my-app

# Using pnpm
pnpm create @ldons/mern-app my-app
```

Once the installation is complete, follow these steps:

1. Navigate to the project directory:
```bash
cd my-app
```

2. Configure your environment variables:
```bash
# In the server directory, create .env file
cd server
cp .env.example .env
```

3. Start the development servers:
```bash
# Start the backend server
cd server
npm run dev

# In a new terminal, start the frontend
cd client
npm run dev
```

## Tech Stack

### Frontend
- React.js with TypeScript
- Vite.js for build tooling
- Tailwind CSS for styling
- shadcn/ui for UI components
- React Router for navigation

### Backend
- Express.js with TypeScript
- MongoDB for database
- Mongoose ODM
- CORS for cross-origin requests
- dotenv for environment variables

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm (comes with Node.js)
- MongoDB (local installation or MongoDB Atlas account)

## MongoDB Setup

1. **Option 1: MongoDB Atlas (Cloud Database)**
   - Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a free account
   - Create a new cluster
   - Click "Connect" and choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password

2. **Option 2: Local MongoDB**
   - [Download MongoDB Community Server](https://www.mongodb.com/try/download/community)
   - Install MongoDB on your system
   - Start MongoDB service
   - Use connection string: `mongodb://localhost:27017/mern-app`

## Manual Installation

If you prefer to clone the repository directly:

1. **Clone the repository**
```bash
git clone https://github.com/ldons/MERN-Template.git
cd mern-app
```

2. **Install Server Dependencies**
```bash
cd server
npm install
```

3. **Configure Server Environment**
Create a `.env` file in the server directory:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

4. **Install Client Dependencies**
```bash
cd ../client
npm install
```

## Project Structure

```
mern-app/
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── types/
│   │   ├── utils/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── tailwind.config.js
└── server/
    ├── src/
    │   ├── config/
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   ├── types/
    │   └── index.ts
    ├── package.json
    └── tsconfig.json
```

## API Endpoints

The server provides the following API endpoints:

### Items API
- `GET /api/items` - Retrieve all items
- `GET /api/items/:id` - Retrieve a specific item
- `POST /api/items` - Create a new item
- `PUT /api/items/:id` - Update an item
- `DELETE /api/items/:id` - Delete an item

Example API requests using curl:
```bash
# Get all items
curl http://localhost:5000/api/items

# Create a new item
curl -X POST -H "Content-Type: application/json" \
  -d '{"title":"New Item","description":"Item description"}' \
  http://localhost:5000/api/items

# Update an item
curl -X PUT -H "Content-Type: application/json" \
  -d '{"title":"Updated Item"}' \
  http://localhost:5000/api/items/item_id

# Delete an item
curl -X DELETE http://localhost:5000/api/items/item_id
```

## Adding shadcn/ui Components

The project comes with shadcn/ui pre-configured. To add new components:

```bash
cd client
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
# Add other components as needed
```

Browse the complete list of available components at [https://ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)

## Development

### Client-side Development
- Components are in `client/src/components`
- Pages are in `client/src/pages`
- Add new routes in `App.tsx`
- Styles can be added using Tailwind classes

### Server-side Development
- Models are in `server/src/models`
- Routes are in `server/src/routes`
- Controllers are in `server/src/controllers`
- Add new endpoints in respective route files

## Building for Production

1. **Build the Client**
```bash
cd client
npm run build
```

2. **Build the Server**
```bash
cd server
npm run build
```

The built client files will be in `client/dist` and server files in `server/dist`.

## Common Issues & Troubleshooting

1. **Package Installation Issues**
   ```bash
   # Clear npm cache
   npm cache clean --force
   
   # Remove node_modules and reinstall
   rm -rf node_modules
   npm install
   ```

2. **MongoDB Connection Issues**
   - Check if MongoDB is running
   - Verify connection string in `.env`
   - Ensure network connectivity
   - Check MongoDB Atlas IP whitelist

3. **Port Already in Use**
   ```bash
   # On Windows
   netstat -ano | findstr :5000
   taskkill /PID <PID> /F
   
   # On Mac/Linux
   lsof -i :5000
   kill -9 <PID>
   ```

4. **TypeScript Errors**
   - Ensure all dependencies are installed
   - Check `tsconfig.json` configuration
   - Run `npm run type-check` to verify types

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your PR follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support:
- Open an issue in the GitHub repository
- Check existing issues for solutions
- Read the [documentation](https://github.com/ldons/MERN-Template/wiki)

## Acknowledgments

- [React Documentation](https://react.dev)
- [Express.js Documentation](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)