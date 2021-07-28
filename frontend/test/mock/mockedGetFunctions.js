import * as getSPM from '../../src/AccountBook/api/getSpendingPerMonth';
import * as getSC from '../../src/AccountBook/api/getSpendingCategory';
import * as getSSC from '../../src/AccountBook/api/getSpendingSubCategory';
import * as auth0 from '@auth0/auth0-react';
import { spendingPerMonthData } from '../constants/spendingPerMonth';
import { spendingCategoryData } from '../constants/spendingCategory';
import { spendingSubcategoryData } from '../constants/spendingSubCategory';

const mockDate = new Date(1621921368000);
export const mockedDate = () => { return jest.spyOn(global, "Date").mockImplementation(() => mockDate) };
export const mockedUseAuth0 = () => { return jest.spyOn(auth0, "useAuth0").mockReturnValue({ user: "", getAccessTokenSilently: (() => { }), isAuthenticated: true }) };

export const mockedGetSpendingPerMonth = () => { return jest.spyOn(getSPM, "getSpendingPerMonth").mockImplementation(async () => { return spendingPerMonthData }) };
export const mockedGetSpendingCategory = () => { return jest.spyOn(getSC, "getSpendingCategory").mockImplementation(async () => { return spendingCategoryData }) };
export const mockedGetSpendingSubcategory = () => { return jest.spyOn(getSSC, "getSpendingSubCategory").mockImplementation(async () => { return spendingSubcategoryData }) };
