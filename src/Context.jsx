import React, { useState } from 'react'
export const FilterContext = React.createContext()

export const Context = ({ children }) => {
	const [search, setSearch] = useState('')
	const [searchKey, setSearchKey] = useState('firstName')

	const [sort, setSort] = useState('')
	const [sortKey, setSortKey] = useState('firstName')
	return (
		<FilterContext.Provider
			value={{
				search,
				setSearch,
				searchKey,
				setSearchKey,
				sort,
				setSort,
				sortKey,
				setSortKey
			}}
		>
			{children}
		</FilterContext.Provider>
	)
}
