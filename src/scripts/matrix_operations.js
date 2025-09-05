// As funções deste arquivo são para auxiliar na manipulação de matrizes 3x3

// Função para calcular o determinante de uma matriz 3x3
export function detOf(matrix) {
    let det = 0;
    let cofactor = 0;
    let valuesOfSubMatrix = [];

    for (let i = 0; i < matrix.length; i++) {
        valuesOfSubMatrix = [];

        for (let j = 1; j < matrix.length; j++) {
            for (let k = 0; k < matrix.length; k++) {
                if (k != i) {
                    valuesOfSubMatrix.push(matrix[j][k]);
                }
            }
        }

        cofactor = Math.pow(-1, i + 1) *
            (valuesOfSubMatrix[1] * valuesOfSubMatrix[2] -
                valuesOfSubMatrix[0] * valuesOfSubMatrix[3]);

        det += cofactor * matrix[0][i];
    }

    return det;
}

// Função para transpor uma matriz 3x3
export function transpose(matrix) {
    const transposedMatrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            transposedMatrix[i][j] = matrix[j][i];
        }
    }

    return transposedMatrix;
}

// Função para exibir uma matriz no console
export function printMatrix(matrix) {
    let line;
    for (let i = 0; i < matrix.length; i++) {
        line = "";
        for (let j = 0; j < matrix[i].length; j++) {
            line += matrix[i][j] + " ";
        }
        console.log(line);
    }
    console.log("\n");
}
