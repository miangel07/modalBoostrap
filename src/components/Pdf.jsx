import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PDFDownloadLink } from '@react-pdf/renderer';
import GenerarPdf from './GenerarPdf';
const Pdf = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:3000/api/usuario/listar')
            .then(response => {
                setData(response.data);
            
                setLoading(false);
            })
            .catch(error => {
                console.error('Error recuperando data', error);
                setLoading(false);
            });
    }, []);
    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <PDFDownloadLink className='btn btn-info' document={<GenerarPdf data={data}
                />} fileName="usuarios.pdf">
                    {({ loading }) => (loading ? 'Generating PDF...' : 'Descargar PDF')}
                </PDFDownloadLink>
            )}
        </div>
    );
};
export default Pdf;
