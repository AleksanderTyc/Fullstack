# Fullstack Developer

Based on [video](https://www.youtube.com/watch?v=LzMnsfqjzkA)

GitHub [repository](https://github.com/scrimba/learn-fullstack-development) related to the course.

Course started on 12OCT2025 and finished off on 31DEC2025.

Below is an excerpt from my original notes describing technologies, steps, challenges and solutions applicable to individual projects and stages.

# Project index

## Ex_0001 - HTML - text
## Ex_0002 - HTML - text
## Ex_0003 - HTML - story page with images, header and paragraph
## Ex_0004 - HTML - button
## Ex_0005 - HTML - user input elements
## Ex_0006 - HTML - image
## Ex_0007 - HTML - links
## Ex_0008 - HTML - links
## Ex_0009 - HTML - links
## Ex_0010 - HTML - lists
## Ex_0011 - HTML - Complex - personal web page
## Ex_0012 - Simple - colours, fonts and text alignments
## Ex_0013 - Complex - Google front page
## Ex_0014 - Simple - containers with height, padding and margins
## Ex_0015 - Simple - container centered with padding
## Ex_0016 - Simple - Twitter Follow button
## Ex_0017 - Complex - business card
## Ex_0018 - Complex - Space exploration
## Ex_0019 - Complex - Birthday card
## Ex_0020 - Simple - flex container, emojis, horizontal and vertical alignment
## Ex_0021 - Simple - 3 links styled as hoverable buttons
## Ex_0022 - Solo - Visit Bydgoszcz
## Ex_0023 - JS - People counter
## Ex_0024 - JS - Calculator, also dynamic HTML img through JS
## Ex_0025 - JS - Solo - Basketball Scoreboard
## Ex_0026 - JS - BlackJack
## Ex_0027 - JS - Tasks, run as Fullstack/repository/Ex_0027$ node task.js, Generate Sentence, Rounding number, String from Code (ASCII and Unicode), setTimeout and cancel clearTimeout, import / export, module.exports / require
## Ex_0028 - JS - Solo. Password generator
## Ex_0029 - JS - Chrome extension, localStorage
## Ex_0030 - JS - Solo - Unit Converter
## Ex_0031 - JS - Interface to AI
## Ex_0032 - JS Node - backend programming, parsing strings of numbers or booleans into their types using JSON.parse
## Ex_0033 - JS Node - fullstack project backend server - path, fs, mime-types, sanitize-html, EventEmitter, Server Emitted Events, 
Part of Ex_0033 is WeatherServer - an example to present basic ideas behind Server Emitted Events.
The code is very weak, badly designed, I'd say, just cobbled together without any thought given to proper architecture.
- It does not verify that the event received on the Client's side is indeed temp-updated event;
- It creates a new setInterval loop for every new connection. It does not deactivate setInterval for dead/expired connections. In result the getData functionality gets triggerred more and more, completely unnecessarily.
Checked in, hash 18877b4
My take:
- Separate the "data server" from web server - setInterval just once to update currTemp periodically;
- Emit event temp-data-upd by "data server" to notify web server about the update available;
- Send SEE to the Client only when temp-data-upd is received.

## Ex_0034 - SQL Queries, pglite, Postgres, run queries, receive data from database query
## Ex_0035 - React.js, react, react-dom, Vite (fr. quick, fast) [vi:t]
### react-1 - Initial examples, little to no value
### react-2 - Fun Facts project
### react-3 - React Facts project - react-2 with some styling and component separation of concern

## Ex_0036 - React.js projects
### react-4 - Travel Journal project
### react-5 - Chef Claude project
### react-6 - HTML forms in JS React
### react-7 - JS React state and props - sound pads project
### react-8 - JS React useEffect - meme generator project
### react-9 - JS React useEffect exercise: counter button, from API getting Star Wars character with a given ID; window resize displayed live (event handler connected / disconnected in useEffect)

## Ex_0037 - React.js capstone project
### react-37-1 - Assembly Endgame
- One common super-container with children
    - Header with description container
    - Result announcement container, invisible until the game ends
    - Languages labels container with skull-marker
    - Guessing board container
    - Alphabet container with guessed / lost letters
    - New game button container, invisible until the game ends
- State:
    - Is the game on or ended?
        > Derivative: Result announced
        > Derivative: missing letters revealed
        > Derivative: Alphabet disabled
        > Derivative: "New game" button visible
    - Word being guessed - a state or a const resulting from useEffect initial?
    - Letters tried so far
        > Derivative: letters guessed and lost, can be passed to Alphabet
        > Derivative: letters guessed at the secret word
        > Derivative: Languages "skulled"

Potential TODO - Capstone I project - Tenzies, see sample screen at 1:16:12:16
Also:
- Next.js / Remix to build backend and Server interactions, data, caching, cookies, etc.
- Node.js with or without Express to build RESTful APIs


### react-37-2 - Assembly Endgame - TS
*This project is set up after completing Ex_0038.*


### react-37-3 - Next.js from scratch - minimalist manual approach
Following [this](https://nextjs.org/docs/app/getting-started/installation#manual-installation) guide.

### react-37-4 - Next.js using create-next-app - Printforge project
Following [this](https://nextjs.org/docs/app/getting-started/installation) guide.


### react-37-5 - Next.js using create-next-app - CatFacts mini project

## Ex_0038 - TS
