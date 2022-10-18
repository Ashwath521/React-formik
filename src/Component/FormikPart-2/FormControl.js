import Input from "./Input";
function FormControl(props) {
  // rest attribute contains the remain properties of the props
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
    case "select":
    case "radio":
    case "date":
    case "checkbox":
    default:
      return null;
  }
}

export default FormControl;
