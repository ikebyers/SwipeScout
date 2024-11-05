# SwipeScout
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Table of Contents
- [Description](#description)
- [Installation](#installation-instructions)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Deployed 

## Description
SwipeScout is a web application that allows users to search for potential candidates, view detailed information about them, and save or reject candidates based on their profile information. This application integrates with the GitHub API to retrieve user profiles and provides an interface for viewing and managing selected candidates.

Users can:
- Search for GitHub users randomly.
- View detailed information about each candidate, including their name, location, company, bio, and avatar.
- Save or reject candidates based on their profile.
- Access a list of saved candidates for future reference.

## Installation Instructions
1. Clone the repository:
```bash
git clone https://github.com/yourusername/swipescount.git
```
2. Navigate to the project directory

3. Install dependencies:
```bash
npm install
```

4. Set up your API token:
	•	Create a .env file in the root directory.
	•	Add your GitHub token in the .env file:
```bash
VITE_GITHUB_TOKEN=your_github_token_here
```

5. Start the development server:
```bash
npm run dev
```

## Usage
	1.	Open the application in your browser at http://localhost:3000.
	2.	Use the navigation bar to switch between viewing potential candidates and your list of saved candidates.
	3.	On the Home page, view candidate profiles pulled from GitHub. Use the green button to save a candidate or the red button to reject them.
	4.	Visit the Potential Candidates page to see a list of saved candidates.
	5.	Click the “Reject” button on the saved candidates page to remove a candidate from your saved list.

## License 
This project is licensed under the MIT License.

## Credits
Ike Byers

## Tests
N/A

## Questions
If you have any questions, please contact me at:
- GitHub: [ikebyers](https://github.com/ikebyers)
- Email: ikebyersmgmt@gmail.com
