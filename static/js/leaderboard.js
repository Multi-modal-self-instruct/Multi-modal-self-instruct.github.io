document.addEventListener('DOMContentLoaded', function() {
    fetch('static/data/newleaderboard.json')
        .then(response => response.json())
        .then(data => {
            // 根据 avg 字段进行排序
            data.sort((a, b) => b.scores.Avg - a.scores.Avg);

            const tbody = document.querySelector('#leaderboard tbody');

            data.forEach((item, index) => {
                const row = document.createElement('tr');

                const rankCell = document.createElement('td');
                rankCell.textContent = index + 1;
                row.appendChild(rankCell);

                const nameCell = document.createElement('td');
                nameCell.textContent = item.name;
                row.appendChild(nameCell);

                for (const [key, value] of Object.entries(item.scores)) {
                    const cell = document.createElement('td');
                    cell.textContent = value;
                    row.appendChild(cell);
                }

                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});