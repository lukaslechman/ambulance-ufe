import { newE2EPage } from '@stencil/core/testing';

describe('xle-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xle-ambulance-wl-editor></xle-ambulance-wl-editor>');

    const element = await page.find('xle-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
