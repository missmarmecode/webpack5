import Heading from './components/heading/heading';
import HelloWorldButton from './components/hello-world-button/hello-world-button.js';

const heading = new Heading();
heading.render();
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
    console.log('Prod mode');
} else if (process.env.NODE_ENV === 'development') {
    console.log('Dev mode');
}
