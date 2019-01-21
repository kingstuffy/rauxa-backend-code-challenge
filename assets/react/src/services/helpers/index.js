import isEmpty from 'lodash/isEmpty';
import has from 'lodash/has';
import keys from 'lodash/keys';

const checkFormFields = (values, numberOfFields) => {
  if (isEmpty(values) || has(values, 'undefined') || keys(values).length < numberOfFields) {
    return true;
  }
  return false;
};

export default checkFormFields;
