import React from 'react';
import { StyleSheet, Text, TextStyle, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { ArrowDown, ArrowUp } from '../svgs';

type DropdownProps = {
  disabledItem: CurrencyCode | null;
  type: 'Source' | 'Target';
  onChange: (value: CurrencyCode) => void;
  style?: TextStyle
}

export const CurrencyDropdown: React.FC<DropdownProps>= ({ disabledItem, type, onChange, style }) => {

  const currencyCodes: CurrencyCode[] = [
    { currency: "USD", rate: 1 },
    { currency: "EUR", rate: 0.85 },
    { currency: "GBP", rate: 0.75 },
    { currency: "JPY", rate: 110 },
    { currency: "INR", rate: 73 },
    { currency: "AUD", rate: 1.35 },
    { currency: "CAD", rate: 1.25 },
    { currency: "CNY", rate: 6.45 },
    { currency: "BRL", rate: 5.3 }
  ];

  const indexes = disabledItem ? [currencyCodes.findIndex(item => item.currency == disabledItem.currency)] : []

  return (
    <SelectDropdown
      data={currencyCodes}
      onSelect={(selectedItem) => {
        onChange(selectedItem)
      }}
      renderButton={(selectedItem, isOpened) => {
        return (
          <View style={styles.dropdownButtonStyle}>
            <Text style={styles.dropdownButtonTxtStyle}>
              {(selectedItem && selectedItem.currency) || `${type} Currency`}
            </Text>
            {isOpened ? <ArrowUp strokeWidth={5} stroke="black" width={10} />: <ArrowDown strokeWidth={5} stroke="black" width={10} />}
          </View>
        );
      }}
      renderItem={(item, index, isSelected) => {
        return (
          <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#EEE'})}}>
            <Text style={styles.dropdownItemTxtStyle}>{item.currency}</Text>
          </View>
        );
      }}
      showsVerticalScrollIndicator={true}
      dropdownStyle={{...styles.dropdownMenuStyle, ...style}}
      disabledIndexes={ indexes}
    />
  );
}

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderWidth: 1,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 14,
    color: 'gray',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownMenuStyle: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    position: 'relative',
    marginTop: -50,
    flex: 1,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
});
