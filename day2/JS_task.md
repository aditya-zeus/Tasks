# List down ways in which JavaScript command can be added to a webpage, what is the preferred way.
There are 2 ways to add JS command to a webpage:
- Using script tag
- External JS

**Using Script tag**: Embed the JS code in between the `script` tag, can be added anywhere in the HTML document, in `head` tag or `body` tag.
*Example*:
```HTML
<script>
    // JS code goes here
</script>
```

**External JS**: By making use of external file, let's say `index.js` and linking it to the HTML file.
*Example:*
```js
let a = 10;
let b = 5;
console.log(`Value of ${a} + ${b} = ${a + b}`);
// Any other JS code, in the same file
```

> Linking to HTML file.

```HTML
<script src="index.js"></script>
```

# Apply following to the HTML page on click of "submit" button
## Validate: Name and Comments fields are not empty
## Validate: User has selected one entry from male/female radio button
## In case user has not entered data for name and comment field or not selected anything from male/female radio button – show alert message “All fields are compulsory” and set focus to the first filed that is empty. 
[Validation done on 2.html file](2.html)