export interface Character {
	id: number;
	name: string;
	status: 'Alive' | 'Dead';
	species: string;
	type: string;
	gender: 'Male' | 'Female';
	originLocation: Location;
	currentLocation: Location;
}

export interface Location {
	name: string;
	url: string;
}