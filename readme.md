# A responsive menu

In this lab we will explore media queries and mobile first development.
The code builds on previous labs.
We will build a flexbox menu and add interaction using javascript event listeners.
But we will also introduce the new concepts:

- media queries (to style pages under different conditions)
- mobile-first development (to keep the design process simple)

## 1. Cloning the starter-code repository

We will begin by cloning the starter-code that you have been given for your assignment.

Cloning the repository will create a new folder containing the repository.

On a command line (e.g. 'git bash'), make sure you are located in the folder where you are storing the lab code for this module.
This folder will probably contain a series of folders from previous labs.

For example: `cd H:/CTEC3905/`

Then clone the `starter-code` repository.

```
git clone https://github.com/CTEC3905/starter-code.git
```


## 2. Make the repository your own

Now rename the `starter-code` folder to "lab-04" or similar.
This is your code for todays lab.

The cloned repository will have a `remote` called `origin` already configured to point to the source repository on github.
We are now going to change this remote so that it points to a repository on your github account.

Create a new repository on github (name it the same as the folder) and copy the url for cloning.

The url will look something like this:

`https://github.com/{your username}/{your repository name}.git`

Now to set the url of the remote, `cd` into the repository directory on the command line and issue this command:

```
git clone set-url origin https://github.com/{replace_with_your_username}/{and_your_repository_name}.git
```
Git doesn't provide any feedback if this works so you can test that this worked with the following command.

```
git remote -v
```

## 3. Introducing media queries

Open the folder in Atom and look at the breakpoints in the CSS file - you’ll see the mobile and global styles at the top, then two media queries beginning @media.

The first media query is for screen widths over 500px and the next for screen widths over 1000px.
If you try this out in the browser by adjusting the window width, you’ll see the background colour change for each of the three widths.
Note that the size of the chrome developer tools (f12) panel can be adjusted to simulate devices with very narrow widths.

## 4. A simple menu

Size your browser window so it is narrow enough to show the pink (mobile width) background.
Create a 3-item menu in HTML and style it to appear nicely using only global styles.
Don't place any styles in the media queries for now.

```
<nav>
  <a href="#">one</a>
  <a href="#">two</a>
  <a href="#">three</a>
</nav>
```

Make sure you use `display: flex` and add `flex-direction: column` to the nav styles to make the mobile menu vertical.

Now add a new div element before the nav tag and give it a class attribute of `menu`. It should contain the word ‘menu’ and nothing else.
This will become a clickable area that will open and close the menu on mobile devices.
By hiding the menu on mobile devices we create more space to display content.

In the mobile and global styles (top of the CSS file) add a style block for your .menu class, with a dark background-color, a lighter color for the text, and line-height: 2em just to give it some height.
