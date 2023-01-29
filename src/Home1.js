import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { CENTER, TEXT, BUTTON, BUTTON_TEXT } from './style';
export default function Home1() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const [bgcolor, setBgColor] = useState('#09CFDE');
  const [bgcolor1, setBgColor1] = useState('#09CFDE');
  const [bgcolor2, setBgColor2] = useState('#09CFDE');

  const handleBlur = () => {
    setBgColor('gray');
  };

  const handleFocus = () => {
    setBgColor('white');
  };

  const handleBlur1 = () => {
    setBgColor1('gray');
  };

  const handleFocus1 = () => {
    setBgColor1('white');
  };

  const handleBlur2 = () => {
    setBgColor2('gray');
  };

  const handleFocus2 = () => {
    setBgColor2('white');
  };

  const calculate = () => {
    // calculate monthly payment and total cost using loan amount, interest rate, and loan term
    const r = interestRate / 100 / 12;
    const n = loanTerm * 12;
    const monthlyPayment = (loanAmount * r * (1 + r) ** n) / ((1 + r) ** n - 1);
    const totalCost = monthlyPayment * n;
    const totalInterest = totalCost - loanAmount;
    setMonthlyPayment(monthlyPayment.toFixed(0));
    setTotalCost(totalCost.toFixed(0));
    setTotalInterest(totalInterest.toFixed(0));
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={styles.headingText}>Loan Amount</Text>
      <TextInput
        style={{
          margin: 10,
          height: 30,
          backgroundColor: bgcolor,
          width: '80%',
          color: 'black',
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        keyboardType="numeric"
        onChangeText={(e) => setLoanAmount(e)}
        value={loanAmount}
      />
      <Text style={styles.headingText}>Interest Rate (%)</Text>
      <TextInput
        style={{
          margin: 10,
          height: 30,
          backgroundColor: bgcolor1,
          width: '80%',
          color: 'black',
        }}
        keyboardType="numeric"
        onFocus={handleFocus1}
        onBlur={handleBlur1}
        onChangeText={(e) => setInterestRate(e)}
        value={interestRate}
      />
      <Text style={styles.headingText}>Tenure (Yrs)</Text>
      <TextInput
        style={{
          margin: 10,
          height: 30,
          backgroundColor: bgcolor2,
          width: '80%',
          color: 'black',
        }}
        keyboardType="numeric"
        onFocus={handleFocus2}
        onBlur={handleBlur2}
        onChangeText={(e) => setLoanTerm(e)}
        value={loanTerm}
      />
      <TouchableOpacity style={styles.calculateButton} onPress={calculate}>
        <Text style={styles.calculateButtonText}>CALCULATE</Text>
      </TouchableOpacity>
      <Text
        style={{
          color: 'white',
          paddingTop: 30,
          paddingBottom: 20,
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        Monthly EMI: Rs.{monthlyPayment}
      </Text>
      <Text
        style={{
          color: 'white',
          padding: 20,
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        Total Interest: Rs.{totalInterest}
      </Text>
      <Text
        style={{
          color: 'white',
          padding: 20,
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        Total Cost: Rs.{totalCost}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  calculateButton: {
    ...BUTTON,
    marginTop: 10,
    width: '50%',
  },
  calculateButtonText: {
    ...BUTTON_TEXT,
  },
});
