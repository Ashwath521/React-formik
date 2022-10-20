import Input from "./Input";
import TextArea from "./TextArea";
import Select from "./Select";
import RadioButton from "./RadioButton";
import CheckboxGroup from "./CheckboxGroup";

function FormControl(props) {
  // rest attribute contains the remain properties of the props
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;

    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date":
    default:
      return null;
  }
}

export default FormControl;
