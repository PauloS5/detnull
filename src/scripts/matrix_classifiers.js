import { transpose } from './matrix_operations.js';

export function isProp1(matrix) {
    let isNull;
    for (const line of matrix) {
        isNull = true;
        for (const value of line) {
            if (value != 0) isNull = false;
        }
        if (isNull) return true;
    }

    for (const line of transpose(matrix)) {
        isNull = true;
        for (const value of line) {
            if (value != 0) isNull = false;
        }
        if (isNull) return true;
    }

    return false;
}

export function isProp2(matrix) {
    const transposedMatrix = transpose(matrix);
    let isEqual;

    for (let i = 0; i < 3; i++) {
        for (let j = 1; j <= 2; j++) {
            isEqual = true;
            for (let k = 0; k < 3; k++) {
                if (matrix[i][k] != matrix[(i + j) % 3][k]) {
                    isEqual = false;
                    break;
                }
            }
            if (isEqual) return true;
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 1; j <= 2; j++) {
            isEqual = true;
            for (let k = 0; k < 3; k++) {
                if (transposedMatrix[i][k] != transposedMatrix[(i + j) % 3][k]) {
                    isEqual = false;
                    break;
                }
            }
            if (isEqual) return true;
        }
    }

    return false;
}

export function isProp3(matrix) {
    const transposedMatrix = transpose(matrix);
    let isProportional;

    for (let i = 0; i < 3; i++) {
        for (let j = 1; j <= 2; j++) {
            isProportional = true;
            for (let k = 0; k < 3; k++) {
                if ((matrix[i][k] % matrix[(i + j) % 3][k] !== 0) &&
                    (matrix[(i + j) % 3][k] % matrix[i][k] !== 0)) {
                    isProportional = false;
                    break;
                }
            }
            if (isProportional) return true;
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 1; j <= 2; j++) {
            isProportional = true;
            for (let k = 0; k < 3; k++) {
                if ((transposedMatrix[i][k] % transposedMatrix[(i + j) % 3][k] !== 0) &&
                    (transposedMatrix[(i + j) % 3][k] % transposedMatrix[i][k] !== 0)) {
                    isProportional = false;
                    break;
                }
            }
            if (isProportional) return true;
        }
    }

    return false;
}

export function isProp4(matrix) {
    const transposedMatrix = transpose(matrix);
    let isCombination;

    for (let i = 0; i < 3; i++) {
        isCombination = true;
        for (let j = 0; j < 3; j++) {
            if (matrix[i][j] != matrix[(i + 1) % 3][j] + matrix[(i + 2) % 3][j]) {
                isCombination = false;
                break;
            }
        }
        if (isCombination) return true;
    }

    for (let i = 0; i < 3; i++) {
        isCombination = true;
        for (let j = 0; j < 3; j++) {
            if (transposedMatrix[i][j] != transposedMatrix[(i + 1) % 3][j] + transposedMatrix[(i + 2) % 3][j]) {
                isCombination = false;
                break;
            }
        }
        if (isCombination) return true;
    }

    return false;
}
