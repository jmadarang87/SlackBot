const { App } = require('@slack/bolt');
require('dotenv').config();
const getacat = require('./getacat');
const joke = require('./joke');
const chuckfact = require('./chuckjoke');
const getPlot = require('./movie');

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

app.command('/joke', async ({ ack, payload, context }) => {
	// Acknowledge command request
	await ack();

	const joke = await joke();

	try {
		const result = await app.client.chat.postMessage({
			token: context.botToken,
			channel: payload.channel_id,

			blocks: [
				{
					type: 'header',
					text: {
						type: 'plain_text',
						text: joke,
						emoji: true,
					},
				},
			],
			text: 'Knock Knock',
		});
	} catch (error) {
		console.log(error);
	}

	// await respond(`${command.text}`);
});

// Listen for a slash command invocation
app.command('/travel', async ({ ack, payload, context }) => {
	// Acknowledge the command request
	ack();

	try {
		const result = await app.client.chat.postMessage({
			token: context.botToken,
			// Pass a valid trigger_id within 3 seconds of receiving it
			channel: payload.channel_id,
			// View payload

			blocks: [
				{
					type: 'header',
					text: {
						type: 'plain_text',
						text: 'Travel inspiration',
						emoji: true,
					},
				},
				{
					type: 'image',
					image_url:
						'https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg',
					alt_text: 'travel inspo',
				},
			],
			text: 'Travel Inspo from App',
		});
		console.log(result);
	} catch (error) {
		console.error(error);
	}
});

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
