import { useContext, useState } from 'react'

import { FilterContext } from '@/Context'

import style from './Search.module.scss'

export const nameColumn = [
	{ fetchName: 'firstName', name: 'Имя' },
	{ fetchName: 'lastName', name: 'Фамилия' },
	{ fetchName: 'maidenName', name: 'Отчество' },
	{ fetchName: 'age', name: 'Возраст' },
	{ fetchName: 'gender', name: 'Пол' },
	{ fetchName: 'phone', name: 'Телефон' },
	{ fetchName: 'address.city', name: 'Город' },
	{ fetchName: 'address.address', name: 'Адрес' }
]

export const Search = () => {
	const [value, setValue] = useState('')
	const [keyValue, setKeyValue] = useState('')

	const { setSearch, setSearchKey } = useContext(FilterContext)

	const valueInter = ev => {
		setValue(ev.target.value)
		setSearch(ev.target.value)
	}
	const keyValueInter = ev => {
		setKeyValue(ev.target.value)
		setSearchKey(ev.currentTarget.value)
	}

	return (
		<div className={style.root}>
			<h1>Поиск таблицы</h1>
			<select value={keyValue} className={style.select} onChange={ev => keyValueInter(ev)}>
				{nameColumn.map((obj, id) => (
					<option key={id} value={obj.fetchName}>
						{obj.name}
					</option>
				))}
			</select>
			<input className={style.input} value={value} type='text' onChange={ev => valueInter(ev)} />
		</div>
	)
}
