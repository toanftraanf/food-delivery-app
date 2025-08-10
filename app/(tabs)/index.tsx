import CartButton from "@/components/CartButton";
import { images, offers } from "@/constants";
import * as Sentry from "@sentry/react-native";
import cn from "clsx";
import { Fragment } from "react";
import {
  Button,
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../globals.css";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={offers}
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;

          return (
            <View>
              <Pressable
                className={cn(
                  "offer-card",
                  isEven ? "flex-row-reverse" : "flex-row"
                )}
                style={{
                  backgroundColor: item.color,
                }}
                android_ripple={{
                  color: "#fffff22",
                }}
              >
                {({ pressed }) => (
                  <Fragment>
                    <View className="h-full w-1/2">
                      <Image
                        source={item.image}
                        className="size-full"
                        resizeMode="contain"
                      />
                    </View>
                    <View
                      className={cn(
                        "offer-card__info",
                        isEven ? "pl-10" : "pr-10"
                      )}
                    >
                      <Text className="h1-bold text-white leading-tight">
                        {item.title}
                      </Text>
                      <Image
                        source={images.arrowRight}
                        className="size-10"
                        resizeMode="contain"
                        tintColor="#ffffff"
                      />
                    </View>
                  </Fragment>
                )}
              </Pressable>
            </View>
          );
        }}
        contentContainerClassName="pb-28 px-5"
        ListHeaderComponent={() => (
          <View className="flex-between bg-white flex-row w-full my-5">
            <View className="flex-start">
              <Text className="small-bold text-primary">DELIVER TO</Text>
              <TouchableOpacity className="flex-row flex-center gap-x-1 mt-0.5">
                <Text className="paragraph-bold text-dark-100">
                  Gia Binh, Bac Ninh
                </Text>
                <Image
                  source={images.arrowDown}
                  className="size-3"
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View className="flex-center">
              <CartButton />
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <Button
            title="Try!"
            onPress={() => {
              Sentry.captureException(new Error("First error"));
            }}
          />
        )}
      />
    </SafeAreaView>
  );
}
