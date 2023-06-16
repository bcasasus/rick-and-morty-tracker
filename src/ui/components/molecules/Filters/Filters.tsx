import { ChangeEvent, FormEvent, useReducer } from 'react';
import { Button } from '@rmt/atoms';
import { INITIAL_STATE_FILTERS } from './store/state';
import { filtersReducer } from './store/reducer';
import { filtersAction } from './store/actions';
import { FilterProps } from './types';
import './filters.css';

export const Filters = ({ onSubmit }: FilterProps): JSX.Element => {
	const [filters, dispatch] = useReducer(filtersReducer, INITIAL_STATE_FILTERS);

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const name = event.target.name;
		const value = event.target.value;

		dispatch(filtersAction.fieldChange({ name, value }));
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		onSubmit(filters);
	};

	const handleClickReset = () => {
		dispatch(filtersAction.resetForm());
	};

	return (
		<form onSubmit={handleSubmit} className="rmt-filters-form">
			<input
				className="rmt-filters-form__search-input"
				type="search"
				name="name"
				placeholder="Type a character name..."
				value={filters.name}
				onChange={handleChange}
			/>
			<label className="rmt-filters-form__label" htmlFor="select-status">
				Status
			</label>
			<select
				className="rmt-filters-form__select-input"
				name="status"
				id="select-status"
				value={filters.status}
				onChange={handleChange}
			>
				<option value="">All</option>
				<option value="Alive">Alive</option>
				<option value="Dead">Dead</option>
				<option value="unknown">unknown</option>
			</select>
			<label className="rmt-filters-form__label" htmlFor="select-gender">
				Gender
			</label>
			<select
				className="rmt-filters-form__select-input"
				name="gender"
				id="select-gender"
				value={filters.gender}
				onChange={handleChange}
			>
				<option value="">All</option>
				<option value="Female">Female</option>
				<option value="Male">Male</option>
				<option value="Genderless">Genderless</option>
				<option value="unknown">unknown</option>
			</select>
			<Button className="rmt-filters-form__submit-button" type="submit">
				FILTER
			</Button>
			<Button
				className="rmt-filters-form__reset-button"
				type="button"
				onClick={handleClickReset}
			>
				RESET
			</Button>
		</form>
	);
};
