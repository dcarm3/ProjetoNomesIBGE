import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

export default function NameComparisonChart() {
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [data, setData] = useState<any>(null);

    const fetchData = async () => {
        const res = await axios.get(`http://localhost:3000/ibge/compare-names?name1=${name1}&name2=${name2}`);
        const [data1, data2] = res.data;

        setData({
            labels: data1.res.map((item: any) => item.periodo),
            datasets: [
                {
                    label: name1,
                    data: data1.res.map((item: any) => item.frequencia),
                    borderColor: 'red',
                    tension: 0.1
                },
                {
                    label: name2,
                    data: data2.res.map((item: any) => item.frequencia),
                    borderColor: 'green',
                    tension: 0.1
                }
            ]
        });
    };

    return (
        <div>
            <input value={name1} onChange={(e) => setName1(e.target.value)} placeholder="Nome 1" />
            <input value={name2} onChange={(e) => setName2(e.target.value)} placeholder="Nome 2" />
            <button onClick={fetchData}>Comparar</button>
            {data && <Line data={data} />}
        </div>
    );
}
