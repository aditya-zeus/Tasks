# Explain the different ways in which CSS can be applied to HTML, what is preferred way and why.
There are 3 ways to apply CSS to HTML
- Inline CSS
- Internal CSS
- External CSS

**Inline CSS**: In this method, the CSS is written within the HTML tag.
*Example*: `<p style="color: blue; background-color: red"> Hello World! </p>`

**Internal CSS**: In this method, CSS is written in the same file, within `sytle` tag. Most preferably between the `head` tag.
*Example*:
```HTML
<style>
    p {
        color: blue;
        background-color: red;
    }

    a {
        text-decoration: none;
    }
</style>
```

**External CSS**: In this method, CSS is written in external file, most commonly `styles.css` but it can be any name and then this file is linked to the HTML file.
*Example*:
> Writing in `styles.css` is similar to internal css.

styles.css
```CSS
p {
    color: blue;
    background-color: red;
}

a {
    text-decoration: none;
}
```

> Linking to HTML file (preferably in the head tag)

```HTML
<head>
    <link rel="stylesheet" href="styles.css" />
</head>
```

> Preferred way

Preferred way is by `External CSS` as it becomes easy to handle large CSS file.

# What are different CSS selectors, with example element, class and id selectors.


# With the help of a diagram explain CSS Box Model.


# Apply CSS to HTML page created in [Task 1](HTML_task.md)
[Applied CSS](2.html)