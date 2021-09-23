//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(array) {
    this.matrix = array.split('\n')
  }

  treatmentNewMatrixRows() {
    return this.matrix.map((array) => array.split(" ").map((string) => Number(string)));
  }

  treatmentNewMatrixColumns() {
    const matrix = this.rows;
    return this.rows[0].map((_, index) => matrix.map((row) => row[index]));
  }

  get rows() {
    return this.treatmentNewMatrixRows();
  }

  get columns() {
    return this.treatmentNewMatrixColumns();
  }
}
