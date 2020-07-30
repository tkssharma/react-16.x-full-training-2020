import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import containerCtx from '../../../container/context';

class KendoGrid extends React.Component {

  componentDidMount(){
    console.log(this.context.state);
  }
  render() {
    const jobs = this.context.state && this.context.state.jobs
    return (
      <Grid
        data={jobs}
        style={{ height: '400px', 'padding': '15px' }}
      >
        <Column
          field="ID"
          title="ID"
        />
        <Column
          field="deliverymethod"
          title="Delivery Method"
        />
        <Column
          field="subcontract"
          title="Sub Contract"
        />
        <Column
          field="contractId"
          title="Contract id"
        />
        <Column
          field="subcontractid"
          title="Sub Contract id"
        />
        <Column
          field="billtype"
          title="Bill Type"
        />
        <Column
          field="template"
          title="Template"
        />
        <Column
          field="asgmanager"
          title="Asg Manager"
        />
        <Column
          field="jobreceiveddate"
          title="Job Received Date"
        />
      </Grid>
    );
  }
}

KendoGrid.contextType = containerCtx;
export default KendoGrid;
