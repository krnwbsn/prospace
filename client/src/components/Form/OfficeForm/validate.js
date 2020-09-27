import validation from '../../../utils/validation';

const validate = (values) => {
  const errors = {
    companyId: validation('Company', values.companyId, ['required']),
    officeName: validation('Office Name', values.officeName, ['required']),
    lat: validation('Latitude and Longitude', values.lat, [
      'required',
      'number',
      'positive',
    ]),
    log: validation('Latitude and Longitude', values.log, [
      'required',
      'number',
      'positive',
    ]),
    startDate: validation('Date', values.startDate, ['required']),
  };

  return errors;
};

export default validate;
