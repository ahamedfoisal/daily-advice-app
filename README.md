

Daily Inspiration & To-Do List App

This project is a web application designed to combine daily motivational quotes with a personal to-do list, addressing the common issue of needing a little inspiration and a tool to manage tasks throughout the day. The app fetches random pieces of advice to motivate users and provides a space for managing tasks they plan to accomplish during their time in the browser. It includes a dark mode feature for improved usability across different lighting conditions.

Problem Statement

Many people struggle with motivation and maintaining productivity throughout the day. This application aims to address that by providing users with inspirational quotes to boost their mood, as well as a simple, efficient to-do list to help them manage their tasks. The focus is on providing a practical tool to organize tasks related to browser activities, combined with motivational content to keep users engaged and uplifted.

Features

	•	Daily Inspiration: Displays a new piece of advice or motivational quote fetched from an external API.
	•	Dynamic Date & Time: Continuously shows the current date and time, keeping users aware of their schedule.
	•	To-Do List: Users can add, complete, and delete tasks, tracking what they need to get done.
	•	Task Statistics: Shows total tasks, completed tasks, and remaining tasks to provide a quick overview of progress.
	•	Dark Mode: Toggle between light and dark mode to accommodate different user preferences.
	•	Responsive Design: Ensures a smooth experience across all device sizes.

Technologies Used

	•	React: JavaScript library for building user interfaces.
	•	CSS: Styling for the application.
	•	JavaScript: Logic for interactivity, fetching data, and task management.
	•	Advice Slip JSON API: External API used to fetch random pieces of advice.
	•	Lorem Picsum: Provides random photos for the visual inspiration section.

AI Assistance

Throughout the development of this project, ChatGPT was used to assist with code generation, particularly for styling adjustments, structuring components, and implementing various UI features like animations. Proper credit has been given in the project for code contributions suggested by AI. Adjustments were made to AI-generated suggestions to fit the project’s requirements and improve functionality.

Getting Started

Follow the steps below to set up and run the project locally.

Prerequisites

	•	Node.js (version 12 or higher) and npm installed. You can download Node.js here.

Installation

	1.	Clone the repository:

git clone https://github.com/ahamedfoisal/daily-advice-app.git


	2.	Navigate to the project directory:

cd daily-advice-app


	3.	Install dependencies:

npm install


	4.	Run the application:

npm start


	5.	View the app in your browser:
Open http://localhost:3000 to see the application running.

Application Usage

	1.	Daily Inspiration
	•	The app shows the current date and time, along with a piece of advice. Click “Get New Advice” to fetch another random piece of advice.
	2.	Dark Mode
	•	Use the toggle switch in the top-right corner to switch between light and dark modes.
	3.	To-Do List
	•	Add tasks by typing in the input field and clicking “Add Task.”
	•	Mark tasks as completed by clicking the checkbox next to each task.
	•	Delete tasks by clicking the “Delete” button.
	•	View task statistics (total, completed, and remaining tasks) at the bottom of the to-do list.
	4.	Random Inspirational Photos
	•	The app displays a random photo below the main content area, adding a visual element to the inspiration.

Project Structure

/daily-advice-app
│   README.md
│   package.json
│   .gitignore
└───public
│   │   index.html
└───src
│   │   App.js          # Main app component
│   │   index.js        # Entry point of the app
│   │   index.css       # Global styles
│   └───components
│       └───ToDoList.js # Component managing the to-do list functionalities
│       └───DarkModeToggle.js # Component managing the dark mode toggle
│   └───assets
│       │   images      # Static images, if any

API Integration

Advice Slip JSON API

	•	Endpoint: https://api.adviceslip.com/advice
	•	Integration: The app uses the fetch method to call this API and retrieve random pieces of advice, which are displayed to users as daily inspiration.

How It’s Integrated

	1.	A function named fetchAdvice is used to make a GET request to the Advice Slip JSON API.
	2.	The response is parsed, and the advice is displayed in the “Daily Inspiration” section of the app.
	3.	Clicking the “Get New Advice” button triggers this function to fetch a new piece of advice.

Error Handling

The app includes error handling to manage API request failures gracefully, displaying an appropriate message to the user if the advice cannot be fetched.

Credits for AI-Generated Code

	•	ChatGPT was extensively used to assist in coding, providing suggestions on how to implement dark mode, structuring the App.js component, CSS styling, animations for buttons, and creating a responsive layout.
	•	Minor adjustments were made to AI-suggested code to ensure smooth integration with the rest of the project.
	•	The idea to add task tally and visual improvements for the to-do list was inspired by recommendations provided through AI assistance.

Future Enhancements

	•	Persistence: Save tasks to local storage or integrate with a database to maintain the to-do list across sessions.
	•	Notifications: Add task reminders or motivational pop-ups to encourage productivity.
	•	User Customization: Allow users to customize the appearance of the app with different themes or colors.

Contributing

Contributions are welcome! If you’d like to suggest a feature, report a bug, or contribute code, feel free to open an issue or create a pull request.

	1.	Fork the repository.
	2.	Create a new branch:

git checkout -b feature-name


	3.	Make your changes and commit them.
	4.	Push to your branch:

git push origin feature-name


	5.	Submit a pull request.

License

This project is open-source and available under the MIT License. Feel free to use, modify, and distribute it.
