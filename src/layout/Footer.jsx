import React from 'react';
import { faGithub, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faBalanceScale, faDownload } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import ExpandableIcon from '../components/ExpandableIcon';
import Logo from '../components/Logo';

export default function Footer() {
	const history = useHistory();

	return (
		<footer className='footer --hide-from-pdf'>
			<div className='footer__actions'>
				<button
					className='footer__btn footer__btn--html'
					type='button'
					onClick={() => {
						history.push('/resume-full');
					}}
				>
					<ExpandableIcon icon={faHtml5} text='Resumé in HTML' />
				</button>
			</div>
			<div className='footer__copyright'>
				<Logo small />
				<span>{`Near Huscarl © ${new Date().getFullYear()}`}</span>
			</div>
			<div className='footer__icons'>
				<a
					className='footer__link'
					href='https://github.com/NearHuscarl/portfolio/blob/master/LICENSE.md'
				>
					<ExpandableIcon icon={faBalanceScale} text='MIT License' />
				</a>
				<a
					className='footer__link'
					href='https://github.com/nearhuscarl/portfolio'
				>
					<ExpandableIcon
						icon={faGithub}
						text='Source Code'
						rotate
						noPadding
					/>
				</a>
			</div>
		</footer>
	);
}
