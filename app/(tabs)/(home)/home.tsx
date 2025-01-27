import { StyleSheet } from "react-native";

import Card from "@/components/Card";
import { SPACING } from "@/constants/Theme";
import Button from "@/components/buttons/Button";
import LinkButton from "@/components/buttons/LinkButton";
import ScrollableScreen from "@/components/ScrollableScreen";
import Text from "@/components/Text";
import useGetUserQuery from "@/hooks/queries/useGetUserQuery";
import {
  showSuccessToast,
  showErrorToast,
  showInfoToast,
} from "@/utils/show-toast";

const USER_ID = 1;

const Home = () => {
  const { data } = useGetUserQuery(USER_ID, { staleTime: Infinity });

  return (
    <ScrollableScreen>
      <Card style={{ gap: 8 }}>
        <Text>Edit app/index.tsx to edit this screen.</Text>
        <Button title="Press me" />
        <LinkButton title="Link to settings" href="/settings" />
      </Card>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button
        title="Show success toast"
        onPressIn={() => showSuccessToast("Showing success toast")}
      />
      <Button
        title="Show error toast"
        onPressIn={() => showErrorToast("Showing error toast")}
      />
      <Button
        title="Show info toast"
        onPressIn={() => showInfoToast("Showing info toast")}
      />
      <LinkButton title="Link to cart" href="/cart" icon="airplane" />
    </ScrollableScreen>
  );
};

export default Home;

const $ = StyleSheet.create({
  scrollView: {
    padding: SPACING.m,
  },
  scrollViewContent: {
    gap: SPACING.m,
  },
});
