import './Update.css';
import React, { useState } from 'react';
import { useApplicationContext } from '../../context/ApplicationContext.jsx';
import OLHeader from '../OLHeader/OLHeader.jsx';
import Multiselect from '@cloudscape-design/components/multiselect';
import Autosuggest from '@cloudscape-design/components/autosuggest';
import Form from '@cloudscape-design/components/form';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import FormField from '@cloudscape-design/components/form-field';
import Input from '@cloudscape-design/components/input';

function Update() {
	const { items, locations } = useApplicationContext();
	const [value, setValue] = React.useState('');
	const [selectedOptions, setSelectedOptions] = useState([]);

	return (
		<>
			<OLHeader />
			<div className='form'>
				<form onSubmit={(e) => e.preventDefault()}>
					<Form
						actions={
							<SpaceBetween direction='horizontal' size='s'>
								<Button formAction='none' variant='link'>
									Cancel
								</Button>
								<Button variant='primary'>Submit</Button>
							</SpaceBetween>
						}>
						<Container
							header={
								<Header variant='h2'>
									Update Directory Form
								</Header>
							}>
							<SpaceBetween direction='vertical' size='l'>
								<FormField label='Item'>
									<div className='input'>
										<Autosuggest
											onChange={({ detail }) =>
												setValue(detail.value)
											}
											value={value}
											options={items}
											ariaLabel='Autosuggest example with suggestions'
											placeholder='Enter value'
											empty='No matches found'
										/>
									</div>
								</FormField>
								<FormField label='Location'>
									<div className='input'>
										<Multiselect
											selectedOptions={selectedOptions}
											onChange={({ detail }) =>
												setSelectedOptions(
													detail.selectedOptions
												)
											}
											options={locations}
											placeholder='Choose options'
										/>
									</div>
								</FormField>
								<FormField label='Third field'>
									<Input />
								</FormField>
							</SpaceBetween>
						</Container>
					</Form>
				</form>
			</div>
		</>
	);
}

export default Update;
