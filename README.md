# GamePlay — React Native + Expo (SDK 57)

Implementação do protótipo Figma "GamePlay": Splash, Login, Home, Detalhes e Agendar.

## Rodando

```bash
npm install
npx expo start
```

## Estrutura

```
src/
├── app/            # rotas do Expo Router (arquivos finos, só reexportam telas)
│   ├── _layout.tsx
│   ├── index.tsx              → Splash
│   ├── sign-in.tsx            → Login
│   ├── home.tsx
│   └── appointment/
│       ├── [id].tsx           → Detalhes da partida
│       └── create.tsx         → Agendar partida
├── screens/        # uma pasta por tela
├── components/     # uma pasta por componente
├── theme/          # cores, fontes e métricas do Figma
├── mocks/          # dados tipados
├── types/          # contratos e declarações de assets (*.png, *.svg)
└── utils/
assets/
├── images/{avatars,guilds,banners}/   # PNG otimizados em @3x
└── svg/                               # ícones exportados do Figma
```

## Scripts

- `npx tsc --noEmit` — checagem de tipos
- `npx expo lint` — lint
