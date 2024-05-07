

export const sessionKeys: Record<string, string> = {
	token: 'token',
	username: 'username',
	userInfo: 'userInfo',
	csrftoken: 'csrftoken',
};

export const setSession = (key: string, value: string): void => {
	const storage = globalThis.sessionStorage;
	if (!storage) {
		return
	}
	storage.setItem(key, JSON.stringify(value));
};

export const getSession = (key: string): string | undefined => {
	const storage = globalThis?.sessionStorage;
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

export const clearSession = (): void => {
	const storage = globalThis?.sessionStorage;
	if (!storage) {
		return
	}
	storage.clear()
};
