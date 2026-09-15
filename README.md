CampusSwap 🎓

Your Campus. Your Marketplace.

CampusSwap is a college-only student marketplace that enables verified students to buy, sell, and exchange useful items within their campus community.

Instead of using large general-purpose marketplaces, CampusSwap focuses on creating a trusted, local, student-to-student marketplace.

🚀 Problem

College students frequently need items for a short period of time or have items they no longer use, such as:

📚 Books

🧮 Scientific calculators

🧪 Lab equipment

💻 Electronics

🪑 Furniture

🚲 Cycles

🧥 PG/hostel items

🎒 Other student essentials

Traditional marketplaces are broad and may not provide the trust, convenience, or campus-level proximity students need.

💡 Solution

CampusSwap connects students within their college community.

A student can list an item, while another student can discover it, send a purchase or exchange request, complete the transaction at a convenient pickup point, and rate the other user.

Example

Engineering Drawing Kit

Price: ₹350

Condition: Good

Location: NIET Main Gate

Distance: 1.2 km

Seller: Verified Student

Rating: ⭐ 4.7

✨ Features

👨‍🎓 Student Features

College-based registration

Student verification

Secure login

Buy items

Sell items

Exchange items

Create and manage listings

Search marketplace

Category filtering

Price filtering

Condition filtering

Listing availability

Purchase requests

Exchange requests

Transaction tracking

User ratings and reviews

Report suspicious listings

Student profile

Personal dashboard

🛡️ Admin Features

Admin dashboard

Student verification

User management

Listing management

Report management

Remove inappropriate listings

Resolve reports

Marketplace statistics

🏗️ Technology Stack

Frontend

React

Vite

JavaScript

React Router

Axios

Lucide React

React Hot Toast

CSS

Backend

Node.js

Express.js

Mongoose

JWT

bcryptjs

Helmet

CORS

Express Rate Limit

dotenv

Database

MongoDB Community Server

Local MongoDB database

🏛️ Architecture

User
  │
  ▼
React Frontend
  │
  │ HTTP / REST API
  ▼
Node.js + Express Backend
  │
  ▼
MongoDB

The application is designed to run locally, making it suitable for environments where internet access is unavailable.

📂 Project Structure

CampusSwap/
│
├── client/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── context/
│       ├── hooks/
│       ├── layouts/
│       ├── pages/
│       ├── services/
│       ├── utils/
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── seed/
│   ├── .env.example
│   └── server.js
│
├── docs/
├── screenshots/
├── backups/
├── .gitignore
└── README.md

🗄️ Main Database Models

CampusSwap uses the following core models:

User — student/admin accounts and verification

Listing — products available for sale or exchange

Request — buy/exchange requests

Transaction — completed marketplace transactions

Rating — user ratings and reviews

Report — reported listings and moderation

🔐 Trust & Security

CampusSwap is designed around a trusted student community.

Security features include:

Password hashing

JWT-based authentication

Protected routes

Admin authorization

Input validation

CORS protection

Helmet security headers

Basic rate limiting

College verification workflow

📴 Offline-Ready

CampusSwap is designed for hackathon environments where internet access may not be available.

The application can run locally using:

Frontend: http://localhost:5173
Backend:  http://localhost:5000
MongoDB:  mongodb://127.0.0.1:27017/campusswap

The basic application does not depend on:

Firebase

Supabase

MongoDB Atlas

Google Maps

Cloudinary

Online payment gateways

External image APIs

External fonts

CDN resources

After the required software and npm packages are installed, the project can be demonstrated without an internet connection.

⚙️ Local Setup

Prerequisites

Install:

Node.js

npm

MongoDB Community Server

Git

VS Code

Install Dependencies

Open the project in VS Code and install dependencies in both the frontend and backend directories.

cd client
npm install

Then:

cd ../server
npm install

Start MongoDB

Make sure the local MongoDB service is running.

Start Backend

cd server
npm run dev

Backend:

http://localhost:5000

Start Frontend

Open another terminal:

cd client
npm run dev

Frontend:

http://localhost:5173

🧪 Demo Data

The project can include local demo data for hackathon testing.

Example listings:

Item

Price

Category

Condition

Engineering Drawing Kit

₹350

Lab Equipment

Good

Scientific Calculator

₹700

Calculators

Excellent

C Programming Book

₹250

Books

Good

Used Cycle

₹3,500

Cycles

Good

Study Table

₹1,200

Furniture

Good

Lab Coat

₹300

Lab Equipment

Like New

Arduino Kit

₹900

Electronics

Good

🎬 Hackathon Demo Flow

A simple demonstration can follow this flow:

Login as a student

Open the marketplace

Search for Engineering Drawing Kit

Open the listing

Send a purchase request

Switch to the seller account

Open received requests

Accept the request

Open transactions

Complete the transaction

Submit a rating

Open the admin dashboard

Demonstrate student verification

Demonstrate listing/report management

🌱 Future Scope

Possible future improvements include:

Real-time student chat

Better campus-based location discovery

QR-based student verification

In-app notifications

Advanced recommendation system

Campus-specific communities

Digital payment integration

Mobile application

AI-powered listing recommendations

Multi-college marketplace support

🎯 Why CampusSwap?

CampusSwap focuses on a simple idea:

Useful things should stay useful within the student community.

By making the marketplace campus-focused, students can find affordable items nearby while giving unused items a second life.

👥 Team

Project: CampusSwap

Team: Conquer

Team Leader: Nikhil Sharma

Team Member: Asshish

Built as a hackathon project.

📄 License

This project is created for educational and hackathon purposes.
