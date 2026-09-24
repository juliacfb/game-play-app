import { LinearGradient } from "expo-linear-gradient";
import { Redirect, useLocalSearchParams } from "expo-router";
import {
  FlatList,
  ImageBackground,
  Linking,
  Pressable,
  Share,
  Text,
  View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";

import ShareIcon from "@/assets/svg/icon-share.svg";
import { Background } from "@/components/Background";
import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { ListDivider } from "@/components/ListDivider";
import { ListHeader } from "@/components/ListHeader";
import { Member } from "@/components/Member";
import { getAppointment } from "@/mocks/appointments";
import { gradients } from "@/theme";

/** Tela "Detalhes do servidor" (58924:1063). */
export function AppointmentDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { bottom } = useSafeAreaInsets();
  const appointment = getAppointment(id);

  if (!appointment) return <Redirect href="/home" />;

  const handleShare = () =>
    Share.share({
      message: `Bora jogar em ${appointment.guild.name}? ${appointment.description}`,
    });

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <Pressable
            onPress={handleShare}
            hitSlop={12}
            accessibilityLabel="Compartilhar"
          >
            <ShareIcon width={24} height={24} />
          </Pressable>
        }
      />

      <ImageBackground
        source={appointment.guild.banner ?? appointment.guild.icon}
        style={styles.banner}
        resizeMode="cover"
      >
        <LinearGradient
          colors={gradients.banner}
          locations={gradients.bannerLocations}
          style={styles.bannerContent}
        >
          <Text style={styles.title}>{appointment.guild.name}</Text>
          <Text style={styles.subtitle}>{appointment.description}</Text>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.listHeader}>
        <ListHeader
          title="Jogadores"
          subtitle={`Total ${appointment.members.length}`}
        />
      </View>

      <FlatList
        data={appointment.members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider inset={64} spacing={12} />}
        style={styles.members}
        contentContainerStyle={styles.membersContent}
      />

      <View
        style={[styles.footer, { paddingBottom: Math.max(bottom + 6, 24) }]}
      >
        <ButtonIcon
          title="Entrar na partida"
          onPress={() => Linking.openURL("https://discord.com/app")}
        />
      </View>
    </Background>
  );
}
