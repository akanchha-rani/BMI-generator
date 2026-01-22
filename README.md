# BMI Generator 🧮

The **BMI Generator** is a simple yet effective web application that calculates the **Body Mass Index (BMI)** of a user based on their height and weight. It instantly displays the BMI value along with the corresponding health category.  

This project is ideal for beginners learning **JavaScript DOM manipulation**, **form handling**, and **basic health-based calculations** using web technologies.

## 🔍 Project Overview

Body Mass Index (BMI) is a widely used metric to determine whether a person has a healthy body weight for their height. This web app automates the BMI calculation process and helps users understand their health category within seconds.

The application:
- Takes user input for height and weight
- Performs real-time BMI calculation
- Displays clear, readable results
- Categorizes the BMI into standard health ranges

## 🎯 Objectives

- To understand **JavaScript event handling**
- To practice **DOM manipulation**
- To build a **responsive and interactive UI**
- To apply real-world mathematical formulas in code
- To create a beginner-friendly health utility tool

## ✨ Key Features

- 🧠 Accurate BMI calculation using standard formula
- 📊 Displays BMI value with two decimal precision
- 🏷️ Automatically detects BMI category
- 📱 Responsive design for mobile and desktop
- ⚡ Fast, lightweight, and browser-based (no backend)

## 🧮 BMI Calculation Logic

The BMI is calculated using the formula:

BMI = weight (kg) / (height (m) × height (m))

## 📊 BMI Categories Used

| BMI Range          | Health Category |
|--------------------|-----------------|
| Less than 18.5     | Underweight     |
| 18.5 – 24.9        | Normal weight   |
| 25 – 29.9          | Overweight      |
| 30 and above       | Obese           |

## 🛠️ Tech Stack

| Technology | Purpose |
|----------|---------|
| HTML5 | Structure and input fields |
| CSS3 | Styling and responsiveness |
| JavaScript | Logic, calculation, DOM updates |

BMI-generator/
│
├── index.html # Main HTML file
├── styles.css # Styling and layout
├── script.js # BMI calculation logic
└── README.md # Project documentation

## ⚙️ How the Application Works

1. User enters **height in centimeters**
2. User enters **weight in kilograms**
3. On clicking the **Calculate BMI** button:
   - JavaScript reads input values
   - Converts height from cm to meters
   - Applies BMI formula
   - Displays BMI value
   - Shows health category

## 🚀 Getting Started

### Prerequisites
- Any modern web browser
- Code editor (VS Code recommended)

🧪 Edge Cases Handled

Empty input fields

Zero or negative values

Invalid number inputs

Decimal height and weight support
