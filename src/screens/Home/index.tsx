import { router } from "expo-router";
import { useMemo, useState } from "react";
import { FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";

import { Appointment } from "@/components/Appointment";
import { Background } from "@/components/Background";
import { ButtonAdd } from "@/components/ButtonAdd";
import { CategorySelect } from "@/components/CategorySelect";
import { ListDivider } from "@/components/ListDivider";
import { ListHeader } from "@/components/ListHeader";
import { LogoutModal } from "@/components/LogoutModal";
import { Profile } from "@/components/Profile";
import { appointments } from "@/mocks/appointments";
import { currentUser } from "@/mocks/user";
import type { CategoryId } from "@/types";

export function Home() {
  const { top, bottom } = useSafeAreaInsets();
  const [category, setCategory] = useState<CategoryId | null>(null);
  const [logoutVisible, setLogoutVisible] = useState(false);

  const filtered = useMemo(
    () =>
      category
        ? appointments.filter((item) => item.category === category)
        : appointments,
    [category],
  );

  const handleCategorySelect = (id: CategoryId) =>
    setCategory((current) => (current === id ? null : id));

  const handleLogout = () => {
    setLogoutVisible(false);
    router.replace("/sign-in");
  };

  return (
    <Background>
      <View style={[styles.header, { marginTop: top + 12 }]}>
        <Profile
          user={currentUser}
          onPressAvatar={() => setLogoutVisible(true)}
        />
        <ButtonAdd onPress={() => router.push("/appointment/create")} />
      </View>

      <View style={styles.categories}>
        <CategorySelect selected={category} onSelect={handleCategorySelect} />
      </View>

      <View style={styles.listHeader}>
        <ListHeader
          title="Partidas agendadas"
          subtitle={`Total ${filtered.length}`}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Appointment
            data={item}
            onPress={() => router.push(`/appointment/${item.id}`)}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider inset={84} spacing={16} />}
        style={styles.list}
        contentContainerStyle={[
          styles.listContent,
          { paddingBottom: bottom + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      />

      <LogoutModal
        visible={logoutVisible}
        onCancel={() => setLogoutVisible(false)}
        onConfirm={handleLogout}
      />
    </Background>
  );
}
