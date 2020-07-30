import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const AccountDetails = props => {
  const {
    touched,
    values,
    errors,
    isSubmitting,
    handleSubmit,
    handleBlur,
    handleChange,
    handleReset
  } = props;

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            disabled
            error={touched.flowid && Boolean(errors.flowid)}
            fullWidth
            helperText={touched.flowod ? errors.flowid : ''}
            id="flowid"
            label="Flow Id"
            margin="dense"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.flowid}
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <TextField
            disabled
            error={touched.flowstatus && Boolean(errors.flowstatus)}
            fullWidth
            helperText={touched.flowstatus ? errors.flowstatus : ''}
            id="flowstatus"
            label="Overall Flow Status"
            margin="dense"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.flowstatus}
            variant="outlined"
          />
        </Grid>
      </Grid>
      <div style={{'padding': '15px'}}>
        <Button
          color="primary"
          disabled={isSubmitting}
          type="submit"
          variant="contained"
        >
            Save Details
        </Button>
        <Button
          color="secondary"
          onClick={handleReset}
          variant="contained"
        >
            Clear
        </Button>
      </div>
    </form>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string
};


const Form = withFormik({
  mapPropsToValues: ({
    flowid,
    flowstatus,
    subcontract,
    deliverymethod,
    contractId,
    customer,
    template,
    asgmanager,
    billtype,
    specialprojectname,
    jobreceiveddate,
    estimatehours,
    jobduedate,
    actualjobhours,
    ecd,
    jobcomplete,
    acs,
    searchtag,
  }) => {
    return {
      flowid : flowid || '',
      flowstatus: flowstatus || '',
      subcontract : subcontract || '',
      deliverymethod: deliverymethod || '',
      contractId: contractId || '',
      customer: customer || '',
      template: template || '',
      asgmanager: asgmanager || '',
      billtype: billtype || '',
      specialprojectname: specialprojectname || '',
      jobreceiveddate: jobreceiveddate || '',
      estimatehours: estimatehours || '',
      jobduedate: jobduedate || '',
      actualjobhours: actualjobhours || '',
      ecd: ecd || '',
      jobcomplete: jobcomplete || '',
      acs: acs || '',
      searchtag: searchtag || '',
    };
  },

  validationSchema: Yup.object().shape({
    subcontract: Yup.string().required('Required'),
    customer: Yup.string().required('Required'),
    billtype: Yup.string().required('Required'),
    deliverymethod: Yup.string().required('Required'),
    asgmanager: Yup.string().required('Required'),
  }),

  handleSubmit: (values, props) => {
    setTimeout(() => {
      // submit to the server
      alert(JSON.stringify(values, null, 2));
      console.log(props);
      props.props.handleSubmitForm(values);
    }, 1000);
  }
})(AccountDetails);

export default (Form);
