import * as React from 'react';
import './Introduction.css';
import OLIntroImg from '../../assets/Hillman open lab.jpg';
import OLHeader from '../OLHeader/OLHeader.jsx';
import Container from '@cloudscape-design/components/container';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Box from '@cloudscape-design/components/box';

function Introduction() {
	return (
		<>
			<OLHeader />
			<div className='Introduction'>
				<Container
					media={{
						content: <img src={OLIntroImg} alt='placeholder' />,
						position: 'side',
						width: '50%',
						height: '100&',
					}}
					fitHeight={true}>
					<SpaceBetween direction='vertical' size='s'>
						<SpaceBetween direction='vertical' size='xxs'>
							<Box variant='h1'>
								Welcome to the Open Lab Directory!
							</Box>
							<Box variant='h3'>Open Lab</Box>
						</SpaceBetween>
						<Box variant='p'>
							<br />
							Open Lab @ Hillman is a collaboration between the
							University Center for Teaching and Learning and the
							University Library System. Through workshops, class
							sessions, consultations and trainings, we aim to
							connect the Pitt community with technology for
							hand-on making and experiential learning. Drop in to
							experience virtual reality, learn to 3D print and 3D
							scan, use a vinyl cutter, or laser cut onto
							virtually any material.
							<br />
							<br /> Pitt students, staff, and faculty are all
							welcome at the Open Lab @ Hillman, where you'll find
							support from staff who can provide training and
							guidance. In addition to personal and
							research-related projects, we also provide support
							for course-related projects, including instructional
							design consultations for instructors interested in
							exploring incorporating emerging technologies into
							their teaching.
							<br />
							<br /> The lab is currently equipped with a virtual
							reality workstations, filament and resin 3D
							printers, a vinyl cutter, 360 degree video cameras,
							2D and 3D scanners, and a laser cutter/engraver.
							We'll continue to develop the equipment available
							here, so check back (and let us know what you'd like
							to see!).
							<br />
							<br /> This is a directory for all Open Lab tools,
							equipment, and resources. This site provides the
							functionality to search for any hard to find items,
							update the locations of items, and more. Go to the
							Search tab to hunt down hard to find items. Go to
							the Update tab to make changes to locations when
							things get moved around.
						</Box>
					</SpaceBetween>
				</Container>
			</div>
		</>
	);
}

export default Introduction;
