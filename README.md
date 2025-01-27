# NOCER - Network Security Header Analyzer

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-brightgreen)](https://www.mongodb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A comprehensive web security scanning tool designed to analyze HTTP headers, identify vulnerabilities, and provide actionable security insights.

![NOCER Interface](https://github.com/PiCarODD/nocer-v2/blob/main/public/css/image.png) 

## Key Features

- **Real-time Security Scanning**  
  Instant URL scanning with header analysis and vulnerability detection
- **Security Header Verification**  
  Checks for 7 essential security headers with implementation suggestions
- **Cross-Scan Comparison**  
  Compare multiple scan results to track security improvements
- **CSV Export**  - Future release
  Generate portable reports of scan results
- **Responsive Design**  - Future release
  Fully functional on desktop and mobile devices
- **Interactive UI**  
  Material Design components with hover effects and loading indicators
- **Security Checks**  
  - Subdomain enumeration - Future release
  - Nuclei vulnerability scanning  - Future release
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
```

# Project Documentation

## Configuration

### Environment Variables  
Define the following in the `.env` file:  
- `MONGODB_URI`: MongoDB connection string.  
- `PORT`: Port number for the server.  

### Running the Application  
1. Start the development server: `npm start`.  
2. Open the browser and navigate to [http://localhost:5000](http://localhost:5000).  

## Features

### Create New Chat  
Start a new chat session by clicking "+ New Chat" in the sidebar.  

### Security Scans  
- Enter the target URL.  
- Select scan types (e.g., Subdomain, Nuclei).  
- Click "Start Security Scan" to begin analysis.  

### Results Analysis  
- Review header status (present/missing).  
- Get implementation suggestions for missing headers.  
- Expand for detailed vulnerability insights.  

### Compare Scans  
Select multiple scans to view side-by-side comparisons.  

### Export Results  
Download scan data in CSV format by clicking "Export CSV".  

## API Overview

- **GET /**: Display the main dashboard.  
- **POST /chats**: Create a new chat session.  
- **GET /chats/:id**: Retrieve a specific chat.  
- **PATCH /chats/:id**: Rename an existing chat.  
- **DELETE /chats/:id**: Delete a chat and associated scans.  
- **POST /scan**: Initiate a new security scan.  
- **GET /export/:id**: Export scan results as a CSV file.  

## Technology Stack

- **Backend**: Node.js, Express, Mongoose.  
- **Database**: MongoDB.  
- **Security**: Nuclei integration for vulnerability templates.  
- **Frontend**: Material Design Components, EJS templates.  
- **Utilities**: Axios, json2csv for CSV export.  

## Contribution Guidelines

1. Fork the repository.  
2. Create a feature branch: `git checkout -b feature/new-feature`.  
3. Commit your changes: `git commit -m "Add new feature"`.  
4. Push the branch: `git push origin feature/new-feature`.  
5. Open a pull request for review.  

## License  

This project is licensed under the MIT License. Refer to the `LICENSE` file for details.  

## Acknowledgements  

- **Nuclei Project** for providing vulnerability templates.  
- **Material Design Components** for UI enhancements.  
- **OWASP** for security standards and best practices.  
- **JSON2CSV** for enabling easy data exports.

