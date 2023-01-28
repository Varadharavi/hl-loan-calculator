import { StyleSheet } from "react-native-web";
export default function Title(){
    return(
        <div style={titleDesign}>
            Home Loan Mortgage Calculator
        </div>
    );
}

const title = StyleSheet.create({
titleDesign: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontSize: 'x-large',
    fontWeight: 'Bold',
    color: 'red',
}
});

const titleDesign = StyleSheet.compose(title.titleDesign)