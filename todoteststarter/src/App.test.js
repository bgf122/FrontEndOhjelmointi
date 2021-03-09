import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoTable from './TodoTable';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('renderstodotable', () =>  {
  const row = [{desc: 'Go to coffee', date:'24.11.2019'}]
  const todotable = render(<TodoTable todos={row}/>);

  expect(todotable.container).toHaveTextContent('Go to coffee');
  expect(todotable.container).not.toHaveTextContent('Some text');
})

test('addtodo', () => {
  const { container, getByText, getByPlaceholderText } = render(<App/> );

  const desc = getByPlaceholderText('Description');
  fireEvent.change(desc, { target: { value:'Go to coffee' }})

  const date = getByPlaceholderText('Date');
  fireEvent.change(date, { target: { value:'29.11.2019' }})

  const addButton = getByText('Add');
  fireEvent.click(addButton);

  expect(container).toHaveTextContent('Go to coffee');

  const clearButton = getByText('Clear');
  fireEvent.click(clearButton);

  expect(container).not.toHaveTextContent('Go to coffee');
})
