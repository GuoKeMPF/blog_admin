

export const localKeys: Record<string, string> = {
	token: 'token',
	username: 'username',
	userInfo: 'userInfo',
	csrftoken: 'csrftoken',
};

export const setLocal = (key: string, value: string): void => {
	const storage = globalThis.localStorage;
	if (!storage) {
		return
	}
	storage.setItem(key, JSON.stringify(value));
};

export const getLocal = (key: string): string | undefined => {
	const storage = globalThis?.localStorage;
	if (!storage) {
		return
	}
	const value = storage.getItem(key);
	try {
		if (value) {
			return JSON.parse(value);
		}
	} catch (error) {
		console.error(error);
	}
	return;
};

export const clearLocal = (): void => {
	const storage = globalThis?.localStorage;
	if (!storage) {
		return
	}
	storage.clear()
};
