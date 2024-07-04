import { Alert } from "react-native";

export type AlertProps = {
  title: string;
  subtitle: string;
  submitTitle?: string;
  cancelTitle?: string;
  onPressSubmit: () => void;
  onPressCancel?: () => void;
  hideCancelButton?: boolean;
};

// TODO: add labels

const useAlert = () => {
  const showAlert = ({
    title,
    subtitle,
    submitTitle,
    cancelTitle,
    onPressSubmit,
    onPressCancel,
    hideCancelButton = false,
  }: AlertProps) => {
    const submitButton = {
      onPress: onPressSubmit,
      text: submitTitle || "Confirm",
    };

    const cancelButton = {
      onPress: onPressCancel,
      style: "cancel" as const,
      text: cancelTitle || "Cancel",
    };

    Alert.alert(title, subtitle, [
      ...(hideCancelButton ? [] : [cancelButton]),
      submitButton,
    ]);
  };

  return showAlert;
};

export default useAlert;
