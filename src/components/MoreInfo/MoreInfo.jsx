import React from 'react';
import HelpPanel from '@cloudscape-design/components/help-panel';
import Icon from '@cloudscape-design/components/icon';
import './MoreInfo.css';
import OLHeader from '../OLHeader/OLHeader.jsx';

function MoreInfo() {
	return (
		<>
			<OLHeader />
			<div className='HelpPanel'>
				<HelpPanel
					footer={
						<div>
							<h3 className='MoreInfoh3'>
								Learn more <Icon name='external' />
							</h3>
							<ul>
								<li>
									<a href='https://github.com/nickusme/Open-Lab-Flask-Server'>
										Link to web server repository
									</a>
								</li>
								<li>
									<a href=''>Link to web client repository</a>
								</li>
							</ul>
							<br />
						</div>
					}
					header={
						<h2 className='MoreInfoh2'>
							Thanks for using the Open Lab Directory!
						</h2>
					}>
					<div>
						<p className='MoreInfop'>
							When encountering issues with this site, feel free
							to contact <b className='MoreInfob'>Nick Usme</b>{' '}
							<i className='MoreInfoi'>(niu3@pitt.edu)</i> or{' '}
							<b className='MoreInfob'>Stephen Grenesko</b>{' '}
							<i className='MoreInfoi'>(srg80@pitt.edu)</i>.
						</p>

						<h3 className='MoreInfoh3'> Project Details</h3>
						<p className='MoreInfop'>
							This is a simple project built using{' '}
							<b className='MoreInfob'>JavaScript and ReactJS</b>,
							along with a{' '}
							<b className='MoreInfob'>Flask Python web server</b>
							. Several UI components were borrowed from the{' '}
							<b className='MoreInfob'>
								Cloudscape Design System
							</b>
							.
						</p>
						<ul>
							<li>
								<a href='https://react.dev'>
									React for JavaScript
								</a>
							</li>
							<li>
								<a href='https://cloudscape.design'>
									Cloudscape Design System
								</a>
							</li>
							<li>
								<a href='https://flask.palletsprojects.com/en/3.0.x/#'>
									Flask: A Python micro-web framework{' '}
								</a>
							</li>
						</ul>
					</div>
				</HelpPanel>
			</div>
		</>
	);
}

export default MoreInfo;
