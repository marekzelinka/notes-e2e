import { test } from '@playwright/test'

test.describe('Note app', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('http://localhost:4173/')

    await test.expect(page.getByText('Notes')).toBeVisible()
    await test
      .expect(
        page.getByText(
          'Note app, Department of Computer Science, University of Helsinki 2025',
        ),
      )
      .toBeVisible()
  })
})
