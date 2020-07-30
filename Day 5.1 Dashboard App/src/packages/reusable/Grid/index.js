import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import products from './data.json.js';

class KendoGrid extends React.Component {
  render() {
    return (
      <Grid
        data={[...products]}
        style={{ height: '400px' }}
      >
        <Column
          field="ProductID"
          title="ID"
          width="40px"
        />
        <Column
          field="ProductName"
          title="Name"
          width="250px"
        />
        <Column
          field="Category.CategoryName"
          title="CategoryName"
        />
        <Column
          field="UnitPrice"
          title="Price"
        />
        <Column
          field="UnitsInStock"
          title="In stock"
        />
        <Column
          cell={props => (
            <td>
              <input
                checked={props.dataItem[props.field]}
                disabled
                type="checkbox"
              />
            </td>
          )}
          field="Discontinued"
        />
      </Grid>
    );
  }
}

export default KendoGrid;
