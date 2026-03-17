import { defineConfig, devices } from '@playwright/test';
import { BASE_URL } from './Utils/env.config';


export default defineConfig({
  testDir: './tests',
  timeout: 50000,

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  //retries: process.env.CI ? 2 : 0,
  retries:1,
  workers: process.env.CI ? 1 : undefined,

  outputDir: 'test-results/',

  reporter: [
    ['list'],
    ['allure-playwright'],
    ['html', { open: 'never' }]
  ],

  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',

    viewport: null,

    launchOptions: {
      args: ['--start-maximized']
    },

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',

      use: {
        browserName: 'chromium'
        //...devices['iPhone 12 Mini']
      }
    }

    // {
    //   name: 'firefox',
    //   use: {
    //     browserName: 'firefox',
    //   }

    // }
  ]
});