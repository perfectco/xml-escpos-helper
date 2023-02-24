import { EscPos } from '../src';
import { TEMPLATES } from '../examples/src/templates';

const INPUT = {
  title: 'Sample',
  thankyouNote: 'Welcome...!',
};

const BASIC_SAMPLE = Buffer.from(`a1E!Sample! d E a0a1! Welcome...!! d a0
VB2{ 
@`);

describe('get Buffer from Template', () => {
  test('basic', () => {
    const buffer = EscPos.getBufferFromTemplate(TEMPLATES.BASIC, INPUT);
    expect(buffer).toStrictEqual(BASIC_SAMPLE);
  });
});
