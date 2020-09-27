const validation = (name, value, rules) => {
  let message = '';

  for (let idx = 0; idx < rules.length; idx++) {
    if (rules[idx] === 'required' && value === undefined) {
      message = `${name} is required!`;
      break;
    } else if (rules[idx] === 'max-3' && value.length > 3) {
      message = `${name} maximal 3 digits!`;
      break;
    } else if (rules[idx] === 'number' && isNaN(Number(value))) {
      message = `${name} should be number!`;
      break;
    } else if (rules[idx] === 'positive' && value < 0) {
      message = `${name} should be positive number!`
      break;
    }
  }
  return message;
}

export default validation;
