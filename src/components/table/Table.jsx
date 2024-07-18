import React, { useContext, useState } from 'react'

import { Modal } from 'components/modal/Modal'
import { FilterContext } from '@/Context'

import style from './Table.module.scss'

export const Table = () => {
	const columnName = ['ФИО', 'возраст', 'пол', 'номер телефона', 'адрес']

	const [users, setUsers] = useState(0)
	const [loading, setLoading] = useState('loading')
	const [open, setOpen] = useState(false)
	const [currentItem, setCurrentItem] = useState()

	const { search, searchKey, sort, sortKey } = useContext(FilterContext)

	const searchFilter = search && searchKey ? `/filter?key=${searchKey}&value=${search}` : ''
	const sortFilter = sort && sortKey ? `sortBy=${sortKey}&order=${sort}` : ''

	const fetchURL = searchFilter ? `${searchFilter}&${sortFilter}` : `?${sortFilter}`

	React.useEffect(() => {
		setLoading('loading')
		const fetchData = async () => {
			try {
				const response = await fetch(`https://dummyjson.com/users${fetchURL}`)
				const data = await response.json()
				setLoading('fulfilled')
				setUsers(data.users)
			} catch (error) {
				setLoading('reject')
			}
		}
		fetchData()
	}, [searchFilter, sortFilter, fetchURL])

	if (users.length === 0) {
		return <h2 className={style.error}>Таких пользователей нет</h2>
	}
	if (loading === 'reject') {
		return <h2 className={style.error}>Произошла ошибка на сервере</h2>
	}

	return (
		<>
			{loading === 'fulfilled' && (
				<>
					<table className={style.table}>
						<thead>
							<tr>
								{columnName.map((name, id) => (
									<th key={id}>{name}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{users.map(item => (
								<tr
									key={item.id}
									onClick={() => {
										setOpen(true), setCurrentItem(item)
									}}
									className={style.item}
								>
									<td>
										{item.firstName} {item.lastName} {item.maidenName}
									</td>
									<td>{item.age}</td>
									<td>{item.gender}</td>
									<td>{item.phone}</td>
									<td>
										{item.address.city}, {item.address.address}
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<Modal {...currentItem} open={open} setOpen={setOpen} />
				</>
			)}
		</>
	)
}
