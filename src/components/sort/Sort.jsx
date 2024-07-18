import { useContext, useState } from 'react'

import { nameColumn } from 'components/search/Search'
import { FilterContext } from '@/Context'

import style from './Sort.module.scss'

export const Sort = () => {
	const [sortValue, setSortValue] = useState('')
	const [keySortValue, setKeySortValue] = useState('')

	const { setSort, setSortKey } = useContext(FilterContext)

	const changeSortValue = ev => {
		setSortValue(ev.target.value)
		setSort(ev.currentTarget.value)
	}

	const changeSortKeyValue = ev => {
		setKeySortValue(ev.target.value)
		setSortKey(ev.currentTarget.value)
	}

	return (
		<div>
			<div className={style.root}>
				<h1>Сортировка таблицы</h1>
				<select value={keySortValue} onChange={ev => changeSortKeyValue(ev)} className={style.select}>
					{nameColumn.map((obj, id) => (
						<option key={id} value={obj.fetchName}>
							{obj.name}
						</option>
					))}
				</select>
				<select value={sortValue} onChange={ev => changeSortValue(ev)} className={style.select}>
					<option value=''>Без сортировки</option>
					<option value='asc'>По возрастанию</option>
					<option value='desc'>По убыванию</option>
				</select>
			</div>
		</div>
	)
}
