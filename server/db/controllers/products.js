import _ from 'lodash';
import Product from '../models/products';

export function all(req, res) {
  Product.find({}).exec((err, products) => {
    if (err) {
      console.log("Can't fetch all products");
      return res.status(500);
    }
    return res.json(products);
  });
}

export function add(req, res) {
  Product.create(req.body, err => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    return res.status(200).send('OK');
  });
}

export default {
  all,
  add,
};
