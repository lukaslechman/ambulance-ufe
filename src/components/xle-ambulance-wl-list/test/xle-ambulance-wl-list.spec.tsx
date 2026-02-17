import { newSpecPage } from '@stencil/core/testing';
import { XleAmbulanceWlList } from '../xle-ambulance-wl-list';

describe('xle-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XleAmbulanceWlList],
      html: `<xle-ambulance-wl-list></xle-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xle-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xle-ambulance-wl-list>
    `);
  });
});
