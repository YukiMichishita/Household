import React from 'react';
import { render, screen, fireEvent, queryByAttribute } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
// import { act } from "@testing-library/react-hooks";
import CreateSpending from '../../../src/AccountBook/pages/createSpending';
import { mockedDate, mockedUseAuth0, mockedGetSpendingPerMonth, mockedGetSpendingCategory, mockedGetSpendingSubcategory } from '../../mock/mockedGetFunctions';

describe('createSpending Display', () => {
    test('renders createSpending', async () => {
        mockedDate();
        mockedUseAuth0();
        mockedGetSpendingPerMonth();
        mockedGetSpendingCategory();
        mockedGetSpendingSubcategory();

        let tree = undefined;
        await act(async () => { tree = render(<CreateSpending />) }
        );
        expect(tree).toMatchSnapshot();
        fireEvent.mouseDown(screen.getAllByRole('button')[0], {});
        fireEvent.click(screen.getByText('食費'), {});
        fireEvent.mouseDown(screen.getAllByRole('button')[1], {});
        // fireEvent.click(screen.getByText('外食'), {});
        expect(tree).toMatchSnapshot();
    });
});