
import { beforeAll, describe, it, expect } from 'vitest';

import {
  hashPassword,
  comparePassword
} from '../../../src/utils/password.util';

describe('Pruebas unitarias de contraseñas', () => {

  const password1 = 'ClaveUno123!';
  const password2 = 'ClaveDos456!';

  let hash1: string;
  let hash2: string;

  beforeAll(async () => {
    hash1 = await hashPassword(password1);
    hash2 = await hashPassword(password2);
  });

  it('Debe generar hashes válidos', () => {
    expect(typeof hash1).toBe('string');
    expect(typeof hash2).toBe('string');

    expect(hash1.length).toBeGreaterThan(0);
    expect(hash2.length).toBeGreaterThan(0);

    expect(hash1).not.toBe(password1);
    expect(hash2).not.toBe(password2);
  });

  it('Debe aceptar las contraseñas correctas', async () => {
    const resultado1 = await comparePassword(
      password1, hash1
    );

    const resultado2 = await comparePassword(
      password2, hash2
    );

    expect(resultado1).toBe(true);
    expect(resultado2).toBe(true);
  });

  it('Debe rechazar las contraseñas incorrectas', async () => {
    const resultado1 = await comparePassword(
      password2, hash1
    );

    const resultado2 = await comparePassword(
      password1, hash2
    );

    expect(resultado1).toBe(false);
    expect(resultado2).toBe(false);
  });

});
