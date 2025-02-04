export interface BlacksmithWebUserAction {
	text: string;
	user_id: string;
	app_name: string;
}

export interface BlacksmithServerResponse {
	text: string;
}

export interface ChatMessage {
	id: number;
	user_id: string;
	sender: string;
	message: string;
	app_name: string;
}
