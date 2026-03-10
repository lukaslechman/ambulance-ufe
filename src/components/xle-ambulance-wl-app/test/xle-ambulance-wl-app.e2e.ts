import { newE2EPage } from '@stencil/core/testing';

describe('xle-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xle-ambulance-wl-app></xle-ambulance-wl-app>');

    const element = await page.find('xle-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
