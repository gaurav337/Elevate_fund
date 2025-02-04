# ElevateFund - Connecting Entrepreneurs with Investors

ElevateFund is a modern web platform that bridges the gap between entrepreneurs seeking funding and investors looking for promising opportunities. Built with React, Node.js, and MongoDB, it provides a seamless experience for both entrepreneurs and investors.

## 🚀 Current Features

### Authentication System
- ✅ User registration with email and password
- ✅ Dual user types (Entrepreneur/Investor)
- ✅ Secure login with JWT tokens
- ✅ Password hashing with bcrypt
- ✅ Protected routes based on authentication

### User Interface
- ✅ Modern, clean design with Tailwind CSS
- ✅ Responsive layout for all devices
- ✅ Dark/Light theme support
- ✅ Smooth animations with Framer Motion
- ✅ Custom reusable components

### Navigation
- ✅ Persistent navbar with user context
- ✅ Dynamic routing with React Router
- ✅ Protected route handling
- ✅ Seamless page transitions

### Core Pages
- ✅ Landing Page
- ✅ Login Page
- ✅ Signup Page
- ✅ Entrepreneur Dashboard (Basic)
- ✅ Investor Hub (Basic)

### Footer
- ✅ Company information
- ✅ Quick links to main sections
- ✅ Contact information
- ✅ Legal links

## 🛠️ Technical Stack

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Context API for state management
- Framer Motion for animations

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- CORS enabled

## 🔧 Setup & Installation

1. **Clone the Repository**
   ```bash
   git clone [repository-url]
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file with:
   ```
   PORT=5001
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

4. **Start the Application**
   ```bash
   # Start backend (from backend directory)
   npm start

   # Start frontend (from frontend directory)
   npm run dev
   ```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/signup`: Register new user
- `POST /api/auth/login`: User login
- `GET /api/auth/me`: Get current user

### Users
- `GET /api/entrepreneurs`: List entrepreneurs
- `GET /api/investors`: List investors

## 🔒 Default Test Account
```
Email: admin@admin.com
Password: 0791Gaurav@
Type: Entrepreneur
```

## 🚧 Upcoming Features

### Phase 1 (In Progress)
- 🔄 Complete Entrepreneur Profile
- 🔄 Complete Investor Profile
- 🔄 Project/Business Listing
- 🔄 Investment Tracking

### Phase 2 (Planned)
- 📊 Dashboard Analytics
- 💬 Messaging System
- 📱 Mobile Responsiveness Enhancements
- 🔍 Advanced Search & Filtering

### Phase 3 (Future)
- 📧 Email Notifications
- 📄 Document Upload System
- 💰 Investment Transaction System
- 📈 Analytics & Reporting

## 👥 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details. 