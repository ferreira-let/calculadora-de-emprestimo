document.addEventListener('DOMContentLoaded', function () {
        const btnCalcular = document.getElementById('btnCalcular');
        btnCalcular.addEventListener('click', calcularEmprestimo);
    
        function calcularEmprestimo() {
            const nomeContratante = document.getElementById('inContratante').value;
            const valorEmprestimo = parseFloat(document.getElementById('inValor').value);
            const numParcelas = parseInt(document.getElementById('inParcela').value);
            const taxaJuros = parseFloat(document.getElementById('inJuros').value) / 100;
    
            const valorParcela = (valorEmprestimo * taxaJuros + valorEmprestimo) / numParcelas;
            const jurosTotal = valorEmprestimo * taxaJuros;
    
            const tabela = document.querySelector('.pure-table tbody');
            const newRow = tabela.insertRow();
            newRow.innerHTML = `
                <td>${nomeContratante}</td>
                <td>R$ ${valorEmprestimo.toFixed(2)}</td>
                <td>R$ ${valorParcela.toFixed(2)}</td>
                <td>R$ ${jurosTotal.toFixed(2)}</td>
            `;
    
            // Limpar os campos do formulário
            document.getElementById('inContratante').value = '';
            document.getElementById('inValor').value = '';
            document.getElementById('inParcela').value = '';
            document.getElementById('inJuros').value = '';
        }
    });
    