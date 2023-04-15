import { test, expect } from '@playwright/experimental-ct-react';

import Converter from './Converter';

test('First test of component', async ({ mount }) => {


    const component = await mount(<Converter />);
    await expect(component).toHaveClass('converter')
})