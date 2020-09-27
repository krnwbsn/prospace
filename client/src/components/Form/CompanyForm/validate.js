import validation from '../../../utils/validation';

const validate = (values) => {
  const errors = {
    companyName: validation('Company Name', values.companyName, ['required']),
    companyAddress: validation('Company Address', values.companyAddress, [
      'required',
    ]),
    companyRevenue: validation('Company Revenue', values.companyRevenue, [
      'required', 'positive'
    ]),
    code: validation('Code and Number', values.code, ['required', 'number', 'positive']),
    number: validation('Code and Number', values.number, ['required', 'number', 'positive']),
  };

  return errors;
};

export default validate;
