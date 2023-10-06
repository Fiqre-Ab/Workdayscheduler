Work Day Scheduler
This is a simple Day Planner that allows users to plan their day by adding and saving tasks for specific hours. It provides a visual representation of the current time and allows users to save their tasks in local storage for later reference.

Features
Display of the current date in the header.
Dynamic coloring of time blocks to indicate past, present, and future hours.
Ability to add tasks for specific hours.
Save tasks in local storage for persistence.
Getting Started
To use this Day Planner app, follow these steps:

Clone the repository to your local machine.

Open the index.html file in your preferred web browser.

You will see a display of time blocks representing different hours of the day. The current date is displayed in the header.

Each time block has a text area where you can enter your tasks for that hour.

The time blocks are color-coded to indicate the past (gray), present (red), and future (green) hours.

To add a task, simply click on the text area for the corresponding hour, enter your task, and click the "Save" button to the right of the text area.

Your task will be saved in local storage, so you can revisit the page later and your tasks will still be there.

Code Overview
The code is structured as follows:

The current date is displayed in the header using the Day.js library to format the date.

The time blocks are dynamically colored based on the current time using the updateBlockClasses function. Past hours are gray, the present hour is red, and future hours are green.

User input for tasks is saved in local storage when the "Save" button is clicked.

When the page is loaded, tasks saved in local storage are retrieved and displayed in the corresponding time blocks.

Contributors
[Your Name]
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Day.js
