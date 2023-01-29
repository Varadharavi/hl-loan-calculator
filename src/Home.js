import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { CENTER, TEXT, BUTTON, BUTTON_TEXT } from './style';
export default function Home() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const [bgcolor, setBgColor] = useState('#09CFDE');
  const [bgcolor1, setBgColor1] = useState('#09CFDE');
  const [bgcolor2, setBgColor2] = useState('#09CFDE');
  const [invalidYear, setInvalidYear] = useState(0);
  const [invalidRate, setinvalidRate] = useState(0);

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
    if (loanTerm > 30 || loanTerm < 1) {
      setInvalidYear(1);
      return;
    }
    if (interestRate > 30 || interestRate < 1) {
      setinvalidRate(1);
      return;
    }
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{ display: invalidYear == 1 ? 'flex' : 'none', color: 'yellow', fontSize: 15, fontWeight: 'bold' }}>
        * Tenure Should be between 1 to 30 only.
      </Text>
      <Text
        style={{ display: invalidRate == 1 ? 'flex' : 'none', color: 'yellow', fontSize: 15, fontWeight: 'bold' }}>
        Interest Rate Should be between 1 to 30 only.
      </Text>
      <Text style={styles.headingText}>Loan Amount</Text>
      <TextInput
        style={{
          margin: 10,
          height: 50,
          backgroundColor: bgcolor,
          width: '80%',
          color: 'black',
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        keyboardType="numeric"
        placeholder="Enter Loan Amount between 1 to 10,000,000"
        placeholderTextColor="black"
        required={true}
        onChangeText={(e) => {
          setInvalidYear(0);
          setinvalidRate(0);
          setLoanAmount(e);
        }}
        value={loanAmount}
      />
      <Text style={styles.headingText}>Interest Rate (%)</Text>
      <TextInput
        style={{
          margin: 10,
          height: 50,
          backgroundColor: bgcolor1,
          width: '80%',
          color: 'black',
        }}
        keyboardType="numeric"
        onFocus={handleFocus1}
        onBlur={handleBlur1}
        placeholder="Enter Interest rate between 1 to 30"
        placeholderTextColor="black"
        required={true}
        onChangeText={(e) => {
          setInvalidYear(0);
          setinvalidRate(0);
          setInterestRate(e);
        }}
        value={interestRate}
      />
      <Text style={styles.headingText}>Tenure (Yrs)</Text>
      <TextInput
        style={{
          margin: 10,
          height: 50,
          backgroundColor: bgcolor2,
          width: '80%',
          color: 'black',
        }}
        keyboardType="numeric"
        onFocus={handleFocus2}
        onBlur={handleBlur2}
        placeholder="Enter Years between 1 to 30"
        placeholderTextColor="black"
        required={true}
        onChangeText={(e) => {
          setInvalidYear(0);
          setinvalidRate(0);
          setLoanTerm(e);
        }}
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
     </TouchableWithoutFeedback>
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
