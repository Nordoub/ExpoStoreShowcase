import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import useGetAllProductsQuery from "@/hooks/queries/useGetAllProductsQuery";
import { FlashList } from "@shopify/flash-list";
import { useNavigation } from "@react-navigation/native";
import ProductListItem from "@/components/products/ProductListItem";
import LoadingOverlay from "@/components/LoadingOverlay";
import { SearchBarCommands } from "react-native-screens";
import { SPACING } from "@/constants/Theme";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

type InputEventProps = NativeSyntheticEvent<TextInputFocusEventData>;

const keyExtractor = (item: Product) => item.id.toString();
const renderItem = ({ item }: { item: Product }) => (
  <ProductListItem product={item} />
);

const search = () => {
  const { data, isLoading } = useGetAllProductsQuery();
  const navigation = useNavigation();
  const [products, setProducts] = useState<Product[] | undefined>(undefined);
  const searchRef = useRef<SearchBarCommands>();
  const tabHeight = useBottomTabBarHeight();

  const onSearchButtonPress = useCallback(
    ({ nativeEvent: { text } }: InputEventProps) => {
      if (!text) return setProducts(undefined);

      setProducts(
        data?.filter((product) =>
          product.title.toLowerCase().includes(text.toLowerCase())
        )
      );
    },
    [data]
  );

  const onCancelButtonPress = useCallback(() => setProducts(data), [data]);
  const onSubmit = useCallback(() => searchRef.current?.blur(), []);

  React.useEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        ref: searchRef,
        onSearchButtonPress,
        onClose: onCancelButtonPress,
        // hideWhenScrolling: false,
        onCancelButtonPress,
      },
    });
  }, [navigation]);

  if (isLoading) return <LoadingOverlay animationDelay={100} visible />;

  return (
    <FlashList
      contentInsetAdjustmentBehavior="automatic"
      data={products ?? data}
      extraData={[products, data]}
      renderItem={renderItem}
      estimatedListSize={{ height: 126, width: 358 }}
      estimatedItemSize={20}
      removeClippedSubviews={true}
      keyExtractor={keyExtractor}
      contentContainerStyle={{
        paddingHorizontal: SPACING.m,
        paddingTop: SPACING.x2s,
        paddingBottom: tabHeight,
      }}
    />
  );
};

export default search;
