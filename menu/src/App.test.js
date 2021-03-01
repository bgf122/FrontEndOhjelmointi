import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import TodoTable from './components/TodoTable';
import '@testing-library/jest-dom/extend-expect';
import Todos from './components/Todos';
import { render, fireEvent } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('renderstodotable', () =>  {
  const row = [{desc: 'Goto  coffee', date:'24.11.2019'}]
  const todotable = render(<TodoTable todos={row}/>);

  expect(todotable.container). toHaveTextContent('Goto coffee');
  expect(todotable.container).not.toHaveTextContent('Some text');
})

test('addtodo', () => {
  const { container, getByText, getByPlaceholderText } = render(<Todos/> );

  const desc = getByPlaceholderText('Description');
  fireEvent.change(desc, { target: { value:'Go to coffee' }})

  const date = getByPlaceholderText('Date');
  fireEvent.change(date, { target: { value:'29.11.2019' }})

  const button= getByText('Add');
  fireEvent.click(button);

  expect(container).toHaveTextContent('Go to coffee');
})
