# AgriSmart - Comprehensive Mobile Farm Management System

## Overview
AgriSmart is a complete agricultural management mobile application built to digitize and streamline farm operations. From land and soil tracking to inventory, labor, task, and financial management, AgriSmart provides a centralized hub for modern farmers to optimize their agricultural workflows.

## Project Links & Deployment Details
- **GitHub Repository:** [https://github.com/Oshana510/agrismart-mobile-app](https://github.com/Oshana510/agrismart-mobile-app)
- **Backend URL:** [https://agrismart-mobile-app-production.up.railway.app/](https://agrismart-mobile-app-production.up.railway.app/)

## Team Details
1. Farmer & Land Management (Module IT24102466)
2. Inventory Management (Module IT24101668)
3. Machinery & Asset Management (Module IT24101469)
4. Operations & Task Management (Module IT24102901)
5. Financial Management (Module IT24100244)
6. Labor Management (Module IT24100786)

## Technology Stack

### Frontend (Mobile App)
- **Framework:** React Native managed by Expo
- **Navigation:** React Navigation (Stack & Bottom Tabs)
- **Networking:** Axios for asynchronous HTTP requests
- **Maps & Geolocation:** `react-native-maps` and `expo-location` for precise land plot GPS mapping.
- **Media & File System:** `expo-image-picker` for profile photo uploads and `expo-file-system`.
- **Form Handling:** `react-hook-form`

### Backend (RESTful API)
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB configured with Mongoose ODM
- **Security & Authentication:** JSON Web Tokens (JWT) for secure session management, `bcryptjs` for robust password hashing.
- **Middleware:** `cors` for Cross-Origin requests, `dotenv` for environment variable management.

## Core Features & Functionalities

### 1. Farmer & Land Management (Module IT24102466)
- **Profile Image Uploader:** Integrated `expo-image-picker` to capture or select profile images. Images are processed into lightweight base64 strings directly on the client side (with a 1MB constraint) and stored efficiently in the database.
- **Interactive Land Mapping:** Farmers can pinpoint their land boundaries using real-time GPS coordinates via `expo-location` or select locations on an interactive map powered by `react-native-maps`.
- **Soil & Crop Tracking:** Capture specific soil metrics (Nitrogen, Phosphorus, Potassium, pH) and manage the lifecycle status of land plots (active, sold, fallow).

### 2. Inventory Management (Module IT24101668)
- **Stock Tracking:** Complete CRUD capabilities for seeds, fertilizers, pesticides, and other supplies, linked directly to specific land plots.
- **Automated Stock Deduction:** Dynamically deducts inventory stock levels when operational tasks consuming materials are marked as completed.
- **Low Stock Alerts:** Tracks reorder points, batch numbers, and expiry dates to prevent stockouts.

### 3. Machinery & Asset Management (Module IT24101469)
- **Asset Registry:** Maintain a detailed ledger of farm machinery including warranty dates, purchase prices, and serial numbers.
- **Maintenance Logs:** Keep track of machinery health, status (in-use, under-repair), and next scheduled maintenance dates.

### 4. Operations & Task Management (Module IT24102901)
- **Lifecycle Workflows:** Task tracking progressing from pending to completed, including percentage-based completion metrics.
- **Resource Allocation:** Assign laborers and track specific inventory materials used per task.

### 5. Financial Management (Module IT24100244)
- **Transaction Engine:** Log incoming revenue and outgoing expenses tied to standardized categories (e.g., fuel, seeds, harvest sales).
- **Land-Level Economics:** Associate transactions directly with specific land plots for granular profit/loss analysis.

### 6. Labor Management (Module IT24100786)
- **Workforce Registry:** Record laborer details, daily wage rates, and specific roles (e.g., field worker, equipment operator).
- **Attendance & Payroll:** Track daily attendance linked to specific tasks, and maintain historical payment logs to streamline payroll.

## Installation & Setup Guide

### 🚀 Production Deployment Notice
The backend is fully deployed and actively hosted on **Railway**. The frontend application is pre-configured to automatically route traffic to this live production backend.
- **Production API URL:** `https://agrismart-mobile-app-production.up.railway.app/api`
- *Note: You do not need to set up or run the backend locally to test or use the mobile app.*

### Prerequisites
- Node.js (v16+)
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app installed on your physical iOS/Android device (or emulator).

### Frontend Setup (To run the mobile app)
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Expo development server:
   ```bash
   npm start
   ```
4. Scan the generated QR code using the Expo Go application on your mobile device to launch AgriSmart.

### Backend Setup (For Local Database Development Only - Optional)
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables by creating a `.env` file (reference `.env.example`):
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend development server:
   ```bash
   npm run dev
   ```
5. *If testing locally:* Update the `API_URL` constant in `frontend/src/services/api.js` to point to your local machine's network IP (e.g., `http://192.168.1.X:5000/api`) instead of the Railway production URL.

---
*Developed as a comprehensive university project showcasing modern mobile application development and complex relational database management.*