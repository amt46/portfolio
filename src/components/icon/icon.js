import React from 'react'

const Icon = ({children, cls, onClick}) => {
	
	return (
		<div onClick={onClick} className={`${cls} wr-flex m-5 wpx-30 hpx-30 tr cp p-5 text-black fs-20 bdr-50 bg-pink-300 hover:bg-stone-400 hover:text-white`} >
			{children}
		</div>
	)
}

export default Icon
