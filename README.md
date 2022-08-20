# SlackBot

SlackBot with slash commands.

## Technologies Used

- JavaScript | Axios, Async/Await, JSON
- Bolt for Javascript | @slack/bolt Framework
- Slack API | Block Kit
- 3rd party APIs

## Features

Slash Commands

- ' /chuck ' returns random Chuck Norris fact
- ' /movie {moviename} ' returns plot of movie
- ' /cat ' returns random cat image

## Challenges

- This was my first time working with the slack API. There's a lot of
  information, so it took awhile to take it all in. Had to learn the different
  types of features and functionality that the bots have to offer! Still a lot
  to learn, but now that I'm familiar, it's now easier to dig in and create!

## What I learned

- Slack API Block Kit
- Webhooks
- No spaces in .env folder
- Payloads

## Future Improvements

- Add button event functionality
- Change movie title to proper case

## Preview

## Credits

- [Slack API Tutorial](https://api.slack.com/tutorials)
- [Chuck Norris Facts API](https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random)
- [Movie API](http://www.omdbapi.com)
- [Cat API](https://api.thecatapi.com/v1/images/search)

## SETUP

1. Clone this repository:

```
git clone [repo url]
```

2. Install npm packages:

```
npm install
```

3. Create .env folder with following variables:

[Slack API:](https://api.slack.com/)

- AUTH_TOKEN
- AUTH_SIGN
- AUTH_APPTOKEN

[Chuck Norris Facts API:](https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random)

- RAPIDAPI_KEY
- RAPIDAPI_HOST

[Movie API:](http://www.omdbapi.com)

- MOVIEAPI

4. Start playing:

```
npm start
```
