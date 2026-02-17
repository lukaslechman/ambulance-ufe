import { newE2EPage } from '@stencil/core/testing';

describe('xle-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xle-ambulance-wl-list></xle-ambulance-wl-list>');

    const element = await page.find('xle-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
