# 🚀 Smart Helmet: Advanced IoT Rider Safety System

![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen)
![Platform](https://img.shields.io/badge/Platform-ESP32%20%7C%20Node.js-blue)
![License](https://img.shields.io/badge/License-MIT-orange)

An intelligent, IoT-integrated safety ecosystem designed to drastically reduce two-wheeler fatalities. This system ensures the rider is wearing a helmet, is sober, and remains alert, while providing instant emergency response in case of accidents.

---

## 📑 Table of Contents
- [System Architecture](#-system-architecture)
- [Key Features](#-key-features)
- [Hardware Components](#-hardware-components)
- [Software Stack](#-software-stack)
- [Installation & Setup](#-installation--setup)
- [Future Enhancements](#-future-enhancements)

---

## 🏗 System Architecture

The project operates on a **Master-Slave Bluetooth configuration** between the Helmet and the Bike, with a **Node.js/MongoDB** cloud backend for real-time monitoring and alerts.

---

## 🌟 Key Features

### 🛡️ Prevention & Safety
* **Helmet Verification:** IR sensors confirm the helmet is strapped on before the bike ignition is enabled.
* **Anti-Drunk Riding:** MQ-3 sensor analyzes breath; if alcohol is detected, the bike is immobilized instantly.
* **Drowsiness Detection:** Monitoring eye-blink frequency; triggers a buzzer if the rider falls asleep.

### 🚨 Emergency Response
* **Fall/Accident Detection:** MPU6050 Gyroscope & Accelerometer detect sudden impacts or tilt angles.
* **Real-time GPS Tracking:** Sends exact coordinates via the NEO-6M module during a crash.
* **Auto-Alert System:** Family members receive an automated email via Nodemailer with a **Google Maps Live Link**.

### 📊 Monitoring & Control
* **Web Dashboard:** A sleek, Bootstrap 5-powered interface to track rider health and manage emergency contacts.
* **Remote Immobilization:** The bike unit can be locked remotely through the dashboard in case of theft.

---

## 🛠️ Hardware Components

| Component | Function |
| :--- | :--- |
| **ESP32 (Helmet)** | Central Controller (Wi-Fi + Bluetooth Master) |
| **ESP32 (Bike)** | Ignition Controller (Bluetooth Slave) |
| **MQ-3 Sensor** | Alcohol Vapor Detection |
| **IR Sensors** | Helmet & Eye-blink Monitoring |
| **MPU6050** | 6-axis Motion Tracking (Fall Detection) |
| **NEO-6M GPS** | Satellite Positioning |
| **Relay Module** | Bike Engine/Motor Cut-off |
| **OLED Display** | (Optional) Real-time stats for the rider |

---

## 📱 Software Stack

* **Frontend:** EJS, Bootstrap 5, JavaScript (Chart.js for analytics)
* **Backend:** Node.js with Express.js
* **Database:** MongoDB Atlas (Cloud)
* **IoT Protocol:** HTTP POST (Telemetry) & ESP-NOW / Bluetooth (Local)
* **Security:** Bcrypt password hashing & Environment Variable protection

---

## 📂 Project Structure

```text
smart-helmet-dashboard/
├── models/               # MongoDB Schemas (User, Logs, Alerts)
├── public/               # CSS, JS, and Images
├── routes/               # Express Routes (Auth, API, Dashboard)
├── views/                # EJS Templates (UI)
├── firmware/             # Arduino/C++ code for ESP32
│   ├── Helmet_Unit.ino   # Sensor Logic & Bluetooth Master
│   └── Bike_Unit.ino     # Relay Logic & Bluetooth Slave
├── server.js             # Entry point
└── .env                  # Secrets (Database URI, API Keys)
```
## 👨‍💻 Developed By
  
   **Narayan Ashok Gawade** 
   *"Safety First — Ride Smart"*

   ⭐ **Star this repo if you like it!** **Feel free to fork and improve!** **Live Demo Coming Soon...**
    ```
