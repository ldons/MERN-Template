# MERN Stack Application

A modern full-stack application built with MongoDB, Express.js, React, and Node.js, featuring TypeScript, Vite, Tailwind CSS, and shadcn/ui components.

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

## Installation

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

## Running the Application

1. **Start the Server**
```bash
cd server
npm start
```
The server will start on port 5000 (or the port specified in your .env file)

2. **Start the Client**
```bash
cd client
npm run dev
```
The client will start on port 5173 by default

3. **Access the Application**
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

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

- `GET /api/items` - Retrieve all items
- `POST /api/items` - Create a new item

Example API request using curl:
```bash
# Get all items
curl http://localhost:5000/api/items

# Create a new item
curl -X POST -H "Content-Type: application/json" \
  -d '{"title":"New Item","description":"Item description"}' \
  http://localhost:5000/api/items
```

## Adding shadcn/ui Components

shadcn/ui is a collection of re-usable components built using Radix UI and Tailwind CSS. Visit the official documentation at [https://ui.shadcn.com/](https://ui.shadcn.com/) for detailed information about available components and customization options.

1. Initialize shadcn/ui in your project:
```bash
cd client
npx shadcn-ui@latest init
```

2. Add new components:
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
# Add other components as needed
```

Browse the complete list of available components and their documentation at [https://ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)

## Development

### Client-side Development
- Components are in `client/src/components`
- Pages are in `client/src/pages`
- Add new routes in `App.tsx`

### Server-side Development
- Models are in `server/src/models`
- Routes are in `server/src/routes`
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

## Common Issues & Troubleshooting

1. **MongoDB Connection Issues**
   - Check if MongoDB is running
   - Verify connection string in `.env`
   - Ensure network connectivity
   - Check MongoDB Atlas IP whitelist

2. **Port Already in Use**
   - Change port in `.env`
   - Check for other running services
   - Kill process using the port:
     ```bash
     # On Windows
     netstat -ano | findstr :5000
     taskkill /PID <PID> /F
     
     # On Mac/Linux
     lsof -i :5000
     kill -9 <PID>
     ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository.
