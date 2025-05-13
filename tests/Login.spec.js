// @ts-check
import { test, expect } from '@playwright/test';

test('teste de login', async({page}) => {
  await page.goto('https://automationpratice.com.br/login')
  await page.locator('#user').fill('eduardobueno@teste.com')
  await page.locator('#password').fill('123456')
  await page.getByRole('button', { name: 'login' }).click()
  await expect(page.getByRole('heading', { name: 'Login realizado'})).toBeVisible();
})

test('teste com email vazio', async({page}) => {
  await page.goto('https://automationpratice.com.br/login')
  await page.locator('#password').fill('123456')
  await page.getByRole('button', { name: 'login' }).click()
  await expect(page.getByRole('heading', { name: 'E-mail invalido'})).toBeVisible();
})

test('teste com senha vazia', async({page}) => {
  await page.goto('https://automationpratice.com.br/login')
  await page.locator('#user').fill('eduardobueno@teste.com')
  await page.getByRole('button', { name: 'login' }).click()
  await expect(page.getByRole('heading', { name: 'Login realizado'})).toBeVisible();
})

