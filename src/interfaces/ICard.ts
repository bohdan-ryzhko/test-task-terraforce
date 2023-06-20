export interface ICard {
	id: number,
	title: string,
	text: string,
	image: null | string,
	url: string,
	active: number,
	sort_order?: null,
	created_at: string,
	updated_at: string,
	deleted_at?: null | unknown,
}
