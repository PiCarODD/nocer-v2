# NOCER - Network Security Header Analyzer

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-brightgreen)](https://www.mongodb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A comprehensive web security scanning tool designed to analyze HTTP headers, identify vulnerabilities, and provide actionable security insights.

![NOCER Interface](.github/screenshot.png) *Add screenshot after implementation*

## Key Features

- **Real-time Security Scanning**  
  Instant URL scanning with header analysis and vulnerability detection
- **Security Header Verification**  
  Checks for 7 essential security headers with implementation suggestions
- **Cross-Scan Comparison**  
  Compare multiple scan results to track security improvements
- **CSV Export**  
  Generate portable reports of scan results
- **Responsive Design**  
  Fully functional on desktop and mobile devices
- **Interactive UI**  
  Material Design components with hover effects and loading indicators
- **Security Checks**  
  - Subdomain enumeration
  - Nuclei vulnerability scanning
  - Header configuration analysis

## Installation

### Prerequisites
- Node.js 18.x+
- MongoDB 6.0+
- npm 9.x+

### Setup
```bash
# Clone repository
git clone https://github.com/PiCarODD/nocer-v2
cd nocer-v2

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run
npm start or node server/server.js
