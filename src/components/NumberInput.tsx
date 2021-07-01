import NumberFormat from "react-number-format";

export function AlgoNumberInput(props) {
  return NumberInput({ ...props, hasDecimal: true });
}

export enum Prefix {
  DOLLAR = "$",
  ALGO = "Algo ",
}

function NumberInput(props) {
  const { hasDecimal, prefix, inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        });
      }}
      decimalScale={hasDecimal ? 6 : undefined}
      fixedDecimalScale={hasDecimal}
      thousandSeparator
      allowNegative={false}
      prefix={prefix}
    />
  );
}

export function IntegerInput(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        });
      }}
      allowNegative={false}
    />
  );
}
