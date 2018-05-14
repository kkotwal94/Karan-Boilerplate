import { mergeTypes } from 'merge-graphql-schemas';
import productType from './products';
import userType from './users';
import attributeType from './attributes';
import brandType from './brands';
import categoryType from './categories';
import colorType from './colors';
import descriptionType from './description';
import facetType from './facets';
import metaType from './meta';
import pricingType from './pricing';
import sizeType from './sizes';
import summaryType from './summary';
import supplierType from './suppliers';
import variantType from './variants';

const types = [
  productType,
  userType,
  attributeType,
  brandType,
  categoryType,
  colorType,
  descriptionType,
  facetType,
  metaType,
  pricingType,
  sizeType,
  summaryType,
  supplierType,
  variantType,
];

export default mergeTypes(types, { all: true });
