import React from 'react'
import ReactDOM from 'react-dom/client'

import { Context } from '@/Context'
import { App } from '@/App'

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Context>
			<App />
		</Context>
	</React.StrictMode>
)
