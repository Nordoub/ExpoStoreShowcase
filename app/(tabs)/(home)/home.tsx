import Screen from "@/components/Screen";
import { ScrollView, Text, View, StyleSheet } from "react-native";

import Card from "@/components/Card";
import { SPACING } from "@/constants/Theme";
import Button from "@/components/buttons/Button";
import LinkButton from "@/components/buttons/LinkButton";

const Home = () => {
  return (
    <Screen>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={$.scrollView}
        contentContainerStyle={$.scrollViewContent}
      >
        <Card style={{ gap: 8 }}>
          <Text>Edit app/index.tsx to edit this screen.</Text>
          <Button title="Press me" />
          <LinkButton title="Link to settings" href="/settings" />
        </Card>
        <Text>Edit app/index.tsx to edit this screen.</Text>
        <Button title="Press me" />
        <LinkButton title="Link to cart" href="/cart" icon="airplane" />
      </ScrollView>
    </Screen>
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
