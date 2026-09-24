import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";

import { Background } from "@/components/Background";
import { Button } from "@/components/Button";
import { CategorySelect } from "@/components/CategorySelect";
import { Guild } from "@/components/Guild";
import { GuildSelect } from "@/components/GuildSelect";
import { Header } from "@/components/Header";
import { ListDivider } from "@/components/ListDivider";
import { ModalView } from "@/components/ModalView";
import { SmallInput } from "@/components/SmallInput";
import { TextArea } from "@/components/TextArea";
import { guilds } from "@/mocks/guilds";
import type { CategoryId, Guild as GuildType } from "@/types";

const MAX_DESCRIPTION = 100;

/** Telas "Agendar", "Categoria selecionada" e "Servidor selecionado". */
export function AppointmentCreate() {
  const { bottom } = useSafeAreaInsets();

  const [category, setCategory] = useState<CategoryId | null>(null);
  const [guild, setGuild] = useState<GuildType | null>(null);
  const [guildsVisible, setGuildsVisible] = useState(false);

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [description, setDescription] = useState("");

  const handleGuildSelect = (selected: GuildType) => {
    setGuild(selected);
    setGuildsVisible(false);
  };

  const handleSave = () => {
    if (!category || !guild || !day || !month || !hour || !minute) {
      Alert.alert(
        "Agendar partida",
        "Preencha categoria, servidor, data e horário.",
      );
      return;
    }

    const year = new Date().getFullYear();
    const appointment = {
      id: String(Date.now()),
      guild,
      category,
      date: `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T${hour.padStart(
        2,
        "0",
      )}:${minute.padStart(2, "0")}:00`,
      description,
      hosted: true,
      members: [],
    };

    // TODO: persistir (API / AsyncStorage). Por ora, apenas volta para a Home.
    console.log("Nova partida", appointment);
    router.back();
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Background>
        <Header title="Agendar partida" />

        <ScrollView
          contentContainerStyle={{ paddingBottom: Math.max(bottom + 6, 24) }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={[styles.label, styles.categoryLabel]}>Categoria</Text>

          <View style={styles.categories}>
            <CategorySelect
              hasCheckBox
              selected={category}
              onSelect={setCategory}
            />
          </View>

          <View style={styles.form}>
            <GuildSelect guild={guild} onPress={() => setGuildsVisible(true)} />

            <View style={styles.dateRow}>
              <View>
                <Text style={styles.label}>Dia e mês</Text>
                <View style={styles.inputs}>
                  <SmallInput value={day} onChangeText={setDay} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput value={month} onChangeText={setMonth} />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Horário</Text>
                <View style={styles.inputs}>
                  <SmallInput value={hour} onChangeText={setHour} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput value={minute} onChangeText={setMinute} />
                </View>
              </View>
            </View>

            <View style={[styles.fieldHeader, styles.description]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.caption}>
                Max {MAX_DESCRIPTION} caracteres
              </Text>
            </View>

            <View style={styles.textArea}>
              <TextArea
                maxLength={MAX_DESCRIPTION}
                value={description}
                onChangeText={setDescription}
              />
            </View>

            <Button
              title="Agendar"
              style={styles.submit}
              onPress={handleSave}
            />
          </View>
        </ScrollView>
      </Background>

      <ModalView
        visible={guildsVisible}
        onClose={() => setGuildsVisible(false)}
      >
        <FlatList
          data={guilds}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Guild guild={item} onPress={() => handleGuildSelect(item)} />
          )}
          ItemSeparatorComponent={() => <ListDivider inset={84} spacing={12} />}
          contentContainerStyle={[
            styles.guildList,
            { paddingBottom: bottom + 24 },
          ]}
          showsVerticalScrollIndicator={false}
        />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
