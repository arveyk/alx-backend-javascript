/// <reference path="crud.d.ts"/>
import { RowID, RowElement } from './interface.ts';
import * as CRUD from './crud.js';

const row: RowElement = {
  firstName: 'Guillame',
  lastName: 'Salva',
}

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {
  fistName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
