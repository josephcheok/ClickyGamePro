# Clicky-Game (React.js)

### About

- <mark style="background-color: lightblue">CLICKY-GAME</mark> is a memory game built with <mark style="background-color: lightblue">React.js</mark> The goal of the game is simple, using your mouse, <mark style="background-color: lightblue">CLICK</mark> each of the 9 superman and 9 batman character cards in whatever order you chose - the order does not matter, only that you do not click the same card twice!

- <mark style="background-color: lightblue">EACH</mark> click triggers the board of cards to reshuffle, thus, you cannot simply click the cards in the order in which they appear on screen.

- <mark style="background-color: lightblue">COUNTERS</mark> displayed to the top right panel keep track of your current as well as top score.

- <mark style="background-color: lightblue">CLICK</mark> your way to a very special effect at the end of the game!

### Technological Summary

<mark style="background-color: lightblue">CLICKY-GAME</mark> is built with <mark style="background-color: lightblue">MERN</mark> stack. Thus, the front-end is <mark style="background-color: lightblue">React</mark> component based, able to keeps track of change events using <mark style="background-color: lightblue">state</mark>, and updates to the page render dynamically and without page refresh. The details of the player are entered via a form that only appears at the bottom panel, at the end of the game, which is then POSTed to a MongoDB connected with a Node/Express backend. Clicking the Submit button also triggers a GET from the database, which then updates the scoreboard rendered as a separate React component. The name of the top winner is also displayed at the bottom panel and remains there until the next player completes their game.

### Future Updates

- The title of the page will be stored as a state to dynamically render it based on the score of the player.
- A voucher database that has been created, but not been used here, will be connected. A GET request will be triggered to fetch the voucher codes based upon the scores, when the game ends,with the voucher code being rendered onto the title.
- Button to share the game via Facebook will pop up, as soon as the game is completed. At the moment, a Facebook login button is present as a placeholder for the share button in the future.

### Deployment

[Play CLICKY GAME!](https://clickygameproedition.herokuapp.com/)
