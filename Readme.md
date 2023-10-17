# Event Management Website

The Event Management Website is a platform designed to simplify event registration and management. It provides users with the ability to sign up for events and offers a convenient way for administrators to handle event registration and participation.

## Aim and Usage

The primary aim of this project is to provide a user-friendly web application for event management. It serves two main purposes:

1. **User Registration:** Users can sign up for events by providing their basic information, such as a username, email, and password.

2. **User Authentication:** Registered users can log in to the system, which allows them to access specific events, register for events, and manage their event participation.

## Key Features

- **User Registration:** New users can sign up by providing a username, email, and password.
- **User Authentication:** Registered users can log in to their accounts for event participation.
- **Event Registration:** Users can view available events and register for them.
- **Administrator Panel:** Administrators have access to an admin panel to manage events and users.
- **Database Integration:** The project uses Microsoft SQL Server for storing user and event data.

## How to Run

To run this project on your local machine, follow these steps:

1. Make sure you have Node.js installed on your system.

2. Install the required Node.js modules by running the following commands in your project folder:

[optional]

3. Set up the environment variables:
- Create a `.env` file in your project folder.
- Add your SQL Server connection details, such as DB_USERNAME, DB_PASSWORD, DB_SERVER, and DB_DATABASE, in the .env file.

4. Run the server by executing the following command:


5. Open your web browser and access the following URLs to use the application:
- To register for an event: http://localhost:3000/signup
- To log in and manage your events: http://localhost:3000/login


## Benefits

- Streamlined Event Management: Users can easily register for events and track their participation.
- Centralized Data Storage: Event and user data is securely stored in a SQL Server database.
- Administrator Control: Admins can efficiently manage events and user registrations.
- User Authentication: Enhanced security with user authentication for accessing event information.

This project is aimed at simplifying event management, making it more accessible for users, and streamlining event administration.

We hope you find this application helpful and convenient for your event management needs!

For any questions or assistance, please contact [your contact information].
