import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
// import { act } from "@testing-library/react-hooks";
import SpendingPerMonth from '../../../src/AccountBook/pages/spendingPerMonth';
import { mockedUseAuth0, mockedDate, mockedGetSpendingPerMonth, mockedGetSpendingCategory, mockedGetSpendingSubcategory } from '../../mock/mockedGetFunctions';


describe('SpendingPerMonth Display', () => {
    test('renders SpendingPerMonth', async () => {
        mockedDate();
        mockedUseAuth0();
        mockedGetSpendingPerMonth();

        let tree = undefined;
        await act(async () => { tree = render(<SpendingPerMonth />) }
        );

        //初期表示
        expect(tree).toMatchSnapshot();

        //食費の詳細を開く
        fireEvent.click(screen.getByText('食費'), {});
        expect(tree).toMatchSnapshot();
    });
});

