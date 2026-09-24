<h1 align="center">🎮 GamePlay</h1>

<p align="center">
  App mobile para organizar jogatinas com os amigos: agende partidas, escolha o servidor do Discord e veja quem vai jogar.
</p>

<p align="center">
  <img alt="Expo" src="https://img.shields.io/badge/Expo-SDK%2057-000020?logo=expo&logoColor=white">
  <img alt="React Native" src="https://img.shields.io/badge/React%20Native-0.86-61DAFB?logo=react&logoColor=black">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white">
</p>

---

## 📱 Telas

|                 Splash                  |                 Login                  |                 Home                  |                 Detalhes                  |                 Agendar                  |
| :-------------------------------------: | :------------------------------------: | :-----------------------------------: | :---------------------------------------: | :--------------------------------------: |
| <img src="docs/splash.png" width="160"> | <img src="docs/login.png" width="160"> | <img src="docs/home.png" width="160"> | <img src="docs/detalhes.png" width="160"> | <img src="docs/agendar.png" width="160"> |

> Para exibir as imagens, salve os prints do app na pasta `docs/` com esses nomes.

## ✨ Funcionalidades

- **Splash** com a marca do app e transição automática para o login
- **Login** com botão "Entrar com Discord"
- **Home** com saudação, filtro de partidas por categoria (Ranqueada, Duelo 1x1, Diversão) e lista de partidas agendadas, indicando se você é anfitrião ou visitante
- **Detalhes da partida** com banner do servidor, descrição, lista de jogadores com status (disponível/ocupado) e compartilhamento
- **Agendar partida** com seleção de categoria, escolha de servidor em bottom sheet, data, horário e descrição de até 100 caracteres
- **Modal de logout** ao tocar no avatar
- Layout adaptado a qualquer aparelho com **safe area** (notch, barra de status e barra de navegação)

## 🛠️ Tecnologias

- [Expo](https://expo.dev/) (SDK 57) e [React Native](https://reactnative.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/) para navegação baseada em arquivos, com rota dinâmica (`appointment/[id]`)
- [TypeScript](https://www.typescriptlang.org/) em modo estrito
- [react-native-svg](https://github.com/software-mansion/react-native-svg) + `react-native-svg-transformer` para os ícones exportados do Figma
- [expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/) para fundos, cards e banners
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)
- Fontes Rajdhani e Inter via `@expo-google-fonts`

## 🗂️ Estrutura

```
src/
├── app/          # Rotas do Expo Router (apenas reexportam as telas)
├── screens/      # Telas, cada uma com index.tsx + styles.ts
├── components/   # Componentes reutilizáveis (Header, Button, Category, Appointment…)
├── theme/        # Design tokens do Figma: cores, fontes e métricas
├── mocks/        # Dados tipados de usuário, servidores, jogadores e partidas
├── types/        # Tipos do domínio e declarações de assets (*.png, *.svg)
└── utils/        # Funções auxiliares (formatação de datas)
assets/
├── images/       # Avatares, capas e banners otimizados em @3x
└── svg/          # Ícones e ilustrações exportados do Figma
```

As rotas em `src/app` só reexportam as telas de `src/screens`, então a navegação fica separada da interface. As cores, fontes e espaçamentos vêm todos de `src/theme`, fiéis aos tokens do protótipo.

## 🚀 Como rodar

**Pré-requisitos:** [Node.js](https://nodejs.org/) (LTS) e o app [Expo Go](https://expo.dev/go) no celular, ou um emulador Android/iOS.

```bash
# clone o repositório
git clone https://github.com/SEU-USUARIO/NOME-DO-REPO.git
cd NOME-DO-REPO

# instale as dependências
npm install

# inicie o servidor de desenvolvimento
npx expo start
```

Escaneie o QR code com o Expo Go, ou pressione `a` para abrir no emulador Android e `i` para abrir no simulador iOS.

## 📜 Scripts

| Comando            | Descrição                 |
| ------------------ | ------------------------- |
| `npm start`        | Inicia o servidor do Expo |
| `npm run android`  | Abre no Android           |
| `npm run ios`      | Abre no iOS               |
| `npm run lint`     | Roda o ESLint             |
| `npx tsc --noEmit` | Checagem de tipos         |

## 🎨 Design

A interface reproduz o protótipo **GamePlay** no Figma:
[acessar o layout](https://www.figma.com/design/fHa6aeKaEyVRtE8Y81ReyX/GamePlay?node-id=58913-83).

> Os dados exibidos são mocks locais; o app ainda não se conecta à API do Discord.

## 👩‍💻 Autora

Feito por **Júlia**, estudante de Engenharia de Software na Universidade Católica de Brasília.

[LinkedIn](https://www.linkedin.com/in/SEU-PERFIL) · [GitHub](https://github.com/SEU-USUARIO)
