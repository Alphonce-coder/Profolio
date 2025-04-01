import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function Invoice() {
    const invoice = {
        number: 'INV-001',
        date: '2023-10-01',
        items: [
            { id: '1', description: 'Banana', quantity: 2, price: 50 },
            { id: '2', description: 'Mangoes', quantity: 1, price: 100 },
            { id: '3', description: 'Apple', quantity: 3, price: 30 },
        ]
    };

    const totalAmount = invoice.items.reduce((total, item) => total + item.quantity * item.price, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Invoice</Text>
            <Text style={styles.invoiceNumber}>Invoice Number: {invoice.number}</Text>
            <Text style={styles.date}>Date: {invoice.date}</Text>
            <FlatList
                data={invoice.items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.description}</Text>
                        <Text>Quantity: {item.quantity}</Text>
                        <Text>Price: ${item.price}</Text>
                        <Text>Total: ${item.quantity * item.price}</Text>
                    </View>
                )}
            />
            <Text style={styles.total}>Total Amount: ${totalAmount}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flex: 1,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    invoiceNumber: {
        fontSize: 18,
        marginBottom: 10,
    },
    date: {
        fontSize: 18,
        marginBottom: 20,
    },
    item: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    total: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
});
