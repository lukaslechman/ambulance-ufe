import { newSpecPage } from '@stencil/core/testing';
import { XleAmbulanceWlEditor } from '../xle-ambulance-wl-editor';

describe('xle-ambulance-wl-editor', () => {
  it('buttons shall be of different type', async () => {
    const page = await newSpecPage({
      components: [XleAmbulanceWlEditor],
      html: `<xle-ambulance-wl-editor entry-id="@new"></<xle-ambulance-wl-editor>`,
    });
    let items: any = await page.root.shadowRoot.querySelectorAll("md-filled-button");
    expect(items.length).toEqual(1);
    items = await page.root.shadowRoot.querySelectorAll("md-outlined-button");
    expect(items.length).toEqual(1);

    items = await page.root.shadowRoot.querySelectorAll("md-filled-tonal-button");
    expect(items.length).toEqual(1);
  });
});
