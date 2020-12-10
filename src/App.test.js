import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('there are two buttons on the page', () => {
  const { getAllByRole } = render(<App />);
  const button = screen.getAllByRole('button');
  expect(button.length).toBe(2);
});

test('show the number of contributions in 2016', () => {
  const { getByText } = render(<App />);
  expect(screen.getByText('1,422 contributions in 2016')).toBeInTheDocument();
});

test('show the number of contributions in 2017', () => {
  const { getByText, getByRole } = render(<App />);
  const button2017 = screen.getByRole('button', {name: '2017'});
  fireEvent.click(button2017);
  expect(screen.getByText('3,190 contributions in 2017')).toBeInTheDocument();
});

test('the head of the table has the name of the months in 2016', () => {
  const { getByText } = render(<App />);
  const jan = screen.getByText('Jan');
  expect(jan).toBeInTheDocument();
  const feb = screen.getByText('Feb');
  expect(feb).toBeInTheDocument();
  const mar = screen.getByText('Mar');
  expect(mar).toBeInTheDocument();
  const apr = screen.getByText('Apr');
  expect(apr).toBeInTheDocument();
  const may = screen.getByText('May');
  expect(may).toBeInTheDocument();
  const jun = screen.getByText('Jun');
  expect(jun).toBeInTheDocument();
  const jul = screen.getByText('Jul');
  expect(jul).toBeInTheDocument();
  const aug = screen.getByText('Aug');
  expect(aug).toBeInTheDocument();
  const sep = screen.getByText('Sep');
  expect(sep).toBeInTheDocument();
  const oct = screen.getByText('Oct');
  expect(oct).toBeInTheDocument();
  const nov = screen.getByText('Nov');
  expect(nov).toBeInTheDocument();
  const dec = screen.getByText('Dec');
  expect(dec).toBeInTheDocument();
});

test('the head of the table has the name of the months in 2017', () => {
  const { getByText, getByRole } = render(<App />);
  const button2017 = screen.getByRole('button', {name: '2017'});
  fireEvent.click(button2017);
  const jan = screen.getByText('Jan');
  expect(jan).toBeInTheDocument();
  const feb = screen.getByText('Feb');
  expect(feb).toBeInTheDocument();
  const mar = screen.getByText('Mar');
  expect(mar).toBeInTheDocument();
  const apr = screen.getByText('Apr');
  expect(apr).toBeInTheDocument();
  const may = screen.getByText('May');
  expect(may).toBeInTheDocument();
  const jun = screen.getByText('Jun');
  expect(jun).toBeInTheDocument();
  const jul = screen.getByText('Jul');
  expect(jul).toBeInTheDocument();
  const aug = screen.getByText('Aug');
  expect(aug).toBeInTheDocument();
  const sep = screen.getByText('Sep');
  expect(sep).toBeInTheDocument();
  const oct = screen.getByText('Oct');
  expect(oct).toBeInTheDocument();
  const nov = screen.getByText('Nov');
  expect(nov).toBeInTheDocument();
  const dec = screen.getByText('Dec');
  expect(dec).toBeInTheDocument();
});

test('the days of the week are on table in 2016', () => {
  const { getByText } = render(<App />);
  const mon = screen.getByText('Mon');
  expect(mon).toBeInTheDocument();
  const wed = screen.getByText('Wed');
  expect(wed).toBeInTheDocument();
  const fri = screen.getByText('Fri');
  expect(fri).toBeInTheDocument();
});

test('the days of the week are on table in 2017', () => {
  const { getByText, getByRole } = render(<App />);
  const button2017 = screen.getByRole('button', {name: '2017'});
  fireEvent.click(button2017);
  const mon = screen.getByText('Mon');
  expect(mon).toBeInTheDocument();
  const wed = screen.getByText('Wed');
  expect(wed).toBeInTheDocument();
  const fri = screen.getByText('Fri');
  expect(fri).toBeInTheDocument();
});

test('the scales are on the page', () => {
  const { getByText } = render(<App />);
  const less = screen.getByText('Less');
  expect(less).toBeInTheDocument();
  const more = screen.getByText('More');
  expect(more).toBeInTheDocument();
});

test('there is a table on the page in 2016', () => {
  const { getByRole } = render(<App />);
  const table = screen.getByRole('table');
  expect(table).toBeInTheDocument();
});

test('there is a table on the page in 2017', () => {
  const { getByRole } = render(<App />);
  const button2017 = screen.getByRole('button', {name: '2017'});
  fireEvent.click(button2017);
  const table = screen.getByRole('table');
  expect(table).toBeInTheDocument();
});
