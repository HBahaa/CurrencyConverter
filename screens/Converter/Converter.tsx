import React from 'react';
import { Button, Platform, StyleSheet, Text, TextInput, View } from 'react-native';

import { CurrencyDropdown } from '../../components/CurrencyDropdown';
import { CurrencyExchange } from '../../components/svgs';

export function Converter() {
  const [sourceCurrency, setSourceCurrency] = React.useState<CurrencyCode | null>(null);
  const [targetCurrency, setTargetCurrency] = React.useState<CurrencyCode | null>(null);
  const [error, setError] = React.useState<string>('');
  const [amount, setAmount] = React.useState<string>('');

  const convertAmount = () => {
    if (targetCurrency && sourceCurrency) {
      const result = Number(amount) * (targetCurrency?.rate / sourceCurrency?.rate); 
      return `${amount} ${sourceCurrency?.currency} = ${result.toFixed(2) } ${targetCurrency?.currency}`;
    }
    return;
  }

  const handleAmountChange = (value: string) => {
    setError('');
    const isNumber = (/^[0-9]*$/).test(value);
    if (!isNumber) {
      setError('Please enter a valid number');
    }
    setAmount(value);
  }

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}><CurrencyExchange width={50} height={50} /></Text>
      <Text style={styles.title}>Currency Converter</Text>
      <View style={styles.content}>
        <View style={styles.dropdown}>
          <CurrencyDropdown type='Source' onChange={setSourceCurrency} disabledItem={targetCurrency} />
        </View>
        <View style={styles.dropdown}>
          <CurrencyDropdown type='Target' onChange={setTargetCurrency} disabledItem={sourceCurrency} />
        </View>
      </View>

      <TextInput
        value={amount}
        keyboardType='numeric'
        style={styles.input}
        onChangeText={handleAmountChange}
        placeholder='Enter Amount'
      />
      {error && <Text style={styles.error}>{error}</Text>}

      {sourceCurrency && targetCurrency && amount && !error && <View style={styles.box}>
        <Text style={styles.output}>{convertAmount()}</Text>
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Platform.OS == 'web' ? '60%' : '100%',
    paddingVertical: 30
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20
  },
  dropdown: {
    flex: 1,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    color: '#808080'
  },
  box: {
    backgroundColor: '#eee',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  output: {
    fontWeight: 600,
    fontSize: 18,
    textAlign: 'center'
  },
  error: {
    color: '#b52828',
    marginBottom: 20,
    fontSize: 12
  }
});
