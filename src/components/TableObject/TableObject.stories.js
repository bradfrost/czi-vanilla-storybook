import React from 'react';
import TableObject from './TableObject';
import Table from '../Table';
import TableHeader from '../TableHeader';
import TableBody from '../TableBody';
import TableFooter from '../TableFooter';
import TableRow from '../TableRow';
import TableCell from '../TableCell';

export default {
  title: 'Organisms/Tables/Table Object',
  component: TableObject
};

const tableColumns = [
  {
    title: 'Table Column 1'
  },
  {
    title: 'Table Column 2'
  },
  {
    title: 'Table Column 3'
  }
];

const tableRows = [
  {
    value1: 'Table Row 1, Table Cell 1',
    value2: 'Table Row 1, Table Cell 2',
    value3: 'Table Row 1, Table Cell 3'
  },
  {
    value1: 'Table Row 2, Table Cell 1',
    value2: 'Table Row 2, Table Cell 2',
    value3: 'Table Row 2, Table Cell 3'
  },
  {
    value1: 'Table Row 3, Table Cell 1',
    value2: 'Table Row 3, Table Cell 2',
    value3: 'Table Row 3, Table Cell 3'
  },
  {
    value1: 'Table Row 4, Table Cell 1',
    value2: 'Table Row 4, Table Cell 2',
    value3: 'Table Row 4, Table Cell 3'
  }
];

const Template = args => (
  <TableObject {...args}>
    <Toolbar />
    <Table>
      <TableHeader>
        <TableRow>
          {tableColumns.map(function(item, index) {
            return (
              <TableCell tagName="th" key={'cn-c-table-cell-' + index}>
                {item.title}
              </TableCell>
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableRows.map(function(item, index) {
          return (
            <TableRow key={'cn-c-table-row-' + index}>
              <TableCell data-label={tableColumns[0].title}>
                {item.value1}
              </TableCell>
              <TableCell data-label={tableColumns[1].title}>
                {item.value2}
              </TableCell>
              <TableCell data-label={tableColumns[2].title}>
                {item.value3}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>Table footer</TableFooter>
    </Table>
    <Toolbar />
  </TableObject>
);

export const Default = Template.bind({});
Default.args = {};
