// Lists the strings the Breton dictionary doesn't translate yet (they show in French).
import fr from '../src/i18n/fr.ts';
import br from '../src/i18n/br.ts';

const missing = [];
const walk = (base, over, path) => {
  for (const [key, value] of Object.entries(base)) {
    const here = path ? `${path}.${key}` : key;
    if (value && typeof value === 'object') walk(value, over?.[key], here);
    else if (over?.[key] === undefined) missing.push(`${here}: ${JSON.stringify(value)}`);
  }
};
walk(fr, br, '');
console.log(missing.length ? missing.join('\n') : 'Breton is complete.');
