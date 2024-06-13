import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
const styles = StyleSheet.create({
    page: { padding: 20 },
    section: { margin: 10, padding: 10, borderBottom: '1 solid #ccc' },
    title: { fontSize: 13, marginBottom: 10 }
});
const GenerarPdf = ({ data }) => {
   
    return (
        <Document>
            <Page style={styles.page}>
                {data.map((item, index) => (
                    <View key={index} style={styles.section}>
                        <Text style={styles.title}>usuario: {item.nombre_usuario}</Text>
                        <Text style={styles.title}>apellido: {item.apellido_usuario}</Text>
                        <Text style={styles.title}>correo :{item.correo_electronico}</Text>
                        <Text style={styles.title}>telefono :{item.telefono_usuario}</Text>
                        <Text style={styles.title}>numero identificacion :{item.numero_identificacion}</Text>
                        <Text style={styles.title}>tipo de documento: {item.tipo_documento}</Text>
                        <Text style={styles.title}>rol: {item.rol_usuario}</Text>

                    </View>
                ))}
            </Page>
        </Document>
    );
};
export default GenerarPdf;