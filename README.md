# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot 2023-05-22 at 20-25-28 Frontend Mentor News homepage](https://github.com/Ohiole/News-Homepage/assets/67792211/af9a3032-f641-4c8b-9b96-020616e0ae7f)


### Links

- Solution URL: (https://github.com/Ohiole/News-Homepage)
- Live Site URL: (https://ohiole.github.io/News-Homepage/))

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I mastered the javascript method toggle(), to add and remove classes on click of an object.

```css
@media screen and (max-width: 1230px) {
    body{
        padding: 0;
    }
    .upSection{
        flex-direction: column;
        width: 100%;
    }

    .imageTextHead h1{
        width: 100%;
    }
    .textAndButton p{
        width: 100%;
    }
    .asideText{
        width: 100%;
    }
    .imageText{
        flex-direction: column;
    }
    .downSection{
        grid-template-columns: 1fr;
    }
    .news{
        justify-content: unset;
    }
    
}

@media screen and (max-width: 605px){
    body.changeBgColor{
        background-color: rgb(128, 128, 128);
        overflow: hidden;
    }
    header{
        overflow-x: hidden;
    }
    ul{
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-left: 1rem;
        position: absolute;
        right: 0;
        top: 0;
        width: 70%;
        height: 100vh;
        background-color: hsl(36, 100%, 99%);
    }
    ul.showTheNav{
        display: flex;
    }
    a{
        color: hsl(240, 100%, 5%);
        font-weight: 500;
    }
    .menubar{
        display: flex;
        cursor: pointer;
        z-index: 10;
        transition: all .3s ease-out;
    }
    .menu.menushow{
        display: none;
    }
    .close{
        display: none;
    }
    .close.menushow{
        display: flex;
    }
    .desktopImage{
        display: none;
    }
    .image .mobileImage{
        display: flex;
        width: 100%;
    }
}
```
```js
const bodySelector = document.querySelector('body');
const ul = document.querySelector('ul');
const hamburger = document.querySelector('.menubar');
const closeBtn = document.querySelector('.close');
const menuBtn = document.querySelector('.menu')

hamburger.addEventListener('click', function () {
    bodySelector.classList.toggle('changeBgColor');
    ul.classList.toggle('showTheNav');
    closeBtn.classList.toggle('menushow');
    menuBtn.classList.toggle('menushow');
});
```

### Continued development

I want to focus mainly on mastering javascript 

### Useful resources

- [Youtube.com](https://www.youtube.com) - This helped me with the CSS.

## Author

- Frontend Mentor - [@Ohiole](https://www.frontendmentor.io/profile/Ohiole)
- Twitter - [@__ojoo](https://www.twitter.com/__ojoo)

