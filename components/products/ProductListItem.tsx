import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import Card from "../Card";
import { Image } from "expo-image";
import { SPACING, FONT_SIZES, FONT_FAMILIES, COLORS } from "@/constants/Theme";

type Props = {
  product: Product;
};

const ProductListItem = ({ product }: Props) => {
  console.log(`rerender: ${product.id}`);
  return (
    <Card style={$.card}>
      <Image style={$.image} source={product.image} contentFit="contain" />
      <View style={$.textContainer}>
        <View>
          <Text style={$.title} numberOfLines={2}>
            {product.title}
          </Text>
          <Text style={$.subtitle} numberOfLines={2}>
            {product.description}
          </Text>
        </View>
        <Text style={$.title}>{`€${product.price},-`}</Text>
      </View>
    </Card>
  );
};

const isEqual = (prevProps: Props, nextProps: Props) => {
  return prevProps.product.id === nextProps.product.id;
};

export default memo(ProductListItem, isEqual);

const $ = StyleSheet.create({
  card: {
    flexDirection: "row",
    paddingVertical: SPACING.s,
    paddingHorizontal: SPACING.x2s,
    gap: SPACING.xs,
    margin: 0,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.xs,
  },
  image: {
    width: 90,
    height: 90,
  },
  title: {
    fontSize: FONT_SIZES.x2s,
    fontFamily: FONT_FAMILIES.montserratSemiBold,
  },
  subtitle: {
    fontSize: FONT_SIZES.x2s,
    fontFamily: "Montserrat-Light",
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  list: {
    padding: SPACING.m,
    backgroundColor: COLORS.background,
  },
});
