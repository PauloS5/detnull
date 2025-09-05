import { transpose } from './matrix_operations.js';

// Gera uma matriz 3x3 nula
function generateNullMatrix() {
    return [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
}

// Gera uma matriz 3x3 com valores aleatórios
function generateGenericMatrix(max = 20) {
    const matrix = generateNullMatrix();
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            matrix[i][j] = Math.floor(Math.random() * max) + 1;
        }
    }
    return matrix;
}

// Matriz com linha ou coluna nula (Propriedade 1)
export function generateMatrixProp1() {
    const isTransposed = Math.floor(Math.random() * 2);
    const groupNumber = Math.floor(Math.random() * 3);
    const matrix = generateGenericMatrix();

    for (let i = 0; i < 3; i++) {
        matrix[groupNumber][i] = 0;
    }

    return isTransposed ? transpose(matrix) : matrix;
}

export function generateMatrixProp2() {
    function linhaAleatoria() {
        return [0, 0, 0].map(function () { return Math.floor(Math.random() * 20) + 1 });
    }
    var duplicarLinha = Math.random() < 0.5;
    var matriz = [];
    if (duplicarLinha) {
        // Duas linhas iguais
        var linha1 = linhaAleatoria();
        var linha2 = linhaAleatoria();
        var idxDuplicada = Math.random() < 0.5 ? 0 : 1;
        matriz = [
            idxDuplicada === 0 ? linha1 : linha2,
            idxDuplicada === 0 ? linha1 : linha2,
            idxDuplicada === 0 ? linha2 : linha1,
        ];
        // Embaralha as linhas para não ficar sempre igual
        matriz = matriz.sort(function () { return Math.random() - 0.5; });
    } else {
        // Duas colunas iguais
        var col1 = linhaAleatoria();
        var col2 = linhaAleatoria();
        var idxDuplicada = Math.random() < 0.5 ? 0 : 1;
        // Monta a matriz coluna a coluna, sem embaralhar as colunas
        for (var i = 0; i < 3; i++) {
            var linha = [
                idxDuplicada === 0 ? col1[i] : col2[i],
                idxDuplicada === 0 ? col1[i] : col2[i],
                idxDuplicada === 0 ? col2[i] : col1[i],
            ];
            matriz.push(linha);
        }
    }
    return matriz;
}

// Matriz com linhas ou colunas proporcionais (Propriedade 3)
export function generateMatrixProp3() {
    const isTransposed = Math.floor(Math.random() * 2);
    const groupNumber1 = Math.floor(Math.random() * 3);
    let groupNumber2;
    do {
        groupNumber2 = Math.floor(Math.random() * 3);
    } while (groupNumber2 === groupNumber1);

    const coefficient = Math.floor(Math.random() * 3) + 2;
    const matrix = generateGenericMatrix();

    for (let i = 0; i < 3; i++) {
        matrix[groupNumber1][i] = Math.floor(Math.random() * 5) + 1;
    }

    for (let j = 0; j < 3; j++) {
        matrix[groupNumber2][j] = matrix[groupNumber1][j] * coefficient;
    }

    return isTransposed ? transpose(matrix) : matrix;
}

// Matriz com uma linha como combinação linear de outras (Propriedade 4)
export function generateMatrixProp4() {
    const isTransposed = Math.floor(Math.random() * 2);
    const groupNumber = Math.floor(Math.random() * 3);
    const matrix = generateGenericMatrix(10);

    for (let i = 0; i < 3; i++) {
        matrix[groupNumber][i] =
            matrix[(groupNumber + 1) % 3][i] +
            matrix[(groupNumber + 2) % 3][i];
    }

    return isTransposed ? transpose(matrix) : matrix;
}
