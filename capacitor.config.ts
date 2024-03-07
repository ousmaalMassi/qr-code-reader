import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.qrcode',
  appName: 'qr-code-reader',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
