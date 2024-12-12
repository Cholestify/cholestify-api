# Cholestify API

## Introduction
Welcome to the Cholestify API repository! This API is at the heart of Cholestify, a leading digital health platform designed to improve cholesterol management across Indonesia. Our API supports a range of functionalities to empower users with better health tracking and personalized healthcare guidance.

## Features
- **User Profiles**: Manage user registration, login, and profile updates.
- **Health Records**: Users can securely store and access their health data.
- **Appointment Scheduling**: Facilitates booking and managing appointments with healthcare professionals.
- **Personalized Recommendations**: Offers tailored health and dietary advice based on individual health data.

## Installation
Follow these steps to get your development environment running:

1. **Clone the repository:**
git clone https://github.com/Cholestify/cholestify-api.git

2. **Navigate to the project directory:**
cd cholestify-api

3. **Install dependencies:**
npm install


4. **Set up environment variables:**
Copy the `.env.example` file to a new file called `.env` and fill in the necessary details.

5. **Start the development server:**
npm start


## Usage
After starting the server, you can interact with the API via HTTP requests. Below are a few examples:

- **Register a new user:**
curl -X POST http://localhost:3000/users/register -H "Content-Type: application/json" -d '{"username": "newuser", "password": "newpassword"}'

- **Fetch user health records:**
curl http://localhost:3000/health_records/{user_id}


Thank you for exploring the Cholestify API. Together, let's make health management accessible and efficient!
