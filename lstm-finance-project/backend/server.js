import express from "express";
import cors from "cors";
import YahooFinance from "yahoo-finance2";
import axios from "axios";

const yahooFinance = new YahooFinance();

console.log("ARQUIVO NOVO CARREGADO");

const app = express();

app.use(cors());
app.use(express.json());

function recommendation(current,predicted){

    const variation =
        ((predicted - current) / current) * 100;

    if(variation > 5){
        return "COMPRA";
    }

    if(variation < -5){
        return "VENDA";
    }

    return "MANTER";
}

app.post("/analyze", async(req,res)=>{

    const {stock,startDate,endDate} = req.body;

    console.log("Entrou em /analyze");
    console.log(req.body);

    const historical = await yahooFinance.chart(stock,{
        period1:new Date(startDate),
        period2:new Date(endDate)
    });

    const prices = historical.quotes
        .map(x => x.close)
        .filter(Boolean);

    const currentPrice = prices[prices.length - 1];

    const min = Math.min(...prices);
    const max = Math.max(...prices);

    const prediction = await axios.post(
        "http://localhost:5000/predict",
        {prices}
    );

    const predictedPrice = prediction.data.predicted_price;

    const rec = recommendation(
    currentPrice,
    predictedPrice
);

    res.json({
        currentPrice,
        predictedPrice,
        recommendation:rec,
        graph:"http://localhost:5000/graph"
    });

});

app.listen(3000, () => {
    console.log("Servidor Node rodando na porta 3000");
});

setInterval(() => {
    console.log("Servidor vivo");
}, 10000);