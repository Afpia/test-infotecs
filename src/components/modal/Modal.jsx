import { RxCross1 } from 'react-icons/rx'
import { useRef } from 'react'

import style from './Modal.module.scss'

export const Modal = ({
	firstName,
	lastName,
	maidenName,
	age,
	address,
	weight,
	height,
	open,
	phone,
	email,
	setOpen
}) => {
	const refOverlay = useRef(null)

	return (
		<div ref={refOverlay} className={open ? style.overlayShow : style.overlay} onClick={() => setOpen(false)}>
			<div className={style.modal} onClick={ev => ev.stopPropagation()}>
				<p>
					ФИО: {firstName} {lastName} {maidenName}
				</p>
				<p>Возраст: {age}</p>
				<p>
					Адрес: {address?.city} {address?.address}
				</p>
				<p>Рост: {height}</p>
				<p>Вес: {weight}</p>
				<p>Телефон: {phone}</p>
				<p>Почта: {email}</p>
				<RxCross1 size={30} className={style.cross} onClick={() => setOpen(false)} />
			</div>
		</div>
	)
}
