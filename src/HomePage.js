import React, { useState } from 'react';
import { StyleSheet } from "react-native-web";

export default function HomePage() {

    const [loanAmount, setLoanAmount] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [loanTerm, setLoanTerm] = useState(0);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);

    const calculate = () => {
        // calculate monthly payment and total cost using loan amount, interest rate, and loan term
        const r = interestRate / 100 / 12;
        const n = loanTerm * 12;
        const monthlyPayment = loanAmount * r * (1 + r) ** n / ((1 + r) ** n - 1);
        const totalCost = monthlyPayment * n;
        const totalInterest = totalCost - loanAmount
        setMonthlyPayment(monthlyPayment.toFixed(0));
        setTotalCost(totalCost.toFixed(0));
        setTotalInterest(totalInterest.toFixed(0));
    };

    return (
        <div style={container}>
            <div>
                <label style={headings}>Loan Amount</label>
                <br />
                <input style={inputBoxStyle} type="text" name="loan-amount" value={loanAmount} onChange={e => setLoanAmount(e.target.value)} required />
                <br /><br />
                <label style={headings}>Interest Rate (%)</label>
                <br />
                <input style={inputBoxStyle} type="text" name="interest-rate" value={interestRate} onChange={e => setInterestRate(e.target.value)} required />
                <br /><br />
                <label style={headings}>Tenure (Yrs)</label>
                <br />
                <input style={inputBoxStyle} type="text" name="tenure" value={loanTerm} onChange={e => setLoanTerm(e.target.value)} required />
                <br /><br />
                <button style={buttonStyle} onClick={calculate}>Calculate</button>
                <br /><br />
            <div style={result}>Monthly Payment: Rs.{monthlyPayment}</div>
            <br />
            <div style={result}>Total Interest: Rs.{totalInterest}</div>
            <br />
            <div style={result}>Total Cost: Rs.{totalCost}</div>
            </div>
        </div>
    );
}

const page = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    headings: {
        display: 'grid',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 'large',
        width: '50%%',
        justifyContent: 'left',
    },
    buttonStyle: {
        backgroundColor: 'green',
        width: '100%',
    },
    inputBoxStyle: {
        width: '97%',
    },
    result: {
        fontWeight: 'Bold',
    }
});

const container = StyleSheet.compose(page.container)
const headings = StyleSheet.compose(page.headings)
const buttonStyle = StyleSheet.compose(page.buttonStyle)
const inputBoxStyle = StyleSheet.compose(page.inputBoxStyle)
const result = StyleSheet.compose(page.result)

