import type { BlacksmithWebUserAction, BlacksmithServerResponse } from '$lib/types';

export const sendMessageToServer = async (payload: BlacksmithWebUserAction): Promise<BlacksmithServerResponse> => {
	console.log('Отправка запроса на сервер:', payload);

	const modifiedPayload = {
		...payload,
		user_id: payload.user_id
	};

	const response = await fetch('https://v3.spb.ru/blacksmith_web_user_action', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(modifiedPayload),
	});

	if (!response.ok) {
		const errorText = await response.text();
		console.error(`Ошибка запроса (${response.status}):`, errorText);

		throw new Error(`Ошибка запроса: ${response.status}`);
	}

	const data: BlacksmithServerResponse = await response.json();
	console.log("Server response data:", data);
	return data;
};