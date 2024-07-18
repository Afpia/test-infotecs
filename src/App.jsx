import { Search } from 'components/search/Search'
import { Table } from 'components/table/Table'
import { Sort } from 'components/sort/Sort'

export const App = () => {
	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'center', gap: 50 }}>
				<Search />
				<Sort />
			</div>
			<Table />
		</>
	)
}
