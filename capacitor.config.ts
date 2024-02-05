import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.technyks.ocr',
  appName: 'image-to-text-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
