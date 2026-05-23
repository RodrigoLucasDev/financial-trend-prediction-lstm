async function analyze() {

    const stock =
        document.getElementById("stock").value;

    const startDate =
        document.getElementById("startDate").value;

    const endDate =
        document.getElementById("endDate").value;

    try {

        const response = await fetch(
            "http://localhost:3000/analyze",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    stock,
                    startDate,
                    endDate
                })
            }
        );

        const data = await response.json();

        console.log(data);

        const variation =
            (
                (data.predictedPrice - data.currentPrice)
                /
                data.currentPrice
            ) * 100;

        let recommendationClass = "hold";

        if (data.recommendation === "COMPRA") {
            recommendationClass = "buy";
        }

        if (data.recommendation === "VENDA") {
            recommendationClass = "sell";
        }

        document.getElementById("result").innerHTML = `

        <div class="result-card">

            <h2>${stock}</h2>

            <div class="stats">

                <div class="stat">
                    <div class="stat-title">
                        Preço Atual
                    </div>

                    <div class="stat-value">
                        R$ ${Number(data.currentPrice).toFixed(2)}
                    </div>
                </div>

                <div class="stat">
                    <div class="stat-title">
                        Preço Previsto
                    </div>

                    <div class="stat-value">
                        R$ ${Number(data.predictedPrice).toFixed(2)}
                    </div>
                </div>

                <div class="stat">
                    <div class="stat-title">
                        Variação Prevista
                    </div>

                    <div class="stat-value">
                        ${Number(variation).toFixed(2)}%
                    </div>
                </div>

                <div class="stat">
                    <div class="stat-title">
                        Recomendação
                    </div>

                    <div class="stat-value ${recommendationClass}">
                        ${data.recommendation}
                    </div>
                </div>

            </div>

            <div class="explanation">

                <p>

                    A rede neural LSTM analisou os dados
                    históricos do ativo e estimou uma
                    variação de
                    <strong>${Number(variation).toFixed(2)}%</strong>.

                </p>

                <p>

                    Com base na comparação entre o preço
                    atual e o valor previsto pelo modelo,
                    a recomendação gerada foi
                    <strong>${data.recommendation}</strong>.

                </p>

            </div>

            <div class="chart">

                <h3>Gráfico da Previsão</h3>

                    <img
                        src="http://localhost:5000/graph"
                        alt="Gráfico de previsão"
                        style="width:100%; border-radius:15px;"
                    >

            </div>

        </div>

        `;

    } catch (error) {

        alert(error);

    console.error(error);

    }

}