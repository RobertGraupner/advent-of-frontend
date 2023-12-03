export type Lokalizacja = {
  x: number;
  y: number;
  z: number;
  czas: number;
}

export type MapaCzasoprzestrzenna = (x: number, y: number, z: number, czas: number) => number;

export function znajdzWorek(lokalizacje: Lokalizacja[], mapa: MapaCzasoprzestrzenna): Lokalizacja | null {
  if (lokalizacje.length === 0) {
    return null;
  }

  let najlepszaLokalizacja: Lokalizacja | null = null;
  let najwyzszaWartosc: number = -Infinity;

  lokalizacje.forEach(lokalizacja => {
    const wartosc = mapa(lokalizacja.x, lokalizacja.y, lokalizacja.z, lokalizacja.czas);

    if (!Number.isNaN(wartosc) && wartosc !== Infinity && wartosc !== -Infinity && wartosc > najwyzszaWartosc) {
      najwyzszaWartosc = wartosc;
      najlepszaLokalizacja = lokalizacja;
    }
  });

  return najlepszaLokalizacja;
}
