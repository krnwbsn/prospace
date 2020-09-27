import CompanyForm from './CompanyForm';
import { reduxForm, reset } from 'redux-form';
import validate from './validate';

const afterSubmit = (result, dispatch) => {
  dispatch(reset('CompanyForm'));
}

export default reduxForm({
  form: 'CompanyForm',
  enableReinitialize: true,
  onSubmitSuccess: afterSubmit,
  validate,
})(CompanyForm);
