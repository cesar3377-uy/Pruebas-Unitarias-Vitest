
import { describe, it, expect } from 'vitest';


import { generateCode } from '../../../src/utils/generateCode.util';


describe('Pruebas unitarias de generateCode', () => {

  it('Debe generar un código definido', async () => {
    const codigo = await generateCode();

    expect(codigo).toBeDefined();
    expect(codigo).not.toBeNull();
  });

  it('Debe generar un código no vacío', async () => {
    const codigo = await generateCode();

    expect(String(codigo).length).toBeGreaterThan(0);
  });

});
