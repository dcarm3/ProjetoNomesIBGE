import React, { useState } from 'react';
import axios from 'axios';

const TopNamesTable: React.FC = () => {
    const [uf, setUf] = useState('');
    const [names, setNames] = useState<any[]>([]);
    const [error, setError] = useState('');

    const fetchTopNames = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/ibge/top-names?uf=${uf}`);
            const data = response.data;

            if (data && data[0] && data[0].res) {
                setNames(data[0].res.slice(0, 3));
                setError('');
            } else {
                setError('Nenhum dado encontrado para esta UF.');
                setNames([]);
            }
        } catch (err) {
            console.error(err);
            setError('Erro ao buscar dados. Verifique a UF e tente novamente.');
            setNames([]);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Digite a UF (ex: SP)"
                value={uf}
                onChange={(e) => setUf(e.target.value.toUpperCase())}
            />
            <button onClick={fetchTopNames}>Buscar</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {names.length > 0 && (
                <table border={1} cellPadding={5} style={{ marginTop: '1rem' }}>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Frequência</th>
                        </tr>
                    </thead>
                    <tbody>
                        {names.map((item, index) => (
                            <tr key={index}>
                                <td>{item.nome}</td>
                                <td>{item.frequencia}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TopNamesTable;
