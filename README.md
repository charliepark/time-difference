# time-difference
A simple web component to turn a given time into "X time units ago" (e.g. 3 hours ago; 1 month ago; 14 minutes from now)

(You can see how you'd use this in the file example.html.)

This web component would allow you to use HTML like
```html
<time-difference time="{some time value you pass in: e.g. when your post was created}"></time-difference>
```
… and the web component will automatically turn it into a human-readable string, like "4 minutes ago", "5 hours from now", etc.

It's also handy if you're getting started with web components and want to see a simple one in action.

Just remember to import the file (as in example.html) and pass in a valid timestring and you should be all set.
