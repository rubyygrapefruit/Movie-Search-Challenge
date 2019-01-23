This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


#### Challenges, Reasoning behind design decisions, Future Improvements 

A challenge I ran into was aligning the poster image and text side by side (horizontally). I looked into either using flexbos or CSS Grid and ended up choosing flexbox. Since I needed to display my information mostly in a one dimensional layout, flexbox was perfect since it was made for positioning elements in horizontal or vertical stacks. CSS grid is known for displaying elements into rows and columns (2-dimensional). I wanted to also alter my elements' width and height in order to best fill out the available space and for it to accomdate all kinds of screen sizes (phone, tablet, web) so flexbox was best for that. 

I chose to pick the library, react-paginate, to do my pagination since I wanted to make sure I will be able to change the page count dynamically based on whatever title was searched. They also had many props that were convenient to use. You could choose how many items you wanted to display on a single page and they also had a lot of class names so that it was easy to change up the CSS.  

I ended up choosing to go with a 'rotten tomato' meter since they are now my go-to site for movie ratings and reviews. They are more detailed in their reviews and the audience score is always on point. I also had a lot fun creating the tomato meter based on the vote_averages.

Future improvements I would like to make is to make an option to search by a category (date, ratings, reviews, etc). It would allow the app to become more useful to the user. 

Overall, I had a lot of fun creating this movie search app. I loved the API; the info was easy to extract and use. I ended up searching up a couple movies myself just to see what movies were out there that I haven't seen yet. 

Video Examples: 
https://youtu.be/YTZHCN6VgWk (Webpage)
https://youtu.be/EdOKQkq8l8w (Phone) 

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
