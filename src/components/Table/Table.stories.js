import React from 'react';
import Table from './Table';
import TableHeader from '../TableHeader';
import TableBody from '../TableBody';
import TableRow from '../TableRow';
import TableCell from '../TableCell';
import Button from '../Button';

export default {
  title: 'Organisms/Tables/Table',
  component: Table
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
  <Table {...args}>
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
  </Table>
);

export const Default = Template.bind({});
Default.args = {};

export const Lined = Template.bind({});
Lined.args = { variant: 'lined' };

export const StackedWithFirstCellHeading = Template.bind({});
StackedWithFirstCellHeading.args = { behavior: 'stacked' };

export const StackedWithoutFirstCellHeading = Template.bind({});
StackedWithoutFirstCellHeading.args = {
  behavior: 'stacked',
  stackedFirstCellAsHeading: false
};

export const Condensed = Template.bind({});
Condensed.args = { size: 'condensed' };

export const Fixed = Template.bind({});
Fixed.args = { size: 'condensed' };

export const BareRows = () => (
  <Table variant="fixed">
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
          <TableRow variant="bare" key={'cn-c-table-row-' + index}>
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
  </Table>
);

export const SelectableTableRows = () => (
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
          <TableRow behavior="clickable" key={'cn-c-table-row-' + index}>
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
  </Table>
);

export const StickyHeader = () => (
  <Table behavior="sticky-header">
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
          <TableRow variant="bare" key={'cn-c-table-row-' + index}>
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
  </Table>
);

export const Grid = () => (
  <Table variant="grid">
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
          <TableRow variant="bare" key={'cn-c-table-row-' + index}>
            <TableCell data-label={tableColumns[0].title}>
              {item.value1}
            </TableCell>
            <TableCell data-label={tableColumns[1].title}>
              {item.value2}
            </TableCell>
            <TableCell data-label={tableColumns[2].title}>
              {item.value3}
            </TableCell>
            <TableCell data-label={tableColumns[2].title}>hello</TableCell>
            <TableCell data-label={tableColumns[2].title}>
              new column here
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);

export const AlignTableCellContentLeft = () => (
  <Table>
    <TableHeader>
      <TableRow>
        {tableColumns.map(function(item, index) {
          return (
            <TableCell
              alignment="left"
              tagName="th"
              key={'cn-c-table-cell-' + index}
            >
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
            <TableCell alignment="left" data-label={tableColumns[0].title}>
              {item.value1}
            </TableCell>
            <TableCell alignment="left" data-label={tableColumns[1].title}>
              {item.value2}
            </TableCell>
            <TableCell alignment="left" data-label={tableColumns[2].title}>
              {item.value3}
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);

export const AlignTableCellContentInsetLeft = () => (
  <Table>
    <TableHeader>
      <TableRow>
        {tableColumns.map(function(item, index) {
          return (
            <TableCell
              alignment="insetLeft"
              tagName="th"
              key={'cn-c-table-cell-' + index}
            >
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
            <TableCell alignment="insetLeft" data-label={tableColumns[0].title}>
              {item.value1}
            </TableCell>
            <TableCell alignment="insetLeft" data-label={tableColumns[1].title}>
              {item.value2}
            </TableCell>
            <TableCell alignment="insetLeft" data-label={tableColumns[2].title}>
              {item.value3}
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);

export const AlignTableCellContentCenter = () => (
  <Table>
    <TableHeader>
      <TableRow>
        {tableColumns.map(function(item, index) {
          return (
            <TableCell
              alignment="center"
              tagName="th"
              key={'cn-c-table-cell-' + index}
            >
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
            <TableCell alignment="center" data-label={tableColumns[0].title}>
              {item.value1}
            </TableCell>
            <TableCell alignment="center" data-label={tableColumns[1].title}>
              {item.value2}
            </TableCell>
            <TableCell alignment="center" data-label={tableColumns[2].title}>
              {item.value3}
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);

export const AlignTableCellContentRight = () => (
  <Table>
    <TableHeader>
      <TableRow>
        {tableColumns.map(function(item, index) {
          return (
            <TableCell
              alignment="right"
              tagName="th"
              key={'cn-c-table-cell-' + index}
            >
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
            <TableCell alignment="right" data-label={tableColumns[0].title}>
              {item.value1}
            </TableCell>
            <TableCell alignment="right" data-label={tableColumns[1].title}>
              {item.value2}
            </TableCell>
            <TableCell alignment="right" data-label={tableColumns[2].title}>
              {item.value3}
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);

export const VerticalAlignTableCellContentCenter = () => (
  <Table>
    <TableHeader>
      <TableRow>
        {tableColumns.map(function(item, index) {
          return (
            <TableCell
              verticalAlignment="center"
              tagName="th"
              key={'cn-c-table-cell-' + index}
            >
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
            <TableCell
              verticalAlignment="center"
              data-label={tableColumns[0].title}
            >
              {item.value1}
            </TableCell>
            <TableCell
              verticalAlignment="center"
              data-label={tableColumns[1].title}
            >
              {item.value2}
            </TableCell>
            <TableCell
              verticalAlignment="center"
              data-label={tableColumns[2].title}
            >
              <Button text="Button" />
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);
