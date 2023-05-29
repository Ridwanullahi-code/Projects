![Design preview for the Age calculator app coding challenge](./design/desktop-preview.jpg)

# Age calculator app

## Learning objectives

- Create forms with HTML5 validations.
- Understand the importance of UX.
- Understand how to parse a Figma design to create a UI.
- Explore animating elements using CSS transitions to enhance the user experience

**To do this challenge, you need a decent understanding of HTML, CSS and JavaScript.**

## Description

Build an age calculator app that allows users to submit a date and view the calculated age in years, months, and days. The app should closely resemble the provided design and meet the specified functionality requirements

*IMPORTANT NOTE: Read **all** requirements before you start building your project.*

### General requirements

- Make sure that there are [no linter errors](https://github.com/Ridwanullahi-code/curriculum/tree/master/linters_config)
- Make sure that you used correct [GitHub flow](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/git-github/articles/github_flow.md).
- Make sure that you documented your work [in a professional way](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/documentation/articles/professional_repo_rules.md).

### HTML/CSS requirements


- User Input:
>- Provide a form where users can submit a valid date.
>- The form should include the following fields:
>- Day: Accepts a number between 1 and 31
>- Month: Accepts a number between 1 and 12
>- Year: Accepts a valid year

- Age Calculation: 
>- Upon submitting a valid date, calculate the age in years, months, and days
>- Display the calculated age in a clear and readable format

- Validation:

>- Perform validation checks on the form input to ensure data integrity.
>- Display appropriate validation error messages if any of the following conditions are met:
>- Any field is left empty when the form is submitted
>- The day number is not between 1 and 31
>- The month number is not between 1 and 12
>- The year is in the future
>- The date is invalid (e.g., 31/04/1991, as there are only 30 days in April)

- Responsive Design:

>- Implement a responsive layout that adapts to different screen sizes and devices
>- Ensure the interface is user-friendly and visually 
appealing across various screen resolutions

- Interactive Elements:

>- Apply hover and focus states to all interactive elements on the page
>- Enhance the user experience by providing visual feedback when interacting with buttons or input fields


## Where to find everything

Your task is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design. 

The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`. 

All the required assets for this project are in the `/assets` folder. The images are already exported for the correct screen size and optimized.

We also include variable and static font files for the required fonts for this project. You can choose to either link to Google Fonts or use the local font files to host the fonts yourself. Note that we've removed the static font files for the font weights that aren't needed for this project.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

## Building your project

Feel free to use any workflow that you feel comfortable with. Below is a suggested process, but do not feel like you need to follow these steps:

1. Initialize your project as a public repository on [GitHub](https://github.com/). Creating a repo will make it easier to share your code with the community if you need help. If you're not sure how to do this, [have a read-through of this Try Git resource](https://try.github.io/).
2. Configure your repository to publish your code to a web address. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, and we provide some recommendations below.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes to create reusable styles.
4. Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
5. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
6. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.

## Deploying your project

As mentioned above, there are many ways to host your project for free. Our recommend hosts are:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

You can host your site using one of these solutions or any of our other trusted providers. [Read more about our recommended and trusted hosts](https://medium.com/frontend-mentor/frontend-mentor-trusted-hosting-providers-bf000dfebe).

**Have fun building!** 🚀
