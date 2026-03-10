import { newSpecPage } from '@stencil/core/testing';
import { XleAmbulanceWlApp } from '../xle-ambulance-wl-app';

describe('xle-ambulance-wl-app', () => {
    it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [XleAmbulanceWlApp],
      html: `<xle-ambulance-wl-app base-path="/"></xle-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("xle-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [XleAmbulanceWlApp],
      html: `<xle-ambulance-wl-app base-path="/ambulance-wl/"></xle-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("xle-ambulance-wl-list");
  });
});

