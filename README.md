🚀 Smart Helmet - Advanced Rider Safety System
A complete IoT-based Smart Helmet project designed to enhance rider safety through real-time monitoring, accident detection, and emergency alerts.
This project combines ESP32 microcontroller, multiple sensors, Node.js backend, MongoDB database, and a modern web dashboard to create a life-saving smart helmet system for two-wheeler riders.

🌟 Key Features

Helmet Detection 👷‍♂️
Ensures rider wears helmet before starting the bike (IR sensor).
Alcohol Detection 🍷
MQ-3 sensor detects alcohol — prevents drunk riding.
Drowsiness Detection 😴
Eye blink IR sensor monitors rider alertness — alerts if eyes closed too long.
Fall / Accident Detection 🛟
MPU6050 accelerometer detects sudden falls or crashes.
GPS Location Tracking 🗺️
NEO-6M GPS module sends exact location during emergencies.
Emergency Alerts 📧
Sends email with Google Maps link to family members on accident or alcohol detection.
Web Dashboard 💻
Real-time monitoring, user login, manage family contacts, view sensor status.
Bike Immobilization 🔒
Bike motor stops if any unsafe condition detected (via Bluetooth relay control).


🛠️ Hardware Components
Component,Purpose
ESP32 (Helmet Unit),Main controller + Wi-Fi + Bluetooth
ESP32 (Bike Unit),Relay control for motor
MQ-3 Alcohol Sensor,Detects alcohol level
IR Sensor (x2),Helmet & eye blink detection
MPU6050,Fall/accident detection
NEO-6M GPS Module,Live location tracking
Buzzer,Audio alerts
Relay Module,Motor on/off control

📱 Software Stack

Frontend: HTML, EJS, Bootstrap 5, JavaScript
Backend: Node.js + Express
Database: MongoDB (Atlas)
Authentication: Email + Password (bcrypt hashed)
Email Service: Nodemailer (Gmail)
Communication: HTTP POST (ESP32 → Server), Bluetooth (Helmet → Bike)


📂 Project Structure
smart-helmet-dashboard/
├── server.js                 # Main server file
├── .env                      # Environment variables (MongoDB URI, Gmail creds)
├── package.json
├── models/
│   └── User.js               # User schema (email, family, alerts)
├── routes/
│   ├── auth.js               # Login, signup, dashboard, family routes
│   └── alert.js              # Fall & diagnostics routes
├── views/
│   ├── login.ejs
│   ├── signup.ejs
│   ├── dashboard.ejs         # Main dashboard with status cards
│   └── family.ejs            # Add/remove family emails
├── node_modules/
└── README.md                 # This file

ESP32 Code (ARduino)
Helmet ESP32: All sensors + GPS + Wi-Fi + Bluetooth master
Bike ESP32: Bluetooth slave + relay control


🎯 How It Works

Rider puts on helmet → IR sensor detects → beeps → bike starts.
Alcohol detected → buzzer + email alert + bike stops.
Eyes closed >5 sec → continuous buzzer + bike stops.
Fall detected → loud beep + email with live GPS location to family.
Web dashboard shows real-time status and allows managing emergency contacts.


🚀 Future Enhancements

Mobile app (React Native)
SOS button on helmet
Voice alerts
Cloud hosting (Render/Vercel)
Real-time location on dashboard map
Call emergency services via Twilio


👨‍💻 Developed By
 Narayan Ashok Gawade.
"Safety First — Ride Smart"

⭐ Star this repo if you like it!
Feel free to fork and improve!
Live Demo Coming Soon...
