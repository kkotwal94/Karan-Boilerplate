import _ from 'lodash';
import Brand from '../models/brands';

export function all(req, res) {
  Brand.find({}).exec((err, Brands) => {
    if (err) {
      console.log("Can't fetch all Brands");
      return res.status(500);
    }
    return res.json(Brands);
  });
}

export function add(req, res) {
  Brand.create(req.body, err => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    return res.status(200).send('OK');
  });
}

export function update(req, res) {
  const query = { id: req.params.name };
  const isIncrement = req.body.isIncrement;
  const omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull'];
  const data = _.omit(req.body, omitKeys);
  console.log(data);
  Brand.findOneAndUpdate(query, data, { new: true }, err => {
    if (err) {
      console.log('Error on save');
      return res.status(500);
    }

    return res.status(200).send('Updated successfully');
  });
}

export function remove(req, res) {
  const query = { id: req.params.id };
  Brand.findOneAndRemove(query, err => {
    if (err) {
      console.log('Error on delete');
      return res.status(500).send('We failed to delete for some reason');
    }
    return res.status(200).send('Removed successfully');
  });
}

export default {
  all,
  add,
  update,
  remove,
};
