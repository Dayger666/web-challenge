# SwissBorg Web Challenge Solution

This repository contains the solution for the SwissBorg recruitment assignment for web developers.

## Overview

The solution provides two main tables:

1. A table that showcases transaction data along with the calculated euro equivalent of each transaction's amount.
2. A summary table that aggregates deposits & withdrawals data grouped by currency.

## Prerequisites

- A running instance of the mock data HTTP server provided in the challenge description.
- node.js
- yarn (or npm)

## How to run

Before running our application, ensure you have the mock data HTTP server up and running.

1. Clone this repository:
   ```bash
   git clone https://github.com/Dayger666/web-challenge.git
   ```

2. Navigate to the project directory:
   ```bash
   cd [project-directory]
   ```

3. Install the dependencies:
   ```bash
   yarn install
   ```

4. Start the application:
   ```bash
   yarn start
   ```

The application should now be running on `http://localhost:3000` or another available port, if specified.

---

## Technology Stack

- **Language**: TypeScript
    - **Justification**: TypeScript offers static typing which ensures better code quality, detectable errors during compile time, and enhances code readability. Additionally, with type inference and interfaces, TypeScript allows for more maintainable and scalable code, which is crucial for larger and growing projects.

- **UI Library**: React, AntD
    - **Justification**:
        - **React**: One of the most widely used libraries for building user interfaces, React provides flexibility, efficiency, and a strong community backing. Its component-based architecture ensures code reusability and easier maintenance.
        - **AntD**: Ant Design (AntD) is a comprehensive UI design system and React component library. By using AntD, we can ensure consistent design and behavior of components, speeding up development without compromising on user experience.

- **State Management**: Redux
    - **Justification**: Redux provides a predictable state container for JavaScript apps. By centralizing application state, it becomes easier to manage and debug. With its strict unidirectional data flow and middleware support, it's easier to implement features like logging, caching, and persisting state. Additionally, when integrated with TypeScript, it becomes even more powerful with type-safe actions and reducers.

- **Styling**: SCSS
    - **Justification**: SCSS (Sassy CSS) is a CSS preprocessor that adds power and elegance to the basic language. It allows for variables, nested rules, and mixins, which improves maintainability, produces cleaner code, and can significantly speed up styling. Moreover, SCSS's compatibility with all versions of CSS ensures that stylesheets will work in any browser environment.
- **Libraries**: Decimal.js
    - **Justification**: When dealing with financial transaction, precision is of utmost importance. JavaScript's native number handling has several quirks due to its IEEE 754 binary floating-point standard, which can lead to precision errors. These errors, although often tiny, can have significant consequences in financial calculations. Leveraging decimal.js ensures we provide the best user experience and maintain the integrity of our operations.
---

## Assumptions

1. If the euro rate is not available for a transaction, the 'eur equiv' column will show 'N/A'.
2. Transactions that are not completed are categorized as pending.
3. The second table computes total balance by subtracting completed withdrawals from completed deposits for each currency.
4. Any external data fetching error or server-related error will be handled gracefully.

## Potential Pitfalls & Improvements

### Security

1. **API Security**: Ensure API endpoints have measures like rate limiting, authentication, and data encryption.
2. **Data Integrity**: Introduce checks to ensure data integrity and prevent tampering.

### Scalability

3. **Performance**: Optimize for large datasets with techniques like database indexing and caching.
4. **Concurrent Transactions**: Handle concurrent transactions in high-frequency trading environments.

### Usability

5. **Real-time Updates**: Implement real-time updates for dynamic data representation (e.g rates). Or button that will update the data when pressed.
6. **Advanced Filtering**: Offer filtering options for users to sift through transactions.

### Reliability

7. **Error Handling**: Implement robust error handling and failover mechanisms.
8. **Data Redundancy**: Ensure continuous operation with backup systems.

### Logging 
9. **Logging**: For error tracking and monitoring in production, connect firebase analytics, sentry or another analogue.

### User Experience

10. **Mobile Responsiveness**: Optimize for mobile device accessibility.

### Testing

11. **Load Testing**: Ensure the system's capability to handle expected user volume.
