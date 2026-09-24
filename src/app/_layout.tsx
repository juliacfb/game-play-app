import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter"; //as fontes do figma, cada uma num peso
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani"; //(400 = regular, 500 = médio, 700 = negrito)
import { useFonts } from "expo-font"; //hook que carrega fontes
import { Stack } from "expo-router"; //a navegação em pilha
import * as SplashScreen from "expo-splash-screen"; //importa tudo da biblioteca num objeto só, por isso depois usa SplashScreen.algumaCoisa()
import { StatusBar } from "expo-status-bar"; //controla a barra de cima do celular (hora e bateria)
import { useEffect } from "react"; //executa algo depois que o componente renderiza. aqui esconde a splash
import { SafeAreaProvider } from "react-native-safe-area-context"; //fornece as medidas do notch e da barra inferior para o app todo

import { colors } from "@/theme"; //a paleta de cores do tema

SplashScreen.preventAutoHideAsync(); //impede que a splash nativa suma sozinha.
// fica fora do componente para rodar assim que o arquivo carrega, antes de
//qualquer renderização. dentro do componente poderia rodar tarde demais

export default function RootLayout() {
  //o expo router exige export default nos arquivos da pasta app
  const [fontsLoaded] = useFonts({
    //o useFonts recebe as fontes e começa a carregá-las
    Inter_400Regular, //retorna um array; a primeira posição é true ou false, indicando se ja terminou
    Inter_500Medium, //a sintaxe [fontsLoaded] é a destruição de um array: pega só o primeiro item
    Rajdhani_500Medium, //as fontes precisam ser carregadas pq não vem instaladas no celular
    Rajdhani_700Bold,
  });

  useEffect(() => {
    //o [fontsLoaded] é o array de dependências: o efeito roda sempre
    if (fontsLoaded) SplashScreen.hideAsync(); //que o fontsLoaded muda.
  }, [fontsLoaded]); //quando vira true, a splash é escondida.

  if (!fontsLoaded) return null; //enquanto as fontes não carregam, o componente retorna null, ou seja, não
  //desenha nada. a splash nativa continua na tela nesse meio tempo
  //isso evita o "flash" de texto aparecendo com a fonte padrão e depois trocando
  //certa.

  return (
    //o que é renderizado
    <SafeAreaProvider>
      {" "}
      {/* fica por fora de tudo para que qualquer tela ou componente consiga usar
      useSafeAreaInsets(). o Header e a Home usam isso para náo ficar embaixo do notch */}
      <StatusBar style="light" />{" "}
      {/* deixa os ícones da barra de status brancos, pq o fundo do app é escuro*/}
      <Stack /* navegação em pilha */
        screenOptions={{
          //regras que valem pra todas as telas
          headerShown: false, //esconde o cabeçalho padrão do stack
          animation: "slide_from_right", //faz a tela nova entrar deslizando da direita
          contentStyle: { backgroundColor: colors.backgroundBottom }, //pinta o fundo de azul escuro, sem isso,
          //durante a animação de troca de tela apareceria um fundo branco piscando
        }}
      >
        {/* "fade" é o estilo que faz desaparecer e aparecer a tela na troca */}
        <Stack.Screen name="index" options={{ animation: "fade" }} />
        <Stack.Screen name="sign-in" options={{ animation: "fade" }} />
        <Stack.Screen name="home" options={{ animation: "fade" }} />
      </Stack>
    </SafeAreaProvider>
  );
}
