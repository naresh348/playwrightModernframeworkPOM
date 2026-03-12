import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  //retries: process.env.CI ? 2 : 0,
  retries:2,
  workers: process.env.CI ? 1 : undefined,

  outputDir: 'test-results/',

  reporter: [
    ['list'],
    ['allure-playwright'],
    ['html', { open: 'never' }]
  ],

  use: {
    baseURL: "https://x-med.in/",
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
      }
    }
  ]
});