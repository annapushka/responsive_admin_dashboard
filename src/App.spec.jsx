import { test, expect } from '@playwright/experimental-ct-react';

import App from './App';

test('First test of component', async ({ mount }) => {

    const component = await mount(<App />);
    await expect(component).toHaveId('root')
})