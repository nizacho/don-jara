document.addEventListener('DOMContentLoaded', function () {
    const inputElementsA = () => document.querySelectorAll('.input-a');
    const inputElementsB = () => document.querySelectorAll('.input-b');
    const inputElementsC = () => document.querySelectorAll('.input-c');

    const totalElementA = document.getElementById('total-a');
    const totalElementB = document.getElementById('total-b');
    const totalElementC = document.getElementById('total-c');

    function calculateTotal(inputElements, totalElement) {
        let total = 0;
        inputElements.forEach(input => {
            const value = parseFloat(input.value) || 0;
            total += value;
            updateInputColor(input, value);
        });
        totalElement.textContent = total;
        updateTotalColor(totalElement, total);
    }

    function updateInputColor(inputElement, value) {
        if (value > 0) {
            inputElement.style.color = 'green';
        } else if (value < 0) {
            inputElement.style.color = 'red';
        } else {
            inputElement.style.color = 'black';
        }
    }

    function updateTotalColor(totalElement, total) {
        if (total > 0) {
            totalElement.style.color = 'green';
        } else if (total < 0) {
            totalElement.style.color = 'red';
        } else {
            totalElement.style.color = 'black';
        }
    }

    function updateTotals() {
        calculateTotal(inputElementsA(), totalElementA);
        calculateTotal(inputElementsB(), totalElementB);
        calculateTotal(inputElementsC(), totalElementC);
    }

    function addRow() {
        const tableBody = document.getElementById('table-body');
        const newRow = document.createElement('tr');
        
        newRow.innerHTML = `
            <td><input type="number" step="100" value="0" class="input-a"></td>
            <td><input type="number" step="100" value="0" class="input-b"></td>
            <td><input type="number" step="100" value="0" class="input-c"></td>
        `;

        tableBody.appendChild(newRow);

        // 新しい入力フィールドにもイベントリスナーを追加
        newRow.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', updateTotals);
        });

        // 合計を更新
        updateTotals();
    }

    // 初期計算
    updateTotals();

    // 各入力フィールドにイベントリスナーを追加
    [...inputElementsA(), ...inputElementsB(), ...inputElementsC()].forEach(input => {
        input.addEventListener('input', updateTotals);
    });

    // ボタンにイベントリスナーを追加
    document.getElementById('add-row').addEventListener('click', addRow);
});
