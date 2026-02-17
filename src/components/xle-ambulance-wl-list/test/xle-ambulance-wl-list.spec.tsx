import { newSpecPage } from '@stencil/core/testing';
import { XleAmbulanceWlList } from '../xle-ambulance-wl-list';

describe('xle-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XleAmbulanceWlList],
      html: `<xle-ambulance-wl-list></xle-ambulance-wl-list>`,
    });
      const wlList = page.rootInstance as XleAmbulanceWlList;
      const expectedPatients = wlList?.waitingPatients?.length

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);
  });
});
