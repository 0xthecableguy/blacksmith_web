import type {
	BlacksmithWebUserRequest,
	BlacksmithServerResponse,
	ChatMessage,
	TextToSpeechRequest,
	TextToSpeechResponse
} from '$lib/types';

export const sendMessageToServer = async (payload: BlacksmithWebUserRequest): Promise<BlacksmithServerResponse> => {
	console.log('Sending request to server:', payload);

	const modifiedPayload = {
		...payload,
		user_id: payload.user_id
	};

	const response = await fetch('https://v3.spb.ru/blacksmith_web_user_request', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(modifiedPayload),
	});

	if (!response.ok) {
		let errorText;
		try {
			errorText = await response.json();
		} catch {
			errorText = await response.text();
		}

		console.error(`Error processing request (${response.status}):`, errorText);
		throw new Error(`Error processing request: ${response.status} - ${JSON.stringify(errorText)}`);
	}

	const data: BlacksmithServerResponse = await response.json();
	console.log("Server response data:", data);
	return data;
};

export const sendTextToSpeech = async (payload: TextToSpeechRequest): Promise<TextToSpeechResponse> => {
	console.log('Sending TTS request:', payload);

	const response = await fetch('https://v3.spb.ru/blacksmith_web_tts_request', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	});

	if (!response.ok) {
		let errorText;
		try {
			errorText = await response.json();
		} catch {
			errorText = await response.text();
		}

		console.error(`TTS Error (${response.status}):`, errorText);
		throw new Error(`TTS Error: ${response.status} - ${JSON.stringify(errorText)}`);
	}

	const data: TextToSpeechResponse = await response.json();
	console.log("TTS response received");
	return data;
};

export const fetchChatHistory = async (userId: string, app_name: string): Promise<ChatMessage[]> => {
	console.log('Fetching chat history for user:', userId);

	const response = await fetch(`https://v3.spb.ru/blacksmith_web_chat_fetch?user_id=${userId}&app_name=${app_name}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});

	if (!response.ok) {
		let errorText;
		try {
			errorText = await response.json();
		} catch {
			errorText = await response.text();
		}

		console.error(`Error fetching chat history (${response.status}):`, errorText);
		throw new Error(`Error fetching chat history: ${response.status} - ${JSON.stringify(errorText)}`);
	}

	const data: ChatMessage[] = await response.json();
	console.log("Loaded chat history for user:", userId, ":", data);
	return data;
};