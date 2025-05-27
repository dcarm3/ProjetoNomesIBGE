import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function NameRankingChart() {
    const [name, setName] = useState('');
    const [data, setData] = useState<any>(null);

    const fetchData = async () => {
        const res = await axios.get(`http://localhost:3000/ibge/name-trend?name=${name}`);
        const info = res.data[0].res;
        setData({
            labels: info.map((item: any) => item.periodo),
            datasets: [{
                label: `Frequência do nome ${name}`,
                data: info.map((item: any) => item.frequencia),
                fill: false,
                borderColor: 'blue',
                tension: 0.1
            }]
        });
    };

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite o nome" />
            <button onClick={fetchData}>Buscar</button>
            {data && <Line data={data} />}
        </div>
    );
}


