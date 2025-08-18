# Personal Portfolio

This is a **Personal Portfolio Website** project built using HTML, CSS, and JavaScript. The project demonstrates a modern, responsive portfolio site with sidebar navigation, animated transitions, and a contact form with validation.

## Features

- Responsive sidebar navigation with hamburger menu
- Animated transitions for sidebar open/close
- Multiple pages: Home, Intro, Projects, Experience, Contact
- Contact form with client-side validation
- Project showcase with images and descriptions
- Clean, modern UI using custom CSS and Google Fonts

## Folder Structure

```
personal_portfolio/
├── app.js
├── contact.html
├── experience.html
├── images/
│   ├── ham.png
│   ├── letter-x.png
│   ├── pic.png
│   ├── calculator.png
│   ├── tictactoe.png
│   └── todolist.png
├── index.html
├── intro.html
├── projects.html
├── style.css
```

## Environment & Configuration

- **Editor:** [Visual Studio Code](https://code.visualstudio.com/) is recommended for development.
- **Live Server:** For best results, use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code to serve the site locally.
- **Port Configuration:** The workspace is configured to use port `5501` for Live Server. This is set in [`.vscode/settings.json`](../../../.vscode/settings.json):

  ```json
  {
    "liveServer.settings.port": 5501
  }
  ```

- **Assets:** All images used in the sidebar and project showcase should be placed in the `images/` folder.

## How to Run

1. Open the project folder in Visual Studio Code.
2. Right-click on `index.html` and select **"Open with Live Server"**.
3. Navigate through the sidebar to explore different sections of the portfolio.
4. To test the contact form, fill in all fields and submit. Validation is handled by [`app.js`](app.js).

## Customization

- **Profile Info:** Update your name, about, and more in `intro.html`.
- **Projects:** Add or modify projects in `projects.html` and update images in the `images/` folder.
- **Experience:** Edit your experience and skills in `experience.html`.
- **Contact:** Adjust the contact form fields or validation logic in `contact.html` and [`app.js`](app.js).

## Dependencies

- [Google Fonts: Roboto, Source Code Pro](https://fonts.google.com/)
- No external JavaScript libraries required.

---

Feel free to modify and use this template for your own portfolio!
