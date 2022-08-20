const { App } = require('@slack/bolt');
require('dotenv').config();
const getacat = require('./src/getacat');
const chuckfact = require('./src/chuckjoke');
const getPlot = require('./src/movie');

const app = new App({
	token: process.env.AUTH_TOKEN,
	signingSecret: process.env.AUTH_SIGN,
	socketMode: true,
	appToken: process.env.AUTH_APPTOKEN,
	// port: process.env.PORT || 3003,
});

// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }) => {
	// say() sends a message to the channel where the event was triggered
	// await say(`Hey there <@${message.user}>!`);
	await say({
		blocks: [
			{
				type: 'header',
				text: {
					type: 'plain_text',
					text: `:wave: Hi! I'm HookBot`,
					emoji: true,
				},
			},
			{
				type: 'section',
				text: {
					type: 'mrkdwn',
					text: `:wave: Wasssuppp Hey there <@${message.user}>!`,
				},

				accessory: {
					type: 'button',
					text: {
						type: 'plain_text',
						text: 'Click Me',
					},
					action_id: 'button_click',
				},
			},
			{
				type: 'divider',
			},
		],

		// Text in notification
		text: `WASSUPP Hey there <@${message.user} >!  :wave:`,
	});
});

app.action('button_click', async ({ body, ack, say }) => {
	// Acknowledge the action
	await ack();
	await say(`<@${body.user.id}> clicked the button`);
});

// returns random cat image with  ' /cat ' slash command
app.command('/cat', async ({ ack, payload, context }) => {
	// Acknowledge command request
	await ack();

	const catImg = await getacat();
	try {
		const result = await app.client.chat.postMessage({
			token: context.botToken,
			channel: payload.channel_id,

			blocks: [
				{
					type: 'header',
					text: {
						type: 'plain_text',
						text: 'Meow Meow',
						emoji: true,
					},
				},
				{
					type: 'image',
					image_url: catImg,
					alt_text: 'cat img',
				},
			],
			text: 'Cat Image Sent',
		});
	} catch (error) {
		console.log(error);
	}

	// await respond(`${command.text}`);
});

// returns random chuck norris fact with ' /chuck ' slash command
app.command('/chuck', async ({ ack, payload, context }) => {
	ack();

	const fact = await chuckfact();

	try {
		const result = await app.client.chat.postMessage({
			token: context.botToken,
			channel: payload.channel_id,

			blocks: [
				{
					type: 'header',
					text: {
						type: 'plain_text',
						text: 'Chuck Norris Fact',
						emoji: true,
					},
				},
				{
					type: 'section',
					text: {
						type: 'plain_text',
						text: fact,
					},
				},
			],

			text: 'Chuck has entered.',
		});
	} catch (error) {
		console.log(error);
	}
});

// returns plot for {movietitle} with ' /movie {movietitle} ' slash command
app.command('/movie', async ({ ack, payload, context }) => {
	ack();
	console.log(payload);
	const moviePlot = await getPlot(payload.text);
	try {
		const result = await app.client.chat.postMessage({
			token: context.botToken,
			channel: payload.channel_id,

			blocks: [
				{
					type: 'header',
					text: {
						type: 'plain_text',
						text: `${payload.text} Movie Plot: `,
						emoji: true,
					},
				},
				{
					type: 'section',
					text: {
						type: 'plain_text',
						text: moviePlot,
					},
				},
			],

			text: 'Movie Plot.',
		});
	} catch (error) {
		console.log(error);
	}
});

(async () => {
	// Start your app
	await app.start(process.env.PORT || 3003);
	console.log('⚡️ Bolt app is running!');
})();
