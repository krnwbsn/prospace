import OfficeForm from './OfficeForm';
import { reduxForm, reset } from 'redux-form';
import validate from './validate';

const afterSubmit = (result, dispatch) => {
  dispatch(reset('OfficeForm'));
}

export default reduxForm({
  form: 'OfficeForm',
  enableReinitialize: true,
  onSubmitSuccess: afterSubmit,
  validate,
})(OfficeForm);
