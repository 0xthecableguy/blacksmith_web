export interface BlacksmithWebUserAction {
	text: string;
	user_id: string;
	app_name: string;
}

export interface TextToSpeechRequest {
	text: string;
	user_id: string;
	app_name: string;
}

export interface TextToSpeechResponse {
	audio_data: string;
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

export type MessageSender = 'user' | 'server';

export interface BaseMessage {
	id?: number;
	text: string;
	sender: MessageSender;
}

export interface TextMessage extends BaseMessage {
	type: 'text';
}

export interface AudioMessage extends BaseMessage {
	type: 'audio';
	audioUrl: string;
}

export type Message = TextMessage | AudioMessage;