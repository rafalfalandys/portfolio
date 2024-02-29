# Architecture and Photography Portfolio

install: npm i  
run: npm start

## Prologue

This project is my architecture and photography portfolio and at the same time my first fullstack project. Front is built in React (typescript), and the back is NodeJS + MongoDB (to be seen here: https://github.com/rafalfalandys/portfolio-backend).
It not only displays static content, but also has a full CRUD edit panel for both architectural projects, and photos.

Features and stack:
React | Typescript | NodeJS | API | Context | Sass |

## The core

App is generally based on the loader and action functions (react-router 6.4+), which handle all API calls - CRUD for projects, and CRUD for photos. Panel is hidden - to see how it works watch this video: https://www.youtube.com/watch?v=1YsQ8e78WlQ
All image files are stored in Firebase storage, and you can also upload them there from the edit panel.

## Photos:

Well, a list of photos. In the edit panel I can change their order, remove and add new ones.

## Projects:

Projects are bit more complex then the photos. They are first displayed as a preview cards, and each one of them has a detailed page.
Edit panel for each project displays a big form which I can edit and patch the project in database.

## Contact:

Contact form with front validation. It sends messages to Firebase. Why so? This project was at the beginning based only on Firebase, and this mechanism just stayed as it was. Because it worked.

## Internationalization.

The internationalization is handled by keeping the entire prose of the interface in two objects - pl and en. The 'useText' custom hook takes care of selecting the proper one and supplying the interface with texts in a good language.

## RWD.

Build for all screen widths. Actually looks better on phone, then on desktop.

## Afterword

This portfolio was my first React project. During my development I have built some more projects, more advanced than this one. If I were to build it from scratch, it would most likely be build differently in many aspects. It is though my biggest project, and felt the best to build special backend for it. What I mean is that if you find some 'juniorish' solutions in it - keep in mind, I might have made it a year ago.
