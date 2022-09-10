import { SafeAreaView, View, Text, Image } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { trpc } from "../utils/trpc";
import { Pokemon } from "@acme/api/src/router/pokemon";

const PokemonCard: React.FC<{
  pokemon: Pokemon;
}> = ({ pokemon: { name, ThumbnailImage, number } }) => {
  return (
    <View className="flex flex-col align-center justify-center p-4 bg-gray-300">
      <Image className="align-center w-64 h-64" source={{uri: ThumbnailImage}} />
      <Text className="text-2xl font-bold text-center text-gray-800">{name}</Text>
      <Text className="text-gray-600 text-base">{"#" + number}</Text>
    </View>
  );
};

export const HomeScreen = () => {
  const postQuery = trpc.pokemon.all.useQuery();

  return (
    <SafeAreaView>
      <View className="h-full w-full py-8 px-4 flex flex-col justify-center">
        <Image className="w-full h-32 my-8" source={{ uri: "https://logos-world.net/wp-content/uploads/2020/05/Pokemon-Logo.png" }} />
          <FlashList data={postQuery.data} estimatedItemSize={151} renderItem={(p) => <PokemonCard pokemon={p.item} />} />
      </View>
    </SafeAreaView>
  );
};
