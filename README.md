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
<img width="562" alt="catimgss" src="https://user-images.githubusercontent.com/22069784/185722685-d82e9eb6-e821-4226-9bdc-dfb42cadf5ef.png">
<img width="763" alt="catcommand" src="https://user-images.githubusercontent.com/22069784/185722691-802bf13e-432e-43ce-a32a-5ebc87a458e1.png">
<img width="658" alt="chucknorrisfact" src="https://user-images.githubusercontent.com/22069784/185722694-fda4f3eb-cfce-4555-9bdc-970f29682752.png">
<img width="608" alt="moviefact" src="https://user-images.githubusercontent.com/22069784/185722695-9b560c6c-e1e4-4b9e-83c8-44f8e9459718.png">

## Credits

- [Slack API Tutorial](https://api.slack.com/tutorials)
- [Chuck Norris Facts API](https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random)
- [Movie API](http://www.omdbapi.com)
- [Cat API](https://api.thecatapi.com/v1/images/search)

## SETUP

1. Clone this repository:

```
git clone https://github.com/jmadarang87/SlackBot.git
```

2. Install npm packages:

```
npm install
```

3. Create .env folder with following variables from the following APIs:

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
