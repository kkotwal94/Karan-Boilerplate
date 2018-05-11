import { mergeTypes } from 'merge-graphql-schemas';
import productType from './products';
import userType from './users';

const types = [productType, userType];

export default mergeTypes(types, { all: true });
