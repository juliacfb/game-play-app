/**
 * Tokens extraídos do Figma (GamePlay).
 * Nomes do design: Color/primary, Color/secondary, Texts/heading, Texts/body.
 */
export const colors = {
  primary: '#E51C44',
  secondary: '#495BCC',
  heading: '#DDE3F0',
  body: '#ABB1CC',
  on: '#32BD50',

  backgroundTop: '#0E1647',
  backgroundBottom: '#0A1033',

  shape: '#1D2766', // Items/shapes - inputs
  shapeTop: '#171F52',
  border: '#243189',

  fade: '#0C123B',
  headerShadow: '#11173D',
  overlay: 'rgba(0, 0, 0, 0.7)',
  buttonDivider: '#991F36',
} as const;

export const gradients = {
  background: [colors.backgroundTop, colors.backgroundBottom] as const,
  // "bg-gradient-to-t from-#1D2766 to-#171F52" → topo mais escuro, base mais clara
  shape: [colors.shapeTop, colors.shape] as const,
  banner: [
    'rgba(18, 29, 51, 0)',
    'rgba(18, 29, 51, 0.611)',
    'rgba(18, 29, 51, 0.828)',
    'rgb(18, 29, 51)',
  ] as const,
  bannerLocations: [0, 0.536, 0.766, 1] as const,
  fade: ['rgba(12, 18, 59, 0)', colors.fade] as const,
  fadeLocations: [0, 0.86] as const,
};
