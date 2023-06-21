const isCorrectUrl = (url: string | null | undefined): boolean => url !== null && url !== "null";

export const checkImageUrl = (image: string | null | undefined): string => {
	return isCorrectUrl(image) ? image! : "https://placehold.co/200x100";
}

export const checkLinkUrl = (image: string | null): string => {
	return isCorrectUrl(image) ? image! : "";
};
