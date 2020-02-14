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
